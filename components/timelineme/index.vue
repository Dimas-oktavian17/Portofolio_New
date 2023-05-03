<script setup>
const title = ref(`Timeline`);
const deskripsi = ref(
  `
  Tampilan linier dari beberapa proses saya belajar Front-end Development sampai sekarang. Saya juga membagikanya pada medium dan linkendin.
  `
);
</script>
<template>
  <div
    class="flex flex-col items-center gap-4 px-4 transition-all py-28 lg:py-24"
  >
    <div
      class="flex flex-col items-center gap-[.938rem] pb-[.75rem] w-[15.563rem]"
    >
      <div>
        <h1
          class="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-[#DC36FA] via-[#566CEC] to-[#04D18E]"
        >
          {{ title }}
        </h1>
      </div>
    </div>
    <!-- deskripsi -->
    <p
      class="font-normal text-lg dark:text-[#ECEDEE] text-[#22242C] text-center lg:px-32"
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
