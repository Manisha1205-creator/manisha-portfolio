export const personalInfo = {
  name: "Manisha Pandey",
  role: "Computer Science Engineering Student | Aspiring Software Developer",
  shortBio:
    "I am a Computer Science Engineering student passionate about software development, problem-solving, and building technology-driven solutions. I enjoy exploring new technologies, developing practical projects, and continuously improving my technical skills.",
  aboutText:
    "I am Manisha Pandey, a final-year Computer Science Engineering student with an interest in software development and emerging technologies. I enjoy learning programming concepts, solving technical problems, and transforming ideas into practical applications. Through academic projects and hackathon participation, I aim to strengthen my development skills and gain practical experience.",
  location: "India",
  status: "Available for Entry-Level Roles & Software Internships",
  email: "manishapandey.dev@gmail.com",
  github: "https://github.com/manishapandey",
  linkedin: "https://linkedin.com/in/manishapandey",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering",
    year: "Final Year Student",
    status: "In Progress",
    description:
      "Comprehensive coursework in Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering methodologies.",
    keyCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (MySQL)",
      "Web Technologies & Full-Stack Development",
      "Operating Systems & Architecture",
      "Computer Networks",
    ],
  },
  coreQualities: [
    {
      title: "Problem-Solving Mindset",
      description: "Approaching complex challenges systematically with logical breakdown and efficient algorithmic thinking.",
      icon: "Cpu",
    },
    {
      title: "Quick Learner",
      description: "Rapidly assimilating new frameworks, libraries, and programming paradigms to build working solutions.",
      icon: "Zap",
    },
    {
      title: "Software Development Passion",
      description: "Dedicated to crafting clean, structured, and user-friendly software that solves genuine user pain points.",
      icon: "Code2",
    },
    {
      title: "Practical Project Focus",
      description: "Translating theoretical academic computer science concepts into robust, tangible web applications.",
      icon: "Layers",
    },
    {
      title: "Continuous Learning",
      description: "Consistently seeking opportunities to upgrade technical knowledge through hackathons and coursework.",
      icon: "TrendingUp",
    },
    {
      title: "Collaborative Team Player",
      description: "Communicating effectively in project teams, sharing ideas, and incorporating constructive feedback.",
      icon: "Users",
    },
  ],
  learningPhilosophy:
    "I believe that deep understanding comes from building. By pairing foundational computer science concepts with deliberate hands-on practice, I continuously refine my coding standards, architecture decisions, and troubleshooting ability.",
  careerObjective:
    "To begin my professional career as a Software Developer in a progressive engineering environment where I can contribute to meaningful applications, write clean code, and learn from experienced mentors.",
};

export const skillsData = [
  {
    category: "Programming",
    description: "Core languages for algorithmic thinking and system design",
    skills: [
      { name: "Java", level: "Proficient", type: "Core", notes: "OOP, Scaler Certified, Application Logic" },
      { name: "Python", level: "Exploring", type: "Scripting", notes: "Scripting, Data handling, AI concepts" },
      { name: "C", level: "Proficient", type: "Foundational", notes: "System basics, Pointers, Memory concepts" },
      { name: "C++", level: "Proficient", type: "Core", notes: "Data structures, Algorithm implementation" },
    ],
  },
  {
    category: "Frontend",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "React.js", level: "Proficient", type: "Framework", notes: "Hooks, Component architecture, State" },
      { name: "JavaScript", level: "Proficient", type: "Language", notes: "ES6+, Async/Await, DOM manipulation" },
      { name: "HTML5", level: "Proficient", type: "Markup", notes: "Semantic structure, Accessibility (a11y)" },
      { name: "CSS3 / Tailwind", level: "Proficient", type: "Styling", notes: "Flexbox, Grid, Responsive layouts" },
    ],
  },
  {
    category: "Backend",
    description: "Creating server-side logic and RESTful application endpoints",
    skills: [
      { name: "Node.js", level: "Proficient", type: "Runtime", notes: "Event-driven runtime, NPM ecosystem" },
      { name: "Express.js", level: "Proficient", type: "Framework", notes: "Routing, Middleware, REST APIs" },
    ],
  },
  {
    category: "Database",
    description: "Relational data modeling, schema design, and querying",
    skills: [
      { name: "MySQL", level: "Proficient", type: "RDBMS", notes: "Relational schema, Joins, Integrity" },
      { name: "SQL", level: "Proficient", type: "Query Language", notes: "Complex queries, CRUD operations" },
    ],
  },
  {
    category: "Tools & Workflow",
    description: "Modern developer tooling for version control and productivity",
    skills: [
      { name: "Git", level: "Proficient", type: "Version Control", notes: "Branching, Merging, Commit hygiene" },
      { name: "GitHub", level: "Proficient", type: "Collaboration", notes: "Repositories, Code reviews, Hosting" },
      { name: "VS Code", level: "Proficient", type: "IDE", notes: "Primary development environment" },
    ],
  },
];

export const projectsData = [
  {
    id: "scam-sathi",
    title: "Scam Sathi",
    category: "AI & Cybersecurity",
    filterCategory: "ai-cybersecurity",
    badge: "Hackathon Project",
    status: "Hackathon Prototype (CHAKRAVYUH 1.0)",
    statusType: "prototype",
    shortDescription:
      "An AI-oriented cybersecurity solution engineered to help digital users identify suspicious online activities, analyze phishing signals, and elevate digital scam awareness.",
    problemStatement:
      "With the surge in digital adoption, online users are inundated with deceitful phishing messages, lottery scams, and deceptive URLs. Non-technical users often lack accessible tools to quickly verify the legitimacy of suspicious communications before falling victim to fraud.",
    solution:
      "Scam Sathi offers an intuitive user-facing security companion that evaluates suspicious message strings, flags known fraud patterns, and presents clear safety checklists to help users navigate the web confidently.",
    technologies: ["Python", "NLP Concepts", "React.js", "Tailwind CSS", "REST API"],
    highlights: [
      "Scam awareness & digital literacy guidance",
      "Suspicious message & link pattern verification",
      "User-friendly and accessible interface for all age groups",
      "Cybersecurity-focused practical initiative",
      "Presented at CHAKRAVYUH 1.0 Hackathon",
    ],
    features: [
      {
        title: "Pattern Detection Heuristics",
        desc: "Examines message structures for urgent threats, fraudulent claims, and anomalous URL structures.",
      },
      {
        title: "Actionable Safety Tips",
        desc: "Provides instant do's and don'ts when encountering suspicious SMS, email, or social media messages.",
      },
      {
        title: "Clean Scam Reporting Flow",
        desc: "Designed to simplify the logging of deceptive communications for community awareness.",
      },
      {
        title: "Accessible UI",
        desc: "Simple high-contrast design ensuring non-technical and senior citizens can easily navigate.",
      },
    ],
    hackathonNote:
      "Developed and presented as a confirmed participant in the CHAKRAVYUH 1.0 Hackathon (AI & Cybersecurity track).",
    githubUrl: "https://github.com/manishapandey/scam-sathi",
    liveUrl: "https://scam-sathi-demo.vercel.app",
    color: "from-cyan-500/20 via-transparent to-purple-500/10",
    accentColor: "cyan",
  },
  {
    id: "cs-nexus",
    title: "CS Nexus",
    category: "EdTech & Full-Stack",
    filterCategory: "full-stack",
    badge: "Core Project",
    status: "Under Active Development",
    statusType: "active",
    shortDescription:
      "A Computer Science educational platform built with React, Node.js, and MySQL to organize academic resources, study roadmaps, and curated learning materials for engineering students.",
    problemStatement:
      "Computer Science students often face fragmented learning resources scattered across multiple websites, chat groups, and repositories, making structured exam preparation and concept mastery needlessly chaotic.",
    solution:
      "CS Nexus consolidates essential computer science subjects into a well-structured portal featuring student and administrator roles, categorized syllabus modules, and planned curated video integrations.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    highlights: [
      "Structured educational content hierarchy",
      "Clean, distraction-free student portal",
      "Admin dashboard for managing topics & resources",
      "YouTube content integration (planned feature roadmap)",
      "Full-stack relational architecture",
    ],
    features: [
      {
        title: "Curriculum Repository",
        desc: "Organized by core domains: DSA, Database Systems, Web Tech, and OS fundamentals.",
      },
      {
        title: "Role-Based Access",
        desc: "Distinct views and privileges for students browsing content and administrators curating study notes.",
      },
      {
        title: "Relational Data Organization",
        desc: "Normalized MySQL schema structuring subjects, topics, and downloadable study materials.",
      },
      {
        title: "Video Integration Roadmap",
        desc: "Planned integration of verified YouTube educational playlists for visual learners.",
      },
    ],
    hackathonNote: null,
    githubUrl: "https://github.com/manishapandey/cs-nexus",
    liveUrl: "https://cs-nexus-demo.vercel.app",
    color: "from-purple-500/20 via-transparent to-cyan-500/10",
    accentColor: "purple",
  },
  {
    id: "vehicle-tracking-system",
    title: "Vehicle Tracking System",
    category: "Web Application",
    filterCategory: "web-apps",
    badge: "Academic Project",
    status: "Completed Academic Project",
    statusType: "completed",
    shortDescription:
      "A web application designed for fleet monitoring, vehicle registration management, and route status visualization across diverse vehicle categories.",
    problemStatement:
      "Coordinating institutional or commercial vehicles manually causes scheduling inaccuracies, lack of transit visibility, and inefficient route oversight.",
    solution:
      "A web-based tracking dashboard enabling operators to log vehicle profiles, monitor operational status, review assigned routes, and improve fleet coordination through an interactive web UI.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "Express.js", "MySQL", "Leaflet API"],
    highlights: [
      "Centralized vehicle information management",
      "Status and location monitoring interface",
      "Support for multiple vehicle classifications",
      "Route assignment and tracking concepts",
    ],
    features: [
      {
        title: "Fleet Inventory Registry",
        desc: "Maintains details for buses, service cars, and logistics vans with license and driver records.",
      },
      {
        title: "Interactive Map Visualization",
        desc: "Displays transit routes and simulated waypoint updates via Leaflet maps integration.",
      },
      {
        title: "Operational Status Indicators",
        desc: "Real-time indicators showing active in-transit, idling, or maintenance states.",
      },
      {
        title: "Route Schedule Logger",
        desc: "Logs departure and arrival benchmarks to encourage punctual transit performance.",
      },
    ],
    hackathonNote: null,
    githubUrl: "https://github.com/manishapandey/vehicle-tracking-system",
    liveUrl: "https://vehicle-tracking-demo.vercel.app",
    color: "from-sky-500/20 via-transparent to-blue-500/10",
    accentColor: "cyan",
  },
  {
    id: "digital-property-tax-assistant",
    title: "Digital Property Tax Assistant",
    category: "Digital Public Services",
    filterCategory: "civic-tech",
    badge: "Concept & Proposal",
    status: "Proposed Architectural Concept",
    statusType: "concept",
    shortDescription:
      "A proposed civic-technology web application intended to make property tax calculations, municipal guidelines, and public property services accessible, transparent, and easy to understand.",
    problemStatement:
      "Civic property tax structures and municipal documentation are often difficult for homeowners to interpret, leading to calculation confusion, missed deadlines, and over-reliance on intermediaries.",
    solution:
      "A proposed accessible digital assistant that breaks down property tax criteria into intuitive questions, provides transparent calculation previews, and outlines essential municipal compliance steps in plain language.",
    technologies: ["React.js", "Tailwind CSS", "Web Standards", "Civic UI System"],
    highlights: [
      "Transparent property tax calculation assistance",
      "Step-by-step municipal guidelines and checklist",
      "Simplified citizen-centric user experience",
      "Focus on public service accessibility",
    ],
    features: [
      {
        title: "Interactive Estimate Simulator",
        desc: "Allows property owners to input property type, dimensions, and zone to compute estimated taxes.",
      },
      {
        title: "Plain-Language Guidelines",
        desc: "Demystifies municipal terms and exemptions into straightforward consumer language.",
      },
      {
        title: "Document Readiness Checklist",
        desc: "Dynamic checklist guiding citizens on required documentation prior to filing.",
      },
      {
        title: "Accessible Architecture",
        desc: "High-readability layouts designed to support various literacy and digital experience levels.",
      },
    ],
    hackathonNote:
      "Proposed as an architectural civic-tech concept to demonstrate practical problem-solving in digital public service delivery.",
    githubUrl: "https://github.com/manishapandey/digital-property-tax-assistant",
    liveUrl: "https://property-tax-assistant-concept.vercel.app",
    color: "from-emerald-500/20 via-transparent to-cyan-500/10",
    accentColor: "emerald",
  },
];

export const journeyTimeline = [
  {
    year: "Current / Final Year",
    period: "2023 - Present",
    title: "B.Tech in Computer Science & Engineering (Final Year)",
    category: "Academic",
    subtitle: "Core Computer Science & Applied Software Engineering",
    description:
      "Deepening proficiency in data structures, algorithms, relational databases, web engineering, and system design principles. Working on capstone practical projects and refining software development practices.",
    icon: "GraduationCap",
    tags: ["DSA", "DBMS", "Software Engineering", "Full-Stack Dev"],
  },
  {
    year: "Hackathon Milestone",
    period: "Confirmed Participation",
    title: "CHAKRAVYUH 1.0 Hackathon Participation",
    category: "Hackathon",
    subtitle: "AI & Cybersecurity Track | Scam Sathi",
    description:
      "Participated actively in the intense CHAKRAVYUH 1.0 competitive hackathon. Designed and pitched 'Scam Sathi', an AI-oriented anti-scam awareness application addressing digital fraud and phishing detection.",
    icon: "ShieldAlert",
    tags: ["Hackathon", "Cybersecurity", "AI Concept", "Scam Sathi"],
  },
  {
    year: "Technical Certification",
    period: "Verified Completion",
    title: "Java Fundamentals Learning",
    category: "Certification",
    subtitle: "Scaler Topics | Core Java & OOP Principles",
    description:
      "Successfully completed rigorous training in Java fundamentals through Scaler Topics. Mastered core syntax, Object-Oriented Programming (OOP) principles, inheritance, polymorphism, encapsulation, and problem solving.",
    icon: "Award",
    tags: ["Java", "OOP", "Scaler Topics", "Algorithms"],
  },
  {
    year: "Project Development",
    period: "Academic Year",
    title: "CS Nexus & Full-Stack Web Projects",
    category: "Development",
    subtitle: "React.js, Node.js, Express & MySQL Implementations",
    description:
      "Architected and implemented end-to-end web applications including CS Nexus (educational platform with role management) and the Vehicle Tracking System web application.",
    icon: "Code",
    tags: ["React.js", "Node.js", "Express.js", "MySQL"],
  },
  {
    year: "Foundation",
    period: "Undergraduate Journey",
    title: "Programming Foundations & Practice",
    category: "Foundation",
    subtitle: "C / C++ Problem Solving & Algorithmic Practice",
    description:
      "Built strong foundation in algorithmic logic, control structures, pointers, and memory mechanics through C and C++ coursework and coding exercises.",
    icon: "Terminal",
    tags: ["C", "C++", "Logic Building", "Algorithms"],
  },
];

export const certificationsData = [
  {
    id: "scaler-java",
    title: "Java Fundamentals",
    issuer: "Scaler Topics",
    date: "Verified Completion",
    category: "Programming Language",
    description:
      "Comprehensive certification covering Core Java syntax, Object-Oriented Programming paradigms, classes, objects, inheritance, interfaces, exception handling, and foundational memory allocation.",
    skillsLearned: ["Core Java", "OOP Principles", "Class Hierarchies", "Exception Handling", "Memory Model"],
    credentialId: "SCALER-JAVA-FUNDAMENTALS",
    badge: "Verified Coursework",
    verified: true,
  },
];

export const achievementsData = [
  {
    id: "chakravyuh-hackathon",
    title: "CHAKRAVYUH 1.0 Hackathon Participation",
    organizer: "Chakravyuh Technical Committee",
    category: "Competitive Hackathon",
    date: "Participated",
    highlight: "AI-Based Cybersecurity Track with 'Scam Sathi'",
    description:
      "Confirmed participant in the CHAKRAVYUH 1.0 hackathon, collaborating under tight deadlines to prototype 'Scam Sathi'—a digital safety solution designed to alert users against online scams and deceptive communications.",
    impact: "Applied rapid prototyping, problem discovery, and teamwork under hackathon constraints.",
    verifiedStatus: "Confirmed Participation",
    badge: "Hackathon Participant",
  },
  {
    id: "scaler-learning-milestone",
    title: "Java Programming Fundamentals Mastery",
    organizer: "Scaler Topics",
    category: "Technical Upskilling",
    date: "Completed",
    highlight: "Comprehensive Object-Oriented Programming Training",
    description:
      "Successfully mastered foundational and intermediate Java programming concepts through Scaler Topics, laying the groundwork for robust enterprise software development.",
    impact: "Established a solid OOP foundation applied in subsequent academic software projects.",
    verifiedStatus: "Verified Completion",
    badge: "Verified Learner",
  },
  {
    id: "practical-software-endeavors",
    title: "Practical Multi-Tier Application Development",
    organizer: "Academic & Self-Directed",
    category: "Practical Engineering",
    date: "Ongoing",
    highlight: "CS Nexus, Vehicle Tracking System & Scam Sathi",
    description:
      "Consistently developed practical, multi-tier software projects combining React frontend architectures, Node.js/Express backends, and relational MySQL database schemas.",
    impact: "Transformed theoretical coursework into tangible, demonstrable software systems.",
    verifiedStatus: "Active Portfolio",
    badge: "Project Builder",
  },
];

