export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = "/") {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export const copy = {
  en: {
    language: { switchToId: "Switch language to Indonesian", switchToEn: "Switch language to English", english: "English", indonesian: "Indonesia" },
    nav: { home: "Home", projects: "Projects", gallery: "Gallery", contact: "Contact", talk: "Let's Talk", close: "Close menu", closeBackdrop: "Close navigation backdrop", open: "Open menu", explore: "EXPLORE MY WORK" },
    home: {
      heroTitle: "Full Stack Developer building scalable web applications and AI-powered products.",
      heroDescription: "Software Engineer focused on building reliable, scalable digital products from idea to deployment.",
      viewProjects: "View Projects", contactMe: "Contact Me", selectedWork: "Selected Work", featuredProjects: "Featured Projects",
      featuredDescription: "A selection of full-stack, backend, and AI systems built around real workflows, integrations, and operational requirements.",
      viewAllProjects: "View All Projects", strip: "Engineering across product, backend, data, and AI",
      education: "Education", academicBackground: "Academic Background", gpa: "GPA", recognition: "Recognition",
      achievements: "National Competition Achievements", achievementsDescription: "Four national web-development placements earned across 2025 and 2026.",
      openCertificate: (name: string) => `Open ${name} certificate PDF`, capabilities: "Capabilities", expertise: "Engineering Expertise",
      expertiseDescription: "Practical capability across the complete application lifecycle, with deeper specialization in backend systems and AI-enhanced products.",
      experience: "Experience", professionalExperience: "Professional Experience", experienceDescription: "Selected roles, responsibilities, and outcomes across software engineering work.",
      certifications: "Certifications", certificationsDescription: "Courses and programs completed across software engineering, cloud, AI, and project delivery.",
      technology: "Technology", coreStack: "Core Stack", contactEyebrow: "Start a conversation",
      contactTitle: "Have a project, opportunity, or engineering challenge?", contactDescription: "I'm open to software engineering roles, freelance development, and technical collaboration.",
    },
    metrics: { years: "Years Experience", projects: "Projects", placements: "National Placements", degree: "Informatics Engineering" },
    projects: {
      archive: "Project Archive", archiveTitle: "Engineering work across web, backend, and AI", archiveDescription: "Explore 15 application implementations shaped around operational workflows, domain requirements, integrations, and maintainable delivery.",
      searchLabel: "Search projects", searchPlaceholder: "Search projects, technologies, or categories", sort: "Sort", featured: "Featured", name: "Name A–Z", all: "All", project: "project", projects: "projects", reset: "Reset filters", none: "No projects found", tryAgain: "Try another keyword or reset your filters.", view: "View Project", interface: (title: string) => `${title} interface`, liveDemo: (title: string) => `Open ${title} live demo`,
      previous: "Previous Project", next: "Next Project", breadcrumb: "Projects", overview: "Overview", technologyStack: "Technology Stack", sourceCode: "Source Code", liveDemoButton: "Live Demo", previewVideo: "Preview Video", imageGallery: (title: string) => `${title} image gallery`, previousImage: "Show previous project image", nextImage: "Show next project image", thumbnails: "Project image thumbnails", image: (number: number, alt: string) => `Show image ${number}: ${alt}`,
    },
    gallery: { eyebrow: "Activity Gallery", title: "Moments behind the work", description: "A visual journal of internships, competitions, academic milestones, and events that shaped my engineering journey.", close: "Close gallery detail" },
    contact: { eyebrow: "Contact", title: "Let's build something together.", description: "Open to software engineering opportunities, full-stack and backend roles, AI engineering, freelance development, and technical collaboration.", connect: "Connect professionally", follow: "Follow and message" },
    footer: { description: "Full Stack Developer focused on scalable web applications, backend systems, and AI-powered products.", navigation: "Navigation", connect: "Connect", rights: "All rights reserved" },
  },
  id: {
    language: { switchToId: "Ganti bahasa ke Indonesia", switchToEn: "Ganti bahasa ke Inggris", english: "Inggris", indonesian: "Indonesia" },
    nav: { home: "Beranda", projects: "Proyek", gallery: "Galeri", contact: "Kontak", talk: "Mari Berbicara", close: "Tutup menu", closeBackdrop: "Tutup latar navigasi", open: "Buka menu", explore: "JELAJAHI KARYA SAYA" },
    home: {
      heroTitle: "Pengembang Full Stack yang membangun aplikasi web berskala besar dan produk berbasis AI.",
      heroDescription: "Software Engineer yang berfokus membangun produk digital yang andal dan mudah dikembangkan, dari ide hingga siap digunakan.",
      viewProjects: "Lihat Proyek", contactMe: "Hubungi Saya", selectedWork: "Karya Pilihan", featuredProjects: "Proyek Unggulan",
      featuredDescription: "Pilihan sistem full-stack, backend, dan AI yang dibangun untuk alur kerja nyata, integrasi, serta kebutuhan operasional.",
      viewAllProjects: "Lihat Semua Proyek", strip: "Membangun produk, backend, data, dan AI",
      education: "Pendidikan", academicBackground: "Latar Belakang Akademik", gpa: "IPK", recognition: "Pencapaian",
      achievements: "Prestasi Kompetisi Nasional", achievementsDescription: "Empat pencapaian tingkat nasional dalam kompetisi pengembangan web pada 2025 dan 2026.",
      openCertificate: (name: string) => `Buka sertifikat ${name} dalam format PDF`, capabilities: "Keahlian", expertise: "Keahlian Rekayasa Perangkat Lunak",
      expertiseDescription: "Kemampuan praktis di seluruh siklus pengembangan aplikasi, dengan spesialisasi pada sistem backend dan produk yang diperkuat AI.",
      experience: "Pengalaman", professionalExperience: "Pengalaman Profesional", experienceDescription: "Peran, tanggung jawab, dan hasil kerja yang dipilih dari perjalanan di bidang rekayasa perangkat lunak.",
      certifications: "Sertifikasi", certificationsDescription: "Kursus dan program yang diselesaikan dalam bidang rekayasa perangkat lunak, cloud, AI, dan pengelolaan proyek.",
      technology: "Teknologi", coreStack: "Teknologi Utama", contactEyebrow: "Mari berdiskusi",
      contactTitle: "Punya proyek, peluang, atau tantangan teknis?", contactDescription: "Terbuka untuk peran software engineering, pengembangan freelance, dan kolaborasi teknis.",
    },
    metrics: { years: "Pengalaman", projects: "Proyek", placements: "Prestasi Nasional", degree: "Teknik Informatika" },
    projects: {
      archive: "Arsip Proyek", archiveTitle: "Karya rekayasa perangkat lunak untuk web, backend, dan AI", archiveDescription: "Jelajahi 15 implementasi aplikasi yang dibangun berdasarkan alur operasional, kebutuhan domain, integrasi, dan pemeliharaan jangka panjang.",
      searchLabel: "Cari proyek", searchPlaceholder: "Cari proyek, teknologi, atau kategori", sort: "Urutkan", featured: "Unggulan", name: "Nama A–Z", all: "Semua", project: "proyek", projects: "proyek", reset: "Reset filter", none: "Proyek tidak ditemukan", tryAgain: "Coba kata kunci lain atau reset filter.", view: "Lihat Proyek", interface: (title: string) => `Antarmuka ${title}`, liveDemo: (title: string) => `Buka demo langsung ${title}`,
      previous: "Proyek Sebelumnya", next: "Proyek Berikutnya", breadcrumb: "Proyek", overview: "Ringkasan", technologyStack: "Teknologi yang Digunakan", sourceCode: "Kode Sumber", liveDemoButton: "Demo Langsung", previewVideo: "Video Pratinjau", imageGallery: (title: string) => `Galeri gambar ${title}`, previousImage: "Tampilkan gambar proyek sebelumnya", nextImage: "Tampilkan gambar proyek berikutnya", thumbnails: "Miniatur gambar proyek", image: (number: number, alt: string) => `Tampilkan gambar ${number}: ${alt}`,
    },
    gallery: { eyebrow: "Galeri Aktivitas", title: "Momen di balik karya", description: "Catatan visual tentang magang, kompetisi, pencapaian akademik, dan kegiatan yang membentuk perjalanan saya sebagai engineer.", close: "Tutup detail galeri" },
    contact: { eyebrow: "Kontak", title: "Mari membangun sesuatu bersama.", description: "Terbuka untuk peluang software engineering, peran full-stack dan backend, engineering AI, pengembangan freelance, serta kolaborasi teknis.", connect: "Terhubung secara profesional", follow: "Ikuti dan kirim pesan" },
    footer: { description: "Full Stack Developer yang berfokus pada aplikasi web berskala besar, sistem backend, dan produk berbasis AI.", navigation: "Navigasi", connect: "Terhubung", rights: "Hak cipta dilindungi" },
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}

export const categoryLabels: Record<Locale, Record<string, string>> = {
  en: {},
  id: { "Full Stack": "Full Stack", Backend: "Backend", AI: "AI", Healthcare: "Kesehatan", Education: "Pendidikan", "E-Commerce": "E-Commerce", Marketplace: "Marketplace", "Civic Tech": "Teknologi Sipil", Mobile: "Mobile" },
};

export function categoryLabel(locale: Locale, category: string) {
  return categoryLabels[locale][category] ?? category;
}
