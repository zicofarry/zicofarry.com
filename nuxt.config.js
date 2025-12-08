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
      ]
    }
  }
})
