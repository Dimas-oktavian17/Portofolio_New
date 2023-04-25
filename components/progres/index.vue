<script setup>
const story = reactive([
  {
    link: `https://medium.com/@dimas.ooktavian.17`,
    title: "elemental - figma",
    deskripsi: `The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍`,
    date: `Oct 22, 2022 • Mirror`,
    picture: `/v1682158940/portofolio/fire.png`,
  },
  // {
  //   link: `https://medium.com/@dimas.ooktavian.17`,
  //   title: "elemental - web",
  //   deskripsi: `The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍`,
  //   date: `Aug 22, 2022 • Mirror`,
  //   picture: `/v1682158940/portofolio/fire.png`,
  // },
  // {
  //   link: `https://medium.com/@dimas.ooktavian.17`,
  //   title: "elemental - figma",
  //   deskripsi: `The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍`,
  //   date: `Oct 22, 2022 • Mirror`,
  //   picture: `/v1682158940/portofolio/fire.png`,
  // },
  // {
  //   link: `https://medium.com/@dimas.ooktavian.17`,
  //   title: "elemental - web",
  //   deskripsi: `The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍`,
  //   date: `Aug 22, 2022 • Mirror`,
  //   picture: `/v1682158940/portofolio/fire.png`,
  // },
  // {
  //   link: `https://medium.com/@dimas.ooktavian.17`,
  //   title: "elemental - figma",
  //   deskripsi: `The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍`,
  //   date: `Oct 22, 2022 • Mirror`,
  //   picture: `/v1682158940/portofolio/fire.png`,
  // },
  // {
  //   link: `https://medium.com/@dimas.ooktavian.17`,
  //   title: "elemental - web",
  //   deskripsi: `The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍`,
  //   date: `Aug 22, 2022 • Mirror`,
  //   picture: `/v1682158940/portofolio/fire.png`,
  // },
]);
const length = ref(2);
const loadMore = () => {
  if (length > story.length) {
    length = length + 2;
  }
};
// a computed ref
const loaded = computed(() => {
  return story.slice(0, length);
});
</script>
<template>
  <div class="flex flex-row items-center justify-center pt-[10.75rem]">
    <div
      class="flex flex-col lg:flex-row items-start justify-center gap-12 w-[500px]"
    >
      <!--wrapper v-for  -->
      <div class="lg:w-3/12 blur hidden lg:block pl-8 lg:pl-0">
        <h1
          v-for="(processes, index) in story"
          :key="index"
          class="font-semibold text-primary text-xs lg:text-[6px] dark:text-secondary lg:pb-[28.5rem] lg:pt-3"
        >
          {{ processes.date }}
        </h1>
      </div>
      <div class="flex flex-col self-start">
        <ul
          v-for="(processes, index) in story"
          :key="index"
          class="w-full blur lg:w-9/12 lg:list-disc font-black text-[#CEC8CC] text-3xl"
        >
          <li
            class="dark:border-[#CEC8CC]/50 border-[#CEC8CC] lg:border-l lg:pl-4"
          >
            <NuxtLink
              :to="processes.link"
              class="flex flex-col items-start gap-3 pb-8 lg:pb-0 pl-8 lg:pl-0"
            >
              <h2
                class="text-xs lg:hidden font-normal text-primary/60 dark:text-secondary/60"
              >
                {{ processes.date }}
              </h2>
              <h1
                class="text-lg font-semibold uppercase text-primary dark:text-secondary"
              >
                {{ processes.title }}
              </h1>
              <h2
                class="text-base font-normal text-primary/60 dark:text-secondary/60"
              >
                {{ processes.deskripsi }}
              </h2>
              <!-- date  -->
              <picture>
                <nuxt-img
                  class="rounded-2xl"
                  loading="lazy"
                  format="webp"
                  provider="cloudinary"
                  :src="processes.picture"
                />
              </picture>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="pt-8 flex flex-col justify-center items-center">
    <button
      @click="loadMore"
      class="text-primary/70 dark:text-secondary/70 font-bold transition-all duration-500 hover:opacity-50 dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50 rounded-lg flex flex-row items-center justify-center py-3 px-5 lg:px-16 gap-1"
    >
      Load More
    </button>
  </div>
</template>
