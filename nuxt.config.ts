// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'iconify-icon',
    },
  },
  // app: {
  //   pageTransition: {
  //     name: 'pages',
  //     mode: 'out-in',
  //   },
  // },
  modules: ['@nuxtjs/i18n', '@nuxt/image', '@vueuse/motion/nuxt'],

  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'km',
        language: 'km',
        name: 'Khmer',
        file: 'km.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: 'en',
  },
});
