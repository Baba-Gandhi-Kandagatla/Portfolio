"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, Users, FileText } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  achievements, 
  experiences, 
  leadership,
  patents 
} from "@/data/personal-info";
import { hoverVariants } from "@/lib/animations";
import { PatentCard } from "@/components/ui/PatentTab";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A look at my professional journey, notable achievements, and leadership roles.
          </p>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
            <TabsTrigger value="patents">Patents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ExperienceCard
                    title={exp.title}
                    organization={exp.organization}
                    duration={exp.duration}
                    description={exp.description}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AchievementCard
                    title={achievement.title}
                    description={achievement.description}
                    date={achievement.date}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="leadership" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <LeadershipCard
                    title={role.title}
                    organization={role.organization}
                    duration={role.duration}
                    description={role.description}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="patents" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {patents.map((patent, index) => (
                <PatentCard 
                  key={patent.id} 
                  patent={patent} 
                  index={index} 
                />
              ))}
            </div>
            {patents.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No patents available at the moment.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

function ExperienceCard({ title, organization, duration, description }: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={hoverVariants.lift.hover}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 border hover:border-primary/50">
        <CardHeader className="p-6 pb-4">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{title}</CardTitle>
            <motion.div 
              whileHover={hoverVariants.subtle.hover}
              whileTap={hoverVariants.subtle.tap}
              className="bg-primary/10 p-2 rounded-full"
            >
              <Briefcase className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
          <CardDescription className="text-base">{organization}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="flex items-center mb-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{duration}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
}

function AchievementCard({ title, description, date }: AchievementCardProps) {
  return (
    <motion.div
      whileHover={hoverVariants.lift.hover}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 border hover:border-primary/50">
        <CardHeader className="p-6 pb-4">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
            <motion.div 
              whileHover={hoverVariants.subtle.hover}
              whileTap={hoverVariants.subtle.tap}
              className="bg-primary/10 p-2 rounded-full"
            >
              <Award className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="flex items-center mb-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface LeadershipCardProps {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

function LeadershipCard({ title, organization, duration, description }: LeadershipCardProps) {
  return (
    <motion.div
      whileHover={hoverVariants.lift.hover}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 border hover:border-primary/50">
        <CardHeader className="p-6 pb-4">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{title}</CardTitle>
            <motion.div 
              whileHover={hoverVariants.subtle.hover}
              whileTap={hoverVariants.subtle.tap}
              className="bg-primary/10 p-2 rounded-full"
            >
              <Users className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
          <CardDescription className="text-base">{organization}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="flex items-center mb-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{duration}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}