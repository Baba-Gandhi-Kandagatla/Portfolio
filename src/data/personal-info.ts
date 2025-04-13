export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Baba Gandhi Kandagatla",
  title: "AI/ML Engineer and Full-Stack Developer",
  summary: "Innovative AI/ML Engineer and Full-Stack Developer with expertise in developing cloud-based AI applications and modern web technologies. Experienced in building AI-powered solutions for education, healthcare, and security domains. Passionate about creating cutting-edge applications that solve real-world problems through the integration of AI, machine learning, and intuitive user interfaces.",
  email: "babagandhi@example.com",
  phone: "+91 1234567890",
  location: "Hyderabad, India",
  links: {
    github: "https://github.com/babagandhi",
    linkedin: "https://www.linkedin.com/in/baba-gandhi-kandagatla"
  },
  education: [
    {
      institution: "Keshav Memorial Institute of Technology",
      degree: "Bachelor of Technology in Computer Science",
      duration: "2022-2026",
      gpa: "8.4/10.0"
    },
    {
      institution: "Sri Chaitanya Junior College Prathiba branch",
      degree: "Intermediate (10+2)",
      duration: "2020-2022",
      gpa: "885/100"
    },
    {
      institution: "Sri Chaitanya School",
      degree: "Secondary School Certificate (10th)",
      duration: "2019-2020",
      gpa: "10/10.0"
    }
  ]
};

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "R"]
  },
  {
    category: "Web Technologies",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux"]
  },
  {
    category: "Data Science & ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "NLP", "Reinforcement Learning"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
  }
];

export const experiences: Experience[] = [
  {
    id: "skillsage",
    title: "AI Engineer/Full-Stack Developer",
    organization: "SkillSage",
    duration: "June 2024 - Present",
    description: "Developed an AI-powered mock interview system that provides personalized feedback on communication skills and interview performance."
  },
  {
    id: "results-automation",
    title: "Full-Stack Developer",
    organization: "Results Automation System",
    duration: "Jan 2024 - May 2024",
    description: "Built an automated grade retrieval system for Osmania University, streamlining the process of accessing academic records for thousands of students."
  },
  {
    id: "physics-lab",
    title: "Web Developer",
    organization: "Physics Virtual Lab",
    duration: "Aug 2023 - Dec 2023",
    description: "Created interactive physics simulations for educational purposes, using WebGL and Three.js to visualize complex physics concepts."
  }
];

export const achievements: Achievement[] = [
  {
    id: "hackathon-enginerd",
    title: "1st Prize in Enginerd Hackathon at KMIT",
    description: "Won first place for developing an innovative AI-assisted learning platform with personalized study plans.",
    date: "March 2024"
  },
  {
    id: "hackathon-xcelerate",
    title: "Finalist in HackXcelerate Hackathon",
    description: "Selected among the top 5 teams for creating a health monitoring system using wearable technology.",
    date: "November 2023"
  },
  {
    id: "hackathon-top10",
    title: "Top 10 in National AI Challenge",
    description: "Recognized for developing a novel approach to predictive analytics in healthcare using machine learning.",
    date: "July 2023"
  },
  {
    id: "ieee-award",
    title: "IEEE Hackathon Award",
    description: "Received recognition for outstanding technical implementation in a sustainable technology project.",
    date: "April 2023"
  },
  {
    id: "iqac-recognition",
    title: "IQAC Letter of Appreciation",
    description: "Recognized by the Internal Quality Assurance Cell for contributions to educational technology development.",
    date: "February 2023"
  },
  {
    id: "media-feature",
    title: "The Hindu Feature",
    description: "Featured in The Hindu newspaper for innovative technology solutions addressing educational challenges.",
    date: "December 2022"
  }
];

export const leadership = [
  {
    id: "mentoring",
    title: "Student Mentor",
    organization: "KMIT",
    duration: "2023-Present",
    description: "Mentor junior students in programming and AI/ML projects, organizing workshops and hands-on sessions."
  },
  {
    id: "public-speaking",
    title: "Speaker",
    organization: "Vachan Speakers Club",
    duration: "2022-Present",
    description: "Delivered orientation speeches and technical presentations on emerging technologies."
  },
  {
    id: "community-outreach",
    title: "Volunteer",
    organization: "StreetCause",
    duration: "2022-Present",
    description: "Participated in community service projects, including educational initiatives for underprivileged children."
  }
];