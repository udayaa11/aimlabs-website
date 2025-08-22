// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

export default defineNuxtConfig({
  srcDir: 'src/',
  components: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: {
    shim: false,
    strict: true,
  },
  plugins: [],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/elements.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      title: 'Aimlabs – Train, Track, Improve',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#101010' },
        {
          name: 'description',
          content: 'Aimlabs helps you train and improve your aim with powerful analytics and custom scenarios. Trusted by millions of players and pros worldwide.'
        },
        {
          name: 'keywords',
          content: 'aimlabs, aim trainer, gaming, esports, aim training, aimlabs pro, FPS training'
        },
        {
          name: 'author',
          content: 'Aimlabs'
        },
      ],
    },
  },

  vite: {
    resolve: {
      alias: {
        '/webp': resolve(__dirname, 'src/public/webp'),
        '/svg': resolve(__dirname, 'src/public/svg'),
        '/icons': resolve(__dirname, 'src/public/icons'),
        // add more if you have other folders inside src/public
      }
    }
  }
})
