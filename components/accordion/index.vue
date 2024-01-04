<script setup>
const acordion = reactive([
  {
    title: "Sejak kapan Dimas Oktavian menggeluti Front-end Development?",
    deskripsi: `Dimas Oktavian menggeluti Front-end Development sejak duduk dibangku kelas 10, namun baru serius menekuni pada oktober 2021.`,
  },
  {
    title: "Dimana tempat tinggal Dimas Oktavian?",
    deskripsi: `Dimas Oktavian tinggal di sebuah kota terbesar kedua di Indonesia, tepat'nya Surabaya.
    Namun Dimas Oktavian siap berpindah jika ada kesempatan dan peluang di daerah lain.
    `,
  },
  {
    title: "Bagaimana proses belajar Dimas Oktavian?",
    deskripsi: `Dimas Oktavian belajar Front-end Developer melalui berbagai tempat, seperti Sekolah dan juga belajar otodidak sendiri melalui youtube, dokumentasi resmi, artikel, serta forum komunitas online.`,
  },
  {
    title: "Apa saja skill yang dimiliki Dimas Oktavian?",
    deskripsi: `Dimas Oktavian memiliki berbagai skill khusus'nya dalam Front-end Development, seperti Html-5, Css3 dan lain". Dia juga belajar tools ataupun framework saat ini, untuk lebih tepat'nya bisa klik`,
    link: "/stack",
    skil: " disini",
  },
  {
    title: "Mengapa harus menghire Dimas Oktavian?",
    deskripsi: `Dimas Oktavian memiliki skill serta portofolio yang relate dengan Front-end Development, dia juga siap beradaptasi serta belajar agar tetap relevan di Industri.`,
  },
]);
</script>
<template>
  <!-- wrapper position -->
  <div class="flex flex-row items-center justify-center">
    <!-- wrapper accordion -->
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <div class="p-8 mx-auto transition-all duration-500 cursor-pointer">
        <!-- accordion faq -->
        <details open
          class="open:shadow-lg open:dark:from-[#1E1C32]/50 open:dark:to-[#2B161D]/50 bg-gradient-to-r open:from-[rgba(255,233,244,0.3)]/30 open:to-[rgba(234,243,255,0.5)]/50 p-8 rounded-lg">
          <summary
            class="text-base font-semibold transition-all duration-500 select-none lg:text-xl text-uniqe/70 dark:text-secondary/70">
            Siapa Dimas Oktavian?
          </summary>
          <div class="mt-3 text-sm leading-6 transition-all duration-500 text-primary/70 dark:text-secondary/70">
            <p>
              Dimas Oktavian merupakan seorang Lulusan baru tahun 2023 dari SMK
              Kawung 1. Dimas Oktavian memiliki passion yang tinggi dalam
              Front-end, tepat'nya oktober tahun 2021 dia mulai sangat menekuni
              bidang Front-end Development dan bercita" menjadi seorang
              Front-end Developer dimasa depan.
            </p>
          </div>
        </details>
        <!-- close -->
        <details v-for="item in acordion" :key="item"
          class="open:shadow-lg open:my-4 open:dark:from-[#1E1C32]/50 open:dark:to-[#2B161D]/50 bg-gradient-to-r open:from-[rgba(255,233,244,0.3)]/30 open:to-[rgba(234,243,255,0.5)]/50 p-8 rounded-lg">
          <summary
            class="text-base font-semibold transition-all duration-500 select-none lg:text-xl text-uniqe/70 dark:text-secondary/70">
            {{ item.title }}
          </summary>
          <div class="mt-3 text-sm leading-6 transition-all duration-500 text-primary/70 dark:text-secondary/70">
            <p>
              {{ item.deskripsi }}
              <NuxtLink class="font-bold" :to="item.link">
                {{ item.skil }}
              </NuxtLink>
            </p>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>
