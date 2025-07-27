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

export interface Patent {
  id: string;
  title: string;
  applicationNumber: string;
  publicationNumber: string;
  filingDate: string;
  publicationDate: string;
  applicationAuthority: string;
  inventors: string[];
  applicant: string;
  abstract: string;
  status: string;
}

export const personalInfo = {
  name: "Baba Gandhi Kandagatla",
  title: "AI/ML Engineer and Full-Stack Developer",
  summary: "AI/ML Engineer and Full-Stack Developer with expertise in building scalable machine learning solutions, cloud-based AI applications, and end-to-end software deployment. Currently working as a Software Developer Intern at Eventbrite, focusing on identity and authentication systems for web and iOS platforms. Proven experience in designing and deploying production-level AI solutions, integrating ML models with real-time systems, and optimizing performance using data-driven insights. Continuously expanding technical expertise in mobile development, testing frameworks, and backend analytics.",
  email: "babagandhikandagatla@gmail.com",
  phone: "+91 8309103893",
  location: "Hyderabad, India",
  links: {
    github: "https://github.com/Baba-Gandhi-Kandagatla",
    linkedin: "https://www.linkedin.com/in/baba-gandhi-kandagatla",
  },
  education: [
    {
      institution: "Keshav Memorial Institute of Technology",
      degree: "B.Tech in Computer Science Engineering (AI/ML)",
      duration: "2022-2026 (Expected)",
      gpa: "8.21/10.0",
      courses: [
        "Natural Language Processing",
        "Database Management",
        "Software Engineering",
        "Computer Networks"
      ]
    },
    {
      institution: "Sri Chaitanya Junior College Prathiba branch",
      degree: "Intermediate (12th)",
      duration: "2020-2022",
      gpa: "885/1000"
    },
    {
      institution: "Sri Chaitanya School",
      degree: "Secondary School Certificate (10th)",
      duration: "2019-2020",
      gpa: "10/10"
    }
  ]
};

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Web Technologies",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "FastAPI", "HTML5", "CSS", "Tailwind CSS", "Material UI", "Bootstrap", "REST APIs"]
  },
  {
    category: "Mobile Development",
    items: ["iOS Development", "Swift", "Xcode", "Unit Testing", "Mobile App Testing", "Test Case Design"]
  },
  {
    category: "Identity & Authentication",
    items: ["MFA (Multi-Factor Authentication)", "Identity Management", "Privacy Systems", "Authentication Flows", "Security Testing"]
  },
  {
    category: "Data Science & ML",
    items: ["Model Fine Tuning", "Hyperparameter Tuning", "Transfer Learning", "ANN", "CNN", "RCNN (NLP)", "Transformers", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "NLP", "Reinforcement Learning"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, Lambda, S3)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "GitHub Actions"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "Tools",
    items: ["VS Code", "Git", "GitHub", "PyCharm", "Maven", "Jupyter Notebook", "Anaconda", "Postman", "IntelliJ IDEA", "Eclipse"]
  }
];

export const experiences: Experience[] = [
  {
    id: "eventbrite-intern",
    title: "Software Developer Intern",
    organization: "Eventbrite",
    duration: "Jul 2025 - Dec 2025",
    description: "Working with the Identity Team focusing on Privacy and Attendee Mobile App development. Conducting weekly testing for mobile applications, writing comprehensive unit test case flows for iOS app, and developing new features. Implemented backend analytics pages for custom events including MFA and authentication systems. Contributing to bug fixes and feature enhancements for identity and authentication components across web and iOS platforms."
  },
  {
    id: "skillsage-ai",
    title: "Backend Developer - AI-Based Mock Interviews",
    organization: "KMIT",
    duration: "May 2024 - Apr 2025",
    description: "Joined as Backend Developer in a team of 4 and integrated voice-based features into the frontend. Engineered real time AI-driven mock interviews using student data."
  },
  {
    id: "results-automation",
    title: "Full-Stack Developer",
    organization: "NGIT, KMEC, KMCE",
    duration: "Sep 2023 - Dec 2023",
    description: "Automated exam result processing, reducing turnaround time from 3 days to 1 minute. Currently implemented in examination branches at three colleges (NGIT, KMEC, KMCE)."
  },
  {
    id: "physics-lab",
    title: "Web Developer",
    organization: "KMIT",
    duration: "Sep 2023 - Dec 2023",
    description: "Designed a lab simulation tool for physics experiments and student revision; deployed in January 2023 as part of a team of 3 developers."
  }
];

export const achievements: Achievement[] = [
  {
    id: "patent-breast-cancer",
    title: "Patent Published: Breast Cancer Classification & Segmentation with 3D Visualization",
    description: "Published patent for an AI-based system that classifies and segments breast cancer masses in ultrasound imagery with VR visualization for medical training and diagnosis.",
    date: "Jun 2025"
  },
  {
    id: "hackathon-tworks",
    title: "Top 15 in Hackathon (t-works, MGIT)",
    description: "Selected among the top 15 teams.",
    date: "May 2025"
  },
    {
    id: "utkrishti-puraskar",
    title: "KMIT's Utkrishti Puraskar",
    description: "Recognized for outstanding achievements during KMIT's Awards Day.",
    date: "Mar 2025"
  },
  {
    id: "hackathon-bvrit",
    title: "Top 10 in Hackathon (BVRIT)",
    description: "Secured a top 10 position.",
    date: "Apr 2025"
  },
  {
    id: "hackathon-hackxcelerate",
    title: "Finalist in HackXcelerate Hackathon (Microsoft & Bytexl at CBIT)",
    description: "Awarded a certificate of participation.",
    date: "Apr 2024"
  },
  {
    id: "hackathon-enginerd-kmit",
    title: "1st Prize in Enginerd Hackathon (KMIT)",
    description: "Awarded for Software & Physics Categories.",
    date: "Aug 2023"
  },
  {
    id: "hackathon-Mjcet",
    title: "1st Prize in Code Purple Hackathon (MJCET College of Engineering)",
    description: "Awarded first prize in the hackathon.",
    date: "Aug 2023"
  },
  {
    id: "hackathon-ieee",
    title: "IEEE Hackathon Award",
    description: "Certificate of participation and appreciation from IEEE for winning a hackathon at Muffakham Jah College of Engineering and Technology (2nd year, 1st semester).",
    date: "Aug 2023"
  },
  {
    id: "olympiad-chat",
    title: "Winner in CHAT Olympiad (Chemistry Exam)",
    description: "Achieved first place in the national chemistry exam.",
    date: "Jan 2020"
  },
  {
    id: "recognition-result-automation",
    title: "IQAC Recognition: Result Automation System",
    description: "Letter of appreciation for developing the Result Automation System (college portal project).",
    date: "Aug 2023"
  },
  {
    id: "recognition-virtual-lab",
    title: "IQAC Recognition: Physics Virtual Lab",
    description: "Letter of appreciation for developing the Physics Virtual Lab.",
    date: "Aug 2023"
  },
  {
    id: "media-the-hindu",
    title: "Media Recognition: Featured in The Hindu",
    description: "Featured with photos highlighting contributions to the Streetcause project (village adoption and community support).",
    date: "Jan 2024"
  },
  {
    id: "community-saksham",
    title: "NSS & Community Service: Saksham Telangana",
    description: "Certificate of Appreciation from Saksham Telangana for contributions at the 'Divyang Sammelana' event.",
    date: "Apr 2024"
  },
  {
    id: "community-streetcause",
    title: "NSS & Community Service: Streetcause Hyderabad",
    description: "Certificate of Service for the 2023-2024 tenure.",
    date: "Jul 2024"
  }
];


export const leadership = [
  {
    id: "streetcause",
    title: "Community Outreach Volunteer",
    organization: "StreetCause KMIT",
    duration: "2023-Present",
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
    organization: "StreetCause KMIT",
    duration: "2022-Present",
    description: "Participated in community service projects such as educational programs for underprivileged children and food distribution drives for the needy."
  }
];

export const patents: Patent[] = [
  {
    id: "breast-cancer-classification",
    title: "Classification & segmentation of breast cancer mass in ultrasound Imagery/Video with 3D visualization",
    applicationNumber: "202541059395 A",
    publicationNumber: "62410",
    filingDate: "20/06/2025",
    publicationDate: "27/06/2025",
    applicationAuthority: "Patent Office Journal No. 26/2025, India",
    inventors: [
      "Mr. BABA GANDHI KANDAGATLA",
      "Ms. KODIPYAKA RAKSHITHA", 
      "Mr. KUMMARI SAI TEJA",
      "Mr. SUSHANTH REDDY PEDDIREDDY",
      "Mr. BHARADWAJ REDDY VANCHA",
      "Mr. PRADYUMNA JONNALAGADDA",
      "Mr. CHANDRAHAAS JASTI"
    ],
    applicant: "Keshav Memorial Institute of Technology",
    abstract: "A computer-implemented system and method are provided for the classification and segmentation of breast cancer in ultrasound images, integrated with virtual reality (VR) visualization for diagnostic support and medical training. The system employs deep learning models, including a Vision Transformer (ViT-B/16) and pre-trained EfficientNet B0 for image classification, and UNETR and UNet-based architectures for tumor segmentation. Input ultrasound images are processed to generate diagnostic predictions and corresponding segmentation masks, which are combined and displayed in an interactive VR environment developed using Unreal Engine. The system enables real-time visualization and user interaction, allowing clinicians and trainees to explore tumor characteristics and adjust outputs as needed. The invention enhances diagnostic accuracy and provides a scalable tool for clinical education and decision support.",
    status: "Published"
  }
];