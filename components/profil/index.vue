<script setup>
const profil = ref(`/v1681908492/portofolio/Profil.png`);
</script>
<template>
  <!-- wrapper -->
  <div class="flex flex-col items-center pt-32 justify-center">
    <picture class="grayscale">
      <nuxt-img
        class="rounded-full object-cover object-center dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50 dark:bg-uniqe/70 h-40"
        loading="lazy"
        format="webp"
        provider="cloudinary"
        :src="profil"
      />
    </picture>
    <h1
      class="text-2xl font-profil text-primary/70 dark:text-secondary/70 font-bold pt-2"
    >
      Front-end Developer
    </h1>
  </div>
</template>
