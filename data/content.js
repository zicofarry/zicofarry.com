export const personalInfo = {
    name: "zicofarry",
    role: "Computer Science Student",
    university: "Education University of Indonesia",
    shortBio: "Transforming complex problems into secure, elegant web solutions. I blend modern web development with a security-first mindset to build applications that are robust and user-centric.",
    about: "I'm a college student currently in my 4th semester, majoring in Computer Science. I specialize in cryptography but I'm also deeply into low-level programming (reverse engineering). I enjoy writing code that is clean, minimal, and efficient code that's easy to maintain and flexible. Always looking to grow in software architecture, AI, and machine learning. I love working in driven, collaborative teams committed to building something meaningful.",
    email: "mhmmdzmslm36@gmail.com",
    cvLink: "#"
};

export const skills = {
    confident: [
        // Certified
        { name: "C Language", cert: "https://www.hackerrank.com/certificates/iframe/cc2cf7caa607" },
        { name: "C++", cert: "https://www.hackerrank.com/certificates/iframe/cc2cf7caa607" },
        { name: "Python", cert: "https://www.hackerrank.com/certificates/iframe/2e54b1ee8257" },
        { name: "SQL", cert: "https://www.hackerrank.com/certificates/iframe/40a329fe72e1" },

        // Not certified yet
        { name: "Java", cert: null },
        { name: "PHP", cert: null },
        { name: "GO", cert: null },
        { name: "JavaScript", cert: null },
        { name: "TypeScript", cert: null },

        { name: "Fastify", cert: null },
        { name: "Express.js", cert: null },
        { name: "FastAPI", cert: null },
        { name: "Node.js", cert: null },
        { name: "Laravel", cert: null },
        { name: "Postman", cert: null },

        { name: "Vue.js", cert: null },
        { name: "Nuxt.js", cert: null },
        { name: "React", cert: null },
        { name: "Next.js", cert: null },
        { name: "React Native", cert: null },

        { name: "PostgreSQL", cert: null },
        { name: "MySQL", cert: null },
        { name: "MongoDB", cert: null },
        { name: "SQLite", cert: null },

        { name: "Git", cert: null },
        { name: "Docker", cert: null },
        { name: "Railway", cert: null },
        { name: "Vercel", cert: null },
        { name: "Hostinger", cert: null },
        { name: "Expo", cert: null },
        { name: "Itch.io", cert: null },
    ],
    exploring: [
        "Cyber Security (Cryptography)",
        "Machine Learning",
        "Cloud Computing",
        "Software Engineering"
    ]
};

export const awards = [
    {
        title: "Best Graduate",
        year: "2024",
        organizer: "SMA IT Fithrah Insani Baleendah",
        desc: "Received an award for achieving the highest report card score in high school (2024)."
    },
    {
        title: "13th Place Hack The System - Bug Bounty CTF After Party",
        year: "2025",
        organizer: "HACK THE BOX",
        desc: "Achieved 13th place in an international CTF Competition (2025, Team)."
    },
    {
        title: "136th Place - BDSec CTF 2025",
        year: "2025",
        organizer: "BDSec CTF",
        desc: "Achieved 136th place in an international CTF Competition (2025, Team)."
    }
];

export const experiences = [
    {
        id: 1,
        title: "Practicum Assistant of Programming Fundamentals",
        organization: "Computer Science, Education University of Indonesia",
        period: "Sep 2025 - Dec 2025",
        description: "Taught 88 students programming fundamentals including conditional statements, arrays, loops, and functions."
    },
    {
        id: 2,
        title: "Practicum Assistant of Data Structures",
        organization: "Computer Science, Education University of Indonesia",
        period: "Feb 2026 - Present",
        description: "Taught 88 students about data structures, including pointers, memory allocation, lists, queues, stacks, trees, and graphs."
    },
    {
        id: 3,
        title: "Practicum Assistant of Computer Networks & Operating Systems",
        organization: "Computer Science, Education University of Indonesia",
        period: "Sep 2025 - Present",
        description: "Taught 88 students computer networking using Cisco Packet Tracer and provided an introduction to basic Linux commands."
    }
];

// Personal Projects
export const personalProjects = [
    {
        id: 101,
        title: "The Last Penguin: Yeti Siege",
        type: "Java Game",
        category: "personal",
        desc: `A top-down shooter desktop game built entirely in Java, following the Model-View-Presenter (MVP) architectural pattern to ensure clean separation between game logic, data management, and user interface.

The game features a hybrid database system with SQLite for local storage and MySQL for global leaderboard competition. Players control a penguin defending against waves of enemies, with smooth animations, sound effects, and a comprehensive settings system.

Key technical implementations include custom collision detection, sprite-based rendering using Java Swing, and a modular asset loading system for fonts, images, and sounds.`,
        tech: ["Java", "MVP Architecture", "SQLite", "MySQL", "Swing GUI"],
        image: "/img/penguin-game.png",
        screenshots: [],
        link: "https://zicofarry.itch.io/the-last-penguin-yeti-siege",
        linkType: "release",
        demo: "https://youtu.be/Z1uI9RlTaP4"
    },
    {
        id: 102,
        title: "ChopChop Coffee",
        type: "Web Application",
        category: "personal",
        desc: `A full-stack coffee shop e-commerce platform featuring a modern, glassmorphism-inspired design with smooth animations and a complete theme customization system.

For customers, the platform offers interactive menu browsing, session-persisted shopping cart, table reservations, and secure user authentication. For administrators, there's a comprehensive dashboard with real-time statistics, menu management with image support, order tracking, and content moderation.

Built with Next.js 14+ using the App Router for the frontend, styled with Tailwind CSS and custom CSS variables for theming. The backend runs on Express.js with MongoDB (Mongoose) for data persistence and JWT for secure authentication.`,
        tech: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "Context API"],
        image: "/img/chopchop-cover.png",
        screenshots: [],
        link: "https://chopchop.zicofarry.com",
        linkType: "site",
        demo: null
    },
    {
        id: 103,
        title: "Judge System",
        type: "Console App",
        category: "personal",
        desc: `A CLI-based judicial simulation system developed in C, designed to analyze criminal case inputs and determine sentencing based on complex legal logic.

The application demonstrates proficiency in data structures, file I/O operations, and sequential file processing. It parses case information, applies rule-based logic to evaluate evidence, and outputs appropriate verdicts—simulating the decision-making process of a judicial system.

This project was developed as a final project for the Programming Fundamentals course, showcasing modular programming practices and efficient memory management in C.`,
        tech: ["C Language", "Data Structure", "File Handling", "Sequential Files", "DBMS"],
        image: "/img/dbms.png",
        screenshots: [],
        link: "https://github.com/zicofarry/TMD-DASPROG24",
        linkType: "repo",
        demo: "https://youtu.be/MmtzXXVA5gg?si=RbyEfap8_KtAqsnU"
    }
];

// Team Projects
export const teamProjects = [
    {
        id: 1,
        title: "CatTake",
        type: "Web Application",
        category: "team",
        desc: `A comprehensive cat rescue and adoption platform designed to connect cat lovers with shelters and streamline the adoption process.

Key features include: real-time rescue reporting with Leaflet map integration, driver tracking system for cat pickup operations, live chat between reporters and drivers, verified adoption workflow with document upload (KTP & declaration letter), transparent donation system with QRIS and bank transfer support, and gamification elements including quests, achievements, XP points, and community leaderboards.

The platform is built with Vue 3 Composition API and Tailwind CSS on the frontend, Fastify with PostgreSQL on the backend, featuring JWT authentication and Google OAuth integration.`,
        tech: ["Vue.js", "Vue 3", "Tailwind", "Fastify", "PostgreSQL", "JWT", "Leaflet.js"],
        image: "/img/cattake-cover.png",
        screenshots: [
        "/img/1/1.png", 
        "/img/1/2.png", 
        "/img/1/3.png", 
        "/img/1/4.png",
        "/img/1/5.png",
        "/img/1/6.png",
        "/img/1/7.png",
        "/img/1/8.png",
        "/img/1/9.png",
        "/img/1/10.png",
        "/img/1/11.png",
        "/img/1/12.png",
        "/img/1/13.png",
        "/img/1/14.png",
        "/img/1/15.png",
        "/img/1/16.png"
        ],
        link: "https://cattake.zicofarry.com",
        linkType: "site",
        demo: "https://youtu.be/zwF_WMXUnz4?si=ZLAl3U5QlzPmvJgI"
    },
    {
        id: 2,
        title: "GymAI",
        type: "AI Implementation",
        category: "team",
        desc: `An AI-powered fitness scheduling system that generates personalized workout plans using Constraint Satisfaction Problems (CSP) algorithm and Google Gemini integration.

The application features intelligent schedule generation respecting user availability, location preferences (home/gym), and physical constraints. Additional capabilities include AI chatbot for fitness guidance, user profile management tracking anthropometric data, activity logging with calorie estimation, and an analytics dashboard for performance visualization.

Built with React.js (Vite) and Tailwind CSS on the frontend, FastAPI and SQLAlchemy with MySQL on the backend, with secure authentication via OAuth2 and JWT tokens.`,
        tech: ["React", "Python", "FastAPI", "Tailwind", "MySQL", "Google Gemini", "CSP Algorithm", "SQLAlchemy", "Vite"],
        image: "/img/gymai-cover.png",
        screenshots: ["/img/2/1.png"],
        link: "https://gymai.zicofarry.com",
        linkType: "site",
        demo: "https://youtu.be/cQY0GuRAdeM?si=jiffYjeJV3DqEWiZ"
    },
    {
        id: 3,
        title: "CatTake Mobile",
        type: "Mobile Application",
        category: "team",
        desc: `The mobile companion app for the CatTake platform, bringing the full cat rescue and adoption experience to Android devices.

Built with React Native and Expo SDK 54, the app features file-based routing with Expo Router, NativeWind for Tailwind CSS styling on mobile, and React Native Maps with Google Maps SDK for location features. The app provides a seamless experience for reporting lost cats, tracking rescue missions, browsing adoptable cats, and participating in the community features.

Published as an APK release for easy installation without app store dependencies.`,
        tech: ["React Native", "Expo", "NativeWind", "Google Maps SDK"],
        image: "/img/cattake-mobile.png",
        screenshots: [
            "/img/3/Screenshot_2026-01-28-22-50-33-973_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-50-41-179_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-50-51-612_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-50-53-843_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-51-06-727_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-51-13-741_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-51-22-497_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-51-27-355_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-51-34-142_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-51-50-505_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-51-55-479_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-52-00-123_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-52-07-381_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-52-11-858_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-53-16-301_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-53-27-436_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-53-33-341_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-53-37-907_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-53-53-149_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-53-59-469_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-54-11-390_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-54-18-332_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-54-22-493_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-54-27-005_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-54-29-411_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-54-35-526_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-55-02-592_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-55-12-037_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-55-36-356_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-55-43-060_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-55-47-602_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-56-07-920_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-56-12-555_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-56-16-669_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-56-28-596_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-56-46-033_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-56-51-370_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-56-55-395_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-57-06-064_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-57-10-465_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-57-13-794_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-57-31-693_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-57-36-091_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-57-40-619_com.zicofarry.cattake.jpg",
            "/img/3/Screenshot_2026-01-28-22-57-44-405_com.zicofarry.cattake.jpg"
        ],
        link: "https://github.com/zicofarry/CatTake/releases/download/v1.0.0/CatTake-v1.0.0.apk",
        linkType: "release",
        demo: "https://youtu.be/9F15Dgtf6H4"
    },
    {
        id: 4,
        title: "Brainrot Programming Language",
        type: "Compiler Design",
        category: "team",
        desc: `An esoteric programming language (esolang) built from scratch in C, integrating modern internet culture and meme terminology into a functional programming syntax.

The project includes a complete language implementation with custom lexer, parser, and interpreter. The language supports all essential programming constructs: variable declarations, arithmetic operations, conditional statements, loops, and logical operations—all expressed through unconventional, meme-inspired keywords.

Available as an npm package for easy installation and usage. This project explores the fundamentals of compiler design while adding a creative, humorous twist to programming.`,
        tech: ["C Language", "Compiler Design", "Lexer/Parser"],
        image: "/img/brainrot.png",
        screenshots: [],
        link: "https://www.npmjs.com/package/@zicofarry/brainrot-language",
        linkType: "package",
        demo: "https://youtu.be/5HfxV9UaTvk?si=Hp7B3flDi1cXfML-"
    },
    {
        id: 5,
        title: "PilahPintar (DBMS)",
        type: "Database Management System",
        category: "team",
        desc: `A waste bank management application designed to track waste deposits, manage customers, and generate comprehensive reports for environmental sustainability tracking.

The system provides daily, weekly, and monthly waste deposit reports per user, contribution statistics showing individual impact on total reports, waste type mapping to identify most frequently reported items, weekend-specific waste analysis, and a leaderboard featuring top 3 contributors by volume.

Built using PHP Native with MySQL database, featuring JavaScript for interactivity and custom CSS styling—demonstrating proficiency in traditional web development stack.`,
        tech: ["PHP Native", "MySQL", "JavaScript", "CSS"],
        image: "/img/pilahpintar.png",
        screenshots: [],
        link: "https://github.com/zicofarry/DBMS-PilahPintar",
        linkType: "repo",
        demo: "https://youtu.be/I3xi1KbXXk0?si=riKHZGMUjWy2QKu2"
    }
];

// Combined projects for backward compatibility
export const projects = [...personalProjects, ...teamProjects];

export const contacts = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zicofarry/",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
    },
    {
        name: "GitHub",
        url: "https://github.com/zicofarry",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
    },
    {
        name: "Email",
        url: "mailto:mhmmdzmslm36@gmail.com",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg"
    }
    // {
    //     name: "Spotify",
    //     url: "https://open.spotify.com/user/username_kamu",
    //     icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg"
    // },
    // {
    //     name: "SoundCloud",
    //     url: "https://soundcloud.com/muhammad-azmi-salam",
    //     icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/soundcloud.svg"
    // },
    // {
    //     name: "CodeForces",
    //     url: "https://codeforces.com/profile/zicofarry/",
    //     icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codeforces.svg"
    // },
    // {
    //     name: "HackerRank",
    //     url: "https://www.hackerrank.com/profile/mhmmdzmslm36",
    //     icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackerrank.svg"
    // },
    // {
    //     name: "HackTheBox",
    //     url: "https://ctf.hackthebox.com/user/profile/780323",
    //     icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackthebox.svg"
    // }
];