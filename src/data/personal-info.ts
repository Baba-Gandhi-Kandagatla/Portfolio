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

export interface Project {
  id: string;
  title: string;
  concept: string;
  technologies: string[];
  impact: string;
}

export interface Course {
  name: string;
}

export const personalInfo = {
  name: "Baba Gandhi Kandagatla",
  title: "AI/ML Engineer and Full-Stack Developer",
  summary: "AI/ML Engineer and Full-Stack Developer with expertise in building scalable machine learning solutions, cloud-based AI applications, and end-to-end software deployment. Proven experience in designing and deploying production-level AI solutions, integrating ML models with real-time systems, and optimizing performance using data-driven insights. Currently enhancing back-end skills with Spring Boot while continuously expanding leadership and technical acumen.",
  email: "babagandhikandagatla@gmail.com",
  phone: "+91 8309103893",
  location: "Hyderabad, India",
  links: {
    github: "https://github.com/Baba-Gandhi-Kandagatla",
    linkedin: "https://www.linkedin.com/in/baba-gandhi-kandagatla",
    portfolio: "https://baba-gandhi-kandagatla.github.io/Portfolio/"
  },
  education: [
    {
      institution: "Keshav Memorial Institute of Technology",
      degree: "B.Tech in Computer Science Engineering (AI/ML)",
      duration: "2022-2026 (Expected)",
      gpa: "8.4/10.0",
      courses: [
        "Natural Language Processing",
        "Database Management",
        "Software Engineering",
        "Computer Networks"
      ]
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
    items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "R"]
  },
  {
    category: "Web Technologies",
    items: ["MERN Stack", "React.js", "Next.js", "Node.js", "Express.js", "Flask", "FastAPI", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux"]
  },
  {
    category: "Data Science & ML",
    items: ["Model Fine Tuning", "Hyperparameter Tuning", "Transfer Learning", "ANN", "CNN", "RCNN (NLP)", "Transformers", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "NLP", "Reinforcement Learning"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, Lambda, S3)", "GCP", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "GitHub Actions"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
  },
  {
    category: "Tools",
    items: ["VS Code", "Git", "GitHub", "PyCharm", "Maven"]
  }
];

export const experiences: Experience[] = [
  {
    id: "skillsage-ai",
    title: "Backend Developer - AI-Based Mock Interviews",
    organization: "SkillSage Projects",
    duration: "Feb 2025 - Present",
    description: "Joined as Backend Developer in a team of 4 and integrated voice-based features into the frontend. Engineered AI-driven mock interviews using student data; currently under testing with a corporate partner."
  },
  {
    id: "skillsage-webos",
    title: "Developer - Interactive Web OS App Extension",
    organization: "SkillSage Projects",
    duration: "Mar 2024 - Apr 2024",
    description: "Developed a visual student-data display for large monitors (e.g., LG TVs) in a 2-week sprint; awaiting full database integration for complete deployment."
  },
  {
    id: "results-automation",
    title: "Full-Stack Developer",
    organization: "Results Automation System",
    duration: "Sep 2023 - Dec 2023",
    description: "Automated exam result processing, reducing turnaround time from 3 days to 1 minute. Currently implemented in examination branches at three colleges (NGIT, KMEC, KMCE)."
  },
  {
    id: "physics-lab",
    title: "Web Developer",
    organization: "Physics Virtual Lab",
    duration: "Sep 2023 - Dec 2023",
    description: "Designed a lab simulation tool for physics experiments and student revision; deployed in January 2023 as part of a team of 3 developers."
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
    title: "Top 10 in National AI Challenge at BVRIT",
    description: "Recognized for developing a novel approach to predictive analytics in healthcare using machine learning.",
    date: "July 2023"
  },
  {
    id: "hackathon-top15",
    title: "Top 15 in Hackathon at t-works, MGIT",
    description: "Selected among the top 15 teams for innovative technical solution.",
    date: "May 2023"
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
  },
  {
    id: "certificates",
    title: "Certificates of Appreciation",
    description: "Received certificates of appreciation from Saksham Telangana & Streetcause Hyderabad for community initiatives.",
    date: "2023"
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
    id: "streetcause",
    title: "Community Outreach Volunteer",
    organization: "StreetCause KMIT",
    duration: "2022-Present",
    description: "Mentored 70 students and raised funds equivalent to 50 passes for village adoption projects near Bhadrachalam."
  },
  {
    id: "public-speaking",
    title: "Speaker",
    organization: "Vachan Speakers Club",
    duration: "2022-Present",
    description: "Delivered 2 orientation speeches in front of an audience of 1000 people. Active member fostering communication and coordinating club events."
  },
  {
    id: "community-outreach",
    title: "Volunteer",
    organization: "StreetCause",
    duration: "2022-Present",
    description: "Participated in community service projects, including educational initiatives for underprivileged children."
  }
];