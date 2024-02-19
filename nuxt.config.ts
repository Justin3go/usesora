import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'UseSora',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
      meta: [
        { name: 'description', content: 'Collecting the highest quality prompts for Sora, providing creators, researchers, and technology enthusiasts with a tool for sharing, exploring, and discovering the latest Sora video creations.' },
        { property: 'og:description', content: 'Collecting the highest quality prompts for Sora, providing creators, researchers, and technology enthusiasts with a tool for sharing, exploring, and discovering the latest Sora video creations.' },
        { property: 'og:title', content: 'UseSora' },
        { property: 'og:image', content: 'https://usesora.app/logobg.png' },
        { property: 'twitter:card', content: 'summary' },
      ],
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})