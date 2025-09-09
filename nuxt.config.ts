// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-09-03',
  devtools: { enabled: true },
  telemetry: false,

  typescript: {
    shim: false,
    strict: true,
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/elements.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  app: {
    head: {
      title: 'Aimlabs – Train, Track, Improve',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
        },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#101010' },
        {
          name: 'description',
          content:
            'Aimlabs helps you train and improve your aim with powerful analytics and custom scenarios. Trusted by millions of players and pros worldwide.',
        },
        {
          name: 'keywords',
          content:
            'aimlabs, aim trainer, gaming, esports, aim training, aimlabs pro, FPS training',
        },
        { name: 'author', content: 'Aimlabs' },
      ],
    },
  },
})
