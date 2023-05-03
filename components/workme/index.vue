<script setup>
const title = ref(`Work`);
const deskripsi = ref(
  `
   Sepanjang tahun, saya menghabiskan banyak waktu untuk membuat berbagai project serta berbagai teknologi yang berbeda. Saya juga pernah membuat tampilan website PPDB untuk sekolah saya.
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
      <div class="">
        <h1
          class="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text to-[#DC79FF] from-[#256BFA]"
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
