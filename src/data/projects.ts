export interface Project {
  id: string;
  title: string;
  idea: string;
  techStack: string[];
  innovation: string;
  impact: string;
  bgColor: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl?: string; // Optional URL to the live project
  images?: string[]; // Optional array of additional images for the carousel
}

export const projects: Project[] = [
  {
    id: "skill-forge",
    title: "Skill Forge",
    idea: "A comprehensive LMS platform integrating topic-wise PDFs, recorded videos, quizzes, assessments, and an AI tutor powered by a vector database with custom study plans.",
    techStack: ["MERN", "AI", "Gamification"],
    innovation: "Combines advanced AI tutoring with interactive gamification, offering personalized learning roadmaps and engaging multiplayer quiz battles through matchmaking.",
    impact: "Transforms learning by integrating modern tech and gamification, boosting student engagement and skill development.",
    bgColor: "bg-indigo-700",
    imageUrl: "/projects/skill-forge.png",
    imageAlt: "Skill Forge Dashboard"
  },
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection Using AI & VR",
    idea: "An innovative healthcare solution leveraging AI and VR technologies for early breast cancer detection and enhanced medical training.",
    techStack: ["TensorFlow", "VR", "React", "Python"],
    innovation: "Combines machine learning algorithms with immersive VR interfaces to improve diagnostic accuracy and provide realistic training simulations for medical professionals.",
    impact: "Enhances early detection rates and provides a novel approach to medical education, potentially saving lives through earlier diagnosis.",
    bgColor: "bg-pink-500",
    imageUrl: "/projects/breast-cancer-detection.png",
    imageAlt: "Breast Cancer Detection System Interface"
  },
  {
    id: "telegram-assistant",
    title: "AI-Powered Telegram Assistant Bot",
    idea: "A versatile Telegram bot that leverages AI to provide real-time assistance, information retrieval, and automated services.",
    techStack: ["Python", "TensorFlow", "NLP", "Telegram API"],
    innovation: "Features advanced natural language processing capabilities to understand complex queries and provide context-aware responses.",
    impact: "Streamlines information access and automates routine tasks, serving thousands of users with 24/7 assistance.",
    bgColor: "bg-blue-600",
    imageUrl: "/projects/telegram-bot.png",
    imageAlt: "Telegram Assistant Bot Conversation"
  },
  {
    id: "quiz-generator",
    title: "Interactive Quiz Generator",
    idea: "An AI-powered platform that automatically generates custom quizzes from educational content and provides detailed performance analytics.",
    techStack: ["React", "Node.js", "NLP", "MongoDB"],
    innovation: "Uses advanced language models to extract key concepts from learning materials and create varied question formats with appropriate difficulty levels.",
    impact: "Reduces educators' preparation time while providing engaging assessment tools tailored to learners' needs.",
    bgColor: "bg-purple-600",
    imageUrl: "/projects/quiz-generator.png",
    imageAlt: "Interactive Quiz Generator Dashboard"
  },
  {
    id: "lms-prototype",
    title: "LMS System Prototype",
    idea: "A scalable learning management system designed to support modern educational needs with integrated analytics and personalized learning paths.",
    techStack: ["React", "Express", "MongoDB", "Analytics"],
    innovation: "Features adaptive learning algorithms that adjust content presentation based on student performance and engagement metrics.",
    impact: "Improves learning outcomes through personalized education approaches and data-driven teaching strategies.",
    bgColor: "bg-green-600",
    imageUrl: "/projects/lms-prototype.png",
    imageAlt: "LMS System Dashboard"
  },
  {
    id: "skillsage",
    title: "SkillSage - Mock Interview System",
    idea: "An AI-powered platform that simulates realistic job interviews and provides detailed feedback to help candidates improve their performance.",
    techStack: ["React", "Python", "NLP", "Speech Recognition"],
    innovation: "Incorporates advanced speech analysis and behavioral assessment to evaluate both verbal and non-verbal communication skills.",
    impact: "Helps job seekers build confidence and improve their interview skills through realistic practice in a low-pressure environment.",
    bgColor: "bg-yellow-600",
    imageUrl: "/projects/skillsage.png",
    imageAlt: "SkillSage Mock Interview Session"
  },
  {
    id: "system-compromise",
    title: "System Compromise Detection Using AI",
    idea: "A security solution that employs machine learning to detect unusual system behaviors indicative of potential security breaches.",
    techStack: ["Python", "TensorFlow", "Cybersecurity", "Data Analysis"],
    innovation: "Uses behavioral analysis and anomaly detection to identify subtle signs of compromise that traditional security tools might miss.",
    impact: "Enhances organizational security posture by providing early warning of potential breaches before significant damage occurs.",
    bgColor: "bg-red-700",
    imageUrl: "/projects/system-compromise.png",
    imageAlt: "System Compromise Detection Dashboard"
  },
  {
    id: "amazon-api",
    title: "Amazon Product Advertising API Integration",
    idea: "A comprehensive integration solution that leverages Amazon's Product Advertising API to create dynamic product showcases and recommendation engines.",
    techStack: ["Node.js", "AWS", "API Integration", "React"],
    innovation: "Features intelligent product recommendation algorithms based on user browsing patterns and preference analysis.",
    impact: "Increases conversion rates for e-commerce platforms by providing relevant, timely product suggestions to potential customers.",
    bgColor: "bg-orange-600",
    imageUrl: "/projects/amazon-api.png",
    imageAlt: "Amazon API Integration Dashboard"
  },
  {
    id: "ou-grade-retrieval",
    title: "OU Grade Retrieval Automation",
    idea: "An automated system that efficiently retrieves and organizes academic grades from Osmania University's database, eliminating manual checking processes.",
    techStack: ["Python", "Web Scraping", "Automation", "Data Processing"],
    innovation: "Implements resilient web scraping techniques that adapt to changes in the university's website structure.",
    impact: "Saves students significant time and frustration by providing instant access to their academic records through a simple interface.",
    bgColor: "bg-teal-600",
    imageUrl: "/projects/ou-grade.png",
    imageAlt: "OU Grade Retrieval System"
  },
  {
    id: "physics-lab",
    title: "Physics Virtual Lab",
    idea: "An interactive virtual environment that simulates physics experiments, allowing students to explore complex concepts through hands-on digital experiences.",
    techStack: ["Three.js", "WebGL", "React", "Physics Engines"],
    innovation: "Creates highly realistic simulations with accurate physics modeling that respond dynamically to user inputs and modifications.",
    impact: "Expands access to laboratory learning experiences regardless of physical resources or location constraints.",
    bgColor: "bg-cyan-700",
    imageUrl: "/projects/physics-lab.png",
    imageAlt: "Physics Virtual Lab Simulation"
  },
  {
    id: "birthday-app",
    title: "Birthday Wishing App",
    idea: "A personalized digital celebration platform that creates unique birthday experiences with customized messages, visuals, and interactive elements.",
    techStack: ["React Native", "Animation Libraries", "Firebase", "Social APIs"],
    innovation: "Incorporates personalized animations and content generation based on the recipient's interests and relationship with the sender.",
    impact: "Strengthens personal connections by enabling meaningful digital celebrations, especially for those separated by distance.",
    bgColor: "bg-emerald-600",
    imageUrl: "/projects/birthday-app.png",
    imageAlt: "Birthday Wishing App Interface"
  }
];