export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "msib-batch-7",
    src: "/galery/Msib.jpg",
    alt: "Ian Ale Hansyah with fellow MSIB Batch 7 participants",
    width: 6000,
    height: 3376,
    category: "Internship",
    title: "MSIB Batch 7 Program",
    date: "September – December 2024",
    location: "LLDIKTI Region VII, Surabaya",
    description: "A closing moment from the certified internship program after presenting the lecturer-certification fund verification system developed during the placement.",
  },
  {
    id: "kmipn-e-government",
    src: "/galery/foto kmipn.png",
    alt: "Ian Ale Hansyah presenting at the KMIPN E-Government competition",
    width: 681,
    height: 588,
    category: "Competition",
    title: "KMIPN E-Government",
    date: "2025",
    location: "National Competition",
    description: "Third-place achievement in the E-Government category of the National Polytechnic Informatics Student Competition.",
  },
  {
    id: "msib-opening-ceremony",
    src: "/galery/foto opening msib.jpeg",
    alt: "MSIB Batch 7 opening ceremony participants",
    width: 1500,
    height: 844,
    category: "Event",
    title: "Opening Ceremony MSIB",
    date: "September 2024",
    location: "Surabaya",
    description: "The opening of the MSIB Batch 7 certified internship program with participants and mentors from participating institutions.",
  },
  {
    id: "d3-graduation",
    src: "/galery/foto wisuda.jpeg",
    alt: "Ian Ale Hansyah at his Informatics Engineering graduation",
    width: 1560,
    height: 1040,
    category: "Milestone",
    title: "D3 Informatics Engineering Graduation",
    date: "2024",
    location: "PENS, Surabaya",
    description: "Graduation from the D3 Informatics Engineering program at Politeknik Elektronika Negeri Surabaya.",
  },
  {
    id: "final-project-competition",
    src: "/galery/IMG_8417.jpg",
    alt: "Ian Ale Hansyah participating in a final project competition at PENS",
    width: 4032,
    height: 2268,
    category: "Event",
    title: "Final Project Competition",
    date: "2024",
    location: "PENS, Surabaya",
    description: "An annual PENS event showcasing student final projects and their applied technical work.",
  },
];
