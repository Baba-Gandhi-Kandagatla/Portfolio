"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/data/personal-info";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-muted/20 to-transparent -z-10"></div>
      
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Location</h3>
                    <p className="text-base font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
          <div className="flex gap-6">
            <motion.a
              href={personalInfo.links.github}
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-muted/50 hover:bg-primary/10 p-4 rounded-full flex items-center gap-3 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="font-medium">GitHub</span>
            </motion.a>
            
            <motion.a
              href={personalInfo.links.linkedin}
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-muted/50 hover:bg-primary/10 p-4 rounded-full flex items-center gap-3 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="font-medium">LinkedIn</span>
            </motion.a>
          </div>
          
          <div className="mt-8 bg-green-500/10 px-6 py-3 rounded-full inline-flex items-center">
            <Calendar className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-green-600 dark:text-green-400 font-medium">Available for new projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}