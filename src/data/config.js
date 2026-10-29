import React from 'react';

export const portfolioData = {
  hero: {
    year: "2026",
    headline: "Portfolio",
    subtitle: "Information Systems Graduate (S.Kom.) • Creative Developer • Digital Enthusiast",
    cta: "Explore My Work"
  },
  about: {
    greeting: "Hello!",
    description: "I'm Ahmad Ridho Zakiy, S.Kom., an Information Systems graduate from Universitas Putra Indonesia YPTK Padang passionate about fullstack web development, UI/UX design, and creating meaningful digital experiences. I enjoy transforming ideas into clean, engaging, and functional web applications while continuously learning and exploring new technologies.",
    connectTitle: "Let's Connect",
    contacts: [
      { id: "email", icon: "mail", text: "ridhojack77@gmail.com", link: "mailto:ridhojack77@gmail.com" },
      { id: "location", icon: "map-pin", text: "Padang, Indonesia", link: "#" },
      { id: "phone", icon: "phone", text: "0838-4630-5996", link: "tel:+6283846305996" },
      { id: "instagram", icon: "instagram", text: "rdhjack06", link: "https://instagram.com/rdhjack06" },
      { id: "linkedin", icon: "linkedin", text: "Ahmad Ridho Zakiy", link: "https://linkedin.com/in/ahmad-ridho-zakiy" },
      { id: "github", icon: "github", text: "ahmadridhoz", link: "https://github.com/ahmadridhoz" }
    ]
  },
  skills: [
    { id: 1, title: "Web Development" },
    { id: 2, title: "UI/UX Design" },
    { id: 3, title: "System Analysis" },
    { id: 4, title: "Database Management" },
    { id: 5, title: "Front-End Development" },
    { id: 6, title: "Creative Digital Projects" }
  ],
  projects: [
    {
      id: 1,
      title: "Website Analisis Kualitas Layanan DPRD",
      category: "Web Development / Information System",
      description: "Website untuk analisis kualitas layanan website resmi DPRD menggunakan metode WebQual dan IPA.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MySQL"],
      year: "2025",
      image: "/assets/webqual_dprd.png",
      link: "https://webqual-dprd.vercel.app"
    },
    {
      id: 2,
      title: "Personal Portfolio",
      category: "Web Design & Development",
      description: "Modern interactive 3D personal portfolio website dengan Framer Motion, Tailwind CSS, dan responsive design.",
      technologies: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
      year: "2024",
      image: "/assets/portfolio.png",
      link: "https://porto-baru-nine.vercel.app/"
    },
    {
      id: 3,
      title: "Hotel Reservation System",
      category: "Web Development",
      description: "Website pemesanan dan reservasi hotel.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      year: "2024",
      image: "/assets/reservasi_hotel.png",
      link: "https://padangstay.vercel.app/"
    },
    {
      id: 4,
      title: "PharmaPOS - Modern Pharmacy & POS System",
      category: "Fullstack Web Application",
      description: "Sistem Manajemen Kasir & Inventaris Apotek v2.0 dengan Atomic POS Transaction, pencatatan stock movement, cetak struk PDF, dan Role-Based Access Control (RBAC).",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      year: "2024",
      image: "/assets/pharmacy.png",
      link: "https://pharmapos-iota.vercel.app/"
    }
  ],
  marqueeText: "DESIGN • DEVELOP • CREATE • INNOVATE • ",
  experience: [
    {
      year: "2026",
      title: "Academic / Personal Projects",
      description: "Building modern web applications and exploring creative development."
    },
    {
      year: "2024–2025",
      title: "Internship & Organization Leadership",
      description: "Contributing to DPRD Sumbar web quality research and leading the Student Association."
    }
  ],
  contact: {
    headline: "Let's Collaborate",
    subtitle: "Have an idea, project, or opportunity? Let's create something meaningful together.",
    email: "ridhojack77@gmail.com",
    link: "https://wa.me/6283846305996",
    cta: "Chat via WhatsApp"
  },
  footer: {
    name: "Ahmad Ridho Zakiy, S.Kom.",
    year: "2026",
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/in/ahmad-ridho-zakiy" },
      { name: "GitHub", url: "https://github.com/ahmadridhoz" },
      { name: "Instagram", url: "https://instagram.com/rdhjack06" }
    ]
  },
  resume: {
    education: [
      {
        institution: "Universitas Putra Indonesia YPTK Padang",
        degree: "Sarjana Komputer (S.Kom.)",
        major: "Fakultas Ilmu Komputer • Sistem Informasi (Lulus)",
        period: "2022 - 2026",
        description: "Fokus pada Rekayasa Perangkat Lunak, Analisis Sistem Informasi, Basis Data, dan Pengembangan Aplikasi Web Modern."
      },
      {
        institution: "SMA IT Ash-Shiddiiqi",
        degree: "Pendidikan Menengah Atas",
        major: "Jurusan MIPA / Sains",
        period: "2018 - 2021",
        description: "Fondasi logika komputasi, matematika, dan pemecahan masalah analitis."
      }
    ],
    organizations: [
      {
        company: "DPRD Provinsi Sumatera Barat",
        role: "Magang & Riset Kualitas Sistem Informasi",
        period: "2024",
        description: "Melakukan audit dan analisis kualitas website resmi DPRD Sumbar menggunakan metode WebQual dan IPA."
      },
      {
        company: "Himpunan Mahasiswa Jurusan Sistem Informasi (HMJ SI)",
        role: "Ketua Himpunan",
        period: "2024 - 2025",
        description: "Memimpin kepengurusan himpunan mahasiswa, mengoordinasikan program kerja pengembangan teknologi dan akademik mahasiswa."
      },
      {
        company: "Himpunan Mahasiswa Jurusan Sistem Informasi (HMJ SI)",
        role: "Kepala Bagian Hubungan Masyarakat (Humas)",
        period: "2023 - 2024",
        description: "Mengelola komunikasi eksternal, kemitraan media, dan publikasi strategis kegiatan jurusan."
      }
    ],
    tools: [
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", topColor: "rgba(0, 160, 255, 0.9)", sideColor: "rgba(0, 110, 220, 0.95)" },
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", topColor: "rgba(0, 220, 100, 0.9)", sideColor: "rgba(0, 170, 80, 0.95)" },
      { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", topColor: "rgba(0, 230, 255, 0.9)", sideColor: "rgba(0, 180, 210, 0.95)" },
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", topColor: "rgba(255, 50, 220, 0.9)", sideColor: "rgba(210, 20, 170, 0.95)" },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", topColor: "rgba(30, 80, 255, 0.9)", sideColor: "rgba(15, 50, 200, 0.95)" },
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", topColor: "rgba(255, 70, 0, 0.9)", sideColor: "rgba(210, 40, 0, 0.95)" }
    ],
    skillCategories: [
      {
        category: "Frontend & Web Development",
        items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"]
      },
      {
        category: "Backend & Database",
        items: ["Node.js", "PHP", "Laravel", "MySQL", "RESTful API"]
      },
      {
        category: "System Analysis & UI/UX",
        items: ["System Analysis", "UI/UX Design", "Figma", "WebQual & IPA"]
      },
      {
        category: "Tools & Deployment",
        items: ["Git", "GitHub", "VS Code", "Vercel", "Responsive Design"]
      }
    ]
  }
};
