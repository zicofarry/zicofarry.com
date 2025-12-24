export const personalInfo = {
    name: "zicofarry",
    role: "Computer Science Student",
    university: "Universitas Pendidikan Indonesia",
    shortBio: "Transforming complex problems into secure, elegant web solutions. I blend modern web development with a security-first mindset to build applications that are robust and user-centric.",
    about: "I'm a college student currently in my 3rd semester, majoring in Computer Science. I specialize in cryptography but I'm also deeply into low-level programming (reverse engineering). I enjoy writing code that is clean, minimal, and efficient—code that's easy to maintain and flexible. Always looking to grow in software architecture, AI, and machine learning. I love working in driven, collaborative teams committed to building something meaningful.",
    email: "mhmmdzmslm36@gmail.com",
    cvLink: "#" // Masukkan link CV jika ada
};

export const skills = {
    confident: [
        // Yang ada sertifikatnya
        { name: "C Language", cert: "https://www.hackerrank.com/certificates/iframe/cc2cf7caa607" },
        { name: "C++", cert: "https://www.hackerrank.com/certificates/iframe/cc2cf7caa607" },
        { name: "Python", cert: "https://www.hackerrank.com/certificates/iframe/2e54b1ee8257" },
        { name: "MySQL", cert: "https://www.hackerrank.com/certificates/iframe/40a329fe72e1" },
        
        // Yang belum ada sertifikat (dari badge shield.io kamu)
        { name: "Java", cert: null },
        { name: "PHP", cert: null },
        { name: "Laravel", cert: null },
        { name: "JavaScript", cert: null },
        { name: "Node.js", cert: null },
        { name: "Fastify", cert: null },
        { name: "FastAPI", cert: null },
        { name: "React", cert: null },
        { name: "Vue.js", cert: null },
        { name: "Nuxt.js", cert: null },
        { name: "PostgreSQL", cert: null },
        { name: "Git", cert: null },
    ],
    exploring: [
        "Object Oriented Programming",
        "Artificial Intelligence",
        "Cyber Security (Cryptography)",
        "Mobile Programming"
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
        desc: "Get 13th Place in an international CTF Competition (2025, Team)."
    },
    {
        title: "136th Place - BDSec CTF 2025",
        year: "2025",
        organizer: "BDSec CTF",
        desc: "Get 136th Place in an international CTF Competition (2025, Team)."
    }
];

export const projects = [
    {
        id: 1,
        title: "CatTake",
        type: "Web Application",
        desc: "Platform adopsi dan komunitas pecinta kucing. Fitur lengkap mulai dari adopsi, pelaporan hilang, hingga artikel edukasi.",
        tech: ["Vue.js", "Tailwind", "Fastify", "PostgreSQL"],
        image: "/img/cattake-cover.jpg", 
        link: "https://cattake.zicofarry.com",
        demo: "https://youtu.be/zwF_WMXUnz4?si=ZLAl3U5QlzPmvJgI" 
    },
    {
        id: 2,
        title: "GymAI",
        type: "AI Implementation",
        desc: "Asisten jadwal gym otomatis berbasis AI (Algorithm CSP). Membantu user menentukan jadwal latihan paling efisien.",
        tech: ["React", "Python", "FastAPI", "Tailwind"],
        image: "/img/gymai-cover.jpg",
        link: "https://gymai.zicofarry.com",
        demo: "https://youtu.be/cQY0GuRAdeM?si=jiffYjeJV3DqEWiZ"
    },
    {
        id: 3,
        title: "PilahPintar (DBMS)",
        type: "Database Management System",
        desc: "Aplikasi manajemen bank sampah terintegrasi database. Fitur mencakup pencatatan setoran sampah, pengelolaan nasabah, konversi poin, dan laporan statistik otomatis.",
        tech: ["PHP Native", "MySQL", "Javascript", "CSS"],
        image: "/img/pilahpintar.jpg",
        link: "https://github.com/zicofarry/DBMS-PilahPintar", // Ini link Repo
        demo: "https://youtu.be/I3xi1KbXXk0?si=riKHZGMUjWy2QKu2"
    },
    {
        id: 4,
        title: "Brainrot Programming Language",
        type: "Compiler Design",
        desc: "Bahasa pemrograman esoterik kustom berbasis C. Memiliki lexer, parser, dan interpreter sendiri dengan sintaks unik (slang). Mendukung operasi aritmatika, loop, dan logic.",
        tech: ["C Language", "Compiler Design", "Lexer/Parser"],
        image: "/img/brainrot.jpg",
        link: "https://github.com/zicofarry/brainrot-programming-language", // Link Repo
        repo: true,
        demo: "https://youtu.be/5HfxV9UaTvk?si=Hp7B3flDi1cXfML-"
    },
    {
        id: 5,
        title: "Judge System",
        type: "Console App",
        desc: "Sistem simulasi 'Hakim' berbasis CLI (Command Line Interface). Menganalisis input kasus kriminal dan menentukan vonis hukuman berdasarkan logika hukum yang kompleks.",
        tech: ["C Language", "Data Structure", "File Handling", "Sequential Files", "DBMS"],
        image: "/img/dbms.jpg", // Pastikan gambarnya sesuai (mungkin screenshot terminal?)
        link: "https://github.com/zicofarry/TMD-DASPROG24", // Link Repo
        repo: true,
        demo: "https://youtu.be/MmtzXXVA5gg?si=RbyEfap8_KtAqsnU" // Ada demonya
    }
];

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
        name: "Spotify", 
        url: "https://open.spotify.com/user/username_kamu", // Ganti dengan link spotify profil kamu yang benar
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg" 
    },
    { 
        name: "SoundCloud", 
        url: "https://soundcloud.com/muhammad-azmi-salam", 
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/soundcloud.svg" 
    },
    { 
        name: "CodeForces", 
        url: "https://codeforces.com/profile/zicofarry/", 
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codeforces.svg" 
    },
    { 
        name: "HackerRank", 
        url: "https://www.hackerrank.com/profile/mhmmdzmslm36", 
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackerrank.svg" 
    },
    { 
        name: "HackTheBox", 
        url: "https://ctf.hackthebox.com/user/profile/780323", 
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackthebox.svg" 
    },
    { 
        name: "Email", 
        url: "mailto:mhmmdzmslm36@gmail.com", 
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" 
    }
];