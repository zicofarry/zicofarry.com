// Tech Icons mapping using Simple Icons CDN with light colors for dark backgrounds
// Format: https://cdn.simpleicons.org/[slug]/[color]
// Using light/brand colors for visibility on dark theme

export const techIcons = {
    // Languages
    "Java": "https://cdn.simpleicons.org/openjdk/ED8B00",
    "C Language": "https://cdn.simpleicons.org/c/A8B9CC",
    "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
    "Python": "https://cdn.simpleicons.org/python/3776AB",
    "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
    "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
    "PHP": "https://cdn.simpleicons.org/php/777BB4",
    "PHP Native": "https://cdn.simpleicons.org/php/777BB4",
    "GO": "https://cdn.simpleicons.org/go/00ADD8",
    "CSS": "https://cdn.simpleicons.org/css3/1572B6",

    // Frontend Frameworks
    "Vue.js": "https://cdn.simpleicons.org/vuedotjs/4FC08D",
    "Vue 3": "https://cdn.simpleicons.org/vuedotjs/4FC08D",
    "React": "https://cdn.simpleicons.org/react/61DAFB",
    "React Native": "https://cdn.simpleicons.org/react/61DAFB",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/white",
    "Nuxt.js": "https://cdn.simpleicons.org/nuxt/00DC82",
    "Tailwind": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "NativeWind": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Swing GUI": "https://cdn.simpleicons.org/openjdk/ED8B00",
    "Vite": "https://cdn.simpleicons.org/vite/646CFF",

    // Backend Frameworks
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    "Express.js": "https://cdn.simpleicons.org/express/white",
    "Fastify": "https://cdn.simpleicons.org/fastify/white",
    "FastAPI": "https://cdn.simpleicons.org/fastapi/009688",
    "Laravel": "https://cdn.simpleicons.org/laravel/FF2D20",

    // Databases
    "MySQL": "https://cdn.simpleicons.org/mysql/4479A1",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
    "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
    "SQLite": "https://cdn.simpleicons.org/sqlite/003B57",

    // Mobile & Tools
    "Expo": "https://cdn.simpleicons.org/expo/white",
    "Google Maps SDK": "https://cdn.simpleicons.org/googlemaps/4285F4",
    "Leaflet.js": "https://cdn.simpleicons.org/leaflet/199900",
    "Git": "https://cdn.simpleicons.org/git/F05032",
    "JWT Auth": "https://cdn.simpleicons.org/jsonwebtokens/white",
    "JWT": "https://cdn.simpleicons.org/jsonwebtokens/white",
    "Axios": "https://cdn.simpleicons.org/axios/5A29E4",
    "Postman": "https://cdn.simpleicons.org/postman/FF6C37",
    "Docker": "https://cdn.simpleicons.org/docker/2496ED",

    // Deployment & Hosting
    "Railway": "https://cdn.simpleicons.org/railway/white",
    "Vercel": "https://cdn.simpleicons.org/vercel/white",
    "Hostinger": "https://cdn.simpleicons.org/hostinger/673DE6",
    "Itch.io": "https://cdn.simpleicons.org/itchdotio/FA5C5C",

    // AI & ML
    "Google Gemini": "https://cdn.simpleicons.org/googlegemini/8E75B2",
    "Gemini API": "https://cdn.simpleicons.org/googlegemini/8E75B2",
    "SQLAlchemy": "https://cdn.simpleicons.org/sqlalchemy/D71F00",

    // SQL (generic for certified)
    "SQL": "https://cdn.simpleicons.org/mysql/4479A1",

    // Architecture & Concepts (using relevant icons with light colors)
    "MVP Architecture": "https://cdn.simpleicons.org/blueprint/137CBD",
    "Composition API": "https://cdn.simpleicons.org/vuedotjs/4FC08D",
    "Context API": "https://cdn.simpleicons.org/react/61DAFB",
    "Compiler Design": "https://cdn.simpleicons.org/gnu/A42E2B",
    "Lexer/Parser": "https://cdn.simpleicons.org/gnu/A42E2B",
    "CSP Algorithm": "https://cdn.simpleicons.org/thealgorithms/00BCB4",
    "Data Structure": "https://cdn.simpleicons.org/stackblitz/1389FD",
    "File Handling": "https://cdn.simpleicons.org/files/4285F4",
    "Sequential Files": "https://cdn.simpleicons.org/files/4285F4",
    "DBMS": "https://cdn.simpleicons.org/databricks/FF3621"
};

// Get icon URL for a tech name
export function getTechIcon(techName) {
    return techIcons[techName] || null;
}
