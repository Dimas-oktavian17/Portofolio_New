<script setup>
const story = reactive([
  {
    title: "Welcome to the Lil Frenz Group (LFG)",
    deskripsi: `Lil Frenz Group is a dynamic NFT collection coming to Ethereum very soon. Lil Frenz started with this idea; Instead of generating`,
    date: `Aug 22, 2022 • Mirror`,
  },
  //   {
  //     title: "Open-Source 3dicons Library: Case Study And Free Downloads",
  //     deskripsi: `In this article, I describe my learning experiences during the design stages of creating the 3dicons image library (a free library`,
  //     date: `May 7, 2022 • Smashingmagzine`,
  //   },
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
      <div
        v-for="storys in story"
        :key="storys"
        class="flex flex-col items-start gap-4 pl-8 lg:pl-0"
      >
        <h1
          class="text-lg font-semibold uppercase text-primary dark:text-secondary"
        >
          {{ storys.title }}
        </h1>
        <h2
          class="text-base font-normal text-primary/60 dark:text-secondary/60"
        >
          {{ storys.deskripsi }}
        </h2>
        <!-- date  -->
        <p class="text-xs font-medium text-primary/60 dark:text-secondary/60">
          {{ storys.date }}
        </p>
      </div>
    </div>
  </div>
</template>
