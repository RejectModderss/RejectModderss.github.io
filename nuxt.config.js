import { resolve } from 'path'
import components from "./config/components"

export default {
  /*alias: {
      'style': resolve(__dirname, './assets/css')
  },*/
  target: 'static',

  build: {
      extractCSS: true,
  },

  router: {
    base: '/RejectModderss.github.io/'
  },

  buildModules: [
      '@nuxtjs/dotenv'
  ],

  modules: [
      '@nuxtjs/tailwindcss'
  ],

  env: {
      TEST: process.env.TEST,
  },

  css: [
      '~/assets/css/main.css'
  ],

  plugins: [
      '~/assets/js/main.js'
  ],

  head: {
    title: 'Learn More About Me!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
          hid: 'description',
          name: 'description',
          content: 'Learn more about me and how I started my journey as a self-taught Python developer.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/rejectmodders.png' }]
  },

  noscript: [
      { innerHTML: 'This website requires JavaScript.' }
  ],

  tailwindcss: {
      // Options
  },

  compatibilityDate: '2024-10-19'
};