<script setup>
import { GlobeAltIcon, VideoCameraIcon } from '@heroicons/vue/24/outline'

// Menerima data 'project' dari parent (App.vue)
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div 
    class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-zico-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zico-primary/10 flex flex-col"
  >
    <div class="h-48 overflow-hidden relative">
      <div class="absolute inset-0 bg-zico-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        onerror="this.style.display='none'"
      />
    </div>
    
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-mono text-zico-primary px-2 py-1 bg-zico-primary/10 rounded">
          {{ project.type }}
        </span>
      </div>
      
      <h3 class="text-xl font-bold mb-2 group-hover:text-zico-primary transition-colors">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
        {{ project.desc }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="t in project.tech" 
          :key="t" 
          class="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full bg-black/20"
        >
          {{ t }}
        </span>
      </div>

      <div class="flex gap-3 mt-auto pt-4 border-t border-white/5">
        
        <a 
          v-if="project.link" 
          :href="project.link" 
          target="_blank" 
          class="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
          :class="project.repo 
             ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' 
             : 'bg-zico-primary hover:bg-zico-accent text-white shadow-lg shadow-zico-primary/20'"
        >
           <svg v-if="project.repo" viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
           
           <GlobeAltIcon v-else class="w-4 h-4" />
           
           {{ project.repo ? 'View Repo' : 'Visit Site' }}
        </a>

        <a 
          v-if="project.demo"
          :href="project.demo" 
          target="_blank" 
          class="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-red-600/10 hover:bg-red-600/20 text-red-500 border border-red-600/30 hover:border-red-600/50 rounded-lg text-sm font-semibold transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Watch Demo
        </a>

      </div>
    </div>
  </div>
</template>
