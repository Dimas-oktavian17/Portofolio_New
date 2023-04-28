<script setup lang="ts">
useHead({
  title: "realdms",
  meta: [{ name: "description", content: "My amazing about pages site." }],
});
</script>
<template>
  <div class="pages lg:scrolling">
    <navbar></navbar>
    <main class="container">
      <aboutme></aboutme>
      <artikel></artikel>
      <accordion></accordion>
      <profil></profil>
      <forms></forms>
      <footerr></footerr>
    </main>
  </div>
</template>
