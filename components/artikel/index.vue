<script setup>
const article = ref(`
Saya seorang otodidak Front-end Developer yang telah belajar sejak oktober 2021. Saya telah belajar banyak tentang Front-end Development, namun saya tetap belajar sampai detik ini. Saat ini, saya juga telah mencoba untuk konsisten membuat berbagai project yang saya open source'kan melalui github. Saya juga suka berbagi pembelajaran dan pengalaman saya dalam belajar Front-end Development di medium.
`);
const current = ref(`
          Current
`);
const deskripsi = ref(`
          Mencari kerja sebagai Front-end Developer ataupun Web Designer. Dan sebagian besar waktu dihabiskan di rumah saya untuk membangun website dan menulis di medium. 
Saat ini saya juga belajar VueJs,figma dan masih tetap mengasah keterampilan Front-end Development.
          `);
</script>
<template>
  <div class="flex flex-row items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <!-- artikel about me  -->
      <article
        class="pl-8 text-base font-normal lg:pl-0 text-primary dark:text-secondary"
      >
        {{ article }}
      </article>
      <!-- current -->
      <div class="flex flex-col items-start gap-4 pl-8 lg:pl-0">
        <h1
          class="text-base font-bold uppercase text-uniqe/70 dark:text-secondary"
        >
          {{ current }}
        </h1>
        <p class="text-base font-normal text-primary dark:text-secondary">
          {{ deskripsi }}
        </p>
      </div>
      <!-- faq about me -->
      <div class="flex flex-col items-start justify-start gap-4">
        <h1
          class="text-base font-bold uppercase text-start text-uniqe/70 dark:text-secondary/70"
        >
          faq
        </h1>
      </div>
      <!-- close accordion -->
    </div>
  </div>
</template>
