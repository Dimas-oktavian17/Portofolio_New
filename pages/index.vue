<script setup>
useHead({
  title: "realdms",
  meta: [{ name: "description", content: "My amazing site." }],
});



</script>
<template>
  <div class="pages lg:scrolling">
    <navbar />
    <main class="container">
      <home />
      <NuxtLink to="/blog/" class="text-4xl text-white">Read the blog!</NuxtLink>
      <project />
      <contact />
      <footerr />
    </main>
  </div>
</template>
