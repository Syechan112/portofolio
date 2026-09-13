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
      github: "https://github.com/Syechan112",
      linkedin: "https://www.linkedin.com/in/syehan-mochsin-althubaiti/",
      instagram: "https://www.instagram.com/shynns_22/",
      email: "syechanmochsinalthubaiti@gmail.com",
    },
  },

  tickerItems: [
    "Frontend Web Development",
    "Responsive Web Design",
    "Product Implementation",
    "UI/UX Execution",
    "Web Performance Optimization",
    "Interactive Interfaces",
    "Clean Code Practice",
    "Hands-on Project Development",
  ],

  services: [
    {
      id: "frontend",
      title: "Frontend Development",
      description:
        "Building responsive and interactive interfaces with a focus on clean design, usability, and a smooth experience across different screen sizes.",
      icon: "Code2",
      tags: ["React", "Vue", "JavaScript", "Tailwind CSS"],
      stats: "Modern Web Interfaces",
    },

    {
      id: "backend",
      title: "Backend Development",
      description:
        "Developing reliable web application logic, APIs, authentication, and data management using structured backend technologies.",
      icon: "Server",
      tags: ["PHP", "Laravel", "Blade", "REST API"],
      stats: "Web Application Logic",
    },

    {
      id: "database",
      title: "Database Management",
      description:
        "Designing and managing structured databases to support web applications, data relationships, and efficient information management.",
      icon: "Database",
      tags: ["MySQL", "SQLite", "PostgreSQL", "Database Design", "CRUD"],
      stats: "Structured Data",
    },

    {
      id: "fullstack",
      title: "Full-Stack Development",
      description:
        "Connecting frontend interfaces, backend logic, and databases into complete web applications designed around real-world requirements.",
      icon: "Layers3",
      tags: ["React", "Laravel", "MySQL"],
      stats: "End-to-End Development",
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
    title: "Why Work With Me?",

    subtitle:
      "I focus on building clean, practical, and thoughtful web experiences from interface to implementation.",

    points: [
      {
        title: "Design & Code",
        description:
          "I can work across both the visual and technical side of a project, helping turn ideas and designs into functional interfaces.",
        icon: "Code2",
      },
      {
        title: "Clean & Responsive",
        description:
          "I build interfaces that stay clean and usable across different screen sizes, with attention to layout, spacing, and interaction.",
        icon: "Monitor",
      },
      {
        title: "Practical Solutions",
        description:
          "I focus on solving the actual needs of a project rather than adding unnecessary complexity to the implementation.",
        icon: "Lightbulb",
      },
      {
        title: "Always Improving",
        description:
          "I'm continuously learning new tools and improving my approach through real projects, experimentation, and hands-on development.",
        icon: "TrendingUp",
      },
    ],
  },

  portfolio: {
    categories: ["All", "Web", "Frontend", "Backend"],

    projects: [
      {
        id: 1,
        title: "HiPlaty",
        category: "Web",
        tagline:
          "Interactive Learning Management System combining React, role-based experiences, and a hybrid Google Sheets architecture.",
        tags: ["React 19", "Tailwind CSS", "Vite", "Google Apps Script"],
        link: "https://hi-platy.vercel.app",
        featured: true,
      },

      {
        id: 2,
        title: "Nusa Code",
        category: "Web",
        tagline:
          "Digital service platform built for local businesses, focused on clear service information and easy consultation access.",
        tags: ["Vue.js", "Tailwind CSS"],
        link: "https://nusa-code.vercel.app",
        featured: true,
      },

      {
        id: 3,
        title: "Aetheria",
        category: "Web",
        tagline:
          "Modern company profile and sustainable commercial facility care platform with clean architecture and responsive design.",
        tags: ["Vue.js", "Tailwind CSS", "Vite"],
        link: "https://aetheria-profile.vercel.app/",
        featured: true,
      },

      {
        id: 4,
        title: "E-Procurement API",
        category: "Backend",
        tagline:
          "Laravel REST API for vendor management, product catalogs, authentication, and relational data.",
        tags: ["Laravel", "PHP", "MySQL", "Sanctum"],
        link: "https://github.com/Syechan112/vendor-procurement-system",
        featured: false,
      },

      {
        id: 5,
        title: "Sistem Absensi Sekolah",
        category: "Web",
        tagline:
          "Web application for student attendance, reporting, and role-based school management.",
        tags: ["Laravel", "PHP", "Blade", "Alpine.js", "Tailwind CSS"],
        link: "https://github.com/Syechan112/Absensi-Sekolah",
        featured: false,
      },

      {
        id: 6,
        title: "Aroma Kopi",
        category: "Frontend",
        tagline:
          "Responsive coffee shop website with an interactive menu and simple browsing experience.",
        tags: ["HTML", "JavaScript", "CSS", "Tailwind CSS"],
        link: "https://github.com/Syechan112/coffe-shop",
        featured: false,
      },

      {
        id: 7,
        title: "Blog Post Laravel",
        category: "Web",
        tagline:
          "Dynamic blog platform with post management, categories, user authentication, and comments.",
        tags: ["Laravel 11", "PHP", "Blade", "Alpine.js", "Tailwind CSS"],
        link: "https://github.com/Syechan112/blog-post",
        featured: false,
      },

      {
        id: 8,
        title: "Todo List Laravel",
        category: "Web",
        tagline:
          "Simple task management app built around CRUD operations with a dynamic Laravel and Blade interface.",
        tags: ["Laravel", "PHP", "Blade", "JavaScript"],
        link: "https://github.com/Syechan112/todo-list",
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
  about: {
    badge: "01 — About",
    subBadge: "Profile / 2026",
    number: "01",
    headline:
      "Building Functional Products with Hands-On Experience and Modern AI Tools.",
    summary:
      "I am a Junior Full-Stack Developer with a passion for building clean, functional web applications. While early in my career, I focus heavily on hands-on practice by developing real projects from scratch.\n\nI embrace modern developer tools, actively integrating AI into my workflow to accelerate problem-solving, streamline debugging, and write more efficient code. I am eager to contribute, open to feedback, and dedicated to continuously improving my software development skills.",
    technicalStack: [
      {
        label: "Languages",
        items: ["PHP", "JavaScript", "HTML", "CSS"],
      },
      {
        label: "Frameworks & Libraries",
        items: ["Laravel", "Vue Js", "React Js", "Tailwind CSS", "Alpine Js"],
      },
      {
        label: "Databases",
        items: ["SQLite", "MySQL", "PostgreSQL"],
      },
    ],
    languages: ["PHP", "JavaScript", "HTML", "CSS"],
    frameworks: ["Laravel", "Vue Js", "React Js", "Tailwind CSS"],
    databases: ["SQLite", "MySQL", "PostgreSQL"],
    background: {
      tag: "Background",
      title: "Experience,\nlearning &\nmilestones.",
    },
    education: [
      {
        title: "Software Engineering Major",
        school: "SMKS BABUNNAJAH MENES",
        period: "2022 — 2025",
      },
    ],
    achievements: [
      {
        title: "Certified Competency — Software Engineering",
        year: "2025",
        link: "https://drive.google.com/file/d/1Avzsx__NQuF--1ZwJIzYHzx_4QbNLJXX/view?usp=drive_link",
        description:
          'Completed and passed the Vocational Competency Assessment with a "Highly Competent" grade by engineering a Discount Calculation Application. Key technical competencies demonstrated:',
        details: [
          "Implementing structured programming and data structures",
          "Writing clean code following industry guidelines and best practices",
          "Executing application debugging and system setup",
        ],
      },
      {
        title: "E-Commerce System with Telegram API Integration",
        year: "2025",
        link: "https://drive.google.com/drive/folders/1E0Yky14xWTY5J_LSJmUnenwAaNo5yrgT?usp=sharing",
        description:
          "Designed a web-based sales platform featuring automated transaction notifications delivered directly to mobile devices via the Telegram Bot API. Successfully presented a live application demo to representatives from the Regional Department of Education during a technology exhibition, earning official appreciation and support for the system's technical execution.",
      },
      {
        title: "Responsive Web Developer",
        year: "2025",
        link: "https://drive.google.com/file/d/1r7dR5nlKWpOEL9ULmFTxUzSwlA9Ly9Pt/view?usp=drive_link",
        description:
          "Achieved global developer certification by dedicating 300+ hours to mastering core front-end technology principles. Built and delivered fully responsive, accessible, and interactive web interfaces optimized across mobile, tablet, and desktop devices, meeting strict automated code quality and validation benchmarks.",
      },
    ],
    certifications: [
      {
        title: "Software Engineering Competency Certificate — UKK",
        issuer: "SMKS BABUNNAJAH MENES",
        year: "2025",
      },
      {
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        year: "2025",
      },
    ],
  },
};
