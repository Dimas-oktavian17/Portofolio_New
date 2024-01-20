<script setup>
const story = reactive([
  {
    title: "Perjalanan pertama",
    deskripsi: `Perjalanan pertama saya dalam memulai belajar tentang Front-end Development, baca selengkapnya`,
    date: `Oct 1, 2021 • Life`,
    picture: `/v1683000561/portofolio/kehidupan.jpg`,
    url: "https://medium.com/@dimas.ooktavian.17/perjalanan-pertama-9cb05d8f1804",
  },
  // {
  //   link: `https://medium.com/@dimas.ooktavian.17`,
  //   title: "Pembelajaran pertama",
  //   deskripsi: `Perjalanan pertama saya dalam memulai belajar tentang Front-end Development, baca selengkapnya`,
  //   date: `Oct 1, 2021 • Life`,
  //   picture: `/v1683000561/portofolio/kehidupan.jpg`,
  // },
  // {
  //   link: `https://medium.com/@dimas.ooktavian.17`,
  //   title: "Pembelajaran pertama",
  //   deskripsi: `Perjalanan pertama saya dalam memulai belajar tentang Front-end Development, baca selengkapnya`,
  //   date: `Oct 1, 2021 • Life`,
  //   picture: `/v1683000561/portofolio/kehidupan.jpg`,
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
    <div class="flex flex-col lg:flex-row items-start justify-center gap-12 w-[500px]">
      <!--wrapper v-for  -->
      <div class="hidden pl-8 lg:w-1/2 lg:block lg:pl-0">
        <button v-for="(processes, index) in story" :key="index"
          class="group font-semibold text-primary lg:text-[10px] dark:text-secondary lg:pb-[33rem] lg:pt-3">
          {{ processes.date }}
          <span class="transition-all group-hover:pl-2">-></span>
        </button>
      </div>
      <div class="flex flex-col self-start">
        <!-- <ul
          class="hidden lg:block list-disc dark:text-[#CEC8CC]/50 -ml-4 bgy-[#CEC8CC] rounded-full"
        >
          {{
            processes.list
          }}
        </ul> -->
        <ul v-for="(processes, index) in story" :key="index" class="font-black text-[#CEC8CC] text-3xl">
          <li class="lg:pl-4 lg:pb-10 lg:border-l dark:border-[#CEC8CC]/50 -ml-2 border-uniqe lg:border-dashed">
            <NuxtLink :to="processes.url" class="flex flex-col items-start gap-3 pb-8 pl-8 lg:pb-0 lg:pl-0">
              <h2 class="text-xs font-normal lg:hidden text-primary/60 dark:text-secondary/60">
                {{ processes.date }}
              </h2>
              <h1 class="text-lg font-semibold uppercase text-primary dark:text-secondary">
                {{ processes.title }}
              </h1>
              <h2 class="text-base font-normal text-primary/60 dark:text-secondary/60">
                {{ processes.deskripsi }}
              </h2>
              <!-- date  -->
              <picture>
                <nuxt-img class="max-w-xs rounded-2xl grayscale" loading="lazy" format="webp" provider="cloudinary"
                  :src="processes.picture" />
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
