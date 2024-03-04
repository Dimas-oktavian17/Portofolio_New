<script setup>
const navOpen = ref(true);
function mode(theme) {
  useColorMode().preference = theme;
}

const medsosIcon = reactive([
  {
    title: "Kunjungi ;inkedin saya",
    url: "https://www.linkedin.com/in/dimas-oktavian/",
    icon: "linkendin",
  },
  {
    title: "Kunjungi Instagram saya",
    url: "https://github.com/Dimas-oktavian17",
    icon: "github",
  },
  // {
  //   url: "https://www.instagram.com/dimas_okr/",
  //   icon: "insta",
  // },
]);
const nav = reactive([
  { link: "/about", title: "about" },
  { link: "/work", title: "work" },
  { link: "/story", title: "story" },
  { link: "/blog", title: "blog" },
  { link: "/timeline", title: "timeline" },
  { link: "/stack", title: "stack" },
]);
</script>

<template>
  <header class="container" id="beranda">
    <nav class="px-2 mb-10 lg:pt-8">
      <div id="sidemenu"
        class="transition-all backdrop-blur-lg fixed container dark:bg-[#1c162f33] bg-[#ffffff33] w-[95%] z-[999] flex flex-wrap items-center justify-between rounded-xl lg:w-[98%]">
        <NuxtLink to="./" class="flex ml-4 transition-all duration-500 hover:rotate-12">
          <h1
            class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#ff1b6b] to-[#45caff] dark:from-[#40c9ff] dark:to-[#e81cff]">
            Realdms
          </h1>
        </NuxtLink>
        <div class="flex md:order-2">
          <div class="relative mr-3 md:mr-0 md:block">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <!-- medsos -->
            <div class="flex flex-row items-center gap-3">
              <!-- sosmed -->
              <div
                class="flex flex-row justify-between items-start py-[2px] px-3 border-r border-solid border-r-[#00000026] dark:border-r-[#ffffff26]">
                <!-- linkendin -->
                <div v-for="icons in medsosIcon" :key="icons" class="ml-2">
                  <NuxtLink :aria-label="icons.title" class="group" :to="icons.url" target="_blank">
                    <nuxt-icon :name="icons.icon"
                      class="transition-all duration-500 group-hover:rotate-12 dark:text-white" />
                  </NuxtLink>
                </div>
              </div>
              <!-- end -->
              <!-- darkmode -->
              <button type="button" aria-label="switchMode" @click="
                  mode($colorMode.preference === 'dark' ? 'light' : 'dark')
                  " class="group lg:pr-4">
                <!-- moon -->
                <nuxt-icon name="moon" class="hidden transition-all dark:block group-hover:rotate-12 dark:text-white" />
                <!-- sun -->
                <nuxt-icon name="sun" class="transition-all dark:hidden group-hover:rotate-12" />
              </button>
            </div>
            <!-- end -->
          </div>
          <button @click="navOpen = !navOpen" data-collapse-toggle="mobile-menu-3" type="button"
            class="inline-flex items-center justify-center text-gray-400 transition-all duration-1000 rounded-lg md:hidden group hover:text-gray-900"
            aria-controls="mobile-menu-3" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <div class="flex flex-col items-end pr-4">
              <p :class="{
                  ' origin-bottom-left rotate-[0deg] dark:bg-white bg-[#0A0A0D] transition-all w-5 h-[1.33px] rounded':
                    navOpen,
                }"
                class="origin-bottom-left rotate-45 pb-1 mb-[2px] dark:bg-white bg-[#0A0A0D] transition-all w-5 h-[1.33px] rounded">
              </p>
              <p :class="{
                  ' dark:bg-white origin-bottom-left scale-105  bg-[#0A0A0D] transition-all w-3 h-[1.33px] rounded':
                    navOpen,
                }"
                class="dark:bg-white origin-bottom-left scale-0 rotate-0 pb-1 mb-[2px] bg-[#0A0A0D] transition-all w-2 h-[1.33px] rounded">
              </p>
              <p :class="{
                  'origin-top-left dark:bg-white rotate-[0deg] bg-[#0A0A0D] transition-all h-[1.33px]  rounded':
                    navOpen,
                }"
                class="origin-top-left dark:bg-white pb-1 mb-[2px] -rotate-45 bg-[#0A0A0D] transition-all w-5 h-[1.33px] rounded">
              </p>
            </div>
          </button>
        </div>
        <div :class="{ hidden: navOpen }"
          class="items-center justify-between w-full transition-all duration-500 md:flex md:w-auto md:order-1"
          id="mobile-menu-3">
          <ul
            class="flex flex-col mt-4 transition-all duration-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li v-for="navMenu in nav" :key="navMenu">
              <NuxtLink :to="navMenu.link" @click="navOpen = !navOpen"
                class="transition-all duration-500 block py-2 pl-3 pr-4 text-base font-medium rounded lg:hover:bg-transparent lg:dark:hover:bg-transparent hover:bg-[#1E1C32]/50 dark:hover:bg-[rgba(255,233,244,0.3)]/30 hover:opacity-70 lg:hover:rotate-12 dark:text-white text-[#0A0A0D] md:bg-transparent md:p-0"
                aria-current="page">
                {{ navMenu.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style></style>
