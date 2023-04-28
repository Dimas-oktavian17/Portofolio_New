<script setup lang="ts">
useHead({
  title: "realdms",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>
<template>
  <div class="pages lg:scrolling">
    <navbar></navbar>
    <main class="container">
      <home></home>
      <project></project>
      <contact></contact>
      <footerr></footerr>
    </main>
  </div>
</template>
