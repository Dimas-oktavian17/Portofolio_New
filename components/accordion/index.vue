<script setup>
const acordion = reactive([
  {
    title: "Siapa Dimas Oktavian?",
    deskripsi: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    title: "Mengapa harus menghire Dimas Oktavian?",
    deskripsi: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    title: "Bagaimana proses Dimas Oktavian belajar?",
    deskripsi: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    title: "Apa saja skill yang dimiliki Dimas Oktavian?",
    deskripsi: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
]);
</script>
<template>
  <!-- wrapper position -->
  <div class="flex flex-row items-center justify-center">
    <!-- wrapper accordion -->
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <div class="transition-all duration-500 cursor-pointer mx-auto p-8">
        <!-- accordion faq -->
        <details
          open
          class="open:shadow-lg open:dark:from-[#1E1C32]/50 open:dark:to-[#2B161D]/50 bg-gradient-to-r open:from-[rgba(255,233,244,0.3)]/30 open:to-[rgba(234,243,255,0.5)]/50 p-8 rounded-lg"
        >
          <summary
            class="transition-all duration-500 text-base lg:text-xl text-uniqe/70 dark:text-secondary/70 font-semibold select-none"
          >
            Why do they call it Ovaltine?
          </summary>
          <div
            class="transition-all duration-500 mt-3 text-sm leading-6 text-primary/70 dark:text-secondary/70"
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </details>
        <!-- close -->
        <details
          v-for="item in acordion"
          :key="item"
          class="open:shadow-lg open:my-4 open:dark:from-[#1E1C32]/50 open:dark:to-[#2B161D]/50 bg-gradient-to-r open:from-[rgba(255,233,244,0.3)]/30 open:to-[rgba(234,243,255,0.5)]/50 p-8 rounded-lg"
        >
          <summary
            class="transition-all duration-500 text-base lg:text-xl text-uniqe/70 dark:text-secondary/70 font-semibold select-none"
          >
            {{ item.title }}
          </summary>
          <div
            class="transition-all duration-500 mt-3 text-sm leading-6 text-primary/70 dark:text-secondary/70"
          >
            <p>
              {{ item.deskripsi }}
            </p>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>
