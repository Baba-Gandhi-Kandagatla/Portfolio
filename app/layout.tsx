import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Baba Gandhi Kandagatla | AI/ML Engineer & Full-Stack Developer",
  description: "AI/ML Engineer and Full-Stack Developer with expertise in building scalable machine learning solutions, cloud-based AI applications, and end-to-end software deployment.",
  keywords: ["AI Engineer", "ML Engineer", "Full Stack Developer", "React", "Python", "Machine Learning"],
  authors: [{ name: "Baba Gandhi Kandagatla" }],
  openGraph: {
    title: "Baba Gandhi Kandagatla | AI/ML Engineer",
    description: "Building intelligent solutions at the intersection of AI and software engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
