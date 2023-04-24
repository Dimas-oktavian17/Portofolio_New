import { createVfm } from "vue-final-modal";

export default defineNuxtPlugin((nuxtApp) => {
  const vfm = createVfm() as any;

  nuxtApp.vueApp.use(vfm);
});
// import emailejs from "@emailjs/browser";
// export default defineNuxtPlugin((nuxtApp) => {
//   const emailjs = emailejs as any;
//   nuxtApp.vueApp.use(emailjs);
// });
