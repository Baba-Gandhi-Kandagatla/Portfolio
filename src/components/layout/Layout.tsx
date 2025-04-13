"use client";

import { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useTheme } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Enable smooth scrolling
  useSmoothScroll();
  const { theme } = useTheme();
  
  // State to track mouse position for background parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Update mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth overflow-hidden relative">
      {/* Light mode animated background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-0 pointer-events-none transition-opacity duration-700">
        <motion.div 
          className="absolute top-[-30%] right-[-10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-100 to-purple-100"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div 
          className="absolute bottom-[-30%] left-[-10%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-pink-100 to-indigo-100"
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div 
          className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-yellow-100/60 to-green-100/60 blur-3xl"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </div>
      
      <Navigation />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full relative z-10"
      >
        {children}
      </motion.main>
      
      <footer className="py-8 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Baba Gandhi Kandagatla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}