export const portfolioData = {
  personal: {
    name: "Ahmad Ridho Zakiy",
    degree: "S.Kom.",
    fullNameWithDegree: "Ahmad Ridho Zakiy, S.Kom.",
    role: "Sarjana Sistem Informasi & Full-Stack Web Developer",
    tagline: "Membangun Solusi Digital yang Terstruktur, Fungsional, dan Berpusat pada Pengguna",
    summary: "Lulusan Sarjana Sistem Informasi (S.Kom.) dari Universitas Putra Indonesia YPTK Padang dengan spesialisasi dalam pengembangan web modern, analisis kualitas sistem, dan perancangan basis data terintegrasi. Berpengalaman memimpin organisasi mahasiswa, mengembangkan aplikasi kasir apotek (POS), sistem reservasi hotel, serta riset evaluasi sistem informasi pemerintahan berbasis metode WebQual dan IPA.",
    location: "Padang, Sumatera Barat, Indonesia",
    status: "Terbuka untuk Peluang Kerja & Proyek",
    availableForHire: true,
    photo: "/assets/profile.jpg",
    cvUrl: "mailto:ridhojack77@gmail.com?subject=Permintaan%20Curriculum%20Vitae%20-%20Ahmad%20Ridho%20Zakiy"
  },

  hero: {
    greeting: "Halo, saya",
    headline: "Ahmad Ridho Zakiy",
    degreeBadge: "S.Kom.",
    subheadline: "Sarjana Sistem Informasi | Full-Stack Web Developer",
    description: "Fokus pada rekayasa web modern, analisis sistem informasi terintegrasi, dan arsitektur aplikasi yang scalable, cepat, serta berorientasi pada kebutuhan pengguna nyata.",
    ctaPrimary: "Lihat Proyek",
    ctaSecondary: "Hubungi Saya",
    ctaCv: "Minta CV Lengkap",
    stats: [
      { value: "S.Kom.", label: "Gelar Resmi UPI YPTK" },
      { value: "4+", label: "Proyek Web Teruji" },
      { value: "2+ Thn", label: "Kepemimpinan Organisasi" },
      { value: "100%", label: "Komitmen Kualitas" }
    ]
  },

  about: {
    title: "Tentang Saya",
    badge: "Profil Profesional",
    lead: "Kombinasi antara wawasan analitis sistem informasi dan kemampuan teknis implementasi perangkat lunak.",
    paragraphs: [
      "Saya adalah lulusan Program Studi Sistem Informasi, Fakultas Ilmu Komputer di Universitas Putra Indonesia YPTK Padang dengan gelar Sarjana Komputer (S.Kom.). Memiliki pemahaman mendalam tentang siklus hidup pengembangan sistem informasi—mulai dari analisis kebutuhan, pemodelan basis data, perancangan antarmuka, hingga implementasi kode full-stack.",
      "Sepanjang perjalanan akademik dan proyek mandiri, saya aktif membangun aplikasi web modern menggunakan ekosistem React, Next.js, Laravel, Node.js, dan MySQL. Saya juga terbiasa melakukan riset evaluasi kualitas layanan perangkat lunak menggunakan instrumen ilmiah seperti WebQual 4.0 dan Importance-Performance Analysis (IPA).",
      "Selain kemampuan teknis, pengalaman menjabat sebagai Ketua Himpunan dan Kepala Bagian Humas HMJ Sistem Informasi mengasah kepemimpinan, komunikasi strategis, manajemen tim lintas disiplin, serta kemampuan problem-solving dalam situasi nyata."
    ],
    highlights: [
      {
        icon: "graduation-cap",
        title: "Pendidikan Terverifikasi",
        description: "Sarjana Komputer (S.Kom.), Sistem Informasi, Universitas Putra Indonesia YPTK Padang."
      },
      {
        icon: "code",
        title: "Full-Stack Development",
        description: "Spesialisasi frontend interaktif (React, Tailwind) & backend terstruktur (Node.js, Laravel, Prisma, MySQL)."
      },
      {
        icon: "chart-bar",
        title: "System Analysis & Research",
        description: "Terbiasa mengukur kualitas sistem informasi secara kuantitatif dengan metode WebQual 4.0 dan IPA."
      },
      {
        icon: "users",
        title: "Kepemimpinan & Kolaborasi",
        description: "Mantan Ketua Himpunan dan Kabag Humas HMJ SI, terbiasa memimpin tim dan mengelola program kerja."
      }
    ],
    contacts: [
      { id: "email", icon: "mail", label: "Email", text: "ridhojack77@gmail.com", link: "mailto:ridhojack77@gmail.com" },
      { id: "whatsapp", icon: "phone", label: "WhatsApp", text: "0838-4630-5996", link: "https://wa.me/6283846305996?text=Halo%20Ahmad%20Ridho%20Zakiy,%20saya%20tertarik%20untuk%20berdiskusi." },
      { id: "location", icon: "map-pin", label: "Lokasi", text: "Padang, Indonesia", link: "#" },
      { id: "github", icon: "github", label: "GitHub", text: "ahmadridhoz", link: "https://github.com/ahmadridhoz" },
      { id: "linkedin", icon: "linkedin", label: "LinkedIn", text: "Ahmad Ridho Zakiy", link: "https://www.linkedin.com/in/ahmad-ridho-zakiy" },
      { id: "instagram", icon: "instagram", label: "Instagram", text: "@rdhjack06", link: "https://instagram.com/rdhjack06" }
    ]
  },

  skillsCategories: [
    {
      category: "Web Development",
      description: "Pengembangan antarmuka interaktif, responsif, dan logika server-side modern.",
      skills: [
        { name: "React.js", level: "Frontend Core", icon: "react" },
        { name: "Next.js", level: "Fullstack / SSR", icon: "next" },
        { name: "Tailwind CSS", level: "Modern Styling", icon: "tailwind" },
        { name: "JavaScript (ES6+)", level: "Programming", icon: "javascript" },
        { name: "HTML5 & CSS3", level: "Semantic Markup", icon: "html" },
        { name: "Vite", level: "Build Tooling", icon: "vite" },
        { name: "PHP & Laravel", level: "Backend Framework", icon: "laravel" },
        { name: "Bootstrap", level: "UI Toolkit", icon: "bootstrap" }
      ]
    },
    {
      category: "Database & Backend",
      description: "Arsitektur data relasional, RESTful API, dan ORM.",
      skills: [
        { name: "MySQL", level: "Relational DB", icon: "mysql" },
        { name: "Node.js", level: "Runtime Environment", icon: "node" },
        { name: "Express.js", level: "API Services", icon: "express" },
        { name: "Prisma ORM", level: "Data Modeling", icon: "prisma" },
        { name: "RESTful API", level: "Architecture", icon: "api" },
        { name: "Database Design (ERD)", level: "System Modeling", icon: "database" }
      ]
    },
    {
      category: "Mobile App Development",
      description: "Fondasi pemrograman aplikasi mobile dan desain responsif mobile-first.",
      skills: [
        { name: "Android Fundamentals", level: "Mobile Concept", icon: "android" },
        { name: "Mobile-First Design", level: "Responsive UI", icon: "smartphone" },
        { name: "Progressive Web Apps", level: "Web App", icon: "globe" }
      ]
    },
    {
      category: "UI/UX Design",
      description: "Perancangan user flow, wireframe, dan prototipe antarmuka interaktif.",
      skills: [
        { name: "Figma", level: "Wireframe & Hi-Fi", icon: "figma" },
        { name: "Prototyping", level: "Interactive Design", icon: "layout" },
        { name: "Design System", level: "Component Consistency", icon: "layers" },
        { name: "Usability Evaluation", level: "UX Testing", icon: "check-circle" }
      ]
    },
    {
      category: "Tools & Development Environment",
      description: "Alat produktivitas, version control, dan pipeline deployment.",
      skills: [
        { name: "Git", level: "Version Control", icon: "git" },
        { name: "GitHub", level: "Collaboration", icon: "github" },
        { name: "VS Code", level: "Code Editor", icon: "vscode" },
        { name: "Postman", level: "API Testing", icon: "postman" },
        { name: "Vercel", level: "Deployment Platform", icon: "vercel" },
        { name: "npm / Yarn", level: "Package Manager", icon: "package" }
      ]
    },
    {
      category: "Photography & Creative Skills",
      description: "Kreativitas digital pendukung publikasi dan personal branding.",
      skills: [
        { name: "Digital Photography", level: "Documentation", icon: "camera" },
        { name: "Photo Editing", level: "Visual Enhancement", icon: "image" },
        { name: "Visual Content Creation", level: "Social Media", icon: "palette" },
        { name: "Copywriting & Public Relations", level: "Communication", icon: "message-square" }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Website Analisis Kualitas Layanan DPRD",
      category: "Sistem Informasi & Evaluasi Layanan",
      shortDescription: "Aplikasi sistem informasi untuk mengukur kepuasan pengguna website resmi DPRD Provinsi Sumatera Barat menggunakan metode WebQual 4.0 dan Importance-Performance Analysis (IPA).",
      overview: "Proyek sistem informasi berbasis riset ilmiah yang bertujuan mengukur kesenjangan antara harapan publik dan performa nyata website resmi sekretariat DPRD Provinsi Sumatera Barat. Dilengkapi kalkulasi otomatis Gap Analysis dan visualisasi kuadran IPA untuk rekomendasi perbaikan layanan secara objektif.",
      problem: "Sekretariat DPRD membutuhkan alat ukur objektif dan terstruktur untuk mengevaluasi kualitas layanan portal resminya berdasarkan persepsi masyarakat, guna meningkatkan transparansi dan kemudahan akses informasi publik.",
      solution: "Membangun sistem informasi kuesioner digital terstandarisasi WebQual 4.0 (Usability, Information Quality, Service Interaction) yang mengolah data responden secara otomatis ke dalam matriks kuadran IPA (Kuadran I-IV).",
      contribution: "Lead Fullstack Developer & Analis Sistem. Bertanggung jawab atas perancangan basis data, implementasi logika algoritma WebQual & IPA, integrasi RESTful API, dan visualisasi grafik kuadran interaktif.",
      features: [
        "Kuesioner digital interaktif dengan validasi data responden",
        "Kalkulasi otomatis skor kesenjangan (Gap Analysis) WebQual",
        "Pemetaan otomatis data ke dalam 4 Kuadran Matriks IPA",
        "Dashboard admin analitik dan ekspor laporan evaluasi layanan"
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "MySQL", "Chart.js"],
      year: "2025",
      image: "/assets/webqual_dprd.png",
      liveUrl: "https://webqual-dprd.vercel.app",
      githubUrl: null
    },
    {
      id: 2,
      title: "PharmaPOS - Modern Pharmacy & POS System",
      category: "Fullstack Enterprise Web Application",
      shortDescription: "Sistem Manajemen Kasir & Inventaris Apotek v2.0 dengan Atomic POS Transaction, pencatatan mutasi stok real-time, cetak struk PDF, dan Role-Based Access Control (RBAC).",
      overview: "Aplikasi enterprise skala apotek ritel modern yang dirancang untuk mencegah inkonsistensi stok saat transaksi kasir simultan, mengontrol mutasi keluar-masuk obat, dan menyediakan audit log keuangan terperinci.",
      problem: "Apotek konvensional kerap menghadapi selisih stok obat, antrean kasir lambat, pencatatan kadaluarsa obat yang tidak terpantau, serta ketiadaan hak akses terpisah antar staf.",
      solution: "Mengembangkan platform POS berbasis Next.js dan Prisma ORM dengan atomic database transactions, pencatatan mutasi stok (stock movement) real-time, modul cetak struk termal PDF, serta autentikasi RBAC.",
      contribution: "Fullstack Developer. Merancang skema relasi Prisma ORM, membangun logika transaksi atomik, mengembangkan antarmuka kasir cepat (keyboard-shortcut friendly), dan membuat modul laporan stok obat.",
      features: [
        "Atomic Transaction Engine menjamin keamanan mutasi stok obat saat checkout",
        "Manajemen multi-kategori obat, nomor batch, dan tanggal kadaluarsa",
        "Modul cetak struk belanja PDF otomatis dan dukungan barcode scanner",
        "Role-Based Access Control (Kasir, Apoteker, Admin Gudang, Manajer)"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma ORM", "Tailwind CSS", "PostgreSQL/MySQL"],
      year: "2024",
      image: "/assets/pharmacy.png",
      liveUrl: "https://pharmapos-iota.vercel.app/",
      githubUrl: null
    },
    {
      id: 3,
      title: "Hotel Reservation System (PadangStay)",
      category: "Web Application & Booking Engine",
      shortDescription: "Sistem pemesanan dan reservasi kamar hotel berbasis web untuk mempermudah calon tamu memeriksa ketersediaan kamar dan melakukan booking secara terstruktur.",
      overview: "Platform reservasi perhotelan terintegrasi yang menghadirkan pengalaman booking kamar hotel yang cepat dan transparan, dilengkapi manajemen reservasi dinamis bagi manajemen hotel.",
      problem: "Proses reservasi manual memakan waktu, rentan terjadi pemesanan ganda (double-booking), serta menyulitkan pengelola hotel dalam memantau okupansi kamar secara real-time.",
      solution: "Membangun web reservasi terstruktur dengan pengecekan tanggal check-in & check-out dinamis, katalog tipe kamar berfasilitas lengkap, serta panel admin untuk konfirmasi reservasi.",
      contribution: "Fullstack Developer. Mengembangkan skema basis data relasional kamar & booking, membangun fitur validasi reservasi, serta merancang tata letak antarmuka pengguna yang bersih dan mudah digunakan.",
      features: [
        "Pencarian dan filter ketersediaan kamar berdasarkan tanggal menginap",
        "Detail tipe kamar lengkap dengan galeri foto, kapasitas, dan tarif",
        "Formulir reservasi aman dengan konfirmasi otomatis",
        "Dashboard manajemen kamar, tarif, dan data pemesan bagi administrator"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Blade"],
      year: "2024",
      image: "/assets/reservasi_hotel.png",
      liveUrl: "https://padangstay.vercel.app/",
      githubUrl: null
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      category: "Frontend Web & Personal Branding",
      shortDescription: "Website portofolio profesional interaktif berkinerja tinggi, responsif, dan berorientasi pada personal branding modern.",
      overview: "Situs web portofolio pribadi yang dirancang secara profesional untuk mempresentasikan rekam jejak akademik, proyek perangkat lunak, dan keahlian teknis secara terstruktur dan meyakinkan bagi recruiter maupun calon klien.",
      problem: "Memerlukan wadah representasi digital profesional yang cepat diakses, memiliki hierarki informasi yang jelas, dan bebas dari animasi berlebihan yang mengganggu kenyamanan pengguna.",
      solution: "Merancang antarmuka bersih dan minimalis menggunakan React, Tailwind CSS, serta Framer Motion dengan memperhatikan aspek performa, aksesibilitas, SEO, dan dukungan reduced motion.",
      contribution: "UI/UX Designer & Frontend Developer. Bertanggung jawab atas konsep desain visual, arsitektur komponen React, implementasi responsif, dan optimasi build.",
      features: [
        "Desain modern, minimalis, dan profesional tanpa ornamen berlebihan",
        "Modal detail proyek interaktif dengan ulasan teknis mendalam",
        "Dukungan penuh preferensi aksesibilitas reduced motion",
        "Responsif optimal dari layar smartphone ringkas hingga desktop monitor lebar"
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      year: "2026",
      image: "/assets/portfolio.png",
      liveUrl: "https://porto-baru-nine.vercel.app/",
      githubUrl: "https://github.com/ahmadridhoz"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Magang & Riset Sistem Informasi",
      institution: "DPRD Provinsi Sumatera Barat",
      location: "Padang, Sumatera Barat",
      period: "2024",
      type: "Praktik Kerja Lapangan (PKL)",
      description: "Melakukan analisis menyeluruh terhadap sistem informasi dan website resmi sekretariat DPRD Provinsi Sumatera Barat.",
      responsibilities: [
        "Menganalisis sistem informasi dan arsitektur portal publik resmi DPRD Sumbar.",
        "Mengembangkan aplikasi web evaluasi kepuasan layanan dengan metode WebQual 4.0 dan Importance-Performance Analysis (IPA).",
        "Mengolah data kuesioner responden masyarakat dan memetakan hasil evaluasi ke dalam kuadran IPA.",
        "Menyusun laporan teknis evaluasi kualitas layanan sebagai bahan masukan perbaikan portal DPRD."
      ],
      skillsUsed: ["System Analysis", "WebQual 4.0", "IPA Matrix", "React", "Node.js", "MySQL"]
    },
    {
      id: 2,
      title: "Ketua Himpunan Mahasiswa",
      institution: "Himpunan Mahasiswa Jurusan Sistem Informasi (HMJ SI UPI YPTK Padang)",
      location: "Padang, Sumatera Barat",
      period: "2024 – 2025",
      type: "Kepengurusan Organisasi",
      description: "Memimpin organisasi kemahasiswaan tingkat jurusan yang menaungi seluruh mahasiswa aktif Program Studi Sistem Informasi.",
      responsibilities: [
        "Memimpin jalannya organisasi dan mengkoordinasikan seluruh divisi dalam merancang serta mengeksekusi program kerja strategis.",
        "Menginisiasi seminar teknologi informasi, workshop web programming, dan program penguatan kompetensi mahasiswa baru.",
        "Menjadi representasi dan jembatan aspirasi mahasiswa jurusan Sistem Informasi kepada pihak pimpinan jurusan dan dekanat fakultas.",
        "Mengelola manajemen tim, evaluasi kinerja pengurus, serta menjaga iklim kolaboratif dalam organisasi."
      ],
      skillsUsed: ["Leadership", "Team Management", "Strategic Planning", "Public Speaking", "Problem Solving"]
    },
    {
      id: 3,
      title: "Kepala Bagian Hubungan Masyarakat (Humas)",
      institution: "Himpunan Mahasiswa Jurusan Sistem Informasi (HMJ SI UPI YPTK Padang)",
      location: "Padang, Sumatera Barat",
      period: "2023 – 2024",
      type: "Kepengurusan Organisasi",
      description: "Bertanggung jawab atas komunikasi eksternal, branding kelembagaan, dan publikasi media resmi himpunan.",
      responsibilities: [
        "Mengelola saluran media sosial resmi organisasi serta menyusun konten publikasi visual dan informasi akademik.",
        "Membangun komunikasi dan relasi strategis dengan organisasi kemahasiswaan intra maupun ekstra kampus.",
        "Menyusun siaran pers, dokumentasi kegiatan, dan publikasi agenda seminar teknologi.",
        "Mengoordinasikan publikasi acara untuk meningkatkan partisipasi mahasiswa dalam setiap kegiatan."
      ],
      skillsUsed: ["Public Relations", "Digital Content Strategy", "Media Social Management", "Visual Communication"]
    },
    {
      id: 4,
      title: "Panitia Pelaksana & Volunteer Kegiatan Mahasiswa",
      institution: "Universitas Putra Indonesia YPTK Padang",
      location: "Padang, Sumatera Barat",
      period: "2022 – 2024",
      type: "Kepanitiaan & Volunteer",
      description: "Berpartisipasi aktif dalam berbagai agenda akademik, kepanitiaan penyambutan mahasiswa baru, dan seminar teknologi kampus.",
      responsibilities: [
        "Berkontribusi pada tim teknis pelaksanaan acara seminar nasional dan workshop teknologi informasi.",
        "Bertanggung jawab atas alur registrasi digital peserta dan dokumentasi multimedia kegiatan.",
        "Berkoordinasi lintas panitia untuk memastikan operasional acara berlangsung tepat waktu dan teratur."
      ],
      skillsUsed: ["Event Coordination", "Teamwork", "Registration Management", "Documentation"]
    }
  ],

  education: [
    {
      id: 1,
      institution: "Universitas Putra Indonesia YPTK Padang",
      faculty: "Fakultas Ilmu Komputer",
      major: "Sistem Informasi",
      degree: "Sarjana Komputer (S.Kom.)",
      period: "2022 – 2026",
      status: "Lulus / Wisudawan (Graduated)",
      description: "Menyelesaikan program sarjana dengan fokus pada rekayasa perangkat lunak, analisis & perancangan sistem informasi, evaluasi kualitas sistem berbasis metode ilmiah (WebQual & IPA), perancangan basis data relasional, dan pengembangan aplikasi web enterprise.",
      achievements: [
        "Lulus Sarjana Komputer (S.Kom.) Program Studi Sistem Informasi",
        "Penelitian skripsi: Penerapan metode WebQual dan IPA pada evaluasi website resmi instansi pemerintahan",
        "Aktif menjabat Ketua Himpunan Mahasiswa Jurusan Sistem Informasi (2024–2025)",
        "Pernah menjabat Kepala Bagian Humas HMJ SI (2023–2024)"
      ]
    },
    {
      id: 2,
      institution: "SMA IT Ash-Shiddiiqi",
      faculty: "Pendidikan Menengah Atas",
      major: "MIPA / Science",
      degree: "Ijazah SMA",
      period: "2018 – 2021",
      status: "Lulus",
      description: "Menempuh pendidikan menengah dengan konsentrasi ilmu pengetahuan alam (sains & matematika) yang membentuk pola pikir analitis, logis, dan minat awal terhadap dunia teknologi komputer.",
      achievements: [
        "Lulusan jurusan MIPA dengan fondasi matematika dan logika yang kuat",
        "Aktif dalam kegiatan akademik dan ekstrakurikuler sekolah"
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Ijazah Sarjana Komputer (S.Kom.)",
      issuer: "Universitas Putra Indonesia YPTK Padang",
      field: "Program Studi Sistem Informasi, Fakultas Ilmu Komputer",
      status: "Gelar Resmi Resmi Diperoleh",
      year: "2026",
      verified: true
    },
    {
      id: 2,
      title: "Sertifikat Praktik Kerja Lapangan (PKL)",
      issuer: "Sekretariat DPRD Provinsi Sumatera Barat",
      field: "Analisis Sistem Informasi & Pengembangan Web",
      status: "Selesai",
      year: "2024",
      verified: true
    },
    {
      id: 3,
      title: "Surat Keputusan Kepengurusan Organisasi",
      issuer: "Universitas Putra Indonesia YPTK Padang",
      field: "Ketua Himpunan Mahasiswa Jurusan Sistem Informasi (2024–2025)",
      status: "Terverifikasi",
      year: "2024",
      verified: true
    }
  ],

  contact: {
    headline: "Mari Berkolaborasi",
    badge: "Hubungi Saya",
    subtitle: "Terbuka untuk peluang kerja full-time, proyek website, kolaborasi sistem informasi, maupun diskusi teknologi. Silakan hubungi saya melalui jalur berikut.",
    email: "ridhojack77@gmail.com",
    whatsapp: "0838-4630-5996",
    whatsappLink: "https://wa.me/6283846305996?text=Halo%20Ahmad%20Ridho%20Zakiy,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20peluang%20kerja%20atau%20proyek.",
    location: "Padang, Sumatera Barat, Indonesia",
    socials: [
      { name: "Email", url: "mailto:ridhojack77@gmail.com", display: "ridhojack77@gmail.com" },
      { name: "WhatsApp", url: "https://wa.me/6283846305996?text=Halo%20Ahmad%20Ridho%20Zakiy...", display: "0838-4630-5996" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmad-ridho-zakiy", display: "Ahmad Ridho Zakiy" },
      { name: "GitHub", url: "https://github.com/ahmadridhoz", display: "github.com/ahmadridhoz" },
      { name: "Instagram", url: "https://instagram.com/rdhjack06", display: "@rdhjack06" }
    ]
  },

  footer: {
    name: "Ahmad Ridho Zakiy, S.Kom.",
    year: "2026",
    tagline: "Portofolio Profesional • Sistem Informasi & Web Development",
    links: [
      { name: "Beranda", href: "#home" },
      { name: "Tentang", href: "#about" },
      { name: "Proyek", href: "#works" },
      { name: "Keahlian", href: "#skills" },
      { name: "Pengalaman", href: "#experience" },
      { name: "Pendidikan", href: "#education" },
      { name: "Kontak", href: "#contact" }
    ]
  }
};
