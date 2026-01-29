process.env.EDITOR = 'code'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
  app: {
    head: {
      title: 'zicofarry - Portfolio',
      meta: [
        { name: 'description', content: 'Portfolio of zicofarry - Web Developer' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&family=Fira+Code:wght@400;500;600&family=Unbounded:wght@700;800;900&family=Orbitron:wght@700;800;900&display=swap'
        }
      ]
    }
  }
})
