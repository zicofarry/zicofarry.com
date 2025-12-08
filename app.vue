<script setup>
import { personalInfo, projects, awards, contacts } from './data/content.js'
import { 
  CodeBracketIcon, 
  TrophyIcon, 
  ArrowTopRightOnSquareIcon, 
  EnvelopeIcon,
  GlobeAltIcon,
  PlayCircleIcon,
  CommandLineIcon
} from '@heroicons/vue/24/outline'
import favicon from '@/assets/zico.svg'

useHead({
  title: 'zicofarry - Portfolio',
  meta: [
    { name: 'description', content: personalInfo.about }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: favicon }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-zico-dark text-slate-200 font-sans selection:bg-zico-primary selection:text-white relative overflow-x-hidden">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-zico-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-zico-secondary/10 rounded-full blur-[120px]"></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
    </div>

    <AppNavbar />

    <main class="relative z-10 pt-24 pb-20 px-4 md:px-6">
      <div class="max-w-7xl mx-auto space-y-32">
        
      
        <HeroSection />
        <AboutSection />

        <section id="projects" class="scroll-mt-32">
          <div class="flex items-center justify-between mb-10">
            <h2 class="font-heading text-3xl md:text-4xl font-bold">Featured <span class="text-zico-primary">Projects</span></h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <ProjectCard 
                v-for="(project, index) in projects" 
                :key="project.id" 
                :project="project"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
             />
          </div>
        </section>
    

        <section id="awards" class="relative scroll-mt-32">
           <div class="absolute -left-20 top-0 w-64 h-64 bg-zico-secondary/10 rounded-full blur-[80px]"></div>
           <h2 class="font-heading text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Honors & <span class="text-zico-secondary">Awards</span></h2>
           
           <div class="grid md:grid-cols-2 gap-6">
              <div 
                v-for="award in awards" 
                :key="award.title"
                class="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-zico-primary/30 transition-all"
              >
                 <div class="mt-1">
                    <TrophyIcon class="w-6 h-6 text-yellow-500" />
                 </div>
                 <div>
                    <h3 class="font-bold text-lg text-slate-200">{{ award.title }}</h3>
                    <div class="text-sm text-zico-primary font-medium mb-1">{{ award.organizer }} • {{ award.year }}</div>
                    <p class="text-sm text-gray-400">{{ award.desc }}</p>
                 </div>
              </div>
           </div>
        </section>

        <section id="contact" class="text-center py-20 scroll-mt-32">
           <div class="bg-gradient-to-br from-zico-primary/5 to-zico-secondary/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden backdrop-blur-sm">
              <div class="absolute top-0 right-0 w-64 h-64 bg-zico-primary/10 rounded-full blur-[80px] -z-10"></div>
              
              <div class="relative z-10">
                 <h2 class="text-3xl md:text-5xl font-heading font-bold mb-6">Let's <span class="text-zico-primary">Connect!</span></h2>
                 <p class="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                    Feel free to reach out or connect with me on these platforms.
                 </p>
                 
                 <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <a 
                      v-for="contact in contacts" 
                      :key="contact.name" 
                      :href="contact.url"
                      target="_blank"
                      class="flex flex-col md:flex-row items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-zico-primary/50 hover:scale-[1.02] transition-all duration-300 group"
                    >
                       <img 
                         :src="contact.icon" 
                         :alt="contact.name" 
                         class="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity invert" 
                       />
                       <span class="font-medium text-gray-300 group-hover:text-white">{{ contact.name }}</span>
                    </a>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </main>

    <footer class="border-t border-white/10 bg-black/20 py-8 text-center text-gray-500 text-sm">
       <p>&copy; {{ new Date().getFullYear() }} {{ personalInfo.name }}. Built with Nuxt 3 & Tailwind.</p>
    </footer>

  </div>
</template>

<style>
/* Animasi Gradient Text */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  animation: gradient 6s ease infinite;
}
</style>