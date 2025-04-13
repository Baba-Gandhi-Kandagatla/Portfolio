"use client";

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  );
}
