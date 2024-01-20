<script setup>
const title = ref(`About`);
const deskripsi = ref(
  `Ketahui lebih banyak tentang saya di sini, saya juga sering menulis di medium:)`
);
const picture = ref("/v1682418516/portofolio/setup.jpg");
// import {
//   Scene,
//   PerspectiveCamera,
//   Mesh,
//   SphereGeometry,
//   MeshBasicMaterial,
//   WebGLRenderer,
// } from "three";

// import { useWindowSize } from "@vueuse/core";
// let renderer: WebGLRenderer;
// const experience: Ref<HTMLCanvasElement | null> = ref(null);
// const { width, height } = useWindowSize();
// const aspectRatio = computed(() => width.value / height.value);
// const scene = new Scene();
// const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
// camera.position.set(0, 0, 4);
// scene.add(camera);
// const sphere = new Mesh(
//   new SphereGeometry(1, 32, 32),
//   new MeshBasicMaterial({ color: 0x008080 })
// );
// scene.add(sphere);
// function updateCamera() {
//   camera.aspect = aspectRatio.value;
//   camera.updateProjectionMatrix();
// }
// function updateRenderer() {
//   renderer.setSize(width.value, height.value);
//   renderer.render(scene, camera);
// }
// function setRenderer() {
//   if (experience.value) {
//     renderer = new WebGLRenderer({ canvas: experience.value });
//     updateRenderer();
//   }
// }
// watch(aspectRatio, () => {
//   updateCamera();
//   updateRenderer();
// });
// onMounted(() => {
//   setRenderer();
//   loop();
// });
// const loop = () => {
//   sphere.position.x += 0.01;
//   updateRenderer();
//   requestAnimationFrame(loop);
// };
</script>
<template>
  <div class="flex flex-col items-center gap-4 px-4 transition-all py-28 lg:py-24">
    <div class="flex flex-col items-center gap-[.938rem] pb-[.75rem] w-[15.563rem]">
      <div class="">
        <h1 class="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-[#DC79FF] to-[#256BFA]">
          {{ title }}
        </h1>
      </div>
    </div>
    <!-- deskripsi -->
    <p class="font-normal text-lg dark:text-[#ECEDEE] text-[#22242C] text-center lg:px-32">
      {{ deskripsi }}
    </p>
    <!-- footer text -->
    <div class="flex flex-row items-center justify-between">
      <Icon name="codicon:chrome-minimize" class="text-[#4A576F]/40 rounded dark:text-white/40" size="3rem" />
      <span class="text-xs font-medium text-[#4A576F]/70 mx-2 dark:text-white/60">
        ✦
      </span>
      <Icon size="3rem" name="codicon:chrome-minimize" class="text-[#4A576F]/40 rounded dark:text-white/40" />
    </div>
    <div class="flex flex-col items-center justify-center pt-28">
      <picture>
        <nuxt-img class="w-auto h-auto transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 rounded-3xl"
          loading="lazy" format="webp" provider="cloudinary" :src="picture" />
      </picture>
      <h1 class="pt-4 font-semibold text-xs uppercase text-[#4A576FB2]/70 dark:text-white/70">
        WHAT'S ON MY DESK
      </h1>
    </div>
  </div>
</template>
