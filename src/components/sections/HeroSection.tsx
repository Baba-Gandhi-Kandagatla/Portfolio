"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal-info";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-10"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xl md:mr-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2 
              className="mt-4 text-2xl md:text-3xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p 
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button asChild size="lg">
                <motion.a 
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </motion.a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  Get in Touch
                </motion.a>
              </Button>
            </motion.div>

            <motion.div 
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.a 
                href={personalInfo.links.github}
                target="_blank" 
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href={personalInfo.links.linkedin}
                target="_blank" 
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image Area - Centered */}
          <motion.div
            className="flex justify-center items-center flex-1 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Decorative background elements */}
              <motion.div 
                className="absolute -z-10 w-full h-full bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl scale-110"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Animated border */}
              <motion.div 
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 opacity-70"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  filter: "blur(5px)"
                }}
              />
              
              {/* Profile image container */}
              <motion.div 
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Replace with your image path */}
                <Image 
                  src="/profile.jpg" 
                  alt="Profile"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/30 backdrop-blur-md z-20"
                animate={{ 
                  y: [0, -12, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute -bottom-6 left-6 w-8 h-8 rounded-full bg-accent/40 backdrop-blur-md z-20"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -8, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-muted-foreground mb-2">Scroll Down</span>
        <motion.div 
          className="w-1 h-8 bg-muted-foreground/30 rounded-full overflow-hidden"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div 
            className="w-full bg-primary" 
            animate={{ height: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}