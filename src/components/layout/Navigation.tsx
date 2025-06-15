"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/theme-toggle";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/90 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Baba Gandhi
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </nav>        {/* Theme Toggle, Resume Button and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Resume Download Button for Desktop */}
          <motion.a
            href="./resume.pdf"
            download="Baba_Gandhi_Kandagatla_Resume.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-full transition-all duration-300 text-sm font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 4px 20px rgba(59, 130, 246, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, -1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Download className="h-4 w-4" />
            </motion.div>
            Resume
          </motion.a>
          
          <ThemeToggle />
          
          <motion.button
            className="md:hidden p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md shadow-lg"
          >            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-md hover:bg-muted hover:text-primary transition-colors"
                  whileHover={{ 
                    x: 5,
                    textShadow: "0 0 8px rgb(var(--primary) / 0.3)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Resume Download Button */}
              <motion.a
                href="./resume.pdf"
                download="Baba_Gandhi_Kandagatla_Resume.pdf"
                className="flex items-center gap-3 px-4 py-3 mx-2 mt-4 bg-primary/10 text-primary border border-primary/30 rounded-lg transition-all duration-300 font-medium"
                whileHover={{ 
                  x: 5,
                  backgroundColor: "rgb(var(--primary) / 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  animate={{ y: [0, -1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Download className="h-5 w-5" />
                </motion.div>
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ item }: { item: NavItem }) {
  return (
    <motion.a
      href={item.href}
      className="relative px-2 py-1 text-foreground/80 hover:text-primary transition-colors"
      whileHover={{ 
        scale: 1.05, 
        textShadow: "0 0 8px rgb(var(--primary) / 0.3)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{item.name}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}