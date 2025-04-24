"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, skills } from "@/data/personal-info";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-muted/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my background, skills, and what drives me to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  {personalInfo.education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-5%" }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="space-y-1"
                    >
                      <h4 className="font-medium">{edu.institution}</h4>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                      <p className="text-sm font-medium">CGPA: {edu.gpa}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Bio</h3>
                <p className="text-muted-foreground mb-4">
                  {personalInfo.summary}
                </p>
                <p className="text-muted-foreground mb-6">
                  Based in {personalInfo.location}, I'm passionate about leveraging cutting-edge technologies to build innovative solutions 
                  that address real-world challenges. My journey in technology has equipped me with a diverse skillset and a problem-solving 
                  mindset that drives me to continuously learn and improve.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">Full-Stack Development</Badge>
                  <Badge variant="outline">Cloud Computing</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                  <Badge variant="outline">Innovation</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-8"
          >
            Technical Skills
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-auto">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-4">{skillCategory.category}</h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-5%" }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {skillCategory.items.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { 
                              opacity: 1, 
                              scale: 1,
                              transition: { duration: 0.3 }
                            }
                          }}
                        >
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}