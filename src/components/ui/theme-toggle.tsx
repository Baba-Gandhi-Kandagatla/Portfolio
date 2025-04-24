"use client";

import { useState } from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const isDark = theme === "dark";

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Generate random sparkle positions for the light mode button
  const sparkles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 60 - 30,
    y: Math.random() * 60 - 30,
    scale: 0.5 + Math.random() * 0.5,
    delay: i * 0.1
  }));

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
        isDark 
          ? "bg-muted/50 hover:bg-muted"
          : "bg-gradient-to-r from-blue-100 to-purple-200 hover:from-blue-200 hover:to-purple-300 shadow-md hover:shadow-lg"
      }`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sparkling effect for light mode button */}
      {!isDark && isHovering && sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, sparkle.scale, 0],
            x: [0, sparkle.x, sparkle.x * 1.5],
            y: [0, sparkle.y, sparkle.y * 1.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: sparkle.delay
          }}
          className="absolute pointer-events-none"
        >
          <Sparkles className="w-3 h-3 text-yellow-400" />
        </motion.div>
      ))}
      
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 0 : 180,
          scale: isHovering ? 1.2 : 1
        }}
        transition={{ 
          duration: 0.3,
          type: "spring", 
          stiffness: 200, 
          damping: 15
        }}
        className={isDark ? "" : "text-primary-foreground"}
      >
        {isDark ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </motion.div>
      
      {/* Glowing ring effect */}
      {!isDark && (
        <motion.div
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ 
            opacity: isHovering ? [0.3, 0.5, 0.3] : 0.3,
            scale: isHovering ? [1, 1.2, 1] : 1
          }}
          transition={{
            duration: 2,
            repeat: isHovering ? Infinity : 0,
            repeatType: "reverse"
          }}
          className="absolute inset-0 rounded-full bg-accent/20 -z-10 blur-sm"
        />
      )}
    </motion.button>
  );
}