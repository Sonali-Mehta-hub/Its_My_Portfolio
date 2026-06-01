// ============================================================
//  src/data.js  —  Sonali Kumari's Portfolio Data
// ============================================================


// ── ABOUT ────────────────────────────────────────────────────
export const about = {
  name:       "Sonali Kumari",
  role:       "Full Stack Developer + ML Explorer",
  tagline:    "Build. Learn. Ship.",
  bio1:       `3rd-year B.Tech CSE student at Amity University Jharkhand
with a CGPA of 9.3. I define myself as a Woman in STEM
aspiring to build scalable software.`,
  bio2:       `I have hands-on experience in Full Stack Web Development
using the MERN stack and completed an internship at IBM SkillsBuild
working on AI/ML projects. Currently exploring Machine Learning
& Generative AI.`,
  location:   "Jharkhand, India",
  status:     "3rd Year B.Tech CSE",
  cgpa:       "9.3 / 10",
  openTo:     "Software & ML Internships",
  resumeLink: "/Sonali_kumari_resume.pdf",
  email:      "sonalikumari1604@gmail.com",
  phone:      "+91-7677895363",
  github:     "https://github.com/Sonali-Mehta-hub",
  linkedin:   "https://www.linkedin.com/in/sonali-kumari-451967275/",
  twitter:    "",
  leetcode: "https://leetcode.com/YOUR_USERNAME", // ✏️ apna username daalo
  avatar:     "/Sonali.jpg",
};


// ── EDUCATION ────────────────────────────────────────────────
export const education = [
  {
    id:          1,
    year:        "2023 — 2027",
    degree:      "B.Tech in Computer Science & Engineering",
    institution: "Amity University Jharkhand",
    board:       "Amity University",
    score:       "CGPA: 9.3 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Core Computer Science",
    ],
    focus: "Full Stack Development & AI/ML",
  },
  {
    id:          2,
    year:        "XII — 2022",
    degree:      "Senior Secondary",
    institution: "Ursuline Intermediate College",
    board:       "JAC Board",
    score:       "Percentage: 90%",
    coursework:  [],
    focus:       "Science stream",
  },
  {
    id:          3,
    year:        "X — 2020",
    degree:      "Secondary",
    institution: "Ursuline Convent Girls High School",
    board:       "JAC Board",
    score:       "Percentage: 88.20%",
    coursework:  [],
    focus:       "",
  },
];


// ── EXPERIENCE ───────────────────────────────────────────────
export const experience = [
  {
    id:       1,
    role:     "AI/ML Intern",
    company:  "IBM SkillsBuild (Edunet Foundation)",
    type:     "Virtual Internship",
    duration: "June 2025 – July 2025",
    points: [
      "Developed an Employee Salary Prediction project using supervised Machine Learning.",
      "Utilized Python libraries — Pandas, NumPy, and Scikit-learn — for data preprocessing and model building.",
      "Gained hands-on experience with IBM Watson Studio and cloud-based AI tools.",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "IBM Watson"],
  },
];


// ── SKILLS ───────────────────────────────────────────────────
export const skills = [
  {
    id:         1,
    cat:        "Languages",
    colorClass: "cat-lang",
    tags:       ["Python", "C++", "Java", "JavaScript"],
  },
  {
    id:         2,
    cat:        "Frontend",
    colorClass: "cat-fe",
    tags:       ["React.js", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    id:         3,
    cat:        "Backend",
    colorClass: "cat-be",
    tags:       ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id:         4,
    cat:        "Database",
    colorClass: "cat-db",
    tags:       ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    id:         5,
    cat:        "ML & Gen AI",
    colorClass: "cat-ml",
    tags:       ["Scikit-learn", "Pandas", "NumPy", "IBM Watson", "ML Fundamentals"],
  },
  {
    id:         6,
    cat:        "Tools & Platforms",
    colorClass: "cat-tools",
    tags:       ["Git", "GitHub", "VS Code", "Cloudinary", "Render"],
  },
  {
    id:         7,
    cat:        "Core CS",
    colorClass: "cat-cs",
    tags:       ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];


// ── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    id:         1,
    name:       "Festify",
    desc:       "A full-stack web app for discovering and managing event destinations. Features user authentication, browse/filter venue listings, an admin panel with CRUD operations, and Cloudinary image uploads.",
    tags:       ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary"],
    live:       true,
    liveLink:   "https://festify-fx0n.onrender.com/",
    githubLink: "https://github.com/Sonali-Mehta-hub/festify",
    featured:   true,
  },
  {
    id:         2,
    name:       "TabCommander",
    desc:       "A Chrome extension for keyboard and voice-controlled tab management. Enables instant tab search, navigation, and session recovery — reduced tab-switching time by ~40%.",
    tags:       ["JavaScript", "Browser Extension API", "HTML", "CSS", "Web Speech API"],
    live:       false,
    liveLink:   "https://sonali-mehta-hub.github.io/TabCommander-Browser-Extension-/",
    githubLink: "https://github.com/Sonali-Mehta-hub/tabcommander",
    featured:   true,
  },
  {
    id:         3,
    name:       "Employee Salary Predictor",
    desc:       "An ML model built using supervised learning techniques to predict employee salaries. Built during IBM SkillsBuild internship using Scikit-learn, Pandas, and NumPy.",
    tags:       ["Python", "Scikit-learn", "Pandas", "NumPy", "IBM Watson"],
    live:       false,
    liveLink:   "",
    githubLink: "https://github.com/Sonali-Mehta-hub/salary-predictor",
    featured:   false,
  },
];


// ── CERTIFICATIONS ───────────────────────────────────────────
// ✅ Hackathon REMOVED from here — moved to blogs as experience
export const certifications = [
  {
    id:    1,
    icon:  "🥇",
    title: "NPTEL Top 2%",
    desc:  "Secured Top 2% among all learners in Fundamentals of Object-Oriented Programming course by NPTEL.",
    year:  "2024",
  },
  {
    id:    2,
    icon:  "🤖",
    title: "IBM AI/ML Internship",
    desc:  "Selected for IBM SkillsBuild AI/ML Internship via Edunet Foundation — built ML models with IBM Watson Studio.",
    year:  "2025",
  },
  {
    id:    3,
    icon:  "📜",
    title: "AI Fundamentals — IBM",
    desc:  "Certified in Artificial Intelligence Fundamentals by IBM SkillsBuild.",
    year:  "2025",
  },
  {
    id:    4,
    icon:  "💻",
    title: "GfG 160 Challenge",
    desc:  "Completed GfG 160: 160 Days of Problem Solving — GeeksforGeeks.",
    year:  "2025",
  },
  {
    id:    5,
    icon:  "🌐",
    title: "Web Dev Certification",
    desc:  "Completed full Web Development course certification from Apna College.",
    year:  "2024",
  },
];


// ── BLOGS ────────────────────────────────────────────────────
// ✅ 3 types — "experience" | "blog" | "achievement"
// experience = hackathon, internship stories
// blog = technical writeups
// achievement = wins, milestones

export const blogs = [

  // ── EXPERIENCE / STORY TYPE ──────────────────
  {
    id:       1,
    type:     "experience",           // 🏆 hackathon/event experience
    emoji:    "🏆",
    title:    "My Journey to Innovate-A-Thon 3.0 Finals",
    summary:  "How I made it to the finals of a Web3-focused national hackathon at BIT Mesra, Ranchi — the problem we solved, our tech stack, and what I learned competing against top teams.",
    date:     "2025",
    readTime: "6 min read",
    link:     "https://medium.com/@sonali",   // ✏️ update with real link
    platform: "Medium",
    tags:     ["Hackathon", "Web3", "BIT Mesra"],
  },
  {
    id:       2,
    type:     "experience",           // 💼 internship experience
    emoji:    "💼",
    title:    "My IBM AI/ML Internship Experience",
    summary:  "What I learned during my virtual AI/ML internship at IBM SkillsBuild — from ML workflows to IBM Watson Studio and practical model building with Python.",
    date:     "2025",
    readTime: "6 min read",
    link:     "https://medium.com/@sonali",   // ✏️ update with real link
    platform: "Medium",
    tags:     ["ML", "IBM", "Internship"],
  },

  
  
];


// ── CONTACT ──────────────────────────────────────────────────
export const contact = {
  heading:      "Let's Connect",
  subtext:      "I'm actively looking for software engineering and ML internship opportunities. If you're building something cool or just want to chat tech — my inbox is always open!",
  responseTime: "I usually respond within 24 hours",
  socials: [
    {
      label: "GitHub",
      icon:  "G",
      url:   "https://github.com/Sonali-Mehta-hub",
    },
    {
      label: "LinkedIn",
      icon:  "in",
      url:   "https://www.linkedin.com/in/sonali-kumari-451967275/",
    },
    {
      label: "Email",
      icon:  "@",
      url:   "mailto:sonalikumari1604@gmail.com",
    },
    {
      label: "Phone",
      icon:  "#",
      url:   "tel:+917677895363",
    },
  ],
};