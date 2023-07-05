// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      title: "alevarez | FullStack Developer",
      meta: [
        {name: "description", content: "Creo aplicaciones intuitivas para la web."}
      ]
    }
  }
})
