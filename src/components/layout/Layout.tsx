"use client";

import { ReactNode, useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useTheme } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

// Define fixed shape configurations to ensure consistent server/client rendering
const initialShapes = [
  {
    id: 0,
    size: 60,
    x: 90,
    y: 10,
    opacity: 0.5,
    color: 'primary',
    shape: 'circle'
  },
  {
    id: 1,
    size: 48,
    x: 75,
    y: 30,
    opacity: 0.15,
    color: 'accent',
    shape: 'triangle'
  },
  {
    id: 2,
    size: 30,
    x: 70,
    y: 10,
    opacity: 0.7,
    color: 'secondary',
    shape: 'square'
  },
  {
    id: 3,
    size: 35,
    x: 35,
    y: 75,
    opacity: 0.15,
    color: 'primary',
    shape: 'blob',
    path: "M20,10 L25,15 L20,20 L15,15 Z" // Simple fixed path
  },
  {
    id: 4,
    size: 40,
    x: 90,
    y: 20,
    opacity: 0.6,
    color: 'accent',
    shape: 'circle'
  },
  {
    id: 5,
    size: 45,
    x: 10,
    y: 80,
    opacity: 0.12,
    color: 'secondary',
    shape: 'triangle'
  }
];

// Define blob properties for the mesh gradient
const blobColors = [
  "rgba(147, 51, 234, 0.35)",  // Purple
  "rgba(59, 130, 246, 0.35)",   // Blue
  "rgba(236, 72, 153, 0.35)",   // Pink
  "rgba(16, 185, 129, 0.35)",   // Green
  "rgba(245, 158, 11, 0.35)"    // Amber
];

export default function Layout({ children }: LayoutProps) {
  // Enable smooth scrolling
  useSmoothScroll();
  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State to track mouse position for background parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [interactiveDot, setInteractiveDot] = useState({ x: 0, y: 0, size: 300 });
  
  // State for floating shapes with fixed initial values for SSR
  const [floatingShapes, setFloatingShapes] = useState(initialShapes);
  
  // State to track if the component has been hydrated
  const [isHydrated, setIsHydrated] = useState(false);

  // Create mesh blobs for the background
  const meshBlobs = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      color: blobColors[i % blobColors.length],
      size: `${300 + (i * 50)}px`,
      x1: `${10 + (i * 15)}%`,
      y1: `${20 + (i * 10)}%`,
      x2: `${50 - (i * 10)}%`,
      y2: `${60 - (i * 5)}%`,
      duration: `${20 + (i * 5)}s`,
      delay: `${i * 3}s`,
      opacity: 0.6 - (i * 0.05)
    }));
  }, []);

  // Create floating blobs 
  const floatingBlobs = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => ({
      id: i,
      color: blobColors[i % blobColors.length],
      i: i + 1,
      txStart: `${i * 10}%`,
      tyStart: `${i * 5}%`,
      txMid: `${30 + (i * 10)}%`,
      tyMid: `${20 + (i * 15)}%`,
      txEnd: `${50 + (i * 10)}%`,
      tyEnd: `${40 + (i * 5)}%`,
      rotation: `${i * 45}deg`,
      scaleStart: 1,
      scaleMid: 1.2 + (i * 0.1),
      scaleEnd: 0.8 + (i * 0.1),
      size: 200 + (i * 50),
      opacity: 0.4 - (i * 0.05)
    }));
  }, []);
  
  // Update mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
      
      // Update interactive dot position
      setInteractiveDot({
        x: e.clientX,
        y: e.clientY,
        size: 300 + (Math.sin(Date.now() / 1000) * 50)
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Create particles for the rising bubble effect
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  }>>([]);

  // After hydration, we can safely generate random values
  useEffect(() => {
    setIsHydrated(true);
    
    // After hydration, we can safely update with random values 
    const randomizedShapes = initialShapes.map((shape) => ({
      ...shape,
      size: 20 + Math.random() * 80,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.5 + Math.random() * 0.3,
      path: shape.shape === 'blob' ? generateBlobPath(shape.size) : shape.path
    }));
    
    setFloatingShapes(randomizedShapes);

    // Generate particles for rising animation
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 5 + Math.random() * 15,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.3
    }));
    
    setParticles(newParticles);
  }, []);
  
  // Generate SVG path for blob shapes
  const generateBlobPath = (size: number) => {
    const radius = size / 2;
    const points = 6;
    const angleStep = (Math.PI * 2) / points;
    let path = `M${radius + 5},${radius}`;
    
    for (let i = 1; i <= points; i++) {
      const angle = i * angleStep;
      const distance = radius * (0.7 + 0.3 * (i % 3 === 0 ? 0.7 : 0.9));
      path += ` L${radius + Math.cos(angle) * distance},${radius + Math.sin(angle) * distance}`;
    }
    
    return path + " Z";
  };
  
  const isDark = theme === 'dark';
  
  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground scroll-smooth overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-70 dark:opacity-30 pointer-events-none"></div>
      
      {/* Mesh gradient background */}
      <div className="mesh-gradient dark:opacity-30">
        {meshBlobs.map((blob) => (
          <div
            key={blob.id}
            style={{
              background: blob.color,
              '--size': blob.size,
              '--x1': blob.x1,
              '--y1': blob.y1,
              '--x2': blob.x2,
              '--y2': blob.y2,
              '--duration': blob.duration,
              '--delay': blob.delay,
              '--opacity': blob.opacity,
              left: '30%',
              top: '30%'
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      {/* Floating blobs */}
      {!isDark && floatingBlobs.map((blob) => (
        <div
          key={blob.id}
          className="blob"
          style={{
            background: blob.color,
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            borderRadius: '50%',
            left: '30%',
            top: '30%',
            '--i': blob.i,
            '--tx-start': blob.txStart,
            '--ty-start': blob.tyStart,
            '--tx-mid': blob.txMid,
            '--ty-mid': blob.tyMid,
            '--tx-end': blob.txEnd,
            '--ty-end': blob.tyEnd,
            '--rotation': blob.rotation,
            '--scale-start': blob.scaleStart,
            '--scale-mid': blob.scaleMid,
            '--scale-end': blob.scaleEnd,
            opacity: blob.opacity,
          } as React.CSSProperties}
        />
      ))}
      
      {/* Particles animation */}
      <div className="particle-container">
        {!isDark && particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              bottom: '-50px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              '--duration': `${particle.duration}s`,
              '--opacity': particle.opacity,
              animationDelay: `${particle.delay}s`
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      {/* Wave animation at the bottom */}
      {!isDark && (
        <>
          <div className="wave-animation"></div>
          <div className="wave-animation"></div>
          <div className="wave-animation"></div>
        </>
      )}
      
      {/* Interactive background dot that follows cursor */}
      <div
        className="interactive-dot dark:opacity-20"
        style={{
          left: interactiveDot.x + 'px',
          top: interactiveDot.y + 'px',
          width: interactiveDot.size + 'px',
          height: interactiveDot.size + 'px',
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
      
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape) => {
          // Render different shapes based on shape property
          const renderShape = () => {
            if (shape.shape === 'circle') {
              return (
                <div
                  className={`absolute rounded-full bg-${shape.color}/20 backdrop-blur-sm floating-shape light-mode-accent`}
                  style={{
                    width: shape.size + 'px',
                    height: shape.size + 'px',
                    left: `${shape.x}%`,
                    top: `${shape.y}%`,
                    opacity: shape.opacity
                  }}
                />
              );
            } else if (shape.shape === 'square') {
              return (
                <div
                  className={`absolute bg-${shape.color}/20 backdrop-blur-sm floating-shape rotate-45`}
                  style={{
                    width: shape.size + 'px',
                    height: shape.size + 'px',
                    left: `${shape.x}%`,
                    top: `${shape.y}%`,
                    opacity: shape.opacity
                  }}
                />
              );
            } else if (shape.shape === 'triangle') {
              return (
                <div 
                  className={`absolute w-0 h-0 floating-shape`}
                  style={{
                    borderLeft: `${shape.size/2}px solid transparent`,
                    borderRight: `${shape.size/2}px solid transparent`,
                    borderBottom: `${shape.size}px solid var(--${shape.color})`,
                    left: `${shape.x}%`,
                    top: `${shape.y}%`,
                    opacity: shape.opacity * 0.2
                  }}
                />
              );
            } else {
              // Blob shape with SVG
              return (
                <svg
                  className="absolute floating-shape"
                  width={shape.size}
                  height={shape.size}
                  viewBox={`0 0 ${shape.size} ${shape.size}`}
                  style={{
                    left: `${shape.x}%`,
                    top: `${shape.y}%`,
                    opacity: shape.opacity * 0.2
                  }}
                >
                  <path
                    d={shape.path || `M${shape.size/2},${shape.size/2} L${shape.size},${shape.size/2} L${shape.size/2},${shape.size} Z`}
                    fill={`var(--${shape.color})`}
                  />
                </svg>
              );
            }
          };
          
          return (
            <motion.div
              key={shape.id}
              initial={{
                opacity: 0,
                scale: 0
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x * -5 * (shape.id % 3 + 1),
                y: mousePosition.y * -5 * (shape.id % 3 + 1)
              }}
              transition={{
                duration: 1,
                delay: shape.id * 0.1
              }}
            >
              {renderShape()}
            </motion.div>
          );
        })}
      </div>
      
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
      
      <footer className="py-8 bg-muted/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Baba Gandhi Kandagatla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}