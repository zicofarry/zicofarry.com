<script setup>
import { projects } from './data/projects.js'
import { VideoCameraIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'

// Title page
useHead({
  title: 'Zicofarry | Portfolio',
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans pb-20">
    
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 
          class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Hi, I'm <span class="text-blue-600">Zicofarry</span>
        </h1>
        <p 
          class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 300, duration: 800 } }"
        >
          Mahasiswa Ilmu Komputer @ UPI. Passionate about Web Development (Vue/React) & Cyber Security.
        </p>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div class="flex items-center gap-2 mb-8">
        <CodeBracketIcon class="w-6 h-6 text-blue-600" />
        <h2 class="text-2xl font-bold text-gray-900">Featured Projects</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
        >
          <div class="h-48 overflow-hidden relative bg-gray-100">
            <div class="absolute inset-0 flex items-center justify-center text-gray-400">
               <span v-if="!project.image">No Image</span>
            </div>
            <img 
              v-if="project.image"
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onerror="this.style.display='none'" 
            />
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <div class="flex flex-wrap gap-2 mb-3">
              <span 
                v-for="tech in project.tech" 
                :key="tech"
                class="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
              >
                {{ tech }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ project.description }}
            </p>

            <div class="flex gap-3 mt-auto pt-4 border-t border-gray-100">
              <a 
                v-if="project.links.live"
                :href="project.links.live" 
                target="_blank"
                class="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                <GlobeAltIcon class="w-4 h-4" />
                Live Demo
              </a>
              
              <a 
                v-if="project.links.video"
                :href="project.links.video" 
                target="_blank"
                class="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-lg transition-colors"
              >
                <VideoCameraIcon class="w-4 h-4" />
                Watch Video
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>

    <footer class="mt-20 py-8 text-center text-gray-400 text-sm border-t border-gray-200">
      &copy; {{ new Date().getFullYear() }} Zicofarry. All rights reserved.
    </footer>
  </div>
</template>
