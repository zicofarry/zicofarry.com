// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
  app: {
    head: {
      title: 'Zico Farry - Portfolio',
      meta: [
        { name: 'description', content: 'Portfolio of Zico Farry - Web Developer' }
      ]
    }
  }
})
