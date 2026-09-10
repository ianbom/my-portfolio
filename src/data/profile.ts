import type { Achievement, Experience } from "@/types/portfolio";
import type { Locale } from "@/lib/i18n";

export const profile = {
  name: "Ian Ale Hansyah",
  shortName: "Ian Ale",
  primaryRole: "Full Stack Developer",
  secondaryRoles: ["Backend Developer", "AI Engineer"],
  location: "Surabaya, Indonesia",
  email: "i.alehansyah@gmail.com",
  phone: "+62 812 3391 4116",
  phoneHref: "tel:+6281233914116",
  linkedin: "https://www.linkedin.com/in/ian-ale-hansyah-204ab9286/",
  instagram: "https://www.instagram.com/ianale._/",
  summary: "Full Stack Developer and D4 Teknik Informatika graduate with more than two years of experience delivering web applications from requirements and database design through APIs, frontend implementation, deployment, and maintenance.",
  heroDescription: "Software Engineer focused on building reliable, scalable digital products from idea to deployment.",
  education: {
    institution: "Politeknik Elektronika Negeri Surabaya",
    degree: "D4 Teknik Informatika",
    degreeEnglish: "Applied Bachelor's Degree in Informatics Engineering",
    period: "July 2022 – July 2026",
    gpa: "3.76/4.00",
  },
} as const;

export const metrics = [
  { value: "2+", label: "Years Experience" },
  { value: "15", label: "Projects" },
  { value: "4", label: "National Placements" },
  { value: "D4", label: "Informatics Engineering" },
] as const;

export const expertise = [
  { title: "Full Stack Development", description: "End-to-end application delivery covering requirements, system flows, database structure, APIs, frontend implementation, testing, deployment, and maintenance.", technologies: ["Laravel", "React", "Next.js", "TypeScript"] },
  { title: "Backend Engineering", description: "RESTful APIs, authentication, validation, relational data modeling, integrations, background jobs, testing, and maintainable application logic.", technologies: ["Laravel", "FastAPI", "PHP", "Python"] },
  { title: "AI Engineering", description: "Document ingestion, chunking, embeddings, vector search, retrieval, reranking, LLM integration, and RAG evaluation workflows.", technologies: ["RAG", "LangChain", "Ollama", "RAGAS"] },
  { title: "Infrastructure & Delivery", description: "Application deployment, server configuration, containerized services, object storage, maintenance, and production issue resolution.", technologies: ["Docker", "VPS", "MinIO", "cPanel"] },
] as const;

export const experiences: Experience[] = [
  {
    role: "Freelance Full Stack Web Developer",
    company: "PT. Webcare Indonesia",
    period: "December 2024 – Present",
    location: "Indonesia",
    summary: "Developing and maintaining custom business applications from requirements and process design through deployment and post-implementation support.",
    highlights: ["Delivered or maintained more than five custom websites.", "Built e-commerce, booking, and internal management systems.", "Handled testing, debugging, deployment, server configuration, and maintenance."],
    technologies: ["Laravel", "React", "TypeScript", "MySQL", "Tailwind CSS", "Inertia.js"],
  },
  {
    role: "Backend Developer",
    company: "LLDIKTI 7 · MSIB",
    period: "September 2024 – December 2024",
    location: "Surabaya, Indonesia",
    summary: "Built a lecturer-certification-fund verification workflow and secure RESTful APIs integrated with a mobile application.",
    highlights: ["Reduced manual verification processing by more than 50%.", "Performed API integration testing, validation, debugging, and root-cause analysis.", "Deployed the development server and prepared API documentation."],
    technologies: ["Laravel", "MySQL", "REST API", "Postman", "Bootstrap"],
  },
  {
    role: "Backend Developer",
    company: "PT. Webcare Indonesia",
    period: "July 2024 – December 2024",
    location: "Surabaya, Indonesia",
    summary: "Developed web applications and client-management systems by translating business needs into modules, data structures, and integrations.",
    highlights: ["Supported operational business applications and client-management systems.", "Collaborated through Git and GitHub for integration and issue resolution.", "Performed testing, deployment, maintenance, and iterative improvements."],
    technologies: ["Laravel", "React", "MySQL", "Git", "Deployment"],
  },
];

export const achievements: Achievement[] = [
  { placement: "1st Place", competition: "Olimpiade Vokasi Nasional — Web Technology", organizer: "FPTVI", year: 2026, certificateFile: "/competition/JUARA 1 - Web Technology Competition.pdf" },
  { placement: "1st Place", competition: "Web Development Technology Innovative Challenge 8.0", organizer: "UNEJ", year: 2025, certificateFile: "/competition/Juara 1 TIC.pdf" },
  { placement: "3rd Place", competition: "Kompetisi Mahasiswa Informatika Politeknik Nasional — E-Government", organizer: "BAKORMA", year: 2025, certificateFile: "/competition/KMIPN .pdf" },
  { placement: "1st Place", competition: "Web Development National Competition Silogy Expo", organizer: "UNSIKA", year: 2025, certificateFile: "/competition/Silogy Expo - Ian Ale Hansyah - Web Dev Juara 1_page-0001.pdf" },
];

export const skillGroups = [
  { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Inertia.js", "Flutter"] },
  { name: "Backend", skills: ["Laravel", "PHP", "FastAPI", "Python", "Node.js", "Express.js", "REST APIs"] },
  { name: "Data", skills: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "pgvector", "Qdrant"] },
  { name: "AI", skills: ["RAG", "LangChain", "Ollama", "RAGAS", "Embeddings", "Retrieval", "Reranking"] },
  { name: "Infrastructure", skills: ["Docker", "VPS", "MinIO", "cPanel", "Celery", "Alembic"] },
] as const;

export function getProfileContent(locale: Locale) {
  if (locale === "en") return { profile, metrics, expertise, experiences, achievements };

  return {
    profile: {
      ...profile,
      summary: "Full Stack Developer dan lulusan D4 Teknik Informatika dengan pengalaman lebih dari dua tahun membangun aplikasi web, mulai dari penggalian kebutuhan dan perancangan basis data hingga API, frontend, deployment, dan pemeliharaan.",
      heroDescription: "Software Engineer yang berfokus membangun produk digital yang andal dan mudah dikembangkan, dari ide hingga siap digunakan.",
      education: { ...profile.education, degreeEnglish: "Sarjana Terapan Teknik Informatika", period: "Juli 2022 – Juli 2026" },
    },
    metrics: [
      { value: "2+", label: "Tahun Pengalaman" },
      { value: "15", label: "Proyek" },
      { value: "4", label: "Prestasi Nasional" },
      { value: "D4", label: "Teknik Informatika" },
    ],
    expertise: [
      { ...expertise[0], title: "Full Stack Developer", description: "Pengembangan aplikasi dari awal hingga siap digunakan, mencakup kebutuhan, alur sistem, struktur basis data, API, frontend, pengujian, deployment, dan pemeliharaan." },
      { ...expertise[1], title: "Rekayasa Backend", description: "API REST, autentikasi, validasi, pemodelan data relasional, integrasi, background job, pengujian, dan logika aplikasi yang mudah dipelihara." },
      { ...expertise[2], title: "Rekayasa AI", description: "Ingesti dokumen, chunking, embedding, pencarian vektor, retrieval, reranking, integrasi LLM, serta evaluasi alur kerja RAG." },
      { ...expertise[3], title: "Infrastruktur dan Delivery", description: "Deployment aplikasi, konfigurasi server, layanan terkontainerisasi, object storage, pemeliharaan, dan penanganan masalah produksi." },
    ],
    experiences: [
      { ...experiences[0], role: "Freelance Full Stack Web Developer", period: "Desember 2024 – Sekarang", summary: "Mengembangkan dan memelihara aplikasi bisnis kustom, dari perumusan kebutuhan dan rancangan proses hingga deployment dan dukungan pascaimplementasi.", highlights: ["Membangun atau memelihara lebih dari lima website kustom.", "Mengembangkan sistem e-commerce, booking, dan manajemen internal.", "Menangani pengujian, debugging, deployment, konfigurasi server, dan pemeliharaan."] },
      { ...experiences[1], period: "September 2024 – Desember 2024", summary: "Membangun alur verifikasi dana sertifikasi dosen serta API REST yang aman dan terintegrasi dengan aplikasi mobile.", highlights: ["Memangkas waktu proses verifikasi manual lebih dari 50%.", "Melakukan pengujian integrasi API, validasi, debugging, dan analisis akar masalah.", "Men-deploy server pengembangan serta menyiapkan dokumentasi API."] },
      { ...experiences[2], period: "Juli 2024 – Desember 2024", summary: "Mengembangkan aplikasi web dan sistem manajemen klien dengan menerjemahkan kebutuhan bisnis menjadi modul, struktur data, dan integrasi.", highlights: ["Mendukung aplikasi operasional bisnis dan sistem manajemen klien.", "Berkolaborasi melalui Git dan GitHub untuk integrasi serta penyelesaian isu.", "Melakukan pengujian, deployment, pemeliharaan, dan perbaikan bertahap."] },
    ] satisfies Experience[],
    achievements: achievements.map((achievement) => ({ ...achievement, placement: achievement.placement === "3rd Place" ? "Juara III" : "Juara I" })) satisfies Achievement[],
  };
}
