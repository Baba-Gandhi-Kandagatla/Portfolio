"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, Users, Building, Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { hoverVariants } from "@/lib/animations";
import type { Patent } from "@/data/personal-info";

interface PatentCardProps {
  patent: Patent;
  index: number;
}

export function PatentCard({ patent, index }: PatentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={hoverVariants.lift.hover}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 border hover:border-primary/50 hover:shadow-lg">
        <CardHeader className="p-6 pb-4">
          <div className="flex justify-between items-start mb-4">
            <Badge 
              variant="secondary" 
              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            >
              {patent.status}
            </Badge>
            <motion.div 
              whileHover={hoverVariants.subtle.hover}
              whileTap={hoverVariants.subtle.tap}
              className="bg-primary/10 p-2 rounded-full"
            >
              <FileText className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
          
          <CardTitle className="text-xl leading-tight mb-2">
            {patent.title}
          </CardTitle>
          
          <CardDescription className="text-base">
            Application No: {patent.applicationNumber}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 pt-0 space-y-4">
          {/* Publication Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <div>
                <p className="font-medium">Filed</p>
                <p>{patent.filingDate}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <div>
                <p className="font-medium">Published</p>
                <p>{patent.publicationDate}</p>
              </div>
            </div>
          </div>

          {/* Applicant */}
          <div className="flex items-center text-sm">
            <Building className="h-4 w-4 mr-2 text-primary" />
            <div>
              <p className="font-medium text-muted-foreground">Applicant</p>
              <p>{patent.applicant}</p>
            </div>
          </div>

          {/* Inventors */}
          <div>
            <div className="flex items-center text-sm mb-2">
              <Users className="h-4 w-4 mr-2 text-primary" />
              <p className="font-medium text-muted-foreground">Inventors ({patent.inventors.length})</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {patent.inventors.slice(0, 3).map((inventor, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {inventor.replace("Mr. ", "").replace("Ms. ", "")}
                </Badge>
              ))}
              {patent.inventors.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{patent.inventors.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Abstract */}
          <div>
            <p className="font-medium text-sm text-muted-foreground mb-2">Abstract</p>
            <p className="text-sm text-muted-foreground line-clamp-4">
              {patent.abstract}
            </p>
          </div>


          {/* Authority */}
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground">
              <Award className="h-3 w-3 inline mr-1" />
              {patent.applicationAuthority}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}