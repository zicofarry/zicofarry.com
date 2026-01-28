<script setup>
import { experiences } from '../data/content.js'
import { BriefcaseIcon, AcademicCapIcon, CalendarIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section id="experience" class="relative scroll-mt-32">
    <div class="absolute -right-20 top-0 w-64 h-64 bg-zico-primary/10 rounded-full blur-[80px]"></div>
    
    <h2 class="font-heading text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center md:text-left">
      Work <span class="text-zico-primary">Experience</span>
    </h2>
    
    <!-- Timeline Container -->
    <div class="relative">
      <!-- Vertical Line -->
      <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zico-primary via-zico-secondary to-transparent"></div>
      
      <!-- Experience Items -->
      <div class="space-y-8">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.id"
          class="relative pl-12 md:pl-20"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: index * 100 } }"
        >
          <!-- Timeline Dot -->
          <div class="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-zico-primary border-4 border-zico-dark shadow-lg shadow-zico-primary/50"></div>
          
          <!-- Card -->
          <div class="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-zico-primary/30 transition-all duration-300 group">
            <!-- Header -->
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 class="text-lg md:text-xl font-bold text-white group-hover:text-zico-primary transition-colors">
                  {{ exp.title }}
                </h3>
                <div class="flex items-center gap-2 text-sm text-gray-400 mt-1">
                  <AcademicCapIcon class="w-4 h-4 text-zico-secondary" />
                  <span>{{ exp.organization }}</span>
                </div>
              </div>
              
              <!-- Period Badge -->
              <div class="flex items-center gap-2 px-3 py-1.5 bg-zico-primary/10 border border-zico-primary/30 rounded-full text-sm text-zico-primary font-medium whitespace-nowrap">
                <CalendarIcon class="w-4 h-4" />
                {{ exp.period }}
              </div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-400 leading-relaxed">
              {{ exp.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
