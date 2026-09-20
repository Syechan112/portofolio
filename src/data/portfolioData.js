import hiplatyImg from "../assets/projects/hiplaty.webp";
import nusacodeImg from "../assets/projects/nusacode.webp";
import atheriaImg from "../assets/projects/atheria.webp";
import superposImg from "../assets/projects/superpos.png";

export const portfolioData = {
  personal: {
    name: "SYEHAN MOCHSIN ALTHUBAITI",
    role: {
      en: "JUNIOR FULL-STACK DEVELOPER",
      id: "JUNIOR FULL-STACK DEVELOPER",
    },
    tagline: {
      en: "Building Modern Web Apps, Enhanced by AI Workflows.",
      id: "Membangun Aplikasi Web Modern, Dioptimalkan Alur Kerja AI.",
    },
    bio: {
      en: "Crafting responsive web applications with clean code. Leveraging modern AI tools to speed up development and deliver functional projects.",
      id: "Membangun aplikasi web responsif dengan kode yang bersih. Memanfaatkan perangkat AI modern untuk mempercepat pengembangan dan menghasilkan proyek yang fungsional.",
    },
    available: true,
    location: {
      en: "Jakarta, Indonesia / Remote Worldwide",
      id: "Jakarta, Indonesia / Remote Seluruh Dunia",
    },
    stats: [
      {
        value: 6,
        suffix: "+",
        label: {
          en: "Projects Completed",
          id: "Proyek Selesai",
        },
      },
      {
        value: 100,
        suffix: "%",
        label: {
          en: "Hands-On Practice",
          id: "Praktik Langsung",
        },
      },
      {
        value: 24,
        suffix: "/7",
        label: {
          en: "AI-Powered Workflow",
          id: "Alur Kerja Berbasis AI",
        },
      },
      {
        value: 100,
        suffix: "%",
        label: {
          en: "Ready to Learn",
          id: "Siap Berkembang",
        },
      },
    ],
    social: {
      github: "https://github.com/Syechan112",
      linkedin: "https://www.linkedin.com/in/syehan-mochsin-althubaiti/",
      instagram: "https://www.instagram.com/shynns_22/",
      email: "syechanmochsinalthubaiti@gmail.com",
    },
  },

  hero: {
    headingPrefix: {
      en: "Building Modern Web Apps with",
      id: "Membangun Aplikasi Web Modern dengan",
    },
    headingHighlight: {
      en: "Full-Stack & AI Workflows.",
      id: "Full-Stack & Alur Kerja AI.",
    },
    viewProjects: {
      en: "View Projects",
      id: "Lihat Proyek",
    },
    getInTouch: {
      en: "Get in Touch",
      id: "Hubungi Saya",
    },
  },

  nav: {
    links: [
      {
        name: {
          en: "About",
          id: "Tentang",
        },
        hash: "#about",
      },
      {
        name: {
          en: "Services",
          id: "Layanan",
        },
        hash: "#services",
      },
      {
        name: {
          en: "Why Me",
          id: "Keunggulan",
        },
        hash: "#why-me",
      },
      {
        name: {
          en: "Portfolio",
          id: "Portofolio",
        },
        hash: "#portfolio",
      },
    ],
    contactBtn: {
      en: "Contact",
      id: "Kontak",
    },
    contactMeBtn: {
      en: "Contact Me",
      id: "Hubungi Saya",
    },
  },

  tickerItems: {
    en: [
      "Frontend Web Development",
      "Responsive Web Design",
      "Product Implementation",
      "UI/UX Execution",
      "Web Performance Optimization",
      "Interactive Interfaces",
      "Clean Code Practice",
      "Hands-on Project Development",
    ],
    id: [
      "Pengembangan Web Frontend",
      "Desain Web Responsif",
      "Implementasi Produk",
      "Eksekusi UI/UX",
      "Optimasi Performa Web",
      "Antarmuka Interaktif",
      "Praktik Clean Code",
      "Pengembangan Proyek Nyata",
    ],
  },

  services: {
    badge: {
      en: "02 — Services",
      id: "02 — Layanan",
    },
    title: {
      en: "What I do.",
      id: "Layanan & Keahlian.",
    },
    subtitle: {
      en: "Crafting digital products with a focus on usability, thoughtful interaction, and technical excellence.",
      id: "Membangun produk digital dengan fokus pada kemudahan penggunaan, interaksi intuitif, dan kualitas teknis yang solid.",
    },
    footerLabel: {
      en: "Selected capabilities",
      id: "Keahlian pilihan",
    },
    footerCount: {
      en: "services",
      id: "layanan",
    },
    items: [
      {
        id: "frontend",
        title: {
          en: "Frontend Development",
          id: "Pengembangan Frontend",
        },
        description: {
          en: "Building responsive and interactive interfaces with a focus on clean design, usability, and a smooth experience across different screen sizes.",
          id: "Membangun antarmuka responsif dan interaktif dengan fokus pada desain bersih, kemudahan navigasi, dan performa mulus di berbagai perangkat.",
        },
        icon: "Code2",
        tags: ["React", "Vue", "JavaScript", "Tailwind CSS"],
        stats: {
          en: "Modern Web Interfaces",
          id: "Antarmuka Web Modern",
        },
      },
      {
        id: "backend",
        title: {
          en: "Backend Development",
          id: "Pengembangan Backend",
        },
        description: {
          en: "Developing reliable web application logic, APIs, authentication, and data management using structured backend technologies.",
          id: "Mengembangkan logika aplikasi web yang andal, REST API, autentikasi, serta manajemen data dengan arsitektur backend terstruktur.",
        },
        icon: "Server",
        tags: ["PHP", "Laravel", "Blade", "REST API"],
        stats: {
          en: "Web Application Logic",
          id: "Logika Aplikasi Web",
        },
      },
      {
        id: "database",
        title: {
          en: "Database Management",
          id: "Manajemen Basis Data",
        },
        description: {
          en: "Designing and managing structured databases to support web applications, data relationships, and efficient information management.",
          id: "Merancang dan mengelola basis data relasional untuk mendukung aplikasi web, relasi data yang tepat, dan efisiensi pengolahan informasi.",
        },
        icon: "Database",
        tags: ["MySQL", "SQLite", "PostgreSQL", "Database Design", "CRUD"],
        stats: {
          en: "Structured Data",
          id: "Data Terstruktur",
        },
      },
      {
        id: "fullstack",
        title: {
          en: "Full-Stack Development",
          id: "Pengembangan Full-Stack",
        },
        description: {
          en: "Connecting frontend interfaces, backend logic, and databases into complete web applications designed around real-world requirements.",
          id: "Mengintegrasikan antarmuka frontend, logika backend, dan basis data menjadi aplikasi web utuh yang siap digunakan sesuai kebutuhan nyata.",
        },
        icon: "Layers3",
        tags: ["React", "Laravel", "MySQL"],
        stats: {
          en: "End-to-End Development",
          id: "Pengembangan End-to-End",
        },
      },
    ],
  },

  experience: [
    {
      period: "08/2026 — Present | Indonesia",
      role: "Co-Founder & Web Developer",
      company: "NusaCode",
      link: "https://nusa-code.vercel.app/",
      description: {
        en: "• Co-founded a two-person web development agency with a focus on website development.\n• Developed the agency's own website and digital presence.\n• Handled frontend development and technical implementation.\n• Collaborated with a partner on technical planning and development.",
        id: "• Mendirikan agensi pengembangan web beranggotakan dua orang dengan fokus pada pembuatan website.\n• Mengembangkan website resmi dan kehadiran digital agensi.\n• Menangani pengembangan frontend dan implementasi teknis.\n• Berkolaborasi dengan mitra dalam perencanaan teknis dan pengembangan.",
      },
      skills: [
        "Web Development",
        "Frontend Development",
        "Vue.js",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      period: "06/2024 — 08/2024 | Serang, Banten",
      role: "Data Support & Web Development Intern",
      company: "Kejaksaan Negeri Serang",
      description: {
        en: "• Collaborated within an engineering team to develop and refine user interface components for internal web systems using HTML, CSS, Bootstrap, and JavaScript.\n• Digitized physical court and suspect case records into secure digital databases and structured Excel spreadsheets, significantly expediting data retrieval workflows.\n• Maintained high data accuracy during high-volume manual record processing and administrative archive management.",
        id: "• Berkolaborasi dengan tim engineering untuk mengembangkan dan menyempurnakan komponen antarmuka sistem web internal menggunakan HTML, CSS, Bootstrap, dan JavaScript.\n• Mendigitalkan berkas perkara dan catatan pengadilan fisik ke dalam basis data digital yang aman serta spreadsheet Excel terstruktur guna mempercepat alur temu kembali data.\n• Menjaga akurasi data yang tinggi selama pemrosesan arsip manual bervolume besar dan pengelolaan arsip administrasi.",
      },
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Database Management",
        "Data Processing",
      ],
    },
  ],

  whyHireMe: {
    badge: {
      en: "03 — Why Me",
      id: "03 — Keunggulan",
    },
    title: {
      en: "Why Work With Me?",
      id: "Mengapa Bekerja Bersama Saya?",
    },
    subtitle: {
      en: "A few things that define how I approach work, solve problems, and build digital products.",
      id: "Beberapa hal yang mendasari cara saya bekerja, memecahkan masalah, dan membangun produk digital.",
    },
    nextBadge: {
      en: "04 — What's next",
      id: "04 — Langkah Selanjutnya",
    },
    nextTitle: {
      en: "And this is only\nthe beginning.",
      id: "Dan ini baru\npermulaan.",
    },
    scrollText: {
      en: "SCROLL",
      id: "GULIR",
    },
    points: [
      {
        title: {
          en: "Design & Code",
          id: "Desain & Kode",
        },
        description: {
          en: "I can work across both the visual and technical side of a project, helping turn ideas and designs into functional interfaces.",
          id: "Mampu bekerja pada sisi visual maupun teknis, mengubah ide dan desain menjadi antarmuka fungsional yang siap pakai.",
        },
        icon: "Code2",
      },
      {
        title: {
          en: "Clean & Responsive",
          id: "Bersih & Responsif",
        },
        description: {
          en: "I build interfaces that stay clean and usable across different screen sizes, with attention to layout, spacing, and interaction.",
          id: "Membangun tampilan yang rapi dan nyaman digunakan di semua ukuran layar, dengan perhatian detail pada tata letak, jarak, dan interaksi.",
        },
        icon: "Monitor",
      },
      {
        title: {
          en: "Practical Solutions",
          id: "Solusi Praktis",
        },
        description: {
          en: "I focus on solving the actual needs of a project rather than adding unnecessary complexity to the implementation.",
          id: "Berfokus pada penyelesaian kebutuhan inti proyek tanpa menambahkan kompleksitas yang tidak diperlukan.",
        },
        icon: "Lightbulb",
      },
      {
        title: {
          en: "Always Improving",
          id: "Terus Berkembang",
        },
        description: {
          en: "I'm continuously learning new tools and improving my approach through real projects, experimentation, and hands-on development.",
          id: "Selalu antusias mempelajari teknologi baru dan mengasah kemampuan melalui proyek nyata serta praktik langsung.",
        },
        icon: "TrendingUp",
      },
    ],
  },

  portfolio: {
    badge: {
      en: "04 — Portfolio",
      id: "04 — Portofolio",
    },
    title: {
      en: "Selected work.",
      id: "Karya Pilihan.",
    },
    categories: [
      { id: "All", label: { en: "All", id: "Semua" } },
      { id: "Web", label: { en: "Web", id: "Web" } },
      { id: "Frontend", label: { en: "Frontend", id: "Frontend" } },
      { id: "Backend", label: { en: "Backend", id: "Backend" } },
    ],
    exploreBtn: {
      en: "Explore ↗",
      id: "Jelajahi ↗",
    },
    projects: [
      {
        id: 1,
        title: "Super POS",
        category: "Web",
        tagline: {
          en: "Modern, high-performance Point of Sale (POS) and Inventory Management system with multi-role auth, real-time stock tracking, and sales analytics.",
          id: "Aplikasi Web Point of Sale (POS / Kasir) dan Manajemen Inventaris Modern dengan autentikasi multi-role, pelacakan stok real-time, dan analitik penjualan.",
        },
        description: {
          en: "A modern, responsive, high-performance, and production-ready Web Point of Sale (POS / Cashier) & Inventory Management application. Specially designed for retail stores, cafes, minimarts, or SMEs with multi-role authentication, real-time stock tracking, barcode scanner simulation, cashier thermal receipt printing, and interactive sales analytics with PDF & Excel export.\n\n🚀 Ready for Demo (Zero-Backend Setup): Built with a LocalStorage persistence abstraction layer featuring auto-seeded initial datasets (product catalog, transaction history, and multi-role accounts). You can test and explore the live demo instantly with zero external database configuration.",
          id: "Aplikasi Web Point of Sale (POS / Kasir) dan Manajemen Inventaris Modern yang responsif, berkecepatan tinggi, dan production-ready. Dirancang khusus untuk kebutuhan toko retail, cafe, minimarket, atau UMKM dengan dukungan multi-role authentication, pelacakan stok real-time, simulasi scanner barcode, pencetakan struk thermal kasir, serta analitik penjualan interaktif dengan ekspor PDF dan Excel.\n\n🚀 Siap Demo (Zero-Backend Setup): Aplikasi ini menggunakan mesin persistensi LocalStorage abstraction layer dengan auto-seed initial dataset (katalog produk, riwayat transaksi, & akun multi-role). Anda dapat langsung menjalankan demo dalam hitungan detik tanpa perlu mengonfigurasi database eksternal.",
        },
        tags: ["React", "Tailwind CSS", "Vite", "LocalStorage", "POS & Kasir", "Analytics"],
        live: "https://demo-pos-swart.vercel.app/",
        github: "https://github.com/Syechan112/demo-pos-v1",
        image: superposImg,
        featured: true,
      },
      {
        id: 2,
        title: "HiPlaty",
        category: "Web",
        tagline: {
          en: "Interactive Learning Management System combining React, role-based experiences, and a hybrid Google Sheets architecture.",
          id: "Learning Management System interaktif yang menggabungkan React, pengalaman berbasis peran, dan arsitektur hybrid Google Sheets.",
        },
        tags: ["React 19", "Tailwind CSS", "Vite", "PostgreSQL"],
        live: "https://hi-platy.vercel.app",
        github: "https://github.com/Syechan112/HiPlaty",
        image: hiplatyImg,
        featured: true,
      },
      {
        id: 3,
        title: "Nusa Code",
        category: "Web",
        tagline: {
          en: "Digital service platform built for local businesses, focused on clear service information and easy consultation access.",
          id: "Platform layanan digital untuk bisnis lokal, berfokus pada informasi layanan yang jelas dan kemudahan akses konsultasi.",
        },
        tags: ["Vue.js", "Tailwind CSS"],
        live: "https://nusa-code.vercel.app",
        github: "https://github.com/Syechan112/nusa-code",
        image: nusacodeImg,
        featured: true,
      },
      {
        id: 4,
        title: "Aetheria",
        category: "Web",
        tagline: {
          en: "Modern company profile and sustainable commercial facility care platform with clean architecture and responsive design.",
          id: "Company profile modern dan platform perawatan fasilitas komersial berkelanjutan dengan arsitektur bersih dan desain responsif.",
        },
        tags: ["Vue.js", "Tailwind CSS", "Vite"],
        live: "https://aetheria-profile.vercel.app/",
        github: "https://github.com/Syechan112/aetheria-profile",
        image: atheriaImg,
        featured: true,
      },
      {
        id: 5,
        title: "E-Procurement API",
        category: "Backend",
        tagline: {
          en: "Laravel REST API for vendor management, product catalogs, authentication, and relational data.",
          id: "REST API Laravel untuk manajemen vendor, katalog produk, autentikasi, dan relasi basis data.",
        },
        tags: ["Laravel", "PHP", "MySQL", "Sanctum"],
        github: "https://github.com/Syechan112/vendor-procurement-system",
        featured: false,
      },
      {
        id: 6,
        title: "Sistem Absensi Sekolah",
        category: "Web",
        tagline: {
          en: "Web application for student attendance, reporting, and role-based school management.",
          id: "Aplikasi web presensi siswa, pelaporan otomatis, dan manajemen sekolah berbasis peran.",
        },
        tags: ["Laravel", "PHP", "Blade", "Alpine.js", "Tailwind CSS"],
        github: "https://github.com/Syechan112/Absensi-Sekolah",
        featured: false,
      },
      {
        id: 7,
        title: "Aroma Kopi",
        category: "Frontend",
        tagline: {
          en: "Responsive coffee shop website with an interactive menu and simple browsing experience.",
          id: "Website coffee shop responsif dengan menu interaktif dan navigasi yang intuitif.",
        },
        tags: ["HTML", "JavaScript", "CSS", "Tailwind CSS"],
        github: "https://github.com/Syechan112/coffe-shop",
        featured: false,
      },
      {
        id: 8,
        title: "Blog Post Laravel",
        category: "Web",
        tagline: {
          en: "Dynamic blog platform with post management, categories, user authentication, and comments.",
          id: "Platform blog dinamis dengan manajemen artikel, kategori, autentikasi pengguna, dan komentar.",
        },
        tags: ["Laravel 11", "PHP", "Blade", "Alpine.js", "Tailwind CSS"],
        github: "https://github.com/Syechan112/blog-post",
        featured: false,
      },
      {
        id: 9,
        title: "Todo List Laravel",
        category: "Web",
        tagline: {
          en: "Simple task management app built around CRUD operations with a dynamic Laravel and Blade interface.",
          id: "Aplikasi manajemen tugas berbasis operasi CRUD dengan antarmuka dinamis Laravel dan Blade.",
        },
        tags: ["Laravel", "PHP", "Blade", "JavaScript"],
        github: "https://github.com/Syechan112/todo-list",
        featured: false,
      },
    ],
  },

  testimonials: [
    {
      id: 1,
      name: "Marcus Vance",
      role: "VP of Product, CloudCore",
      content: {
        en: "Alex delivered our dashboard redesign 2 weeks ahead of schedule. The attention to micro-interactions and design consistency increased our enterprise product adoption by 60%.",
        id: "Alex menyelesaikan perombakan dashboard kami 2 minggu lebih cepat dari jadwal. Perhatian terhadap detail dan konsistensi desain meningkatkan adopsi produk enterprise kami sebesar 60%.",
      },
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Lindqvist",
      role: "Founder, Bloom Health",
      content: {
        en: "Working with someone who understands both design psychology and frontend performance is rare. Alex elevated our mobile app into an award-winning experience.",
        id: "Bekerja dengan seseorang yang memahami psikologi desain dan performa frontend adalah hal yang langka. Alex meningkatkan aplikasi kami menjadi pengalaman yang luar biasa.",
      },
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 3,
      name: "David Chen",
      role: "Engineering Director, Vertex AI",
      content: {
        en: "The clean architecture and Framer Motion interactions produced were exceptional. Our engineering team integrated the components with zero refactoring needed.",
        id: "Arsitektur bersih dan interaksi animasi yang dibuat sangat luar biasa. Tim engineering kami mengintegrasikan komponen tanpa perlu refactoring.",
      },
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
  ],

  about: {
    badge: {
      en: "01 — About",
      id: "01 — Tentang",
    },
    subBadge: "Profile / 2026",
    number: "01",
    headline: {
      en: "Building Functional Products with Hands-On Experience and Modern AI Tools.",
      id: "Membangun Produk Fungsional dengan Praktik Nyata dan Perangkat AI Modern.",
    },
    summary: {
      en: "I am a Junior Full-Stack Developer with a passion for building clean, functional web applications. While early in my career, I focus heavily on hands-on practice by developing real projects from scratch.\n\nI embrace modern developer tools, actively integrating AI into my workflow to accelerate problem-solving, streamline debugging, and write more efficient code. I am eager to contribute, open to feedback, and dedicated to continuously improving my software development skills.",
      id: "Saya adalah seorang Junior Full-Stack Developer dengan dedikasi tinggi dalam membangun aplikasi web yang bersih dan fungsional. Saya memprioritaskan praktik langsung dengan mengembangkan proyek nyata dari nol.\n\nSaya mengintegrasikan perangkat AI modern ke dalam alur kerja untuk mempercepat pemecahan masalah, mempermudah proses debugging, dan menulis kode yang efisien. Saya selalu siap berkolaborasi, terbuka terhadap masukan, dan berkomitmen untuk terus meningkatkan keahlian software engineering saya.",
    },
    technicalStackHeader: {
      en: "Technical Stack",
      id: "Keahlian Teknis",
    },
    technicalStack: [
      {
        label: {
          en: "Languages",
          id: "Bahasa Pemrograman",
        },
        items: ["PHP", "JavaScript", "HTML", "CSS"],
      },
      {
        label: {
          en: "Frameworks & Libraries",
          id: "Framework & Library",
        },
        items: ["Laravel", "Vue Js", "React Js", "Tailwind CSS", "Alpine Js"],
      },
      {
        label: {
          en: "Databases",
          id: "Basis Data",
        },
        items: ["SQLite", "MySQL", "PostgreSQL"],
      },
    ],
    background: {
      tag: {
        en: "Background",
        id: "Latar Belakang",
      },
      title: {
        en: "Experience,\nlearning &\nmilestones.",
        id: "Pengalaman,\npembelajaran &\npencapaian.",
      },
    },
    sectionTitles: {
      experience: {
        en: "01  Experience",
        id: "01  Pengalaman Kerja",
      },
      education: {
        en: "02  Education",
        id: "02  Pendidikan",
      },
      achievements: {
        en: "03  Achievements",
        id: "03  Pencapaian",
      },
      certifications: {
        en: "04  Sertifikasi",
        id: "04  Sertifikasi",
      },
    },
    education: [
      {
        title: {
          en: "Software Engineering Major",
          id: "Rekayasa Perangkat Lunak (RPL)",
        },
        school: "SMKS BABUNNAJAH MENES",
        period: "2022 — 2025",
      },
    ],
    achievements: [
      {
        title: {
          en: "Certified Competency — Software Engineering",
          id: "Uji Kompetensi Keahlian — Rekayasa Perangkat Lunak",
        },
        year: "2025",
        link: "https://drive.google.com/file/d/1Avzsx__NQuF--1ZwJIzYHzx_4QbNLJXX/view?usp=drive_link",
        description: {
          en: 'Completed and passed the Vocational Competency Assessment with a "Highly Competent" grade by engineering a Discount Calculation Application. Key technical competencies demonstrated:',
          id: 'Menyelesaikan dan lulus Uji Kompetensi Keahlian (UKK) dengan predikat "Sangat Kompeten" melalui pembuatan Aplikasi Perhitungan Diskon. Kompetensi teknis yang ditunjukkan:',
        },
        details: {
          en: [
            "Implementing structured programming and data structures",
            "Writing clean code following industry guidelines and best practices",
            "Executing application debugging and system setup",
          ],
          id: [
            "Menerapkan pemrograman terstruktur dan struktur data",
            "Menulis kode bersih sesuai standar dan praktik terbaik industri",
            "Melakukan debugging aplikasi dan konfigurasi sistem",
          ],
        },
      },
      {
        title: {
          en: "E-Commerce System with Telegram API Integration",
          id: "Sistem E-Commerce Terintegrasi Telegram API",
        },
        year: "2025",
        link: "https://drive.google.com/drive/folders/1E0Yky14xWTY5J_LSJmUnenwAaNo5yrgT?usp=sharing",
        description: {
          en: "Designed a web-based sales platform featuring automated transaction notifications delivered directly to mobile devices via the Telegram Bot API. Successfully presented a live application demo to representatives from the Regional Department of Education during a technology exhibition, earning official appreciation and support for the system's technical execution.",
          id: "Merancang platform penjualan berbasis web dengan notifikasi transaksi otomatis langsung ke perangkat seluler via Telegram Bot API. Sukses mendemonstrasikan aplikasi secara langsung kepada perwakilan Dinas Pendidikan Daerah pada pameran teknologi, serta memperoleh apresiasi resmi atas eksekusi teknis sistem.",
        },
      },
      {
        title: {
          en: "Responsive Web Developer",
          id: "Pengembang Web Responsif",
        },
        year: "2025",
        link: "https://drive.google.com/file/d/1r7dR5nlKWpOEL9ULmFTxUzSwlA9Ly9Pt/view?usp=drive_link",
        description: {
          en: "Achieved global developer certification by dedicating 300+ hours to mastering core front-end technology principles. Built and delivered fully responsive, accessible, and interactive web interfaces optimized across mobile, tablet, and desktop devices, meeting strict automated code quality and validation benchmarks.",
          id: "Meraih sertifikasi developer global dengan mendedikasikan 300+ jam untuk mendalami prinsip teknologi front-end. Membangun dan merilis antarmuka web yang responsif, aksesibel, dan interaktif yang dioptimalkan untuk perangkat seluler, tablet, dan desktop dengan memenuhi standar validasi kode yang ketat.",
        },
      },
    ],
    certifications: [
      {
        title: {
          en: "Software Engineering Competency Certificate — UKK",
          id: "Sertifikat Kompetensi Keahlian RPL — UKK",
        },
        issuer: "SMKS BABUNNAJAH MENES",
        year: "2025",
      },
      {
        title: {
          en: "Responsive Web Design Certification",
          id: "Sertifikasi Desain Web Responsif",
        },
        issuer: "freeCodeCamp",
        year: "2025",
      },
    ],
  },

  cta: {
    badge: {
      en: "05 — Contact",
      id: "05 — Kontak",
    },
    headline: {
      en: "Have a project\nin mind?",
      id: "Punya rencana\nproyek?",
    },
    subtext: {
      en: "Open to projects, collaborations, and useful builds.",
      id: "Terbuka untuk pengerjaan proyek, kolaborasi, dan pengembangan aplikasi bermanfaat.",
    },
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    whatsappButton: {
      en: "Say what you need",
      id: "Sampaikan kebutuhan Anda",
    },
    modalTitle: {
      en: "Send via WhatsApp",
      id: "Kirim via WhatsApp",
    },
    modalPhone: "+62 897-9673-149",
    modalPlaceholder: {
      en: "Your message...",
      id: "Tulis pesan Anda di sini...",
    },
    modalSend: {
      en: "Send",
      id: "Kirim",
    },
    footerTagline: {
      en: "Build something useful.",
      id: "Bangun sesuatu yang bermanfaat.",
    },
  },

  footer: {
    badge: {
      en: "Portfolio",
      id: "Portofolio",
    },
    headline: {
      en: "Let's make\nsomething good.",
      id: "Mari buat\nsesuatu yang hebat.",
    },
    navLabel: {
      en: "Navigation",
      id: "Navigasi",
    },
    connectLabel: {
      en: "Connect",
      id: "Koneksi",
    },
    backToTop: {
      en: "Back to top",
      id: "Kembali ke atas",
    },
    builtWith: {
      en: "Built with React & Tailwind CSS",
      id: "Dibuat dengan React & Tailwind CSS",
    },
  },

  seo: {
    en: {
      title: "Syehan Mochsin Althubaiti — Junior Full-Stack Developer",
      description:
        "Portfolio of Syehan Mochsin Althubaiti, Junior Full-Stack Developer passionate about building modern web applications with clean code and AI workflows.",
      ogDescription:
        "Crafting responsive web applications with clean code and modern AI workflows. Explore my latest projects, technical stack, and experience.",
    },
    id: {
      title: "Syehan Mochsin Althubaiti — Junior Full-Stack Developer",
      description:
        "Portofolio Syehan Mochsin Althubaiti, Junior Full-Stack Developer yang berfokus membangun aplikasi web modern dengan kode bersih dan alur kerja AI.",
      ogDescription:
        "Membangun aplikasi web responsif dengan kode bersih dan alur kerja AI modern. Jelajahi proyek terbaru, keahlian teknis, dan pengalaman saya.",
    },
  },
};
