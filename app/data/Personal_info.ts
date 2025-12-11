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

export interface Publication {
  id: string;
  title: string;
  paperId: string;
  conference: string;
  date: string;
  authors: string[];
  abstract: string;
  certificateImage?: string;
  status: string;
}

export const personalInfo = {
  name: "Baba Gandhi Kandagatla",
  title: "AI/ML Engineer and Full-Stack Developer",
  summary: "AI/ML Engineer and Full-Stack Developer with expertise in building scalable machine learning solutions, cloud-based AI applications, and end-to-end software deployment. Proven experience in designing and deploying production-level solutions, integrating AI models with real-time systems, and optimizing performance using data-driven insights. Currently enhancing back-end skills with Spring Boot while deepening applied AI research and real-world model deployment.",
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
      duration: "November 2022 - June 2026",
      gpa: "8.08/10.0",
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
    items: ["AWS (EC2, Lambda, S3, CDK, CodePipeline, CloudWatch)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "GitHub Actions"]
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
    duration: "Jul 2025 - Jun 2026",
    description: "• Led resolution of 90+ authentication and authorization issues across web and iOS, including 30+ high-impact bugs and a large-scale abuse/spam incident, strengthening platform security and user trust. • Drove reliability of identity flows by designing and fixing 20+ E2E tests (login, logout, password reset, email edit, role management), reducing flakiness in QA/Prod and catching regressions before release. • Refined user experience for organisers and attendees by centralising and correcting error messages, tightening validation (including alignment with Auth0), and refining UI text, resulting in clearer, more intuitive authentication journeys. • Reduced weekly URL-related failures by over 95% and fixed multiple edge-case issues (SQL errors, session handling, admin cookie on logout, Apple toggle in linked accounts), significantly increasing stability of core identity services. • Introduced infrastructure-as-code for CloudWatch dashboards using CDK (with CI/CD integration and approvals) and instrumented key auth events with analytics, enabling better observability and data-driven decision-making."
  }
];

export const achievements: Achievement[] = [
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

export const publications: Publication[] = [
  {
    id: "ieee-etcom-2025",
    title: "A Comparative Evaluation of Contextual and Statistical Text Representations in Deep Sequential Architectures for Multiclass Sentiment Classification",
    paperId: "350",
    conference: "IEEE ETCOM 2025",
    date: "December 2025",
    authors: ["Baba Gandhi Kandagatla"],
    abstract: "In today's digital age, customer reviews significantly influence consumer behavior and business strategies, making their sentiment analysis crucial for informed decision making. Sentiment classification of user generated reviews is essential for businesses and researchers to gauge public opinion. In this study, we perform a comparative evaluation of multiple deep learning based Natural Language Processing models such as Traditional Recurrent Neural Networks (RNN) and Neural Networks (NN), Long Short Term Memory (LSTM), Gated Recurrent Unit (GRU), and Bidirectional Encoder Representations from Transformers (BERT) each paired with contextual and statistical vectorizers as well i.e., Word2Vec, Term Frequency Inverse Document Frequency (TF-IDF) and BERT encoder. Experiments were conducted on a concatenated corpus comprising 120,000 Yelp reviews, 60,000 Amazon product reviews, and 7,000 Rotten Tomatoes movie critiques. Model performance was assessed using accuracy, F1-score, area under the ROC curve (AUC), processing power and time taken for each epoch.",
    certificateImage: "/img/IEEE_ETCOM_certificate.png",
    status: "Presented & Published"
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