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
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ImagePlaceholder from "@/components/ui/image-placeholder";
import { Project, projects } from "@/data/projects";
import { hoverVariants } from "@/lib/animations";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dialog carousel navigation
  const nextImage = () => {
    if (!selectedProject) return;
    const maxIdx =
      selectedProject.images && selectedProject.images.length > 0
        ? selectedProject.images.length - 1
        : 2;
    setCurrentImageIndex((p) => (p === maxIdx ? 0 : p + 1));
  };

  const prevImage = () => {
    if (!selectedProject) return;
    const maxIdx =
      selectedProject.images && selectedProject.images.length > 0
        ? selectedProject.images.length - 1
        : 2;
    setCurrentImageIndex((p) => (p === 0 ? maxIdx : p - 1));
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a showcase of my best work — from AI applications to web
            platforms and mobile solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            />
          ))}
        </div>
      </div>

      {/* ===== Project-detail dialog ===== */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={(open) => !open && setSelectedProject(null)}
          >
            <DialogContent className="max-w-xl sm:max-w-md md:max-w-xl w-[95%] max-h-[90vh] overflow-hidden">
              <DialogHeader className="pb-2">
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Project Details
                </DialogDescription>
              </DialogHeader>

              <ScrollArea className="max-h-[calc(90vh-10rem)] pr-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* ------- carousel ------- */}
                  <div className="relative overflow-hidden rounded-lg mb-4 group">
                    <div className="relative overflow-hidden rounded-lg aspect-video">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.4, ease: "easeOut" },
                          }}
                          exit={{
                            opacity: 0,
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-0"
                        >
                          {selectedProject.images &&
                          selectedProject.images[currentImageIndex] ? (
                            <motion.img
                              src={
                                selectedProject.images[currentImageIndex] ??
                                selectedProject.imageUrl
                              }
                              alt={`${selectedProject.imageAlt} (Preview ${
                                currentImageIndex + 1
                              })`}
                              className="w-full h-full object-contain bg-white/5 backdrop-blur-sm p-2"
                            />
                          ) : (
                            <ImagePlaceholder
                              title={`${selectedProject.title} – Image ${
                                currentImageIndex + 1
                              }`}
                              bgColor={
                                currentImageIndex === 0
                                  ? selectedProject.bgColor
                                  : currentImageIndex === 1
                                  ? `bg-${selectedProject.bgColor.split("-")[1]}-500`
                                  : `bg-${
                                      selectedProject.bgColor.split("-")[1]
                                    }-800`
                              }
                              className="w-full h-full"
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* nav buttons */}
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

                      {/* dots */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-3">
                        {(selectedProject.images &&
                        selectedProject.images.length > 0
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

                  {/* -------- meta / copy -------- */}
                  <motion.div className="p-4 pt-2 space-y-6">
                    {/* Idea */}
                    <motion.div
                      className="mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-1.5">
                        The Idea
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {selectedProject.idea}
                      </p>
                    </motion.div>

                    {/* Tech */}
                    <motion.div
                      className="mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-1.5">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech, i) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.25 + i * 0.05,
                              duration: 0.3,
                            }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Innovation */}
                    <motion.div
                      className="mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-1.5">
                        Innovation
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {selectedProject.innovation}
                      </p>
                    </motion.div>

                    {/* Impact */}
                    <motion.div
                      className="mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-1.5">
                        Impact
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {selectedProject.impact}
                      </p>
                    </motion.div>

                    {/* External link */}
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

/* =======================================================
   ProjectCard  (grid tile)
   ======================================================= */

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [currentHoverIndex, setCurrentHoverIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const isTransitioning = useRef(false);

  const totalHoverImages =
    project.images && project.images.length > 0 ? project.images.length : 3;

  const displaySrc = isHovering
    ? project.images && project.images[currentHoverIndex]
      ? project.images[currentHoverIndex]
      : project.imageUrl
    : project.imageUrl;

  const displayAlt =
    project.imageAlt + (isHovering ? ` (Preview ${currentHoverIndex + 1})` : "");

  /* ------------ hover handlers ------------ */
  const handleMouseEnter = () => {
    // Clear any existing timers first to prevent multiple timers
    if (hoverTimerRef.current) {
      clearInterval(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    
    setIsHovering(true);
    
    // Start a new timer with a delay to avoid immediate image change
    setTimeout(() => {
      hoverTimerRef.current = setInterval(() => {
        // Only change the image if we're not in the middle of a transition
        if (!isTransitioning.current) {
          isTransitioning.current = true;
          setCurrentHoverIndex((prev) => {
            const nextIndex = (prev + 1) % totalHoverImages;
            return nextIndex;
          });
          
          // Reset the transition flag after the animation completes
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600); // This should be longer than the animation duration
        }
      }, 2000); // Increased interval for smoother rotation
    }, 500); // Small delay before starting rotation
  };

  const handleMouseLeave = () => {
    // Immediately stop hovering state
    setIsHovering(false);
    
    // Clear any active interval timers
    if (hoverTimerRef.current) {
      clearInterval(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    
    // Mark that we're no longer in a transition
    isTransitioning.current = false;
    
    // Reset the index after the exit animation completes
    setTimeout(() => {
      if (!isHovering) { // Double check we're still not hovering
        setCurrentHoverIndex(0);
      }
    }, 300);
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onClick();
      setTimeout(() => setIsClicked(false), 300);
    }, 150);
  };

  /* ------------ render ------------ */
  return (
    <motion.div>
      <Card
        className="flex flex-col overflow-hidden h-full border cursor-pointer group transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-48 overflow-hidden relative bg-muted/20">
          <AnimatePresence mode={isHovering ? "wait" : "sync"}>
            {displaySrc ? (
              <motion.img
                key={`${isHovering ? "hover" : "static"}-${currentHoverIndex}`}
                src={displaySrc}
                alt={displayAlt}
                className="absolute inset-0 w-full h-full object-contain bg-white/5 backdrop-blur-sm p-2"
                initial={{ opacity: 0, scale: isHovering ? 1 : 1.02 }}
                animate={{
                  opacity: 1,
                  scale: isClicked
                    ? 1.05
                    : isHovering
                    ? 1.05
                    : 1,
                  transition: { 
                    duration: isClicked ? 0.15 : 0.5,
                    ease: "easeOut" 
                  },
                }}
                exit={isHovering ? { 
                  opacity: 0,
                  transition: { duration: 0.3 } 
                } : { opacity: 0, transition: { duration: 0 } }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <motion.div
                key="placeholder"
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ImagePlaceholder
                  title={project.title}
                  bgColor={project.bgColor}
                  className="w-full h-full"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {Array.from({ length: totalHoverImages }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 w-1.5 rounded-full transition-duration-300 ${
                  (isHovering ? currentHoverIndex : 0) === idx
                    ? "bg-primary"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* copy / meta */}
        <CardHeader className="p-6 pb-4">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.idea}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 p-6 pt-0 space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <motion.div key={tech} whileHover={hoverVariants.badge.hover}>
                <Badge
                  variant="secondary"
                  className="text-xs hover:bg-primary/10 transition-colors"
                >
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
              animate={
                isClicked
                  ? { x: 10, transition: { duration: 0.15 } }
                  : {}
              }
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
