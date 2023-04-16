<script setup>
const title = ref("");
const deskripsi = ref("");
const footer = ref("");
const url = ref(
  "https://res.cloudinary.com/duvpel2np/image/upload/v1681651613/portofolio/contactLight.svg"
);
</script>
<template>
  <div
    class="bg-gradient-to-tr from-[#ffe9f4] to-[#eaf3ff] rounded-[20px] flex flex-row items-center justify-between gap-[10px] isolate lg:h-[339px]"
  >
    <!-- deskripsi -->
    <div class="flex flex-col items-start lg:pl-8 lg:w-1/2">
      <div>
        <h1
          class="font-normal lg:text-[44px] lg:leading-[120%] lg:-tracking-[.02em] bg-clip-text text-transparent bg-gradient-to-tr from-[#EE4C54] from-25% via-[#D45E95] via-50% to-[#6583C1] to-100%"
        >
          Say hi!
        </h1>
        <p class="text-xl pt-5 font-medium text-[#22242C] opacity-80 pr-4">
          Want to create something awesome? Or, you have any query? Drop an
          email or tweet.
        </p>
        <!-- footer -->
        <div class="flex flex-row items-start gap-10 pt-6">
          <div
            class="flex flex-row items-center justify-start py-[2px] gap-1 w-full"
          >
            <NuxtLink to="">
              <Icon name="bx:bxl-gmail" class="text-[#1584EB]" />
              <span
                class="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#1584EB] from-5% to-[#24D6D9] to-95%"
              >
                email
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- image -->
    <div class="lg:w-1/2">
      <!-- <nuxt-img
        class="rounded-xl"
        loading="lazy"
        format="webp"
        provider="cloudinary"
        :src="projectSecond.picture"
      /> -->
    </div>
  </div>
</template>
