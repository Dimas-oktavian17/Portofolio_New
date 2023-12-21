<script setup>
const story = reactive([
  {
    id: 1,
    title: "Perjalanan pertama",
    deskripsi: `Perjalanan pertama saya dalam memulai belajar tentang Front-end Development, baca selengkapnya`,
    date: `Apr 6, 2023 • Life`,
    url: "https://medium.com/@dimas.ooktavian.17/perjalanan-pertama-9cb05d8f1804",
  },
  // {
  //   id: 2,
  //   title: "Open-Source 3dicons Library: Case Study And Free Downloads",
  //   deskripsi: `In this article, I describe my learning experiences during the design stages of creating the 3dicons image library (a free library`,
  //   date: `May 7, 2022 • Smashingmagzine`,
  //   url: "/blog/",
  // },
  //   {
  //     title: "Open-Source 3dicons Library: Case Study And Free Downloads",
  //     deskripsi: `In this article, I describe my learning experiences during the design stages of creating the 3dicons image library (a free library`,
  //     date: `May 3, 2022 • Smashingmagzine`,
  //   },
]);
</script>
<template>
  <div class="flex flex-row items-center justify-center pt-[10.75rem]">
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <div v-for="storys in story" :key="storys" class="flex flex-col items-start gap-4 pl-8 lg:pl-0">
        <!-- url -->
        <NuxtLink :aria-label="storys.title" :to="storys.url" target="_blank">
          <h1 class="text-lg font-semibold uppercase text-primary dark:text-secondary">
            {{ storys.title }}
          </h1>
          <h2 class="text-base font-normal text-primary/60 dark:text-secondary/60">
            {{ storys.deskripsi }}
          </h2>
          <!-- date  -->
          <p class="text-xs font-medium text-primary/60 dark:text-secondary/60">
            {{ storys.date }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
