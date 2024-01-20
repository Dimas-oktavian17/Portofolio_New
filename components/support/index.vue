<script setup>
const btn = reactive([
  {
    title: "linkendin",
    style:
      "rounded flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#F0D6FF] to-[#D3CDFF] text-[#5C1BAE]/80 dark:text-[#ECEDEE] dark:from-[#FF2497]  dark:to-[#8D2DE3] transition-all duration-500 hover:opacity-60",
    link: `https://www.linkedin.com/in/dimas-oktavian/`,
    icon: "ion:logo-linkedin",
    iconS: `text-[#5C1BAE]/80 dark:text-[#ECEDEE]`,
  },
  {
    title: "Medium",
    style:
      "rounded flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] text-[#8C007E]/80 dark:text-[#ECEDEE] dark:from-[#8D2DE3]  dark:to-[#FF2497] transition-all duration-500 hover:opacity-60",
    link: `https://medium.com/@dimas.ooktavian.17`,
    icon: "mdi:medium",
    iconS: `text-[#8C007E]/80 dark:text-[#ECEDEE]`,
  },
]);
</script>
<template>
  <!-- wrapper -->
  <div class="flex flex-row items-center justify-center gap-4">
    <NuxtLink :to="item.link" :class="item.style" target="_blank" v-for="item in btn" :key="item">
      <Icon :name="item.icon" :class="item.iconS" />
      {{ item.title }}
    </NuxtLink>
  </div>
</template>
