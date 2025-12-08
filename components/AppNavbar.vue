<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out border-b"
    :class="[
      isScrolled 
        ? 'bg-zico-dark/80 backdrop-blur-md border-white/10 py-6 shadow-lg shadow-zico-primary/5' 
        : 'bg-transparent border-transparent py-8'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      
      <a href="#" class="font-heading font-extrabold text-3xl tracking-tight group relative">
        <span class="bg-gradient-to-r from-zico-primary via-white to-zico-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient group-hover:animate-none transition-all duration-300">
          zicofarry
        </span>
        <span class="absolute inset-0 bg-zico-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
      </a>

      <div class="hidden md:flex gap-10 items-center">
        <a 
          v-for="item in ['About', 'Projects', 'Awards', 'Contact']" 
          :key="item"
          :href="`#${item.toLowerCase()}`" 
          class="relative font-bold text-lg text-gray-300 hover:text-white transition-colors duration-300 group py-2"
        >
          {{ item }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-zico-primary transition-all duration-300 ease-out group-hover:w-full box-shadow-glow"></span>
          <span class="absolute inset-0 bg-zico-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-lg scale-110"></span>
        </a>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.box-shadow-glow {
  box-shadow: 0 0 10px #a855f7;
}

/* Animasi Gradient Jalan Pelan */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  animation: gradient 5s ease infinite;
}
</style>