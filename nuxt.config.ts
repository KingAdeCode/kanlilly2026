// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/scripts',
    '@ant-design-vue/nuxt',
    '@nuxtjs/seo',
    // '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    'nuxt-lettermint',
    'nuxt-lottie',
    'nuxt-swiper'
  ]
})