<script setup>
const story = useStory()
</script>
<template>
  <div class="flex flex-row items-center justify-center pt-[10.75rem]">
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <div v-for="({ title, deskripsi, date, url, index }) in story" :key="index"
        class="flex flex-col items-start gap-4 pl-8 lg:pl-0">
        <!-- url -->
        <NuxtLink :aria-label="title" :to="url" target="_blank">
          <h1 class="text-lg font-semibold uppercase text-[#22242C] dark:text-[#ECEDEE]">
            {{ title }}
          </h1>
          <h2 class="text-base font-normal text-[#22242C]/60 dark:text-[#ECEDEE]/60">
            {{ deskripsi }}
          </h2>
          <!-- date  -->
          <p class="text-xs font-medium text-[#22242C]/60 dark:text-[#ECEDEE]/60">
            {{ date }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
