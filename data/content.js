export const personalInfo = {
    name: "zicofarry",
    role: "Computer Science Student",
    university: "Universitas Pendidikan Indonesia",
    about: "I am an undergraduate student majoring in Computer Science at Universitas Pendidikan Indonesia. I have a great interest in programming, especially in the fields of Web Development and Cyber Security (CTF). I am a person who is easy to adapt to a new environment and can work well individually or in a team.",
    email: "mhmmdzmslm36@gmail.com",
    cvLink: "#" // Masukkan link CV jika ada
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
        demo: "https://youtube.com/..." 
    },
    {
        id: 2,
        title: "GymAI",
        type: "AI Implementation",
        desc: "Asisten jadwal gym otomatis berbasis AI (Algorithm CSP). Membantu user menentukan jadwal latihan paling efisien.",
        tech: ["React", "Python", "FastAPI", "Tailwind"],
        image: "/img/gymai-cover.jpg",
        link: "https://gymai.zicofarry.com",
        demo: "https://youtube.com/..."
    },
    {
        id: 3,
        title: "PilahPintar",
        type: "Desktop App",
        desc: "Aplikasi edukasi pemilahan sampah dengan elemen gamifikasi (Java GUI).",
        tech: ["Java", "Swing", "OOP"],
        image: "/img/pilahpintar.jpg",
        link: "https://https://github.com/zicofarry/DBMS-PilahPintar",
        demo: null
    },
    {
        id: 4,
        title: "BrainRot Game",
        type: "Game Dev",
        desc: "Game ketangkasan sederhana untuk menguji refleks dan logika game loop.",
        tech: ["Java", "Game Logic"],
        image: "/img/brainrot.jpg",
        link: "https://github.com/zicofarry/brainrot",
        demo: null
    },
    {
        id: 5,
        title: "Sistem Perpustakaan",
        type: "DBMS Project",
        desc: "Manajemen data perpustakaan (DBMS) mencakup sirkulasi buku dan anggota.",
        tech: ["PHP", "Native", "MySQL"],
        image: "/img/dbms.jpg",
        link: null,
        demo: null
    }
];

export const contacts = [
    { name: "GitHub", url: "https://github.com/zicofarry", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-azmi-salam-490356247", icon: "linkedin" },
    { name: "Instagram", url: "https://instagram.com/zicofarry", icon: "instagram" },
    { name: "CodeForces", url: "https://codeforces.com/profile/zicofarry", icon: "code" }, // Icon placeholder
    { name: "HackTheBox", url: "https://ctf.hackthebox.com/user/profile/780323", icon: "box" }
];
