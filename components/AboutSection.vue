<script setup>
import { ref, computed } from 'vue'
import { personalInfo, skills } from '../data/content.js'
import { getTechIcon } from '../data/techIcons.js'
import { 
  AcademicCapIcon, 
  CheckBadgeIcon, 
  CommandLineIcon,
  CpuChipIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/vue/24/outline'

// Show all skills toggle (only affects mobile via CSS)
const showAllSkills = ref(false)

// On mobile, show first 8 skills when collapsed
const visibleSkillsMobile = computed(() => {
  if (showAllSkills.value) {
    return skills.confident
  }
  return skills.confident.slice(0, 8)
})

const remainingCount = computed(() => skills.confident.length - 8)
</script>

<template>
  <section id="about" class="py-10 md:py-20 relative scroll-mt-32">
    <div class="absolute left-0 top-1/4 w-72 h-72 bg-zico-primary/10 rounded-full blur-[100px] -z-10"></div>

    <div class="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
      
      <div v-motion-slide-visible-left class="space-y-3 md:space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zico-primary text-sm font-medium">
          <span class="w-2 h-2 rounded-full bg-zico-primary animate-pulse"></span>
          About Me
        </div>
        
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
          Code, Break, <br>
          <span class="text-zico-primary">Reverse Engineer.</span>
        </h2>
        
        <p class="text-gray-400 text-sm md:text-lg leading-relaxed">
          {{ personalInfo.about }}
        </p>

        <div class="flex gap-6 md:gap-8 pt-3 md:pt-4 border-t border-white/10">
          <div>
            <div class="text-xl md:text-3xl font-bold text-white">4<span class="text-zico-primary text-base md:text-xl">th</span></div>
            <div class="text-xs md:text-sm text-gray-500">Semester</div>
          </div>
          <div>
            <div class="text-xl md:text-3xl font-bold text-white">8<span class="text-zico-primary">+</span></div>
            <div class="text-xs md:text-sm text-gray-500">Projects</div>
          </div>
        </div>
      </div>

      <div v-motion-slide-visible-right class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8">
        
        <div class="mb-5 md:mb-8">
          <h3 class="flex items-center gap-2 text-base md:text-xl font-bold text-white mb-3 md:mb-6">
            <CheckBadgeIcon class="w-5 h-5 md:w-6 md:h-6 text-zico-primary" />
            Tech Stack & Certifications
          </h3>
          
          <!-- Desktop: Show ALL skills -->
          <div class="hidden md:flex flex-wrap gap-3">
            <template v-for="skill in skills.confident" :key="skill.name + '-desktop'">
              
              <a 
                v-if="skill.cert"
                :href="skill.cert" 
                target="_blank"
                class="group flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-zico-dark border border-zico-primary/30 hover:border-zico-primary hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer"
                title="View Certificate"
              >
                <img 
                  v-if="getTechIcon(skill.name)"
                  :src="getTechIcon(skill.name)" 
                  :alt="skill.name"
                  class="w-4 h-4"
                  onerror="this.style.display='none'"
                />
                <div v-else class="p-1 bg-zico-primary/20 rounded-full group-hover:bg-zico-primary group-hover:text-white transition-colors text-zico-primary">
                   <AcademicCapIcon class="w-3.5 h-3.5" />
                </div>
                <span class="text-sm font-medium text-gray-200 group-hover:text-white">{{ skill.name }}</span>
                <span class="text-[10px] text-zico-primary opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">↗</span>
              </a>

              <div 
                v-else
                class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-default"
              >
                <img 
                  v-if="getTechIcon(skill.name)"
                  :src="getTechIcon(skill.name)" 
                  :alt="skill.name"
                  class="w-4 h-4"
                  onerror="this.style.display='none'"
                />
                {{ skill.name }}
              </div>

            </template>
          </div>

          <!-- Mobile: Show limited skills with expand button -->
          <div class="md:hidden">
            <div class="flex flex-wrap gap-2">
              <template v-for="skill in visibleSkillsMobile" :key="skill.name + '-mobile'">
                
                <a 
                  v-if="skill.cert"
                  :href="skill.cert" 
                  target="_blank"
                  class="group flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-full bg-zico-dark border border-zico-primary/30 hover:border-zico-primary transition-all duration-300 cursor-pointer"
                  title="View Certificate"
                >
                  <img 
                    v-if="getTechIcon(skill.name)"
                    :src="getTechIcon(skill.name)" 
                    :alt="skill.name"
                    class="w-3.5 h-3.5"
                    onerror="this.style.display='none'"
                  />
                  <div v-else class="p-0.5 bg-zico-primary/20 rounded-full text-zico-primary">
                     <AcademicCapIcon class="w-3 h-3" />
                  </div>
                  <span class="text-xs font-medium text-gray-200">{{ skill.name }}</span>
                </a>

                <div 
                  v-else
                  class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-gray-400 cursor-default"
                >
                  <img 
                    v-if="getTechIcon(skill.name)"
                    :src="getTechIcon(skill.name)" 
                    :alt="skill.name"
                    class="w-3.5 h-3.5"
                    onerror="this.style.display='none'"
                  />
                  {{ skill.name }}
                </div>

              </template>
            </div>

            <!-- Show More/Less Button (Mobile only) -->
            <button 
              v-if="remainingCount > 0"
              @click="showAllSkills = !showAllSkills"
              class="mt-3 flex items-center gap-1 text-xs text-zico-primary hover:text-zico-accent transition-colors font-medium"
            >
              <template v-if="!showAllSkills">
                <ChevronDownIcon class="w-3.5 h-3.5" />
                Show {{ remainingCount }} more
              </template>
              <template v-else>
                <ChevronUpIcon class="w-3.5 h-3.5" />
                Show less
              </template>
            </button>
          </div>
        </div>

        <div>
          <h3 class="flex items-center gap-2 text-base md:text-xl font-bold text-white mb-3 md:mb-6">
            <CpuChipIcon class="w-5 h-5 md:w-6 md:h-6 text-zico-primary" />
            Currently Exploring
          </h3>
          <div class="space-y-2 md:space-y-3">
            <div 
              v-for="(item, index) in skills.exploring" 
              :key="index"
              class="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <CommandLineIcon class="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
              <span class="text-gray-300 text-xs md:text-sm">{{ item }}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
