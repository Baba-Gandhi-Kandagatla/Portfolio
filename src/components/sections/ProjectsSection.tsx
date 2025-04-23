"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, X, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle,
  DialogHeader,
  DialogDescription
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ImagePlaceholder from "@/components/ui/image-placeholder";
import { Project, projects } from "@/data/projects";
import { hoverVariants } from "@/lib/animations";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle image carousel navigation
  const nextImage = () => {
    if (selectedProject) {
      const maxIndex = selectedProject.images && selectedProject.images.length > 0 
        ? selectedProject.images.length - 1 
        : 2;
      
      setCurrentImageIndex((prev) => 
        prev === maxIndex ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const maxIndex = selectedProject.images && selectedProject.images.length > 0 
        ? selectedProject.images.length - 1 
        : 2;
      
      setCurrentImageIndex((prev) => 
        prev === 0 ? maxIndex : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a showcase of my best work - from AI applications to web platforms and mobile solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DialogContent className="max-w-xl sm:max-w-md md:max-w-xl w-[95%] max-h-[90vh] overflow-hidden">
              <DialogHeader className="pb-2">
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-accent">Project Details</DialogDescription>
              </DialogHeader>
              
              <ScrollArea className="max-h-[calc(90vh-10rem)] pr-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Carousel with enhanced animations */}
                  <div className="relative overflow-hidden rounded-lg mb-4 group">
                    <div 
                      className="relative overflow-hidden rounded-lg aspect-video"
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { 
                              duration: 0.4,
                              ease: "easeOut"
                            }
                          }}
                          exit={{ 
                            opacity: 0, 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                          className="absolute inset-0"
                        >
                          {selectedProject.images && selectedProject.images[currentImageIndex] ? (
                            // Use actual image if available with hover zoom effect
                            <motion.div
                              className="w-full h-full"
                              whileHover={{ scale: 1.03 }}
                              transition={{ duration: 0.5 }}
                            >
                              <img 
                                src={selectedProject.images[currentImageIndex]}
                                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ) : (
                            // Fall back to color placeholder with hover effect
                            <motion.div
                              className="w-full h-full" 
                              whileHover={{ scale: 1.03 }}
                              transition={{ duration: 0.5 }}
                            >
                              <ImagePlaceholder
                                title={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                bgColor={
                                  currentImageIndex === 0 
                                    ? selectedProject.bgColor
                                    : currentImageIndex === 1 
                                      ? `bg-${selectedProject.bgColor.split('-')[1]}-500`
                                      : `bg-${selectedProject.bgColor.split('-')[1]}-800`
                                }
                                className="w-full h-full"
                              />
                            </motion.div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Enhanced navigation buttons */}
                      <motion.button 
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </motion.button>
                      <motion.button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </motion.button>
                      
                      {/* Improved image indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-3">
                        {(selectedProject.images && selectedProject.images.length > 0 
                          ? [...Array(selectedProject.images.length)]
                          : [0, 1, 2]
                        ).map((_, idx) => (
                          <motion.button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                              currentImageIndex === idx
                                ? "bg-primary w-4"
                                : "bg-muted-foreground/30"
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`View image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div className="p-4 pt-2 space-y-6">
                    <motion.div 
                      className="mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-1.5">The Idea</h4>
                      <p className="text-muted-foreground text-sm">{selectedProject.idea}</p>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-1.5">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 + (index * 0.05), duration: 0.3 }}
                          >
                            <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-colors">{tech}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-1.5">Innovation</h4>
                      <p className="text-muted-foreground text-sm">{selectedProject.innovation}</p>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-1.5">Impact</h4>
                      <p className="text-muted-foreground text-sm">{selectedProject.impact}</p>
                    </motion.div>

                    {selectedProject.projectUrl && (
                      <motion.div 
                        className="mt-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                      >
                        <motion.a 
                          href={selectedProject.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:text-primary/80 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span>Visit Project</span>
                          <motion.div
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </motion.div>
                        </motion.a>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const [hoverImageIndex, setHoverImageIndex] = useState(0);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // These values track which image to display when hovering
  const [isHovering, setIsHovering] = useState(false);
  const [currentHoverIndex, setCurrentHoverIndex] = useState(0);
  // State to track when card is clicked for animations
  const [isClicked, setIsClicked] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    // Start cycling through images when hovering
    hoverTimerRef.current = setInterval(() => {
      setCurrentHoverIndex(prev => (prev + 1) % 3);
    }, 1200);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (hoverTimerRef.current) {
      clearInterval(hoverTimerRef.current);
      setCurrentHoverIndex(0);
    }
  };
  
  const handleClick = () => {
    // Set clicked state to trigger animation
    setIsClicked(true);
    
    // Short delay to allow animation to show before opening dialog
    setTimeout(() => {
      onClick();
      // Reset clicked state after animation completes
      setTimeout(() => setIsClicked(false), 300);
    }, 150);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={hoverVariants.lift.hover}
      whileTap={hoverVariants.lift.tap}
      animate={isClicked ? {
        scale: 0.97,
        y: 0,
        boxShadow: "0 5px 15px rgba(var(--primary) / 0.3)",
        transition: { duration: 0.15 }
      } : {}}
      className="h-full"
    >
      <Card 
        className="overflow-hidden h-full border cursor-pointer group transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-48 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={isHovering ? currentHoverIndex : 0}
              initial={{ opacity: 0, scale: isHovering ? 1 : 1.02 }}
              animate={{ 
                opacity: 1, 
                scale: isClicked ? 1.05 : (isHovering ? 1.1 : 1),
                transition: { duration: isClicked ? 0.15 : 0.5 }
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <ImagePlaceholder
                title={`${project.title} - Preview ${isHovering ? currentHoverIndex + 1 : 1}`}
                bgColor={
                  isHovering ? 
                    (currentHoverIndex === 0 
                      ? project.bgColor
                      : currentHoverIndex === 1 
                        ? `bg-${project.bgColor.split('-')[1]}-500`
                        : `bg-${project.bgColor.split('-')[1]}-800`)
                    : project.bgColor
                }
                className="w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Small dots to indicate multiple images */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`h-1.5 w-1.5 rounded-full ${
                  (isHovering && currentHoverIndex === idx)
                    ? "bg-primary"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
        <CardHeader className="p-6 pb-4">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.idea}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <motion.div key={tech} whileHover={hoverVariants.badge.hover}>
                <Badge variant="secondary" className="text-xs hover:bg-primary/10 transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 border-t bg-muted/10">
          <div className="flex items-center text-sm text-muted-foreground w-full justify-between">
            <span>View Details</span>
            <motion.div
              initial={{ x: 0 }}
              animate={isClicked ? { x: 10, transition: { duration: 0.15 } } : {}}
              whileHover={{ x: 5 }}
              className="group-hover:text-primary transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}