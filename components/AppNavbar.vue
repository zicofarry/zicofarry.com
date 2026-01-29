<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

// Logo scramble animation
const logoZico = ref('zico')
const logoFarry = ref('farry')
const hackerChars = '!@#$%^&*<>[]{}01'
let scrambleInterval = null
let isHolding = false
let hasClicked = false // For desktop: prevents scramble after click until mouseleave

const runScramble = () => {
  logoZico.value = 'zico'.split('').map(() => 
    hackerChars[Math.floor(Math.random() * hackerChars.length)]
  ).join('')
  logoFarry.value = 'farry'.split('').map(() => 
    hackerChars[Math.floor(Math.random() * hackerChars.length)]
  ).join('')
}

const startScramble = () => {
  // Desktop: don't start if already clicked (waiting for mouseleave)
  if (hasClicked) return
  
  if (scrambleInterval) clearInterval(scrambleInterval)
  isHolding = true
  let iterations = 0
  
  scrambleInterval = setInterval(() => {
    if (isHolding && !hasClicked) {
      runScramble()
    } else {
      // Decode back to original
      logoZico.value = 'zico'.split('').map((c, i) => 
        i < iterations / 3 ? 'zico'[i] : hackerChars[Math.floor(Math.random() * hackerChars.length)]
      ).join('')
      logoFarry.value = 'farry'.split('').map((c, i) => 
        i < iterations / 3 ? 'farry'[i] : hackerChars[Math.floor(Math.random() * hackerChars.length)]
      ).join('')
      iterations++
      if (iterations > 15) {
        clearInterval(scrambleInterval)
        scrambleInterval = null
        logoZico.value = 'zico'
        logoFarry.value = 'farry'
      }
    }
  }, 40)
}

const stopScramble = () => {
  isHolding = false
  hasClicked = false // Reset on mouseleave so next enter can scramble
}

const clickScramble = () => {
  // Desktop: click stops scramble immediately
  hasClicked = true
  isHolding = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Awards', id: 'awards' },
  { name: 'Contact', id: 'contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  
  // Scroll spy - detect active section
  const sections = ['home', ...navItems.map(item => item.id)]
  const scrollPosition = window.scrollY + 200 // Offset for better detection
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i]
      break
    }
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const navigateTo = (sectionId) => {
  activeSection.value = sectionId
  closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrambleInterval) clearInterval(scrambleInterval)
})
</script>

<template>
  <nav 
    class="fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out border-b"
    :class="[
      isScrolled 
        ? 'bg-zico-dark/90 backdrop-blur-md border-white/10 py-4 md:py-5 shadow-lg shadow-zico-primary/10' 
        : 'bg-transparent border-transparent py-5 md:py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
      
      <!-- Logo with Hacker Animation -->
      <a 
        href="#" 
        class="group relative" 
        @click.prevent="activeSection = 'home'; clickScramble(); scrollToTop()"
        @mouseenter="startScramble"
        @mouseleave="stopScramble"
        @touchstart="startScramble"
        @touchend="stopScramble"
      >
        <span class="font-heading font-bold text-xl md:text-2xl tracking-wide text-glow">
          <span class="text-white group-hover:text-zico-primary transition-colors duration-300">{{ logoZico }}</span><span class="text-zico-primary">{{ logoFarry }}</span>
        </span>
        <!-- Glitch effect on hover -->
        <span class="absolute inset-0 font-heading font-bold text-xl md:text-2xl tracking-wide opacity-0 group-hover:opacity-100 glitch-nav pointer-events-none" aria-hidden="true">
          <span class="text-white">{{ logoZico }}</span><span class="text-zico-primary">{{ logoFarry }}</span>
        </span>
        <!-- Glow effect -->
        <span class="absolute inset-0 bg-zico-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-150 pointer-events-none"></span>
      </a>

      <!-- Desktop Nav with Active State -->
      <div class="hidden md:flex gap-10 items-center">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="`#${item.id}`" 
          @click="activeSection = item.id"
          class="relative font-medium text-base tracking-wide py-2 transition-all duration-300 group"
          :class="activeSection === item.id ? 'text-zico-primary' : 'text-gray-400 hover:text-white'"
        >
          {{ item.name }}
          <!-- Active indicator -->
          <span 
            class="absolute bottom-0 left-0 h-0.5 bg-zico-primary transition-all duration-300 ease-out"
            :class="activeSection === item.id ? 'w-full shadow-glow' : 'w-0 group-hover:w-full'"
          ></span>
          <!-- Hover glow -->
          <span 
            class="absolute inset-0 bg-zico-primary/10 blur-lg opacity-0 transition-opacity duration-300 -z-10 rounded-lg scale-125"
            :class="activeSection === item.id ? 'opacity-50' : 'group-hover:opacity-100'"
          ></span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu"
        class="md:hidden relative w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div class="relative w-6 h-5 flex flex-col justify-between">
          <span 
            class="w-full h-0.5 bg-white transition-all duration-300 origin-center"
            :class="isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-zico-primary' : ''"
          ></span>
          <span 
            class="w-full h-0.5 bg-zico-primary transition-all duration-300"
            :class="isMobileMenuOpen ? 'opacity-0 scale-0' : ''"
          ></span>
          <span 
            class="w-full h-0.5 bg-white transition-all duration-300 origin-center"
            :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-zico-primary' : ''"
          ></span>
        </div>
      </button>

    </div>
  </nav>

  <!-- Mobile Menu Overlay -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-40 md:hidden"
        @click="closeMobileMenu"
      >
        <!-- Backdrop with hacker grid -->
        <div class="absolute inset-0 bg-zico-dark/98 backdrop-blur-lg">
          <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div class="absolute inset-0 overflow-hidden">
            <div class="scan-line-mobile"></div>
          </div>
        </div>

        <!-- Menu Content -->
        <div 
          class="relative h-full flex flex-col items-center justify-center px-6"
          @click.stop
        >
          <!-- Terminal Header -->
          <div class="absolute top-24 left-6 right-6">
            <div class="flex items-center gap-2 text-zico-primary/60 font-mono text-xs">
              <span class="w-2 h-2 rounded-full bg-zico-primary animate-pulse"></span>
              <span class="typing-text">root@zicofarry:~# ./navigate.sh</span>
            </div>
          </div>

          <!-- Nav Links with Active State -->
          <nav class="flex flex-col items-center gap-5">
            <a 
              v-for="(item, index) in navItems" 
              :key="item.id"
              :href="`#${item.id}`" 
              @click="navigateTo(item.id)"
              class="nav-link-mobile group relative"
              :style="{ animationDelay: `${index * 80}ms` }"
            >
              <!-- Active indicator bar -->
              <span 
                class="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-full rounded-full transition-all duration-300"
                :class="activeSection === item.id ? 'bg-zico-primary shadow-glow' : 'bg-transparent'"
              ></span>
              
              <!-- Index number -->
              <span 
                class="font-mono text-sm mr-4 transition-colors duration-300"
                :class="activeSection === item.id ? 'text-zico-primary' : 'text-gray-600 group-hover:text-zico-primary/70'"
              >
                [{{ String(index).padStart(2, '0') }}]
              </span>
              
              <!-- Nav text -->
              <span 
                class="font-heading text-2xl font-bold transition-all duration-300"
                :class="activeSection === item.id ? 'text-zico-primary scale-105' : 'text-white group-hover:text-zico-primary'"
              >
                {{ item.name }}
              </span>
              
              <!-- Active glow dot -->
              <span 
                v-if="activeSection === item.id"
                class="absolute -right-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-zico-primary rounded-full animate-pulse shadow-glow"
              ></span>
            </a>
          </nav>

          <!-- Active Section Indicator -->
          <div class="absolute bottom-16 left-6 right-6 text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zico-primary/10 border border-zico-primary/30">
              <span class="w-2 h-2 rounded-full bg-zico-primary animate-pulse"></span>
              <span class="text-zico-primary font-mono text-xs uppercase tracking-wider">
                {{ activeSection === 'home' ? 'Home' : navItems.find(i => i.id === activeSection)?.name || 'Home' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Text glow effect */
.text-glow {
  text-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}

.shadow-glow {
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4);
}

/* Navbar glitch effect */
.glitch-nav {
  animation: glitch-nav 0.3s ease-in-out;
}

@keyframes glitch-nav {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-1px, 1px); }
  80% { transform: translate(1px, -1px); }
}

/* Mobile nav link animation */
.nav-link-mobile {
  display: flex;
  align-items: center;
  opacity: 0;
  animation: slideIn 0.4s ease forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Typing animation */
.typing-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(30) forwards;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

/* Mobile scan line */
.scan-line-mobile {
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.08), transparent);
  animation: scanMobile 4s linear infinite;
}

@keyframes scanMobile {
  0% { top: -100px; }
  100% { top: 100%; }
}
</style>