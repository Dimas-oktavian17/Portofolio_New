<script setup>
const title = ref("realdms");
const name = ref("dimas okta");
const footer = reactive([
  { link: "./about", title: "about" },
  { link: "./work", title: "work" },
  { link: "./story", title: "story" },
  { link: "./timeline", title: "timeline" },
  { link: "./stack", title: "stack" },
]);
const start = ref(`/v1681746827/portofolio/startLight.svg`);
const startDark = ref(`/v1681746827/portofolio/startDark.svg`);
const end = ref(`/v1681746827/portofolio/endLight.svg`);
const endDark = ref(`/v1681746827/portofolio/endDark.svg`);
</script>
<template>
  <div class="pt-12">
    <div class="flex flex-col items-center py-[60px] px-[128px] gap-[120px]">
      <!-- section top -->
      <div class="flex flex-col items-center justify-center gap-3 mx-[128px]">
        <div class="flex items-center flex-row gap-[2px] opacity-80">
          <h1 class="font-medium text-base text-[#4A576F]/70">
            {{ title }}
            <span class="text-xs font-medium text-[#4A576F]/70"> ✦ </span>
            {{ name }}
          </h1>
        </div>
        <ul class="flex flex-row items-center justify-between">
          <li
            v-for="list in footer"
            :key="list"
            class="text-xs lg:pl-2 font-medium text-[#4A576F]/70"
          >
            <NuxtLink
              :to="list.link"
              class="transition-all duration-500 block py-2 pr-4 text-base font-medium rounded hover:opacity-70 hover:rotate-12 dark:text-[#727888]/60 text-[#4A576F]/70 md:bg-transparent md:p-0"
              aria-current="page"
            >
              {{ list.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- motivation -->
      <div class="flex flex-row items-center justify-center">
        <div
          class="cursor-text text-xs font-medium text-[#22242C]/70 px-4 py-2 dark:text-[#ECEDEE]/70 hover:border outline-none hover:transition-all hover:duration-500 transition-all duration-500 border-[#22242C]/70 dark:border-[#ECEDEE]/70 border-x border-solid rounded"
        >
          stay hungry, stay foolish
        </div>
      </div>
    </div>
  </div>
</template>
