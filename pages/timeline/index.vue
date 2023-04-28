<script setup lang="ts">
useHead({
  title: "realdms",
  meta: [{ name: "description", content: "My amazing work timeline site." }],
});
</script>
<template>
  <div class="pages lg:scrolling">
    <navbar></navbar>
    <main class="container">
      <timelineme></timelineme>
      <support></support>
      <Progres></Progres>
      <footerr></footerr>
    </main>
  </div>
</template>
