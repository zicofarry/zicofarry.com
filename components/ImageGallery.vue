<script setup>
import { ref, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  projectTitle: {
    type: String,
    default: 'Project'
  }
})

const currentIndex = ref(0)
const isLightboxOpen = ref(false)

const hasImages = computed(() => props.images && props.images.length > 0)
const totalImages = computed(() => props.images?.length || 0)

const goToPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = totalImages.value - 1
  }
}

const goToNext = () => {
  if (currentIndex.value < totalImages.value - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const openLightbox = (index) => {
  currentIndex.value = index
  isLightboxOpen.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!isLightboxOpen.value) return
  if (e.key === 'ArrowLeft') goToPrev()
  if (e.key === 'ArrowRight') goToNext()
  if (e.key === 'Escape') closeLightbox()
}
</script>

<template>
  <div v-if="hasImages" class="space-y-4">
    <!-- Gallery Header -->
    <h3 class="text-xl font-bold flex items-center gap-2">
      <svg class="w-5 h-5 text-zico-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Screenshots
    </h3>

    <!-- Main Gallery -->
    <div class="relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
      <!-- Main Image -->
      <div class="aspect-video relative overflow-hidden cursor-pointer" @click="openLightbox(currentIndex)">
        <transition name="fade" mode="out-in">
          <img 
            :key="currentIndex"
            :src="images[currentIndex]" 
            :alt="`${projectTitle} screenshot ${currentIndex + 1}`"
            class="w-full h-full object-cover"
          />
        </transition>
        
        <!-- Image Counter -->
        <div class="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm text-white">
          {{ currentIndex + 1 }} / {{ totalImages }}
        </div>
        
        <!-- Click to expand hint -->
        <div class="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
          <span class="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg text-white text-sm">
            Click to expand
          </span>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button 
        v-if="totalImages > 1"
        @click="goToPrev"
        class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeftIcon class="w-5 h-5" />
      </button>
      
      <button 
        v-if="totalImages > 1"
        @click="goToNext"
        class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRightIcon class="w-5 h-5" />
      </button>
    </div>

    <!-- Thumbnail Strip -->
    <div v-if="totalImages > 1" class="flex gap-2 overflow-x-auto pb-2">
      <button 
        v-for="(img, index) in images" 
        :key="index"
        @click="goToSlide(index)"
        class="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200"
        :class="index === currentIndex 
          ? 'border-zico-primary ring-2 ring-zico-primary/30' 
          : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'"
      >
        <img 
          :src="img" 
          :alt="`Thumbnail ${index + 1}`"
          class="w-full h-full object-cover"
        />
      </button>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div 
          v-if="isLightboxOpen" 
          class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          @click.self="closeLightbox"
          @keydown="handleKeydown"
          tabindex="0"
        >
          <!-- Close Button -->
          <button 
            @click="closeLightbox"
            class="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <XMarkIcon class="w-6 h-6" />
          </button>

          <!-- Navigation Arrows -->
          <button 
            v-if="totalImages > 1"
            @click="goToPrev"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeftIcon class="w-6 h-6" />
          </button>
          
          <button 
            v-if="totalImages > 1"
            @click="goToNext"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRightIcon class="w-6 h-6" />
          </button>

          <!-- Lightbox Image -->
          <div class="max-w-[90vw] max-h-[85vh] relative">
            <transition name="fade" mode="out-in">
              <img 
                :key="currentIndex"
                :src="images[currentIndex]" 
                :alt="`${projectTitle} screenshot ${currentIndex + 1}`"
                class="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </transition>
          </div>

          <!-- Image Counter -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white">
            {{ currentIndex + 1 }} / {{ totalImages }}
          </div>
        </div>
      </transition>
    </Teleport>
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
