<script setup>
const title = ref(`Stack Technology`);
const learnTitle = ref(`current learning`);
const stack = reactive([
  {
    picture: `skill-icons:html`,
    title: "Html5",
    deskripsi: `Merupakan sebuah bahasa markup yang saya gunakan untuk pengembangan Front-end Development, dan saya telah menerapkan standar Html-5 dalam pengembangan.`,
    btn: `Canvas`,
  },
  {
    picture: `skill-icons:css`,
    title: "Css3",
    deskripsi: `Merupakan sebuah bahasa yang saya gunakan untuk membuat tampilan dalam Front-end Development, dan saya telah menerapkan beberapa fitur dari CSS3.`,
    btn: `Styling`,
  },
  {
    picture: `skill-icons:bootstrap`,
    title: "Bootstrap",
    deskripsi: `Merupakan sebuah framework css yang sangat populer dalam Front-end Development, saya menggunakan Bootstrap jika memiliki deadline waktu yang sebentar dalam merancang UI.`,
    btn: `Styling Framework`,
  },
  {
    picture: `logos:tailwindcss-icon`,
    title: "Tailwind",
    deskripsi: `Merupakan sebuah framework css yang sering saya gunankan dalam pengembangan Front-end Development, saya menyukai Tailwind karena mudah untuk kustomisasi.`,
    btn: `Styling Framework`,
  },
  {
    picture: `skill-icons:javascript`,
    title: "Javascript",
    deskripsi: `Merupakan sebuah bahasa scripting yang saya gunakan untuk pengembangan Front-end Development, banyak hal yang saya telah implementasikan seperti DOM,Fetch dst.
    Namun saya tetap belajar, untuk beberapa fitur" baru ES6+.
    `,
    btn: `Programming Language`,
  },
  {
    picture: `logos:vue`,
    title: "VueJS",
    deskripsi: `Saya telah memilih Vue.js sebagai framework JavaScript untuk pengembangan Front-end Development tingkat lanjut. Pilihan ini didasarkan pada learning curve yang relatif tidak sulit, dan saya menemukan Vue.js sangat sesuai dengan kebutuhan saya. Saya merasa nyaman belajar dan menggunakan Vue.js, dan saat ini, saya sudah cukup paham terkait Vue 3 Composition API.`,
    btn: `JS Framework`,
  },
]);
const learn = reactive([
  {
    picture: `logos:pinia`,
    title: "Figma",
    deskripsi: `Merupakan sebuah state management vue, saat ini Saya sedang mempelajarinya untuk menciptakan prototipe dalam pengembangan Front-end. Dengan Pinia, saya dapat mengelola state secara intuitif, memungkinkan saya fokus pada pengembangan tanpa perlu terlalu banyak memikirkan tentang manajemen state.`,
    btn: `Design`,
  },
  {
    picture: `skill-icons:figma-dark`,
    title: "Figma",
    deskripsi: `Merupakan sebuah tools design untuk membuat UI / UX, saat ini saya mempelajari figma untuk membuat prototype dalam Front - end Development.`,
    btn: `Design`,
  },
  {
    picture: `material-symbols:library-add-check`,
    style: `text-[#22242C] dark:text-[#ECEDEE]`,
    title: "Library",
    deskripsi: `Merupakan sebuah perpustakaan yang bertujuan untuk mempermudah pengembangan Front - end Development, Saya juga belajar berbagai macam library sesuai kebutuhan untuk pengembangan Front - end Development.`,
    btn: `Library`,
  },
]);
// const displayFlex = ref({
//   title: "Flex",
//   style:
//     "rounded flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#F0D6FF] to-[#D3CDFF] text-[#5C1BAE]/80 dark:text-[#ECEDEE] dark:from-[#FF2497]  dark:to-[#8D2DE3] transition-all duration-500 hover:opacity-60",
//   icon: "material-symbols:flex-direction-rounded",
//   iconS: `text - [#5C1BAE] / 80 dark: text - [#ECEDEE]`,
// });
// const displayGrid = ref({
//   title: "Grid",
//   style:
//     "rounded flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] text-[#8C007E]/80 dark:text-[#ECEDEE] dark:from-[#8D2DE3]  dark:to-[#FF2497] transition-all duration-500 hover:opacity-60",
//   icon: "teenyicons:grid-layout-solid",
//   iconS: `text - [#8C007E] / 80 dark: text - [#ECEDEE]`,
// });
// function flex() {
//   flex === true;
// }
// function grid() {
//   grid === true;
// }
</script>
<template>
  <!-- <ClientOnly>
    <div class="flex flex-row items-center justify-center gap-4">
      <button :class="displayFlex.style" @click="flex">
        <Icon
          name="material-symbols:flex-direction-rounded"
          class="text-[#5C1BAE]/80 dark:text-[#ECEDEE]"
        />
        {{ displayFlex.title }}
      </button>
      <button :class="displayGrid.style" @click="grid">
        <Icon
          name="teenyicons:grid-layout-solid"
          class="text-[#8C007E]/80 dark:text-[#ECEDEE]"
        />
        {{ displayGrid.title }}
      </button>
    </div>
  </ClientOnly> -->

  <div class="flex flex-row items-center justify-center pt-[10.75rem]">
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <!-- current tech stack -->
      <h1 class="text-base font-bold capitalize lg:pl-0 text-uniqe/70 dark:text-[#ECEDEE]/70">
        {{ title }}
      </h1>
      <!-- wrapper  -->
      <div class="flex flex-col items-start gap-5">
        <!-- skill stack -->
        <div class="group dflex" v-for="(stacks, index) in stack" :key="index">
          <div
            class="flex flex-col items-start max-w-xs gap-4 p-3 transition-all duration-1000 cursor-pointer lg:max-w-max lg:flex-row group-hover:gradient rounded-2xl isolate">
            <picture class="pl-4 lg:pl-0">
              <Icon class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="stacks.picture" />
            </picture>
            <!-- deskripsi -->
            <div class="flex items-start flex-col gap-[5px] pl-4 lg:pl-0 w-full lg:w-4/5">
              <!-- header -->
              <div class="flex flex-row items-center justify-center gap-3 lg:justify-start">
                <h1 class="text-lg font-bold text-[#22242C] dark:text-[#ECEDEE]/70">
                  {{ stacks.title }}
                </h1>
                <button
                  class="text-xs lg:text-base bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] rounded flex items-start py-[1px] px-[6px] gap-[10px] isolate text-[#22242C]/70 dark:text-uniqe/90">
                  {{ stacks.btn }}
                </button>
              </div>
              <!-- deskripsi -->
              <p class="text-base text-left text-[#22242C] opacity-60 dark:text-[#ECEDEE]">
                {{ stacks.deskripsi }}
              </p>
            </div>
          </div>
        </div>
        <div class="hidden bg-black group dgrid" v-for="(stacks, index) in stack" :key="index">
          <div
            class="flex flex-col items-start gap-4 p-3 transition-all duration-1000 cursor-pointer lg:flex-row group-hover:gradient rounded-2xl isolate">
            <picture class="pl-4 lg:pl-0">
              <Icon class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="stacks.picture" />
            </picture>
            <!-- deskripsi -->
            <div class="flex items-start flex-col gap-[5px] pl-4 lg:pl-0 w-4/5">
              <!-- header -->
              <div class="flex flex-row items-center justify-center gap-3 lg:justify-start">
                <h1 class="text-lg font-bold text-[#22242C] dark:text-[#ECEDEE]/70">
                  {{ stacks.title }}
                </h1>
                <button
                  class="text-xs lg:text-base bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] rounded flex items-start py-[1px] px-[6px] gap-[10px] isolate text-[#22242C]/70 dark:text-uniqe/90">
                  {{ stacks.btn }}
                </button>
              </div>
              <!-- deskripsi -->
              <p class="text-base text-left text-[#22242C] opacity-60 dark:text-[#ECEDEE]">
                {{ stacks.deskripsi }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- current tech stack -->
      <h1 class="text-base font-bold capitalize text-uniqe/70 dark:text-[#ECEDEE]/70">
        {{ learnTitle }}
      </h1>
      <!-- wrapper  -->
      <div class="flex flex-col items-start gap-5">
        <!-- learn stack -->
        <div class="group" v-for="(learns, index) in learn" :key="index">
          <div
            class="flex flex-col items-start max-w-xs gap-4 p-3 transition-all duration-1000 cursor-pointer lg:max-w-max lg:flex-row group-hover:gradient rounded-2xl isolate">
            <picture class="pl-4 lg:pl-0">
              <Icon class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="learns.picture" :class="learns.style" />
            </picture>
            <!-- deskripsi -->
            <div class="flex items-start flex-col gap-[5px] pl-4 lg:pl-0 w-full lg:w-4/5">
              <!-- header -->
              <div class="flex flex-row items-center justify-center gap-3 lg:justify-start">
                <h1 class="text-lg font-bold text-[#22242C] dark:text-[#ECEDEE]/70">
                  {{ learns.title }}
                </h1>
                <button
                  class="text-xs lg:text-base bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] rounded flex items-start py-[1px] px-[6px] gap-[10px] isolate text-[#22242C]/70 dark:text-uniqe/90">
                  {{ learns.btn }}
                </button>
              </div>
              <!-- deskripsi -->
              <p class="text-base text-left text-[#22242C] opacity-60 dark:text-[#ECEDEE]">
                {{ learns.deskripsi }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
