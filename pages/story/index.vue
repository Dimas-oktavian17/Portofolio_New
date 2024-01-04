<script setup>
useHead({
  title: "realdms",
  meta: [{ name: "description", content: "My amazing story pages site." }],
});
const title = ref('Story')
const deskripsi = ref(
  `Kadang-kadang, saya akan membagikan proses dan studi kasus saya. Saya biasanya mempublikasikan di Medium atau Linkendin.`
);
</script>
<template>
  <div class="pages lg:scrolling">
    <navbar></navbar>
    <main class="container">
      <storyme :deskripsi="deskripsi" :title="title"></storyme>
      <support></support>
      <storytxt></storytxt>
      <footerr></footerr>
    </main>
  </div>
</template>
