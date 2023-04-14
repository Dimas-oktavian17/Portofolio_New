<script setup>
// import { NuxtImage } from "nuxt-image";
const title = ref("FEATURED PROJECTS");
const workOne = reactive([
  {
    picture: "/oval.png",
    title: "Overlayz",
    deskripsi: "My Dream Studio",
  },
  {
    picture: "/3dicons.png",
    title: "3dicons",
    deskripsi: "Beautifully crafted open source 3D icons",
  },
  {
    picture: "/V5.png",
    title: "V5 UI Kit",
    deskripsi: "Open-source Figma UI Kit made for this website",
  },
]);
const workTwo = reactive([
  {
    picture: "/love.png",
    title: "uiLogos",
    deskripsi: "Add dummby logos to your design quickly",
  },
  {
    picture: "/uihues.png",
    title: "UIHues",
    deskripsi: "Generate color palattes directly on figma",
  },
  {
    picture: "/croods.png",
    title: "croods",
    deskripsi: "illustration system made for blush.design",
  },
]);
</script>

<template>
  <div class="container">
    <!-- wrapper deskripsi -->
    <div class="pt-8 pb-4">
      <h1 class="pl-4 text-sm font-bold opacity-70 text-[#4A576F]">
        {{ title }}
      </h1>
    </div>
    <!-- wrapper project -->
    <div class="flex flex-col items-start gap-6 px-1">
      <!-- first row -->
      <div class="flex flex-row items-start gap-[14px]">
        <!-- box -->
        <div
          v-for="projectFirst in workOne"
          :key="projectFirst"
          class="flex flex-col items-start px-3 pt-3 pb-4 isolate rounded-2xl"
        >
          <!-- picture wrapper -->
          <picture
            class="flex flex-row items-center gap-[10px] rounded-xl lg:w-[200px] lg:h-[200px]"
          >
            <nuxt-img
              class="rounded-xl"
              loading="lazy"
              format="webp"
              provider="cloudinary"
              :src="projectFirst.picture"
            />
          </picture>
          <div class="flex flex-col items-start gap-[2px] pt-2">
            <h1 class="font-bold text-base text-[#22242C]">
              {{ projectFirst.title }}
            </h1>
            <p
              class="font-normal lg:pr-8 text-[15px] text-[#22242C] opacity-60 leading-5 -tracking-[0.009em]"
            >
              {{ projectFirst.deskripsi }}
            </p>
          </div>
        </div>
      </div>
      <!-- second row -->
      <div class="flex flex-row items-start gap-[14px]">
        <!-- box -->
        <div
          v-for="projectSecond in workTwo"
          :key="projectSecond"
          class="flex flex-col items-start px-3 pt-3 pb-4 isolate rounded-2xl"
        >
          <!-- picture wrapper -->
          <picture
            class="flex flex-row items-center gap-[10px] rounded-xl lg:w-[200px] lg:h-[200px]"
          >
            <nuxt-img
              class="rounded-xl"
              loading="lazy"
              format="webp"
              provider="cloudinary"
              :src="projectSecond.picture"
            />
          </picture>
          <div class="flex flex-col items-start pt-2 gap-[2px]">
            <h1 class="font-bold text-base text-[#22242C]">
              {{ projectSecond.title }}
            </h1>
            <p
              class="font-normal lg:pr-8 text-[15px] text-[#22242C] opacity-60 leading-5 -tracking-[0.009em]"
            >
              {{ projectSecond.deskripsi }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
