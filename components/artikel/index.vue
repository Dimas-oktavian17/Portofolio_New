<script setup>
const article = ref(`
        I am a digital artist who has been bringing a little more color to the
        internet for years through my illustrations and designs. I help brands
        develop their visual identity and design language to make their products
        more appealing and accessible. Currently, building design tools and
        resources @overlayz. I also love sharing my learnings and open source
        design resources to assist my fellow designers, developers, and
        enthusiasts when possible.
`);
const current = ref(`
          Current
`);
const deskripsi = ref(`
          Working as independent contractor to help brands with visuals and
          design ssystem. And most of time spending time at my studio buildding
          design tool and resources, Learning 3d, Experimenting in Figma,
          Exploring web3/NFT and Metaverse.
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
