<script setup>
import { GlobeAltIcon, VideoCameraIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

// Menerima data 'project' dari parent
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink 
    :to="`/projects/${project.id}`"
    class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-zico-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zico-primary/10 flex flex-col cursor-pointer"
  >
    <!-- Image Section -->
    <div class="h-48 overflow-hidden relative">
      <div class="absolute inset-0 bg-zico-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        onerror="this.style.display='none'"
      />
      <!-- View Details Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-zico-dark via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
        <span class="px-4 py-2 bg-zico-primary/90 backdrop-blur-sm rounded-full text-sm font-medium text-white flex items-center gap-2">
          View Details
          <ArrowRightIcon class="w-4 h-4" />
        </span>
      </div>
    </div>
    
    <!-- Content Section -->
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
      
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="t in project.tech" 
          :key="t" 
          class="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full bg-black/20"
        >
          {{ t }}
        </span>
      </div>

    </div>
  </NuxtLink>
</template>
