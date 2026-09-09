import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ian Ale Hansyah — Full Stack Developer",
    template: "%s — Ian Ale Hansyah",
  },
  description:
    "Portfolio of Ian Ale Hansyah, a Full Stack Developer specializing in backend engineering and AI-powered web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}
