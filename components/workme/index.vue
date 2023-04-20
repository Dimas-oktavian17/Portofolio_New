<script setup>
const title = ref(`Work`);
const deskripsi = ref(
  `
  Over the course of the year, I spent a significant amount of time creating resources and tools for the community and many project for brands.
  `
);
</script>
<template>
  <div
    class="flex flex-col items-center gap-4 p-4 transition-all duration-500 lg:py-24"
  >
    <div
      class="flex flex-col items-center gap-[.938rem] pb-[.75rem] w-[15.563rem]"
    >
      <div class="">
        <h1
          class="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text to-[#DC79FF] from-[#256BFA]"
        >
          {{ title }}
        </h1>
      </div>
    </div>
    <!-- deskripsi -->
    <p
      class="font-normal text-lg dark:text-[#ECEDEE] text-[#22242C] text-center px-32"
    >
      {{ deskripsi }}
    </p>
    <!-- footer text -->
    <div class="flex flex-row items-center justify-between">
      <Icon
        name="codicon:chrome-minimize"
        class="text-[#4A576F]/40 rounded dark:text-white/40"
        size="3rem"
      />
      <span
        class="text-xs font-medium text-[#4A576F]/70 mx-2 dark:text-white/60"
      >
        ✦
      </span>
      <Icon
        size="3rem"
        name="codicon:chrome-minimize"
        class="text-[#4A576F]/40 rounded dark:text-white/40"
      />
    </div>
  </div>
</template>
