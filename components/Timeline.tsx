"use client"

// import { useState, forwardRef } from "react"
import { forwardRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Image from "next/image"

const projects = [
  {
    title: "Skill Forge",
    idea: "A comprehensive LMS platform integrating topic-wise PDFs, recorded videos, quizzes, assessments, and an AI tutor powered by a vector database, combined with custom study plans.",
    techStack: ["MERN", "AI", "Gamification"],
    innovation: "Combines advanced AI tutoring with interactive gamification, offering personalized learning roadmaps and engaging multiplayer quiz battles through matchmaking.",
    impact: "Transforms learning by integrating modern tech and gamification, boosting student engagement and skill development.",
    color: "bg-indigo-700",
    images: [
      "/placeholder.svg?height=400&width=600&text=Skill+Forge+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Skill+Forge+AI+Tutor",
    ],
  },
  {
    title: "Breast Cancer Detection Using AI & VR",
    idea: "An AI-driven system for detecting breast cancer in ultrasound images, visualized in a VR environment.",
    techStack: ["MERN Stack", "Flask", "Unreal Engine", "EfficientNet", "U-Net","UnetR", "Vit b 16"],
    innovation: "Real-time AI-based classification and segmentation of ultrasound imagery, with immersive VR display for detailed analysis.",
    impact: "Provides an intuitive tool for medical professionals and students to engage with complex diagnostic data, improving detection rates by 30%.",
    color: "bg-pink-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Cancer+Detection+AI",
      "/placeholder.svg?height=400&width=600&text=VR+Visualization",
    ],
  },
  {
    title: "AI-Powered Telegram Assistant Bot",
    idea: "A versatile Telegram bot combining multiple AI capabilities for chat, analysis, and information retrieval.",
    techStack: ["Python", "MongoDB", "Flask", "Telegram API"],
    innovation: "Integration of multiple AI models (Gemini AI variants) for different use cases, with sentiment analysis and real-time translation capabilities.",
    impact: "Provides comprehensive AI assistance through chat platform, supporting file analysis, web search, and multi-language communication.",
    color: "bg-cyan-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Telegram+Bot+Demo",
      "/placeholder.svg?height=400&width=600&text=AI+Chat+Interface",
      "/placeholder.svg?height=400&width=600&text=Image+Analysis+Feature",
    ],
  },
  {
    title: "Interactive Quiz Generator",
    idea: "A web platform that dynamically adjusts quiz difficulty based on user inputs, such as the selected topic and provided documents or internet searches.",
    techStack: ["MERN Stack", "Fast Api with Microsoft Phi 3.5 Mini"],
    innovation: "AI integration to create personalized quizzes that adapt in real-time to the user's skill level.",
    impact: "Enhances user engagement and learning by offering quizzes tailored to individual preferences, resulting in a 50% improvement in quiz completion rates and a better understanding of complex topics.",
    color: "bg-purple-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Quiz+Generator+UI",
      "/placeholder.svg?height=400&width=600&text=Quiz+Taking+Interface",
      "/placeholder.svg?height=400&width=600&text=Performance+Analytics",
    ],
  },
  {
    title: "LMS System Prototype",
    idea: "An LMS prototype with features like PDFs, videos, assessments, and quizzes organized by topics and units.",
    techStack: ["MERN"],
    innovation: "Comprehensive learning management system developed within the constraints of a hackathon.",
    impact: "Provides a foundation for a full-fledged LMS, demonstrating rapid prototyping skills.",
    color: "bg-teal-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=LMS+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Course+Content+View",
    ],
  },
  {
    title: "SkillSage - Mock Interview System",
    idea: "A scalable mock interview system for students, tailored to resumes and dynamically adapting based on interviewee responses.",
    techStack: ["React", "Node", "Express", "PostgreSQL", "Docker"],
    innovation: "Supports real-time, personalized interviews at scale, helping colleges automate and improve their interview processes.",
    impact: "Enables efficient interview preparation for over 300 students simultaneously, with detailed analytics on individual performance, improving overall interview readiness by 40%.",
    color: "bg-blue-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=SkillSage+Dashboard",
      "/placeholder.svg?height=400&width=600&text=SkillSage+Interview",
      "/placeholder.svg?height=400&width=600&text=SkillSage+Analytics",
    ],
  },
  {
    title: "System Compromise Detection Using AI",
    idea: "A desktop application using a Random Forest model to detect system compromise by analyzing network packet flow.",
    techStack: ["Python", "Random Forest", "VirusTotal API"],
    innovation: "Integration of machine learning with real-time threat intelligence for comprehensive system security.",
    impact: "Enhances system security by providing early detection of potential compromises, reducing response time to threats.",
    color: "bg-green-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=System+Compromise+Detection+UI",
      "/placeholder.svg?height=400&width=600&text=Network+Flow+Analysis",
    ],
  },
  {
    title: "Amazon Product Advertising API Integration",
    idea: "Developed an API connection to the Amazon Product Advertising API for a freelance project.",
    techStack: ["AMAZON PAAPI", "PYTHON FLASK"],
    innovation: "Efficient integration of complex e-commerce API for product data retrieval.",
    impact: "Successfully completed the project, earning ₹4,000 and gaining practical experience in API integration.",
    color: "bg-orange-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=API+Integration+Diagram",
      "/placeholder.svg?height=400&width=600&text=Product+Data+Display",
    ],
  },
  {
    title: "OU Grade Retrieval Automation",
    idea: "An automated tool for retrieving student grades from the OU university portal.",
    techStack: ["Python", "Web Scraping"],
    innovation: "Automation of a manual, time-consuming process, significantly reducing administrative workload.",
    impact: "Reduced grade retrieval time from three days to one minute, now used by multiple colleges.",
    color: "bg-red-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Grade+Retrieval+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Automation+Results",
    ],
  },
  {
    title: "Physics Virtual Lab",
    idea: "A Python Flask application for conducting virtual physics experiments, facilitating remote learning.",
    techStack: ["Python", "Flask", "HTML/CSS", "JavaScript"],
    innovation: "Digitalization of physics experiments, making them accessible remotely and reducing physical lab costs.",
    impact: "Enables students to conduct experiments remotely, reducing costs and increasing accessibility to physics education.",
    color: "bg-yellow-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Physics+Virtual+Lab+Interface",
      "/placeholder.svg?height=400&width=600&text=Virtual+Experiment+Demo",
    ],
  },
  {
    title: "Birthday Wishing App",
    idea: "A personalized mobile app featuring a to-do list, annual birthday wishes, daily NASA space photos, and randomized friend messages.",
    techStack: ["Flutter", "Dart", "NASA API"],
    innovation: "Combination of personal organization tools with engaging, personalized content.",
    impact: "Enhances personal connections and provides daily engagement through varied features.",
    color: "bg-indigo-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Birthday+App+Home",
      "/placeholder.svg?height=400&width=600&text=NASA+Photo+of+the+Day",
    ],
  }
]

interface TimelineProps {
  isActive: boolean
}

const Timeline = forwardRef<HTMLElement, TimelineProps>(({ isActive }, ref) => {
  // const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})

  if (!isActive) return null

  // const handlePrevImage = (projectTitle: string) => {
  //   setCurrentImageIndex((prev) => ({
  //     ...prev,
  //     [projectTitle]:
  //       (prev[projectTitle] - 1 + projects.find((p) => p.title === projectTitle)!.images.length) %
  //       projects.find((p) => p.title === projectTitle)!.images.length,
  //   }))
  // }

  // const handleNextImage = (projectTitle: string) => {
  //   setCurrentImageIndex((prev) => ({
  //     ...prev,
  //     [projectTitle]: (prev[projectTitle] + 1) % projects.find((p) => p.title === projectTitle)!.images.length,
  //   }))
  // }

  return (
    <section ref={ref} id="projects" className="scroll-mt-16 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Project Timeline</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className={`${project.color} text-white`}>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Idea</h4>
                    <p>{project.idea}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p>{project.innovation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact</h4>
                    <p>{project.impact}</p>
                  </div>
                </div>
                {/* <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={project.images[currentImageIndex[project.title] || 0]}
                      alt={`${project.title} preview`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <Button variant="secondary" size="icon" onClick={() => handlePrevImage(project.title)}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="icon" onClick={() => handleNextImage(project.title)}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
})

Timeline.displayName = "Timeline"

export default Timeline

