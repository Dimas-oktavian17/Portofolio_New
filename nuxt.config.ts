// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "rotate",
      mode: "out-in",
    },
  },
  modules: [
    "nuxt-swiper",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge",
    "nuxt-icons",
    "nuxt-icon",
    "@formkit/nuxt",
  ],
  // formkit: {
  //   configFile: "./my-configs/formkit.config.mjs",
  // },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ["navigation", "SwiperAutoplay", "pagination"], // all modules are imported by default
  },
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/style.css", "vue-final-modal/style.css"],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/duvpel2np/image/upload/",
    },
  },
});
