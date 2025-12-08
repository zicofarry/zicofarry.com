<script setup>
import { personalInfo, projects, awards, contacts } from './data/content.js'
import { 
  CodeBracketIcon, 
  TrophyIcon, 
  ArrowTopRightOnSquareIcon, 
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: 'zicofarry - Portfolio',
  meta: [
    { name: 'description', content: personalInfo.about }
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

    <nav class="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zico-dark/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="font-heading font-bold text-xl tracking-tight">
          zico<span class="text-zico-primary">farry</span>
        </div>
        <div class="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <a href="#about" class="hover:text-zico-primary transition-colors">About</a>
          <a href="#projects" class="hover:text-zico-primary transition-colors">Projects</a>
          <a href="#awards" class="hover:text-zico-primary transition-colors">Awards</a>
          <a href="#contact" class="hover:text-zico-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <main class="relative z-10 pt-32 pb-20 px-4 md:px-6">
      <div class="max-w-7xl mx-auto space-y-32">
        
        <section class="grid lg:grid-cols-2 gap-12 items-center">
          <div v-motion-slide-visible-bottom>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zico-primary/10 border border-zico-primary/20 text-zico-primary text-xs font-bold mb-6 tracking-wide uppercase">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zico-primary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-zico-primary"></span>
              </span>
              Available for Hire
            </div>
            <h1 class="font-heading text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Empowering Future <br />
              with <span class="bg-gradient-to-r from-zico-primary via-zico-secondary to-zico-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Code & Security</span>
            </h1>
            <p class="text-lg text-gray-400 leading-relaxed max-w-xl mb-8 border-l-4 border-zico-primary/50 pl-4">
              {{ personalInfo.about }}
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#projects" class="px-8 py-3 bg-zico-primary hover:bg-zico-accent text-white font-bold rounded-full transition-all shadow-lg shadow-zico-primary/25 hover:shadow-zico-primary/40 hover:-translate-y-1">
                Explore Projects
              </a>
              <a href="#contact" class="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all backdrop-blur-sm">
                Contact Me
              </a>
            </div>
          </div>

          <div class="relative hidden lg:block h-[500px]" v-motion-fade>
             <div class="absolute top-10 right-10 bg-black/40 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl animate-float max-w-xs">
                <div class="flex gap-2 mb-3">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <code class="text-sm font-mono text-gray-300">
                  <span class="text-zico-secondary">const</span> winner = <span class="text-green-400">'Zico'</span>;<br>
                  <span class="text-zico-primary">while</span>(alive) {<br>
                  &nbsp;&nbsp;code();<br>
                  }
                </code>
             </div>
             
             <div class="absolute bottom-20 left-10 bg-black/40 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl animate-float-delayed max-w-xs z-10">
               <div class="flex items-center gap-3">
                 <div class="p-2 bg-zico-primary/20 rounded-lg">
                   <TrophyIcon class="w-6 h-6 text-zico-primary" />
                 </div>
                 <div>
                   <div class="text-xs text-gray-400">zicofarry</div>
                   <div class="font-bold text-white">Muhammad 'Azmi Salam</div>
                 </div>
               </div>
             </div>

             <div class="absolute inset-0 bg-gradient-to-tr from-zico-primary/20 to-transparent rounded-full blur-3xl -z-10 transform scale-75"></div>
          </div>
        </section>

        <section id="projects">
          <div class="flex items-center justify-between mb-10">
            <h2 class="font-heading text-3xl md:text-4xl font-bold">Featured <span class="text-zico-primary">Projects</span></h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div 
                v-for="(project, index) in projects" 
                :key="project.id"
                class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-zico-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zico-primary/10 flex flex-col"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
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
                      <span class="text-xs font-mono text-zico-primary px-2 py-1 bg-zico-primary/10 rounded">{{ project.type }}</span>
                      <div class="flex gap-2">
                         <a v-if="project.link" :href="project.link" target="_blank" class="text-gray-400 hover:text-white"><GlobeAltIcon class="w-5 h-5"/></a>
                      </div>
                   </div>
                   <h3 class="text-xl font-bold mb-2 group-hover:text-zico-primary transition-colors">{{ project.title }}</h3>
                   <p class="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{{ project.desc }}</p>
                   
                   <div class="flex flex-wrap gap-2 mt-auto">
                      <span v-for="t in project.tech" :key="t" class="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full">{{ t }}</span>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section id="awards" class="relative">
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

        <section id="contact" class="text-center py-20">
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