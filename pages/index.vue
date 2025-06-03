<script lang="ts" setup>
defineOgImage({ url: 'https://res.cloudinary.com/duvpel2np/image/upload/v1710481946/Screenshot_2024-03-15_125148_fquim6.png', alt: 'My Image' })
const { projects } = await timelineStore();
</script>

<template>
  <div class="pages lg:scrolling">
    <navbar />
    <main class="container">
      <home />
      <project :data="projects.slice(0,3)" />
      <contact />
      <footerr />
    </main>
  </div>
</template>
