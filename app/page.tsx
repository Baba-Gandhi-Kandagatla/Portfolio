"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Calendar,
  ArrowUpRight,
  ChevronDown,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
  Heart,
  Users,
  Trophy,
  FileText,
  Zap,
  ChevronLeft,
  ChevronRight,
  X,
  Lightbulb,
  Target,
  Rocket,
  Shield,
  BookOpen,
  Mic,
  Newspaper,
  Medal,
  Star,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Terminal,
  Wrench,
  Brain,
  Lock,
  ScrollText,
} from "lucide-react";
import Image from "next/image";
import { projects, Project } from "./data/projects";
import {
  personalInfo,
  skills,
  experiences,
  achievements,
  leadership,
  patents,
  publications
} from "./data/Personal_info";

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.08,
        duration: 0.6,
        ease: [0, 0, 0.2, 1] as const,
      },
    }),
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: [0, 0, 0.2, 1] as const,
      },
    },
  };

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] as const,
        delay: 0.2,
      },
    },
  };

  const name = "BABA GANDHI";
  const role = "AI/ML Engineer & Full-Stack Developer";

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--text-primary)]"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
                           linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated Name */}
        <div className="overflow-hidden mb-4">
          <div className="flex justify-center" style={{ fontFamily: "var(--font-outfit)" }}>
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${letter === " " ? "mx-2 md:mx-3" : ""
                  }`}
                style={{ color: "var(--bg-primary)" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Animated Line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="h-[2px] w-32 md:w-48 mx-auto mb-6 origin-left"
          style={{ background: "var(--gradient-warm)" }}
        />

        {/* Role Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--accent-light)]"
        >
          {role}
        </motion.p>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 flex items-center justify-center gap-1"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-[var(--accent)]"
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Corner Accents */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0, 0, 0.2, 1] }}
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[var(--accent)]"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0, 0, 0.2, 1] }}
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[var(--accent)]"
      />
    </motion.div>
  );
}

// Page Reveal Animation Wrapper
function PageReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const } },
};

// Components
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function FloatingShape({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`floating-element ${className}`}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
        delay,
      }}
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "py-6"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BG<span className="gradient-text">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-hover"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:babagandhikandagatla@gmail.com"
          className="btn-primary text-sm hidden sm:inline-flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail size={16} />
          Get in Touch
        </motion.a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [imageError, setImageError] = useState(false);

  const heroTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1] as const,
      },
    },
  };

  const nameLetterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.04,
        duration: 0.8,
        ease: [0, 0, 0.2, 1] as const,
      },
    }),
  };

  const firstName = personalInfo.name.split(" ").slice(0, 2).join(" ");
  const lastName = personalInfo.name.split(" ").slice(2).join(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <FloatingShape className="hero-shape-1" delay={0} />
      <FloatingShape className="hero-shape-2" delay={2} />

      <div className="absolute inset-0 dot-grid opacity-40" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0, 0, 0.2, 1], delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[var(--accent)]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
              />
              <motion.div
                className="absolute -inset-3 rounded-full border border-dashed border-[var(--accent)]/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
              />

              {/* Photo container */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-secondary)]">
                  {!imageError ? (
        <Image
                      src="./img/profile.jpeg"
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      onError={() => setImageError(true)}
          priority
        />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)]">
                      <span className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                        {personalInfo.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-[var(--text-secondary)]">Open to Work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex-1"
          >
            <motion.p
              variants={heroItemVariants}
              className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-4"
            >
              {personalInfo.title}
            </motion.p>

            <h1 className="text-display mb-8 pb-2">
              <span className="block" style={{ perspective: "1000px" }}>
                {firstName.split("").map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={nameLetterVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block ${letter === " " ? "mx-2" : ""}`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
              <span className="block pb-2" style={{ perspective: "1000px" }}>
                {lastName.split("").map((letter, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + firstName.length}
                    variants={nameLetterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block gradient-text"
                    style={{
                      transformStyle: "preserve-3d",
                      textShadow: "0 2px 10px rgba(196, 112, 74, 0.3)"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
          </h1>

            <motion.p
              variants={heroItemVariants}
              className="text-body max-w-xl mb-8 text-lg"
            >
              Crafting intelligent solutions at the intersection of machine learning,
              cloud architecture, and modern software engineering.
            </motion.p>

            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
                <ArrowUpRight size={18} />
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </motion.div>

            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {["Python", "TypeScript", "React", "AWS", "Machine Learning", "iOS"].map((skill, i) => (
                <motion.span
                  key={skill}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  // Calculate days of experience from July 1, 2025
  const startDate = new Date('2025-07-01');
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const experienceLabel = today >= startDate ? "Days of Experience" : "Starting Soon";
  const experienceNumber = today >= startDate ? `${diffDays}` : "🚀";

  const stats = [
    { number: "9+", label: "Projects Built" },
    { number: "3", label: "Hackathons Won" },
    { number: "2", label: "Patents & Publications" },
    { number: experienceNumber, label: experienceLabel },
  ];

  const education = personalInfo.education[0]; // Main education

  return (
    <AnimatedSection className="py-32 relative" >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider" />
              <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">About Me</span>
            </div>

            <h2 className="text-heading mb-6" id="about">
              Building the future with
              <span className="gradient-text"> AI & Code</span>
            </h2>

            <div className="space-y-4 text-body">
              <p>{personalInfo.summary}</p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Mail size={18} className="text-[var(--accent)]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[var(--accent)] transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Phone size={18} className="text-[var(--accent)]" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-[var(--accent)] transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <MapPin size={18} className="text-[var(--accent)]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="card stat-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education Card */}
            <motion.div variants={fadeInUp} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>Education</h3>
                  <p className="text-small">{education.duration}</p>
                </div>
              </div>
              <h4 className="text-lg font-medium mb-1">{education.degree}</h4>
              <p className="text-[var(--accent)] text-sm mb-2">{education.institution}</p>
              <p className="text-small">CGPA: <strong>{education.gpa}</strong></p>
              {education.courses && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {education.courses.map((course) => (
                    <span key={course} className="tag text-xs py-1 px-2">{course}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Skills() {
  // Map skill categories to icons
  const getIcon = (category: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "Programming Languages": <Code2 size={20} />,
      "Web Technologies": <Globe size={20} />,
      "Mobile Development": <Smartphone size={20} />,
      "Identity & Authentication": <Lock size={20} />,
      "Data Science & ML": <Brain size={20} />,
      "Cloud & DevOps": <Cloud size={20} />,
      "Databases": <Database size={20} />,
      "Tools": <Wrench size={20} />,
    };
    return iconMap[category] || <Code2 size={20} />;
  };

  return (
    <AnimatedSection className="py-32 bg-[var(--bg-secondary)] relative">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider" />
            <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">Expertise</span>
            <div className="divider" />
          </div>
          <h2 className="text-heading">Technical Skills</h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, cloud infrastructure, and mobile development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              variants={fadeInUp}
              custom={index}
              className="card p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4 text-[var(--accent)]">
                {getIcon(category.category)}
        </div>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.slice(0, 8).map((skill) => (
                  <span key={skill} className="tag text-xs py-1 px-2">
                    {skill}
                  </span>
                ))}
                {category.items.length > 8 && (
                  <span className="tag text-xs py-1 px-2 bg-[var(--accent)]/10 text-[var(--accent)]">
                    +{category.items.length - 8} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Experience() {
  const experience = experiences[0]; // Main experience
  const education = personalInfo.education;

  // Parse experience description into bullet points
  const bulletPoints = experience.description.split("•").filter(point => point.trim());

  return (
    <AnimatedSection className="py-32" >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="divider" />
            <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">Experience</span>
          </div>
          <h2 className="text-heading" id="experience">My Journey</h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="relative pl-8">
          <div className="timeline-line" />

          {/* Work Experience */}
          <div className="relative pb-8">
            <div className="timeline-dot top-2" />
            <div className="card p-8 ml-4">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-subheading">{experience.title}</h3>
                  <p className="text-[var(--accent)] font-medium">{experience.organization}</p>
                  <p className="text-small">Identity Team (Privacy & Attendee Mobile App)</p>
                </div>
                <div className="flex items-center gap-2 text-small bg-[var(--bg-secondary)] px-3 py-1.5 rounded-full">
                  <Calendar size={14} />
                  {experience.duration}
                </div>
              </div>

              <ul className="space-y-3 text-body">
                {bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[var(--accent)] mt-1.5 flex-shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{
                      __html: point.trim()
                        .replace(/(\d+\+?)/g, '<strong>$1</strong>')
                        .replace(/(over \d+%)/gi, '<strong>$1</strong>')
                    }} />
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "iOS", "Swift", "AWS CDK", "Auth0", "E2E Testing", "CloudWatch", "Python"].map((tech) => (
                  <span key={tech} className="tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          {education.map((edu, index) => (
            <div key={index} className={`relative ${index < education.length - 1 ? 'pb-8' : ''}`}>
              <div className="timeline-dot top-2" />
              <div className={`card p-6 ml-4 ${index > 0 ? 'border-dashed' : ''}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>{edu.degree}</h3>
                    <p className="text-[var(--accent)] font-medium text-sm">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-small bg-[var(--bg-secondary)] px-3 py-1.5 rounded-full">
                    <GraduationCap size={14} />
                    {edu.duration}
                  </div>
                </div>
                <p className="text-body">
                  {edu.gpa.includes('/') ? 'CGPA' : 'Score'}: <strong>{edu.gpa}</strong>
                </p>
                {edu.courses && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span key={course} className="tag text-xs py-1 px-2">{course}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Project Image Carousel Component
function ProjectCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative group rounded-xl overflow-hidden bg-[var(--bg-secondary)]">
      <div className="aspect-video relative">
        {!imageError[currentIndex] ? (
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500"
            onError={() => setImageError((prev) => ({ ...prev, [currentIndex]: true }))}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[var(--bg-secondary)]">
            <Code2 size={48} className="text-[var(--accent)] opacity-50" />
          </div>
        )}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} className="text-[var(--text-primary)]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight size={20} className="text-[var(--text-primary)]" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.slice(0, 8).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
            {images.length > 8 && (
              <span className="text-white text-xs ml-1">+{images.length - 8}</span>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Project Modal Component
function ProjectModal({
  project,
  isOpen,
  onClose
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg-card)] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Image Carousel */}
            {project.images && project.images.length > 0 && (
              <div className="p-6 pb-0">
                <ProjectCarousel images={project.images} alt={project.imageAlt} />
              </div>
            )}

            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-heading mb-4">{project.title}</h2>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 rounded-xl bg-[var(--bg-secondary)]">
                  <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                    <Lightbulb size={18} />
                    <span className="text-sm font-semibold uppercase tracking-wider">Idea</span>
                  </div>
                  <p className="text-small">{project.idea}</p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-secondary)]">
                  <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                    <Sparkles size={18} />
                    <span className="text-sm font-semibold uppercase tracking-wider">Innovation</span>
                  </div>
                  <p className="text-small">{project.innovation}</p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-secondary)]">
                  <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                    <Target size={18} />
                    <span className="text-sm font-semibold uppercase tracking-wider">Impact</span>
                  </div>
                  <p className="text-small">{project.impact}</p>
                </div>
              </div>

              {/* Actions */}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Project Card Component
function ProjectCard({
  project,
  index,
  onClick
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const [imageError, setImageError] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card project-card overflow-hidden cursor-pointer group"
      onClick={onClick}
      whileHover={{ y: -8 }}
    >
      {/* Image Preview */}
      <div className="relative aspect-video overflow-hidden">
        {!imageError ? (
            <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[var(--bg-secondary)]">
            <Code2 size={48} className="text-[var(--accent)] opacity-50" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-white text-sm font-medium">View Details</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight size={16} className="text-white" />
            </div>
          </div>
        </div>

        {/* Image Count Badge */}
        {project.images && project.images.length > 1 && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 text-white text-xs">
            {project.images.length} images
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-subheading mb-2 group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-small line-clamp-2 mb-4">{project.idea}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="tag text-xs py-1 px-2">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tag text-xs py-1 px-2">+{project.techStack.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "AI/ML", "Web", "Mobile"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => {
      if (filter === "AI/ML") return p.techStack.some(t =>
        ["AI", "Machine Learning", "Deep Learning", "Flask", "Random Forest", "EfficientNet", "U-Net", "Transformers"].some(ai => t.includes(ai))
      );
      if (filter === "Web") return p.techStack.some(t =>
        ["React", "MERN", "Node", "Flask", "Express", "FastAPI"].some(web => t.includes(web))
      );
      if (filter === "Mobile") return p.techStack.some(t =>
        ["Flutter", "Dart", "React Native"].some(mobile => t.includes(mobile))
      );
      return true;
    });

  return (
    <>
      <AnimatedSection className="py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="divider" />
              <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">Portfolio</span>
              <div className="divider" />
            </div>
            <h2 className="text-heading mb-4" id="projects">Featured Projects</h2>
            <p className="text-body max-w-xl mx-auto">
              A collection of projects showcasing my expertise in AI/ML, web development, and software engineering.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                  ? "bg-[var(--text-primary)] text-white"
                  : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--border)] border border-[var(--border)]"
                  }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--text-muted)]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

function Achievements() {
  // Get icon based on achievement type
  const getIcon = (id: string) => {
    if (id.includes("hackathon")) return <Trophy size={24} />;
    if (id.includes("recognition") || id.includes("utkrishti")) return <Award size={24} />;
    if (id.includes("media")) return <Newspaper size={24} />;
    if (id.includes("community")) return <Heart size={24} />;
    if (id.includes("olympiad")) return <Medal size={24} />;
    return <Star size={24} />;
  };

  // Group achievements by type
  const hackathons = achievements.filter(a => a.id.includes("hackathon"));
  const recognitions = achievements.filter(a =>
    a.id.includes("recognition") || a.id.includes("utkrishti")
  );
  const community = achievements.filter(a =>
    a.id.includes("community") || a.id.includes("media")
  );
  const others = achievements.filter(a =>
    !a.id.includes("hackathon") &&
    !a.id.includes("recognition") &&
    !a.id.includes("utkrishti") &&
    !a.id.includes("community") &&
    !a.id.includes("media")
  );

  const featuredAchievements = [
    ...hackathons.slice(0, 4),
    ...recognitions,
    ...community,
    ...others
  ].slice(0, 9);

  return (
    <AnimatedSection className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="divider" />
            <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">Recognition</span>
          </div>
          <h2 className="text-heading" id="achievements">Achievements & Awards</h2>
          <p className="text-body mt-4 max-w-2xl">
            A collection of hackathon wins, academic recognitions, and community service awards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={fadeInUp}
              custom={index}
              className="card p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                  {getIcon(achievement.id)}
                </div>
                <span className="text-xs text-[var(--text-muted)] bg-[var(--bg-secondary)] px-2 py-1 rounded-full">
                  {achievement.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                {achievement.title}
              </h3>
              <p className="text-small">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Publications() {
  const publication = publications[0];

  if (!publication) return null;

  return (
    <AnimatedSection className="py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider" />
            <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">Research</span>
            <div className="divider" />
          </div>
          <h2 className="text-heading">IEEE Publication</h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="card p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-wrap items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
              <FileText size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                  {publication.status}
                </span>
                <span className="text-small">{publication.conference}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                {publication.title}
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-[var(--bg-secondary)]">
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Paper ID</p>
              <p className="text-sm font-medium">{publication.paperId}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Presented</p>
              <p className="text-sm font-medium">{publication.date}</p>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-3">Abstract</h4>
            <p className="text-body leading-relaxed text-sm">{publication.abstract}</p>
          </div>

          {/* Certificate Image */}
          {publication.certificateImage && (
            <div className="pt-6 border-t border-[var(--border)]">
              <h4 className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
                <Award size={16} />
                Presentation Certificate
              </h4>
              <div className="relative rounded-xl overflow-hidden border border-[var(--border)] shadow-lg">
                <Image
                  src={publication.certificateImage}
                  alt="IEEE ETCOM 2025 Presentation Certificate"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function Patents() {
  const patent = patents[0];

  if (!patent) return null;

  return (
    <AnimatedSection className="py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider" />
            <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">Intellectual Property</span>
            <div className="divider" />
          </div>
          <h2 className="text-heading">Published Patent</h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="card p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-wrap items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center flex-shrink-0">
              <ScrollText size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  {patent.status}
                </span>
                <span className="text-small">{patent.applicationAuthority}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
                {patent.title}
              </h3>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 rounded-xl bg-[var(--bg-secondary)]">
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Application No.</p>
              <p className="text-sm font-medium">{patent.applicationNumber}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Publication No.</p>
              <p className="text-sm font-medium">{patent.publicationNumber}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Filing Date</p>
              <p className="text-sm font-medium">{patent.filingDate}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Publication Date</p>
              <p className="text-sm font-medium">{patent.publicationDate}</p>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-3">Abstract</h4>
            <p className="text-body leading-relaxed">{patent.abstract}</p>
          </div>

          {/* Inventors */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-3">Inventors</h4>
            <div className="flex flex-wrap gap-2">
              {patent.inventors.map((inventor, i) => (
                <span
                  key={i}
                  className={`tag ${inventor.includes("BABA GANDHI") ? "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]" : ""}`}
                >
                  {inventor.replace("Mr. ", "").replace("Ms. ", "")}
                </span>
              ))}
            </div>
          </div>

          {/* Applicant */}
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <p className="text-small">
              <span className="text-[var(--text-muted)]">Applicant:</span>{" "}
              <span className="font-medium">{patent.applicant}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function Leadership() {
  const getIcon = (id: string) => {
    if (id.includes("streetcause") || id.includes("community")) return <Users size={24} />;
    if (id.includes("speaking") || id.includes("public")) return <Mic size={24} />;
    return <Heart size={24} />;
  };

  return (
    <AnimatedSection className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider" />
            <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">Beyond Code</span>
            <div className="divider" />
          </div>
          <h2 className="text-heading">Leadership & Community</h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Making an impact beyond technology through mentorship, public speaking, and community service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              custom={index}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center flex-shrink-0">
                  {getIcon(item.id)}
                  <span className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>
                    {item.title}
                  </h3>
                  <p className="text-small text-[var(--accent)]">{item.organization}</p>
                </div>
              </div>
              <p className="text-body mb-4">{item.description}</p>
              <div className="flex items-center gap-2 text-small text-[var(--text-muted)]">
                <Calendar size={14} />
                {item.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Contact() {
  return (
    <AnimatedSection className="py-32 relative overflow-hidden bg-[var(--bg-secondary)]">
      <FloatingShape className="hero-shape-1 opacity-20" delay={1} />
      <FloatingShape className="hero-shape-2 opacity-10" delay={3} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-heading mb-6" id="contact">Let&apos;s Work Together</h2>
          <p className="text-body text-lg mb-12 max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. Feel free to reach out!
          </p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="btn-secondary inline-flex items-center gap-2">
              <Phone size={18} />
              {personalInfo.phone}
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center gap-6">
            <a
              href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 inline-flex items-center gap-2 text-[var(--text-muted)]"
          >
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </motion.div>
        </motion.div>
        </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-small">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Framer Motion.
          </p>
          <div className="flex items-center gap-2 text-small">
            <MapPin size={14} />
            <span>{personalInfo.location}</span>
    </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <PageReveal>
            <main className="relative">
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Achievements />
              <Publications />
              <Patents />
              <Leadership />
              <Contact />
              <Footer />
            </main>
          </PageReveal>
        )}
      </AnimatePresence>
    </>
  );
}
