export const portfolioData = {
  personal: {
    name: "SYEHAN MOCHSIN ALTHUBAITI",
    role: "JUNIOR FULL-STACK DEVELOPER",
    tagline: "Building Modern Web Apps, Enhanced by AI Workflows.",
    bio: "Crafting responsive web applications with clean code. Leveraging modern AI tools to speed up development and deliver functional projects.",
    available: true,
    location: "Jakarta, Indonesia / Remote Worldwide",
    stats: [
      { value: 5, suffix: "+", label: "Projects Completed" },
      { value: 100, suffix: "%", label: "Hands-On Practice" },
      { value: 24, suffix: "/7", label: "AI-Powered Workflow" },
      { value: 100, suffix: "%", label: "Ready to Learn" },
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
      twitter: "https://twitter.com",
      email: "hello@alexrivera.design",
    },
  },

  tickerItems: [
    "Product Design",
    "Design Systems",
    "UI/UX Architecture",
    "Next.js & React",
    "Mobile Apps",
    "SaaS Dashboards",
    "Micro-Interactions",
    "Conversion Optimization",
  ],

  services: [
    {
      id: "ui-ux",
      title: "UI/UX & Product Design",
      description:
        "Crafting intuitive user journeys, high-fidelity prototypes, and design systems tailored for rapid business scaling.",
      icon: "Layout",
      tags: ["Figma", "Design Systems", "Prototyping"],
      stats: "65+ Projects Delivered",
    },
    {
      id: "frontend-dev",
      title: "Frontend Engineering",
      description:
        "Developing blazing-fast, accessible web applications using React, Next.js, Tailwind CSS, and Framer Motion.",
      icon: "Code2",
      tags: ["React 19", "Tailwind CSS", "Framer Motion"],
      stats: "Sub-second LCP Scores",
    },
    {
      id: "saas-dashboard",
      title: "SaaS & Dashboard Architecture",
      description:
        "Complex data visualization, analytical dashboards, and admin control panels built for peak operational efficiency.",
      icon: "LayoutDashboard",
      tags: ["Data Viz", "ChartJS", "RBAC UI"],
      stats: "Used by 50k+ DAU",
    },
    {
      id: "mobile-apps",
      title: "Mobile App Experience",
      description:
        "Native-feel cross-platform mobile apps focused on seamless micro-interactions and tactile responsiveness.",
      icon: "Smartphone",
      tags: ["React Native", "iOS / Android", "Gestures"],
      stats: "4.9/5 App Store Avg",
    },
  ],

  experience: [
    {
      period: "2023 - Present",
      role: "Lead Product Designer & Tech Lead",
      company: "Nexus Labs Global",
      description:
        "Spearheaded design system unification across 4 enterprise products, increasing designer-developer velocity by 45%.",
      skills: ["React", "Design Systems", "Team Leadership", "Figma"],
    },
    {
      period: "2021 - 2023",
      role: "Senior UI/UX Engineer",
      company: "Aura Fintech Inc.",
      description:
        "Redesigned mobile onboarding flow, increasing 30-day conversion rate from 18% to 34% across 1.2M users.",
      skills: ["Next.js", "Tailwind CSS", "A/B Testing", "Mobile UX"],
    },
    {
      period: "2019 - 2021",
      role: "Fullstack Design Engineer",
      company: "Studio Vertex",
      description:
        "Designed and built custom SaaS landing pages, interactive product marketing sites, and bespoke web apps.",
      skills: ["UI Architecture", "Animation", "REST APIs", "TypeScript"],
    },
  ],

  whyHireMe: {
    title: "Why Partner With Me?",
    subtitle:
      "A balanced blend of aesthetics, architectural engineering, and business ROI.",
    points: [
      {
        title: "Zero-Handoff Friction",
        description:
          "As a designer who codes, I eliminate endless back-and-forth between design and engineering teams.",
        icon: "Zap",
      },
      {
        title: "Pixel-Perfect & Accessible",
        description:
          "Every component conforms to WCAG 2.1 AA standards with fluid responsiveness across all screens.",
        icon: "ShieldCheck",
      },
      {
        title: "Conversion-Focused UI",
        description:
          "Visual aesthetics built to drive real key performance indicators, user retention, and revenue growth.",
        icon: "TrendingUp",
      },
      {
        title: "Production-Grade Velocity",
        description:
          "Clean, maintainable, self-documenting code built with modern stacks ready for CI/CD deployment.",
        icon: "Cpu",
      },
    ],
  },

  portfolio: {
    categories: ["All", "UI/UX", "Mobile App", "Web", "Dashboard"],
    projects: [
      {
        id: 1,
        title: "Apex Finance Analytics",
        category: "Dashboard",
        tagline: "Real-time AI portfolio tracker and liquidity monitor",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Tailwind CSS", "Data Viz", "Framer Motion"],
        link: "https://github.com",
        featured: true,
      },
      {
        id: 2,
        title: "Pulse Health & Fitness App",
        category: "Mobile App",
        tagline: "Haptic workout tracker with personalized biometric metrics",
        image:
          "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80",
        tags: ["Mobile UX", "Figma", "Micro-interactions"],
        link: "https://github.com",
        featured: true,
      },
      {
        id: 3,
        title: "Lumina AI Creative Suite",
        category: "Web",
        tagline: "High-converting SaaS landing and generative canvas",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        tags: ["Next.js", "Design System", "Dark UI"],
        link: "https://github.com",
        featured: true,
      },
      {
        id: 4,
        title: "Verve E-Commerce Rebrand",
        category: "UI/UX",
        tagline: "Luxury apparel commerce experience with 3D product view",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
        tags: ["E-Commerce", "UX Research", "Figma"],
        link: "https://github.com",
        featured: false,
      },
      {
        id: 5,
        title: "CloudFlow Ops Dashboard",
        category: "Dashboard",
        tagline: "Multi-cluster Kubernetes management interface",
        image:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
        tags: ["Enterprise UI", "React 19", "Tailwind"],
        link: "https://github.com",
        featured: false,
      },
      {
        id: 6,
        title: "Nova Neobank Mobile Experience",
        category: "Mobile App",
        tagline: "Gen-Z banking application with instant peer payments",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        tags: ["Fintech", "Mobile App", "Interaction Design"],
        link: "https://github.com",
        featured: false,
      },
    ],
  },

  testimonials: [
    {
      id: 1,
      name: "Marcus Vance",
      role: "VP of Product, CloudCore",
      content:
        "Alex delivered our dashboard redesign 2 weeks ahead of schedule. The attention to micro-interactions and design consistency increased our enterprise product adoption by 60%.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Lindqvist",
      role: "Founder, Bloom Health",
      content:
        "Working with someone who understands both design psychology and frontend performance is rare. Alex elevated our mobile app into an award-winning experience.",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 3,
      name: "David Chen",
      role: "Engineering Director, Vertex AI",
      content:
        "The clean architecture and Framer Motion interactions produced were exceptional. Our engineering team integrated the components with zero refactoring needed.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
  ],

  blog: [
    {
      id: 1,
      title:
        "Building Production-Ready Fluid Animations with Framer Motion in 2026",
      excerpt:
        "Learn how to achieve 60fps layout animations without triggering Cumulative Layout Shifts in modern React applications.",
      date: "Aug 24, 2026",
      readTime: "5 min read",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "The Zero-Friction Design System: Bridging Figma and Tailwind CSS",
      excerpt:
        "A practical methodology to keep design tokens perfectly synchronized between UI designers and code repositories.",
      date: "Jul 18, 2026",
      readTime: "7 min read",
      category: "Design Systems",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Why Dark Mode Contrast Matters More Than Ever for SaaS Retention",
      excerpt:
        "Key accessibility formulas and psychological triggers for building dark-themed dashboards that prevent eye strain.",
      date: "Jun 02, 2026",
      readTime: "4 min read",
      category: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
