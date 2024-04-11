<script setup>
const story = useStory()
const length = ref(2);
const loadMore = () => {
  if (length.value >= story.value.length) return
  length.value = length.value + 3
}
// a computed ref
const loaded = computed(() => story.value.slice(0, length.value));
</script>

<template>
  <div class="flex flex-row items-center justify-center pt-[10.75rem]">
    <div class="flex flex-col lg:flex-row items-start justify-center gap-12 w-[500px]">
      <div class="flex flex-col self-start">
        <ul v-for="({ date, title, deskripsi, picture, url, index }) in loaded" :key="index"
          class="font-black text-[#CEC8CC] text-3xl">
          <li
            class="lg:pl-4 lg:pb-10 lg:border-r border-black dark:border-[#CEC8CC]/50 -ml-2 border-uniqe lg:border-dashed">
            <NuxtLink :to="url" class="flex flex-col items-start gap-3 pb-8 pl-8 lg:pb-0 lg:pl-0">
              <h2 class="lg:mr-2 text-xs self-end font-normal text-[#22242C]/60 dark:text-[#ECEDEE]/60">
                {{ date }}
              </h2>
              <h1 class="text-lg font-semibold uppercase text-[#22242C] dark:text-[#ECEDEE]">
                {{ title }}
              </h1>
              <h2 class="text-base font-normal text-[#22242C]/60 dark:text-[#ECEDEE]/60">
                {{ deskripsi }}
              </h2>
              <!-- date  -->
              <picture>
                <nuxt-img
                  class="w-auto h-auto max-w-xs transition-all duration-1000 rounded-2xl grayscale hover:grayscale-0"
                  loading="lazy" format="webp" provider="cloudinary" :src="picture" />
              </picture>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center pt-8">
    <button @click="loadMore"
      class="text-[#22242C]/70 dark:text-[#ECEDEE]/70 font-bold transition-all duration-500 hover:opacity-50 dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50 rounded-lg flex flex-row items-center justify-center py-3 px-5 lg:px-16 gap-1">
      Load More
    </button>
  </div>
</template>
