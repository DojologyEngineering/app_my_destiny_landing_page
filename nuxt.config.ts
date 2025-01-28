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
    strategy: 'prefix_and_default',
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
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  app: {
    head: {
      title: 'Appmydestiny - Team Feng Shui App of Cambodia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Responsible for the international level of 600,000 students.',
        },
        // Open Graph (Facebook, LinkedIn, etc.)
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Appmydestiny - Team Feng Shui App of Cambodia',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Responsible for the international level of 600,000 students.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://appmydestiny.com/kh/logo.png',
        }, // Replace with your logo URL
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://appmydestiny.com/kh',
        }, // Replace with your website URL
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Appmydestiny - Team Feng Shui App of Cambodia',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Responsible for the international level of 600,000 students.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://appmydestiny.com/kh/logo.png',
        }, // Replace with your logo URL
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        }, // Use 'summary_large_image' for large previews
      ],
    },
  },
});
