import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baba Gandhi | AI/ML Engineer & Full-Stack Developer",
  description: "Innovative AI/ML Engineer and Full-Stack Developer with expertise in developing cloud-based AI applications and modern web technologies.",
  keywords: ["AI Engineer", "ML Engineer", "Full-Stack Developer", "Cloud Computing", "React", "Next.js", "Python", "TensorFlow"],
  authors: [{ name: "Baba Gandhi Kandagatla" }],
  creator: "Baba Gandhi Kandagatla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
