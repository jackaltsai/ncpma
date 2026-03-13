// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-10',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxthub/core', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      'Noto+Sans+TC': [400, 700],
      'Noto+Serif+TC': [200, 400, 700],
    },
    display: 'swap',
    download: true,
  },

  css: ["~/assets/css/main.css"],
  nitro: {
    preset: 'cloudflare-pages',
  },
})