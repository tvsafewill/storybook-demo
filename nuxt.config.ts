// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@primevue/nuxt-module',
    '@nuxtjs/storybook'
  ],
  primevue: {
    options: {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.never-match' // Force light mode
            }
        }
    }
  },
  css: [
    'primeflex/primeflex.css'
  ]
})