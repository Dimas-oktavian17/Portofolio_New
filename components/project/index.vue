<script setup>
// import { NuxtImage } from "nuxt-image";
const title = ref("FEATURED PROJECTS");
const workOne = reactive([
  {
    style: "rounded-xl",
    picture: "/v1681990026/portofolio/PPDB.png",
    title: "Website PPDB Kawung 1",
    deskripsi: "My Dream Studio",
  },
  {
    style: "rounded-xl ",
    picture: "/v1681990026/portofolio/mountain.png",
    title: "Volcano",
    deskripsi: "Beautifully crafted open source 3D icons",
  },
  {
    style: " rounded-xl",
    picture: "/v1681990025/portofolio/vue.png",
    title: "MSTSKP Landing Page",
    deskripsi: "Open-source Figma UI Kit made for this website",
  },
]);
const workTwo = reactive([
  {
    picture: "/v1681990026/portofolio/shorlink.png",
    title: "Short Url",
    deskripsi: "Add dummby logos to your design quickly",
  },
  // {
  //   picture: "/v1681651592/portofolio/uihues.png",
  //   title: "UIHues",
  //   deskripsi: "Generate color palattes directly on figma",
  // },
  // {
  //   picture: "/v1681651592/portofolio/croods.png",
  //   title: "croods",
  //   deskripsi: "illustration system made for blush.design",
  // },
]);
</script>

<template>
  <div class="container pb-8 overflow-x-hidden lg:overflow-auto">
    <!-- wrapper deskripsi -->
    <div class="pt-8 pb-4">
      <h1
        class="pl-4 text-sm font-bold opacity-70 dark:opacity-90 text-[#4A576F]"
      >
        {{ title }}
      </h1>
    </div>
    <!-- wrapper project -->
    <div class="flex flex-col items-start gap-6 px-1">
      <!-- first row -->
      <div
        class="flex flex-col lg:flex-row items-start gap-[18px] lg:gap-[14px]"
      >
        <!-- box first -->
        <div
          v-for="projectFirst in workOne"
          :key="projectFirst"
          class="items-center p-3 cursor-pointer transition-all duration-500 lg:w-[224px] flex lg:flex-col lg:items-start lg:px-3 lg:pt-3 lg:pb-4 hover:bg-gradient-to-tr hover:from-[#ffe9f4] hover:to-[#eaf3ff] dark:hover:from-[#1e1c32] dark:hover:to-[#2b161d] isolate rounded-2xl"
        >
          <!-- picture wrapper -->
          <div
            class="flex flex-row w-1/2 items-center gap-[10px] rounded-xl lg:w-[200px] lg:h-[200px]"
          >
            <nuxt-img
              :alt="projectFirst.title"
              :class="projectFirst.style"
              loading="lazy"
              format="webp"
              provider="cloudinary"
              :src="projectFirst.picture"
            />
          </div>
          <div
            class="flex flex-col items-start gap-[2px] w-1/2 lg:w-auto pl-3 pr-8 lg:pt-2 lg:px-0"
          >
            <h1 class="font-bold text-base text-[#22242C] dark:text-[#ECEDEE]">
              {{ projectFirst.title }}
            </h1>
            <!-- <p
              class="font-normal text-[15px] text-[#22242C] opacity-60 dark:text-[#ECEDEE] leading-5 -tracking-[0.009em]"
            >
              {{ projectFirst.deskripsi }}
            </p> -->
          </div>
        </div>
      </div>
      <!-- second row -->
      <div class="lg:flex flex-row items-start gap-[14px] hidden">
        <!-- box second -->
        <div
          v-for="projectSecond in workTwo"
          :key="projectSecond"
          class="cursor-pointer transition-all duration-500 lg:w-[224px] flex flex-col items-start px-3 pt-3 pb-4 hover:bg-gradient-to-tr hover:from-[#ffe9f4] hover:to-[#eaf3ff] dark:hover:from-[#1e1c32] dark:hover:to-[#2b161d] isolate rounded-2xl"
        >
          <!-- picture wrapper -->
          <picture
            class="flex flex-row items-center gap-[10px] rounded-xl lg:w-[200px] lg:h-[200px]"
          >
            <nuxt-img
              :alt="projectSecond.title"
              class="rounded-xl"
              loading="lazy"
              format="webp"
              provider="cloudinary"
              :src="projectSecond.picture"
            />
          </picture>
          <div class="flex flex-col items-start gap-[2px] pt-2">
            <h1 class="font-bold text-base text-[#22242C] dark:text-[#ECEDEE]">
              {{ projectSecond.title }}
            </h1>
            <!-- <p
              class="font-normal text-[15px] text-[#22242C] opacity-60 dark:text-[#ECEDEE] leading-5 -tracking-[0.009em]"
            >
              {{ projectSecond.deskripsi }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
