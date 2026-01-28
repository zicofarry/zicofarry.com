<script setup>
import { personalInfo } from '../data/content.js'
import { TrophyIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section id="home" class="py-4 md:py-20 scroll-mt-32 relative min-h-0 md:min-h-[70vh]">
    
    <div class="grid lg:grid-cols-2 gap-6 md:gap-12 items-center w-full">
      
      <div v-motion-slide-visible-bottom class="space-y-4 md:space-y-8">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zico-primary/10 border border-zico-primary/20 text-zico-primary text-xs font-bold tracking-wide uppercase">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zico-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-zico-primary"></span>
          </span>
          Available for Hire
        </div>

        <h1 class="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
          Empowering Future <br class="hidden sm:block" />
          with <span class="bg-gradient-to-r from-zico-primary via-white to-zico-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">Code & Security</span>
        </h1>

        <p class="text-sm md:text-lg text-gray-400 leading-relaxed max-w-xl border-l-4 border-zico-primary/50 pl-3 md:pl-6">
          {{ personalInfo.shortBio }}
        </p>

        <div class="flex flex-wrap gap-2 md:gap-4 pt-1 md:pt-2">
          <a href="#projects" class="px-5 md:px-8 py-2.5 md:py-4 bg-zico-primary hover:bg-zico-accent text-white font-bold rounded-full transition-all shadow-lg shadow-zico-primary/25 hover:shadow-zico-primary/40 hover:-translate-y-1 text-xs md:text-base">
            Explore Projects
          </a>
          <a href="#contact" class="px-5 md:px-8 py-2.5 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all backdrop-blur-sm text-xs md:text-base">
            Contact Me
          </a>
        </div>
      </div>

      <div class="relative hidden lg:block h-[400px]" v-motion-fade>
         <div class="absolute top-0 right-10 bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl animate-float max-w-xs z-20">
            <div class="flex gap-2 mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <code class="text-sm font-mono text-gray-300 leading-loose">
              <span class="text-zico-secondary">const</span> role = <span class="text-green-400">'Student'</span>;<br>
              <span class="text-zico-primary">while</span>(learning) {<br>
              &nbsp;&nbsp;improve();<br>
              &nbsp;&nbsp;solve_ctf();<br>
              }
            </code>
         </div>
         
         <div class="absolute bottom-10 left-10 bg-black/40 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl animate-float-delayed max-w-xs z-20">
           <div class="flex items-center gap-4">
             <div class="p-3 bg-zico-primary/20 rounded-lg">
               <TrophyIcon class="w-8 h-8 text-zico-primary" />
             </div>
             <div>
               <div class="text-xs text-gray-400 uppercase font-semibold tracking-wider">Focus Area</div>
               <div class="font-bold text-white text-lg">Cyber Security</div>
             </div>
           </div>
         </div>

         <div class="absolute inset-0 bg-gradient-to-tr from-zico-primary/20 to-transparent rounded-full blur-3xl -z-10 transform scale-75"></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  animation: gradient 5s ease infinite;
}
</style>