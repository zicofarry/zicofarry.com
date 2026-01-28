<script setup>
import { ref, onMounted } from 'vue'
import { personalInfo, contacts } from '../data/content.js'

// Typing animation
const roles = ['Full-Stack Developer', 'Cyber Security Enthusiast', 'Reverse Engineer', 'CTF Player']
const currentRoleIndex = ref(0)
const displayedRole = ref('')
const isTyping = ref(true)

onMounted(() => {
  let charIndex = 0
  let isDeleting = false
  
  const type = () => {
    const currentRole = roles[currentRoleIndex.value]
    
    if (!isDeleting) {
      displayedRole.value = currentRole.substring(0, charIndex + 1)
      charIndex++
      
      if (charIndex === currentRole.length) {
        isDeleting = true
        setTimeout(type, 2000) // Pause before deleting
        return
      }
    } else {
      displayedRole.value = currentRole.substring(0, charIndex - 1)
      charIndex--
      
      if (charIndex === 0) {
        isDeleting = false
        currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
      }
    }
    
    setTimeout(type, isDeleting ? 50 : 100)
  }
  
  type()
})

// Random code lines for background
const codeLines = [
  'const exploit = require("zeroday");',
  'while(learning) { improve(); }',
  'function reverseEngineer(binary) {}',
  'if(vulnerable) { patch(); }',
  'async decrypt(cipher) => plaintext',
  'npm run hack --target=ctf',
  'git push origin security-fix',
  'docker run -d pentester',
]
</script>

<template>
  <section id="home" class="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
    
    <!-- Animated Background Grid -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Mesh -->
      <div class="absolute inset-0 bg-gradient-to-br from-zico-primary/10 via-transparent to-purple-600/10"></div>
      
      <!-- Animated Grid Lines -->
      <div class="grid-lines"></div>
      
      <!-- Floating Code Lines -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div 
          v-for="(line, i) in codeLines" 
          :key="i"
          class="code-line font-mono text-xs md:text-sm text-zico-primary/60 whitespace-nowrap"
          :style="{
            top: `${10 + i * 12}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${15 + i * 2}s`
          }"
        >
          {{ line }}
        </div>
      </div>

      <!-- Scan Line Effect -->
      <div class="scan-line"></div>
      
      <!-- Corner Decorations -->
      <div class="absolute top-4 left-4 w-16 h-16 md:w-24 md:h-24 border-l-2 border-t-2 border-zico-primary/30"></div>
      <div class="absolute top-4 right-4 w-16 h-16 md:w-24 md:h-24 border-r-2 border-t-2 border-zico-primary/30"></div>
      <div class="absolute bottom-4 left-4 w-16 h-16 md:w-24 md:h-24 border-l-2 border-b-2 border-zico-primary/30"></div>
      <div class="absolute bottom-4 right-4 w-16 h-16 md:w-24 md:h-24 border-r-2 border-b-2 border-zico-primary/30"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      
      <!-- Glitch Name -->
      <div 
        class="mb-2 md:mb-4"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
      >
        <h1 class="glitch font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black" data-text="zicofarry">
          <span class="text-white">zico</span><span class="text-zico-primary">farry</span>
        </h1>
        <p class="text-gray-500 text-sm md:text-base mt-2 font-mono">Muhammad 'Azmi Salam</p>
      </div>

      <!-- Typing Role -->
      <div 
        class="mb-6 md:mb-8 h-8 md:h-12"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 600 } }"
      >
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zico-dark/80 border border-zico-primary/30 backdrop-blur-sm">
          <span class="text-zico-primary font-mono text-sm md:text-lg">$</span>
          <span class="font-mono text-sm md:text-lg text-gray-300">{{ displayedRole }}</span>
          <span class="w-2 md:w-3 h-5 md:h-6 bg-zico-primary animate-blink"></span>
        </div>
      </div>

      <!-- Status Badge -->
      <div 
        class="mb-6 md:mb-8"
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 800 } }"
      >
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-emerald-400 text-xs md:text-sm font-medium">SYSTEM ONLINE • AVAILABLE FOR HIRE</span>
        </div>
      </div>

      <!-- Bio -->
      <p 
        class="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1000 } }"
      >
        {{ personalInfo.shortBio }}
      </p>

      <!-- Social + CTA -->
      <div 
        class="flex flex-col sm:flex-row items-center justify-center gap-4"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1200 } }"
      >
        <!-- Social Icons -->
        <!-- <div class="flex gap-2">
          <a 
            v-for="contact in contacts.slice(0, 3)" 
            :key="contact.name"
            :href="contact.url"
            target="_blank"
            class="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-zico-primary/20 hover:border-zico-primary hover:scale-110 transition-all duration-300 group"
          >
            <img 
              :src="contact.icon" 
              :alt="contact.name" 
              class="w-4 h-4 md:w-5 md:h-5 opacity-60 group-hover:opacity-100 transition-opacity invert" 
            />
          </a>
        </div> -->

        <!-- <div class="hidden sm:block w-px h-8 bg-white/20"></div> -->

        <!-- CTA Buttons -->
        <div class="flex gap-3">
          <a 
            href="#projects" 
            class="group relative px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-zico-primary to-purple-600 hover:from-purple-600 hover:to-zico-primary text-white font-semibold rounded-full transition-all duration-300 overflow-hidden shadow-lg shadow-zico-primary/25 hover:shadow-zico-primary/40 hover:scale-105"
          >
            <span class="relative z-10 flex items-center gap-2 text-sm">
              <span>Explore</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
          <a 
            href="#contact" 
            class="px-5 py-2.5 md:px-6 md:py-3 bg-white/5 border border-white/20 hover:border-zico-primary/50 hover:bg-zico-primary/10 text-white font-semibold rounded-full transition-all duration-300 text-sm hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>

    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2">
      <a 
        href="#about" 
        class="flex flex-col items-center gap-2 text-gray-500 hover:text-zico-primary transition-colors"
      >
        <div class="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
          <div class="w-1 h-2 bg-current rounded-full animate-scroll"></div>
        </div>
      </a>
    </div>
    
  </section>
</template>

<style scoped>
/* Glitch Effect */
.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 #ff00ff;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  animation: glitch-1 2s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: 2px 0 #00ffff;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  animation: glitch-2 2s infinite linear alternate-reverse;
}

@keyframes glitch-1 {
  0%, 100% { clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%); }
  25% { clip-path: polygon(0 15%, 100% 15%, 100% 50%, 0 50%); }
  50% { clip-path: polygon(0 40%, 100% 40%, 100% 75%, 0 75%); }
  75% { clip-path: polygon(0 25%, 100% 25%, 100% 60%, 0 60%); }
}

@keyframes glitch-2 {
  0%, 100% { clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%); }
  25% { clip-path: polygon(0 50%, 100% 50%, 100% 85%, 0 85%); }
  50% { clip-path: polygon(0 25%, 100% 25%, 100% 60%, 0 60%); }
  75% { clip-path: polygon(0 40%, 100% 40%, 100% 75%, 0 75%); }
}

/* Grid Lines */
.grid-lines {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Floating Code Lines */
.code-line {
  position: absolute;
  left: -100%;
  animation: code-float linear infinite;
}

@keyframes code-float {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(100vw + 200%)); }
}

/* Scan Line */
.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent);
  animation: scan 4s ease-in-out infinite;
}

@keyframes scan {
  0%, 100% { top: 10%; opacity: 0; }
  10% { opacity: 1; }
  50% { top: 90%; opacity: 1; }
  60% { opacity: 0; }
}

/* Cursor Blink */
.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Scroll Animation */
.animate-scroll {
  animation: scroll-down 1.5s ease-in-out infinite;
}

@keyframes scroll-down {
  0%, 100% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(8px); }
}
</style>