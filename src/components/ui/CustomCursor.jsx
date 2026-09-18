import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverType, setHoverType] = useState("default");
  const [isFinePointer, setIsFinePointer] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringTargetX = useMotionValue(-100);
  const ringTargetY = useMotionValue(-100);

  const ringSpringConfig = { damping: 22, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(ringTargetX, ringSpringConfig);
  const ringY = useSpring(ringTargetY, ringSpringConfig);

  const dotSpringConfig = { damping: 32, stiffness: 850, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  const hoveredElementRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsFinePointer(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      mouseX.set(clientX);
      mouseY.set(clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const interactiveEl = target.closest(
        'a, button, input, textarea, select, [role="button"], label, .cursor-pointer, [data-cursor]',
      );

      if (interactiveEl) {
        setIsHovered(true);
        hoveredElementRef.current = interactiveEl;

        const tagName = interactiveEl.tagName.toLowerCase();
        if (
          tagName === "input" ||
          tagName === "textarea" ||
          tagName === "select"
        ) {
          setHoverType("text");
        } else {
          setHoverType("pointer");
        }

        const rect = interactiveEl.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const pullStrength = 0.25;
        const offsetX = (elementCenterX - clientX) * pullStrength;
        const offsetY = (elementCenterY - clientY) * pullStrength;

        ringTargetX.set(clientX + offsetX);
        ringTargetY.set(clientY + offsetY);
      } else {
        setIsHovered(false);
        setHoverType("default");
        hoveredElementRef.current = null;
        ringTargetX.set(clientX);
        ringTargetY.set(clientY);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY, ringTargetX, ringTargetY]);

  if (!isFinePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isVisible ? (isHovered ? 0.95 : 0.65) : 0,
          scale: !isVisible
            ? 0
            : isClicked
              ? 0.75
              : isHovered
                ? hoverType === "text"
                  ? 1.3
                  : 2.1
                : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 20, stiffness: 320 },
          opacity: { duration: 0.15 },
        }}
        className={`fixed top-0 left-0 -ml-5 -mt-5 w-10 h-10 rounded-full border transition-colors duration-200 flex items-center justify-center ${
          isHovered
            ? darkMode
              ? "border-white bg-white/10 backdrop-blur-[1px]"
              : "border-black bg-black/10 backdrop-blur-[1px]"
            : darkMode
              ? "border-white/40 bg-transparent"
              : "border-black/35 bg-transparent"
        }`}
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: !isVisible
            ? 0
            : isClicked
              ? 0.5
              : isHovered
                ? hoverType === "text"
                  ? 0.3
                  : 1.3
                : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 25, stiffness: 450 },
          opacity: { duration: 0.15 },
        }}
        className={`fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full transition-colors duration-200 ${
          isHovered
            ? darkMode
              ? "bg-white"
              : "bg-black"
            : darkMode
              ? "bg-white"
              : "bg-neutral-900"
        }`}
      />
    </div>
  );
};

export default CustomCursor;
