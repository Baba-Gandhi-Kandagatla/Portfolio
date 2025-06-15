"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Calendar, Download, FileText } from "lucide-react";
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
          viewport={{ once: true, margin: "-5%" }}
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
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="block"
              target="_blank"
              rel="noreferrer"
            >
              <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300 h-full cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <span className="text-base font-medium">{personalInfo.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href={`tel:${personalInfo.phone}`}
              className="block"
              target="_blank"
              rel="noreferrer"
            >
              <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300 h-full cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Phone</h3>
                      <span className="text-base font-medium">{personalInfo.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
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
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
          <div className="flex flex-wrap gap-6 justify-center">
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
            
            {/* Resume Download Button with unique animation */}
            <motion.a
              href="./resume.pdf"
              download="Baba_Gandhi_Kandagatla_Resume.pdf"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="relative bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 p-4 rounded-full flex items-center gap-3 transition-all duration-300 overflow-hidden group border border-primary/30"
            >
              {/* Animated background pulse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-3">
                <motion.div
                  className="relative"
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FileText className="h-6 w-6 text-primary" />
                  {/* Floating sparkle */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                </motion.div>
                <span className="font-medium text-primary">Resume</span>
                <motion.div
                  animate={{ 
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Download className="h-5 w-5 text-primary" />
                </motion.div>
              </div>
              
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.a>
          </div>
          
          <div className="mt-8 bg-green-500/10 px-6 py-3 rounded-full inline-flex items-center">
            <Calendar className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-green-600 dark:text-green-400 font-medium">Exploring internship and career opportunities in AI and Full Stack Development</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}