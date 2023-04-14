// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxt/image-edge"],
  target: "public",
  buildModules: ["@nuxt/image"],
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/style.css"],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/duvpel2np/image/upload/v1681488442/",
    },
  },
});
