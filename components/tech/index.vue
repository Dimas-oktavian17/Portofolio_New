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
    deskripsi: `Merupakan sebuah bahasa yang saya gunakan untuk membuat tampilan dalam Front-end Development, dan saya telah menerapkan beberapa fitur dari CSS 3.`,
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
]);
const learn = reactive([
  {
    picture: `skill-icons:figma-dark`,
    title: "Figma",
    deskripsi: `Merupakan sebuah tools design untuk membuat UI/UX, saat ini saya mempelajari figma untuk membuat prototype dalam Front-end Development.`,
    btn: `Design`,
  },
  {
    picture: `logos:vue`,
    title: "VueJS",
    deskripsi: `Merupakan sebuah framework Javascript, saya belajar VueJs karena learning curve yang sangat tidak terlalu sulit serta untuk kebutuhan pengembangan Front-end Development tingkat lanjut. 
    `,
    btn: `JS Framework`,
  },
  {
    picture: `material-symbols:library-add-check`,
    style: `text-primary dark:text-secondary`,
    title: "Library",
    deskripsi: `Merupakan sebuah perpustakaan yang bertujuan untuk mempermudah pengembangan Front-end Development, Saya juga belajar berbagai macam library sesuai kebutuhan untuk pengembangan Front-end Development.`,
    btn: `Library`,
  },
]);
</script>
<template>
  <div class="flex flex-row items-center justify-center pt-[10.75rem]">
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <!-- current tech stack -->
      <h1
        class="self-start pl-8 text-base font-bold capitalize lg:pl-0 lg:self-center lg:text-center text-uniqe/70 dark:text-secondary/70"
      >
        {{ title }}
      </h1>
      <!-- wrapper  -->
      <div class="flex flex-col items-start gap-5">
        <!-- item stack -->
        <div class="group" v-for="(stacks, index) in stack" :key="index">
          <div
            class="flex flex-col items-start gap-4 p-3 transition-all duration-1000 cursor-pointer lg:flex-row group-hover:gradient rounded-2xl isolate"
          >
            <picture class="pl-4 lg:pl-0">
              <Icon
                class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="stacks.picture"
              />
            </picture>
            <!-- deskripsi -->
            <div class="flex items-start flex-col gap-[5px] pl-4 lg:pl-0 w-4/5">
              <!-- header -->
              <div
                class="flex flex-row items-center justify-center gap-3 lg:justify-start"
              >
                <h1
                  class="text-lg font-bold text-primary dark:text-secondary/70"
                >
                  {{ stacks.title }}
                </h1>
                <button
                  class="text-xs lg:text-base bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] rounded flex items-start py-[1px] px-[6px] gap-[10px] isolate text-primary/70 dark:text-uniqe/90"
                >
                  {{ stacks.btn }}
                </button>
              </div>
              <!-- deskripsi -->
              <p
                class="text-base text-left text-primary opacity-60 dark:text-secondary"
              >
                {{ stacks.deskripsi }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- current tech stack -->
      <h1
        class="self-start pl-8 text-base font-bold capitalize lg:pl-0 lg:self-center lg:text-center text-uniqe/70 dark:text-secondary/70"
      >
        {{ learnTitle }}
      </h1>
      <!-- wrapper  -->
      <div class="flex flex-col items-start gap-5">
        <!-- item stack -->
        <div class="group" v-for="(learns, index) in learn" :key="index">
          <div
            class="flex flex-col items-start gap-4 p-3 transition-all duration-1000 cursor-pointer lg:flex-row group-hover:gradient rounded-2xl isolate"
          >
            <picture class="pl-4 lg:pl-0">
              <Icon
                class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="learns.picture"
                :class="learns.style"
              />
            </picture>
            <!-- deskripsi -->
            <div class="flex items-start flex-col gap-[5px] pl-4 lg:pl-0 w-4/5">
              <!-- header -->
              <div
                class="flex flex-row items-center justify-center gap-3 lg:justify-start"
              >
                <h1
                  class="text-lg font-bold text-primary dark:text-secondary/70"
                >
                  {{ learns.title }}
                </h1>
                <button
                  class="text-xs lg:text-base bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] rounded flex items-start py-[1px] px-[6px] gap-[10px] isolate text-primary/70 dark:text-uniqe/90"
                >
                  {{ learns.btn }}
                </button>
              </div>
              <!-- deskripsi -->
              <p
                class="text-base text-left text-primary opacity-60 dark:text-secondary"
              >
                {{ learns.deskripsi }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
