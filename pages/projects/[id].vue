<script setup>
import { ref, computed } from 'vue'
import { projects, personalInfo } from '../../data/content.js'
import { getTechIcon } from '../../data/techIcons.js'
import { 
  ArrowLeftIcon, 
  GlobeAltIcon, 
  PlayCircleIcon,
  CalendarIcon,
  CodeBracketIcon,
  ArrowDownTrayIcon,
  CubeIcon,
  ExclamationTriangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'
import favicon from '@/assets/zico.svg'

const route = useRoute()
const router = useRouter()

// Find project by ID
const projectId = parseInt(route.params.id)
const project = computed(() => projects.find(p => p.id === projectId))

// Redirect if project not found
if (!project.value) {
  router.push('/')
}

// Gallery state
const currentImageIndex = ref(0)

// Get all images (cover + screenshots)
const allImages = computed(() => {
  if (!project.value) return []
  const images = [project.value.image]
  if (project.value.screenshots?.length) {
    images.push(...project.value.screenshots)
  }
  return images
})

const hasMultipleImages = computed(() => allImages.value.length > 1)

const goToPrevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = allImages.value.length - 1
  }
}

const goToNextImage = () => {
  if (currentImageIndex.value < allImages.value.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

// Check if project needs backend warning (linkType === 'site' or mobile apps)
const needsBackendWarning = computed(() => {
  return project.value?.linkType === 'site' || project.value?.type === 'Mobile Application'
})

// Computed properties for button logic
const linkButtonConfig = computed(() => {
  if (!project.value) return null
  
  const configs = {
    site: {
      label: 'Visit Live Site',
      icon: 'globe',
      class: 'bg-gradient-to-r from-zico-primary to-zico-accent hover:from-zico-accent hover:to-zico-primary text-white shadow-lg shadow-zico-primary/30 hover:shadow-zico-primary/50'
    },
    release: {
      label: 'Download Release',
      icon: 'download',
      class: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50'
    },
    package: {
      label: 'Install Package',
      icon: 'cube',
      class: 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50'
    },
    repo: {
      label: 'View Repository',
      icon: 'github',
      class: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
    }
  }
  
  return configs[project.value.linkType] || configs.site
})

useHead({
  title: () => project.value ? `${project.value.title} - zicofarry` : 'Project Not Found',
  meta: [
    { name: 'description', content: () => project.value?.desc?.substring(0, 160) || '' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: favicon }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-zico-dark text-slate-200 font-sans selection:bg-zico-primary selection:text-white relative overflow-x-hidden">
    
    <!-- Background Effects -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-zico-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-zico-secondary/10 rounded-full blur-[120px]"></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
    </div>

    <!-- NO NAVBAR - Removed for cleaner project detail view -->

    <main class="relative z-10 pt-6 pb-20 px-4 md:px-6">
      <div class="max-w-5xl mx-auto">
        
        <!-- Improved Back Button - Larger & More Prominent -->
        <NuxtLink 
          to="/#projects" 
          class="inline-flex items-center gap-3 px-5 py-3 mb-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-zico-primary/50 rounded-xl text-gray-300 hover:text-white transition-all duration-300 group"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 100 } }"
        >
          <ArrowLeftIcon class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span class="font-medium">Back to Projects</span>
        </NuxtLink>

        <!-- Project Content -->
        <div v-if="project" class="space-y-8">
          
          <!-- Hero Gallery (Cover + Screenshots) -->
          <div 
            class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          >
            <div class="min-h-[300px] max-h-[70vh] relative flex items-center justify-center bg-black/30">
              <transition name="fade" mode="out-in">
                <img 
                  :key="currentImageIndex"
                  :src="allImages[currentImageIndex]" 
                  :alt="`${project.title} - Image ${currentImageIndex + 1}`"
                  class="max-w-full max-h-[70vh] object-contain"
                  onerror="this.style.display='none'"
                />
              </transition>
              <div class="absolute inset-0 bg-gradient-to-t from-zico-dark/50 via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Image Counter Badge -->
              <div v-if="hasMultipleImages" class="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                {{ currentImageIndex + 1 }} / {{ allImages.length }}
              </div>
            </div>
            
            <!-- Project Type Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1.5 bg-zico-primary/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                {{ project.type }}
              </span>
            </div>

            <!-- Navigation Arrows -->
            <button 
              v-if="hasMultipleImages"
              @click="goToPrevImage"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 hover:border-white/40 transition-all"
            >
              <ChevronLeftIcon class="w-6 h-6" />
            </button>
            
            <button 
              v-if="hasMultipleImages"
              @click="goToNextImage"
              class="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 hover:border-white/40 transition-all"
            >
              <ChevronRightIcon class="w-6 h-6" />
            </button>
          </div>

          <!-- Thumbnail Strip (only if multiple images) -->
          <div v-if="hasMultipleImages" class="flex gap-3 overflow-x-auto pb-2">
            <button 
              v-for="(img, index) in allImages" 
              :key="index"
              @click="currentImageIndex = index"
              class="flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200"
              :class="index === currentImageIndex 
                ? 'border-zico-primary ring-2 ring-zico-primary/30 scale-105' 
                : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'"
            >
              <img 
                :src="img" 
                :alt="`Thumbnail ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>

          <!-- Project Info -->
          <div 
            class="space-y-6"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          >
            <h1 class="text-4xl md:text-5xl font-heading font-bold text-white">
              {{ project.title }}
            </h1>

            <!-- Tech Stack with Icons -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.tech" 
                :key="tech" 
                class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-full hover:border-zico-primary/50 transition-colors"
              >
                <img 
                  v-if="getTechIcon(tech)"
                  :src="getTechIcon(tech)" 
                  :alt="tech"
                  class="w-4 h-4"
                  onerror="this.style.display='none'"
                />
                {{ tech }}
              </span>
            </div>

            <!-- Description -->
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
                <CodeBracketIcon class="w-5 h-5 text-zico-primary" />
                About This Project
              </h2>
              <div class="text-gray-300 leading-relaxed text-lg space-y-4">
                <p v-for="(paragraph, idx) in project.desc.split('\n\n')" :key="idx">
                  {{ paragraph }}
                </p>
              </div>
            </div>

            <!-- Backend Warning Banner (for live sites) -->
            <div 
              v-if="needsBackendWarning"
              class="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl"
            >
              <ExclamationTriangleIcon class="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p class="text-amber-200 font-medium">Backend Service Notice</p>
                <p class="text-amber-200/70 text-sm mt-1">
                  This project's backend may be temporarily unavailable due to hosting limitations. 
                  If the site is not loading, please check out the demo video instead.
                </p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div 
              class="flex flex-col sm:flex-row gap-4"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            >
              <a 
                v-if="project.link && linkButtonConfig" 
                :href="project.link" 
                target="_blank"
                class="flex-1 inline-flex justify-center items-center gap-3 px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                :class="linkButtonConfig.class"
              >
                 <!-- GitHub Icon -->
                 <svg v-if="linkButtonConfig.icon === 'github'" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                 
                 <!-- Globe Icon -->
                 <GlobeAltIcon v-else-if="linkButtonConfig.icon === 'globe'" class="w-5 h-5" />
                 
                 <!-- Download Icon -->
                 <ArrowDownTrayIcon v-else-if="linkButtonConfig.icon === 'download'" class="w-5 h-5" />
                 
                 <!-- Cube/Package Icon -->
                 <CubeIcon v-else-if="linkButtonConfig.icon === 'cube'" class="w-5 h-5" />
                 
                 {{ linkButtonConfig.label }}
              </a>

              <a 
                v-if="project.demo"
                :href="project.demo" 
                target="_blank" 
                class="flex-1 inline-flex justify-center items-center gap-3 px-6 py-4 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-600/40 hover:border-red-600/60 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Watch Demo Video
              </a>
            </div>

          </div>

          <!-- Other Projects Section -->
          <div 
            class="mt-20 pt-12 border-t border-white/10"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
          >
            <h2 class="text-2xl font-heading font-bold mb-8">Other <span class="text-zico-primary">Projects</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <NuxtLink 
                v-for="otherProject in projects.filter(p => p.id !== project.id).slice(0, 3)" 
                :key="otherProject.id"
                :to="`/projects/${otherProject.id}`"
                class="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-zico-primary/50 transition-all duration-300"
              >
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      :src="otherProject.image" 
                      :alt="otherProject.title"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-bold text-white group-hover:text-zico-primary transition-colors truncate">
                      {{ otherProject.title }}
                    </h3>
                    <p class="text-sm text-gray-400 truncate">{{ otherProject.type }}</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>

        </div>

        <!-- Not Found State -->
        <div v-else class="text-center py-20">
          <h1 class="text-4xl font-bold mb-4">Project Not Found</h1>
          <p class="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <NuxtLink 
            to="/" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-zico-primary hover:bg-zico-accent text-white rounded-lg transition-colors"
          >
            <ArrowLeftIcon class="w-5 h-5" />
            Back to Home
          </NuxtLink>
        </div>

      </div>
    </main>

    <footer class="border-t border-white/10 bg-black/20 py-8 text-center text-gray-500 text-sm">
       <p>&copy; {{ new Date().getFullYear() }} {{ personalInfo.name }}. Built with Nuxt 3 & Tailwind.</p>
    </footer>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
