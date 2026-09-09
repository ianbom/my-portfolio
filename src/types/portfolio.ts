export type ProjectCategory = "Full Stack" | "Backend" | "AI" | "Healthcare" | "Education" | "E-Commerce" | "Marketplace" | "Civic Tech" | "Mobile";

export type ProjectSection = {
  title: string;
  description?: string;
  items?: string[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  categories: ProjectCategory[];
  featured: boolean;
  priority: number;
  technologies: string[];
  thumbnail: string;
  images: { url: string; alt: string; caption?: string }[];
  problem?: ProjectSection;
  goals?: ProjectSection;
  features?: ProjectSection;
  impact?: ProjectSection;
  architecture?: ProjectSection;
  capabilityAreas?: ProjectSection[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type Achievement = {
  placement: string;
  competition: string;
  organizer: string;
  year: number;
  certificateFile: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfFile: string;
  score?: string;
};
