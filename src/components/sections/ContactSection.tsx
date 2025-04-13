"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/data/personal-info";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    
    // Reset submission status after showing success message
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="mx-auto bg-green-500/20 p-3 rounded-full w-fit mb-4"
                    >
                      <Send className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h4 className="font-bold text-lg text-green-600 dark:text-green-400 mb-2">Message Sent!</h4>
                    <p className="text-green-700 dark:text-green-300">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required placeholder="Your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="your.email@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required placeholder="How can I help you?" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" required placeholder="Your message..." className="min-h-32" />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      <motion.div 
                        className="w-full h-full flex items-center justify-center"
                        whileHover={{ 
                          y: -3,
                          boxShadow: "0 4px 8px rgba(var(--primary) / 0.3)",
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                          />
                        ) : (
                          <Send className="mr-2 h-4 w-4" />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.div>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a 
                        href={`tel:${personalInfo.phone}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <motion.a 
                      href={personalInfo.links.github}
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-muted/50 p-3 rounded-full hover:bg-muted transition-colors"
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
                      className="bg-muted/50 p-3 rounded-full hover:bg-muted transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <p className="text-muted-foreground">
                  Whether you have a question, proposal, or just want to say hello, I'll try my best to get back to you as soon as possible.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}