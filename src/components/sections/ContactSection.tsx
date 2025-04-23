"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/data/personal-info";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together on your next project.
          </p>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Interactive Contact Area */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-8">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Email</h3>
                        <p className="text-muted-foreground">Ready to chat?</p>
                      </div>
                    </div>

                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      className="flex justify-between items-center group p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-base font-medium">{personalInfo.email}</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-8">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Phone</h3>
                        <p className="text-muted-foreground">Let's talk directly</p>
                      </div>
                    </div>
                    
                    <motion.a
                      href={`tel:${personalInfo.phone}`}
                      className="flex justify-between items-center group p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-base font-medium">{personalInfo.phone}</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-8">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Location</h3>
                        <p className="text-muted-foreground">Where I'm based</p>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-muted/50">
                      <span className="text-base font-medium">{personalInfo.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-8">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Availability</h3>
                        <p className="text-muted-foreground">Current status</p>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <span className="text-base font-medium text-green-600 dark:text-green-400">
                        Available for new projects
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Social Connections & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden h-full border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-lg mb-6">
                      Whether you have a project in mind, want to collaborate, or just say hello, I'm always open to new opportunities and connections.
                    </p>
                    
                    <p className="text-muted-foreground mb-10">
                      I strive to respond to all inquiries within 24-48 hours. Let's create something amazing together!
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold">Find me on</h4>
                    <div className="flex flex-wrap gap-4">
                      <motion.a 
                        href={personalInfo.links.github}
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-muted/50 hover:bg-primary/10 p-3 px-5 rounded-full transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Github className="h-5 w-5" />
                        <span className="font-medium">GitHub</span>
                      </motion.a>
                      
                      <motion.a 
                        href={personalInfo.links.linkedin}
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-muted/50 hover:bg-primary/10 p-3 px-5 rounded-full transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="font-medium">LinkedIn</span>
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button 
                        className="w-full md:w-auto flex items-center gap-2" 
                        asChild
                      >
                        <a href="/resume.pdf" target="_blank" download>
                          <Download className="h-4 w-4 mr-1" /> Download Resume
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}