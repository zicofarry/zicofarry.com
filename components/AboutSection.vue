<script setup>
import { personalInfo, skills } from '../data/content.js'
import { 
  AcademicCapIcon, 
  CheckBadgeIcon, 
  CommandLineIcon,
  CpuChipIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
  <section id="about" class="py-20 relative scroll-mt-32">
    <div class="absolute left-0 top-1/4 w-72 h-72 bg-zico-primary/10 rounded-full blur-[100px] -z-10"></div>

    <div class="grid lg:grid-cols-2 gap-12 items-start">
      
      <div v-motion-slide-visible-left class="space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zico-primary text-sm font-medium">
          <span class="w-2 h-2 rounded-full bg-zico-primary animate-pulse"></span>
          About Me
        </div>
        
        <h2 class="text-4xl md:text-5xl font-heading font-bold leading-tight">
          Code, Break, <br>
          <span class="text-zico-primary">Reverse Engineer.</span>
        </h2>
        
        <p class="text-gray-400 text-lg leading-relaxed">
          {{ personalInfo.about }}
        </p>

        <div class="flex gap-8 pt-4 border-t border-white/10">
          <div>
            <div class="text-3xl font-bold text-white">3<span class="text-zico-primary text-xl">rd</span></div>
            <div class="text-sm text-gray-500">Semester</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-white">5<span class="text-zico-primary">+</span></div>
            <div class="text-sm text-gray-500">Projects</div>
          </div>
        </div>
      </div>

      <div v-motion-slide-visible-right class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
        
        <div class="mb-8">
          <h3 class="flex items-center gap-2 text-xl font-bold text-white mb-6">
            <CheckBadgeIcon class="w-6 h-6 text-zico-primary" />
            Tech Stack & Certifications
          </h3>
          
          <div class="flex flex-wrap gap-3">
            <template v-for="skill in skills.confident" :key="skill.name">
              
              <a 
                v-if="skill.cert"
                :href="skill.cert" 
                target="_blank"
                class="group flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-zico-dark border border-zico-primary/30 hover:border-zico-primary hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer"
                title="View Certificate"
              >
                <div class="p-1 bg-zico-primary/20 rounded-full group-hover:bg-zico-primary group-hover:text-white transition-colors text-zico-primary">
                   <AcademicCapIcon class="w-3.5 h-3.5" />
                </div>
                <span class="text-sm font-medium text-gray-200 group-hover:text-white">{{ skill.name }}</span>
                
                <span class="text-[10px] text-zico-primary opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">↗</span>
              </a>

              <div 
                v-else
                class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-default"
              >
                {{ skill.name }}
              </div>

            </template>
          </div>
        </div>

        <div>
          <h3 class="flex items-center gap-2 text-xl font-bold text-white mb-6">
            <CpuChipIcon class="w-6 h-6 text-zico-primary" />
            Currently Exploring
          </h3>
          <div class="space-y-3">
            <div 
              v-for="(item, index) in skills.exploring" 
              :key="index"
              class="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <CommandLineIcon class="w-5 h-5 text-gray-500" />
              <span class="text-gray-300 text-sm">{{ item }}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
