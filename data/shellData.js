// Virtual Filesystem for Interactive Shell
export const filesystem = {
    '/': {
        type: 'dir',
        contents: ['home', 'etc', 'var', 'tmp']
    },
    '/home': {
        type: 'dir',
        contents: ['guest']
    },
    '/home/guest': {
        type: 'dir',
        contents: ['about.txt', 'skills.txt', 'projects', '.secret', '.bash_history', 'README.md']
    },
    '/home/guest/about.txt': {
        type: 'file',
        content: `
  ╔════════════════════════════════════════════════════════╗
  ║                    ABOUT ZICOFARRY                     ║
  ╠════════════════════════════════════════════════════════╣
  ║  Name      : Muhammad 'Azmi Salam                      ║
  ║  Alias     : zicofarry                                 ║
  ║  Role      : Full-Stack Dev & Cyber Security           ║
  ║  Status    : 4th Semester @ Computer Science, UPI      ║
  ║  Focus     : Web Dev, Cryptography, Reverse Eng        ║
  ╚════════════════════════════════════════════════════════╝

I'm a college student passionate about building secure,
elegant web solutions. I blend modern web development
with a security-first mindset.

Currently exploring:
  - Malware Analysis
  - System Exploitation  
  - Binary Reverse Engineering

"Code, Break, Reverse Engineer."
`
    },
    '/home/guest/skills.txt': {
        type: 'file',
        content: `
  ┌─────────────────────────────────────────────────────┐
  │              TECH STACK & SKILLS                    │
  └─────────────────────────────────────────────────────┘

  [LANGUAGES]
    ├── C/C++        ████████████████████ Certified
    ├── Python       ████████████████████ Certified
    ├── JavaScript   ██████████████████░░ Advanced
    ├── TypeScript   ████████████████░░░░ Proficient
    ├── Java         ████████████████░░░░ Proficient
    └── SQL          ████████████████████ Certified

  [BACKEND]
    ├── Node.js      ██████████████████░░
    ├── Fastify      ████████████████░░░░
    ├── Express.js   ████████████████░░░░
    ├── FastAPI      ██████████████░░░░░░
    └── Laravel      ██████████████░░░░░░

  [FRONTEND]
    ├── Vue.js       ██████████████████░░
    ├── Nuxt.js      ████████████████░░░░
    ├── React        ██████████████░░░░░░
    └── React Native ██████████████░░░░░░

  [DATABASE]
    ├── PostgreSQL   ████████████████░░░░
    ├── MySQL        ████████████████████
    └── MongoDB      ██████████████░░░░░░

  [CTF SKILLS]
    ├── Cryptography ██████████████████░░
    ├── Reverse Eng  ████████████████░░░░
    ├── Web Exploit  ██████████████░░░░░░
    └── OSINT        ██████████████░░░░░░
`
    },
    '/home/guest/README.md': {
        type: 'file',
        content: `# Welcome to zicofarry's Portfolio Shell!

Try these commands to explore:
  - ls -la        : List all files (including hidden)
  - cat about.txt : Read about me
  - cd projects   : Browse my projects
  - cd .secret    : Maybe there's something hidden...
  - neofetch      : System info
  - ./hack        : ???

Happy exploring!
`
    },
    '/home/guest/.bash_history': {
        type: 'file',
        content: `cat /etc/passwd
ls -la /root
sudo rm -rf /
whoami
nmap -sV 192.168.1.1
john --wordlist=rockyou.txt hash.txt
strings suspicious_binary
ghidra reverse_me
python3 exploit.py
curl ifconfig.me
`
    },
    '/home/guest/projects': {
        type: 'dir',
        contents: ['chopchop.md', 'cattake.md', 'gymai.md', 'brainrot.md', 'pilahpintar.md']
    },
    '/home/guest/projects/chopchop.md': {
        type: 'file',
        content: `# ChopChop Coffee Shop

A full-featured digital ordering system.

Tech: Vue.js, Nuxt, TailwindCSS, Fastify, PostgreSQL

Features:
  - Digital menu browsing
  - Real-time order management
  - Admin dashboard

Link: chopchop-coffee.vercel.app
`
    },
    '/home/guest/projects/cattake.md': {
        type: 'file',
        content: `# CatTake - Pet Adoption Platform

Mobile-first platform for pet adoption.

Tech: React Native, Expo, Fastify, PostgreSQL

Features:
  - Browse adoptable pets
  - Filter by species, location
  - Adoption request system

Status: Live on Play Store
`
    },
    '/home/guest/projects/gymai.md': {
        type: 'file',
        content: `# GymAI - Smart Fitness Tracker

AI-powered workout recommendation system.

Tech: React Native, FastAPI, TensorFlow, MongoDB

Features:
  - Personalized workout plans
  - Progress tracking
  - AI exercise recommendations

Status: In Development
`
    },
    '/home/guest/projects/brainrot.md': {
        type: 'file',
        content: `# Brainrot Programming Language

An esoteric programming language based on C.

Tech: C, Flex, Bison

Example:
  skibidi main() {
    yap("Hello, Brainrot!");
    bussin 0;
  }
`
    },
    '/home/guest/projects/pilahpintar.md': {
        type: 'file',
        content: `# PilahPintar - Smart Waste Management

Database system for waste analytics.

Tech: MySQL, PHP, Bootstrap

Features:
  - Waste reporting system
  - Contribution statistics
  - Leaderboard for reporters
`
    },
    '/home/guest/.secret': {
        type: 'dir',
        contents: ['flag.txt', '.hidden_flag.txt', 'dont_read_me.txt']
    },
    '/home/guest/.secret/flag.txt': {
        type: 'file',
        content: `
  Congratulations! You found the first flag!

  CTF{z1c0f4rry_w4s_h3r3}

  Keep looking... there might be more secrets.
  Hint: Check hidden files carefully ;)
`
    },
    '/home/guest/.secret/.hidden_flag.txt': {
        type: 'file',
        content: `
  Nice! You know about hidden files!

  FindITCTF{iy4_b3n3r_1n1_fl4g_ny4_b4ng}

  One more to go... try looking in /tmp
`
    },
    '/home/guest/.secret/dont_read_me.txt': {
        type: 'file',
        content: `I told you not to read me!

But since you're here...
You're curious. I like that.
`
    },
    '/etc': {
        type: 'dir',
        contents: ['passwd', 'shadow', 'motd', 'hostname']
    },
    '/etc/passwd': {
        type: 'file',
        content: `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
guest:x:1000:1000:You are here:/home/guest:/bin/bash
azmi:x:1337:1337:Muhammad Azmi Salam:/root:/bin/zsh
`
    },
    '/etc/shadow': {
        type: 'file',
        content: `[ACCESS DENIED] Nice try!

You don't have permission to read /etc/shadow.
But here's a hint: the password is definitely not 'password123'
`
    },
    '/etc/motd': {
        type: 'file',
        content: `
  ╔═════════════════════════════════════════════════════════╗
  ║                                                         ║
  ║   ███████╗██╗ ██████╗ ██████╗ ███████╗ █████╗ ██████╗   ║
  ║   ╚══███╔╝██║██╔════╝██╔═══██╗██╔════╝██╔══██╗██╔══██╗  ║
  ║     ███╔╝ ██║██║     ██║   ██║█████╗  ███████║██████╔╝  ║
  ║    ███╔╝  ██║██║     ██║   ██║██╔══╝  ██╔══██║██╔══██╗  ║
  ║   ███████╗██║╚██████╗╚██████╔╝██║     ██║  ██║██║  ██║  ║
  ║   ╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝  ║
  ║                                                         ║
  ║            zicofarry's Portfolio Terminal               ║
  ║                                                         ║
  ╚═════════════════════════════════════════════════════════╝
`
    },
    '/etc/hostname': {
        type: 'file',
        content: `zicofarry-portfolio
`
    },
    '/var': {
        type: 'dir',
        contents: ['log']
    },
    '/var/log': {
        type: 'dir',
        contents: ['access.log', 'auth.log']
    },
    '/var/log/access.log': {
        type: 'file',
        content: `[2024-01-15 10:23:45] Visitor viewed portfolio
[2024-01-15 10:24:01] Visitor clicked ChopChop project
[2024-01-15 11:05:22] Recruiter from TechCorp visited
[2024-01-15 14:33:12] CTF player found first flag
[2024-01-15 14:42:55] CTF player found ALL flags!
`
    },
    '/var/log/auth.log': {
        type: 'file',
        content: `[WARN] Failed login for 'admin' from 10.0.0.1
[WARN] Failed login for 'root' from 10.0.0.1
[INFO] Successful login for 'guest'
[WARN] User 'guest' tried /etc/shadow - DENIED
[INFO] User 'guest' is exploring...
`
    },
    '/tmp': {
        type: 'dir',
        contents: ['notes.txt', '.final_flag']
    },
    '/tmp/notes.txt': {
        type: 'file',
        content: `TODO:
- [ ] Fix that one bug
- [ ] Add more easter eggs
- [x] Hide the flags
- [ ] World domination
`
    },
    '/tmp/.final_flag': {
        type: 'file',
        content: `
  ULTIMATE FLAG FOUND!

  ACE{Le4rn_n3w_Sc1ence_n3w_Lan9uage_n3w_Dicti0nary}

  You've found all the flags! Master explorer!

  Thanks for visiting my portfolio.
  - Muhammad 'Azmi Salam (zicofarry)
`
    }
}

// Command implementations (static ones)
export const commands = {
    help: () => `
Available Commands:
═══════════════════════════════════════════════════
  help        Show this help message
  ls [dir]    List directory contents
  ls -la      List all files including hidden
  cd <dir>    Change directory
  cat <file>  Display file contents
  pwd         Print working directory
  clear       Clear the terminal
  whoami      Display current user
  hostname    Display hostname
  date        Display current date/time
  echo <text> Print text to terminal
  history     Show command history
  neofetch    Display system info
  ./hack      ???
  exit        Close the terminal
═══════════════════════════════════════════════════
`,

    neofetch: () => `
       .---.        guest@zicofarry-portfolio
      /     \\       ──────────────────────────
      \\.@-@./       OS: Portfolio OS v2.0
      /\`\\_/\`\\       Host: zicofarry.com
     //  _  \\\\      Kernel: Nuxt 3.x
    | \\     )|_     Uptime: since Jan 2024
   /\`\\_\`>  <_/ \\    Shell: zsh 5.8
   \\__/'---'\\__/    Terminal: Web Terminal
                    
   zicofarry        CPU: Brain @ 3.4GHz
   portfolio        Memory: Coffee powered
                    
                    Owner: Muhammad 'Azmi Salam
                    Alias: zicofarry
                    Focus: Cyber Security
`
}

// Commands that need progressive output (typewriter effect)
export const progressiveCommands = {
    hack: [
        { text: '[*] Initializing exploit framework...', delay: 0 },
        { text: '[*] Target: zicofarry-portfolio', delay: 400 },
        { text: '[*] Loading modules...', delay: 800 },
        { text: '    ├── exploit/web/v1 ... [OK]', delay: 1100 },
        { text: '    ├── payload/reverse_shell ... [OK]', delay: 1400 },
        { text: '    └── encoder/base64 ... [OK]', delay: 1700 },
        { text: '[*] Scanning for vulnerabilities...', delay: 2200 },
        { text: '    ├── SQL Injection ... [PATCHED]', delay: 2600 },
        { text: '    ├── XSS ... [PATCHED]', delay: 3000 },
        { text: '    ├── CSRF ... [PATCHED]', delay: 3400 },
        { text: '    └── RCE ... [PATCHED]', delay: 3800 },
        { text: '[!] No vulnerabilities found!', delay: 4300 },
        { text: '[*] System is secure.', delay: 4700 },
        { text: '', delay: 5000 },
        { text: '... Just kidding! This is a portfolio website', delay: 5200 },
        { text: 'But if you found this, you have the hacker spirit!', delay: 5600 },
        { text: 'Keep learning and stay curious!', delay: 6000 },
    ],

    nmap: (target) => [
        { text: `Starting Nmap 7.94 ( https://nmap.org )`, delay: 0 },
        { text: `Scanning ${target || 'localhost'}...`, delay: 500 },
        { text: `Discovered open port 22/tcp`, delay: 1000 },
        { text: `Discovered open port 80/tcp`, delay: 1300 },
        { text: `Discovered open port 443/tcp`, delay: 1600 },
        { text: `Discovered open port 1337/tcp`, delay: 1900 },
        { text: ``, delay: 2200 },
        { text: `Nmap scan report for ${target || 'localhost'}`, delay: 2400 },
        { text: `PORT     STATE SERVICE`, delay: 2600 },
        { text: `22/tcp   open  ssh`, delay: 2800 },
        { text: `80/tcp   open  http`, delay: 3000 },
        { text: `443/tcp  open  https`, delay: 3200 },
        { text: `1337/tcp open  waste`, delay: 3400 },
        { text: ``, delay: 3600 },
        { text: `Nmap done: 1 IP address (1 host up)`, delay: 3800 },
    ],

    ping: (target) => [
        { text: `PING ${target || 'localhost'}: 56 data bytes`, delay: 0 },
        { text: `64 bytes: icmp_seq=0 ttl=64 time=0.042 ms`, delay: 800 },
        { text: `64 bytes: icmp_seq=1 ttl=64 time=0.038 ms`, delay: 1600 },
        { text: `64 bytes: icmp_seq=2 ttl=64 time=0.041 ms`, delay: 2400 },
        { text: `--- ${target || 'localhost'} ping statistics ---`, delay: 3200 },
        { text: `3 packets transmitted, 3 received, 0% loss`, delay: 3400 },
    ]
}
