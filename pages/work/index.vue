<script setup lang="ts">
useHead({
  title: "realdms",
  meta: [{ name: "description", content: "My amazing work pages site." }],
});
</script>
<template>
  <div class="pages lg:scrolling">
    <navbar></navbar>
    <main class="container">
      <workme></workme>
      <slide></slide>
      <!-- <modal></modal> -->
      <footerr></footerr>
    </main>
  </div>
</template>
