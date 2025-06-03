// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  site: {
    // url: 'http://localhost:3000',
    name: 'Meet realdms: Your Go-To Source for Awesome Front-end Development and Web Design',
    description: 'Your Go-To Source for Awesome Front-end Development and Web Design',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: {
      name: "rotate",
      mode: "out-in",
    },
  },
  runtimeConfig: {
    // public: {
    //   api_form: process.env.API_FORM_NUXT_PUBLIC,
    //   api_post: process.env.API_URL_NUXT_PUBLIC
    //   // will be also exposed to the client-side
    // }
  },
  modules: [
    // '@nuxtjs/tailwindcss',
    "@nuxtjs/color-mode",
    "@nuxt/image-edge",
    "nuxt-icons",
    "nuxt-icon",
    '@nuxt/icon',
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    'nuxt-shiki',
    '@nuxtjs/cloudinary'
    // 'pinceau/nuxt',
  ],
  // swiper: {
  // Swiper options
  //----------------------
  // prefix: 'Swiper',
  // styleLang: 'css',
  // modules: ["navigation", "SwiperAutoplay", "pagination"], // all modules are imported by default
  // },
  colorMode: {
    classSuffix: "",
  },
  css: ["vue-final-modal/style.css", '~/assets/css/prism-atom-dark.css', '~/assets/css/tailwind.css'],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/duvpel2np/image/upload/",
    },
  },
  ssr: true,
  experimental: {
    payloadExtraction: false
  },
  router: {
    options: {
      strict: false
    }
  },
  sourcemap: false,
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'github-dark',
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml']
    },
    markdown: {
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer'
          }
        ]
      ]
    }
  }
});
