<script setup>
const title = ref("Say hi!");
const deskripsi = ref(
  `Want to create something awesome? Or, you have any query? Drop an email or tweet.`
);
const footer = ref("email");
const urlLight = ref("/v1681651613/portofolio/contactLight.svg");
const urlDark = ref("/v1681651613/portofolio/contactDark.svg");
</script>
<template>
  <div class="flex flex-col items-center justify-center pt-24">
    <div
      class="max-w-xs lg:max-w-5xl lg:h-[339px] dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50 rounded-[20px] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-[10px] isolate"
    >
      <!-- deskripsi -->
      <div class="flex flex-col items-start w-full lg:pl-8 lg:w-1/2">
        <div class="pb-8 pl-8 lg:pb-0 lg:pl-0">
          <h1
            class="font-bold text-[44px] leading-[120%] -tracking-[.02em] bg-clip-text text-transparent bg-gradient-to-tr from-[#EE4C54] from-25% via-[#D45E95] via-25% to-[#9C6CA6] to-50%"
          >
            {{ title }}
          </h1>
          <p
            class="text-xl dark:text-[#ECEDEE] pt-5 font-medium text-[#22242C] opacity-80 pr-4"
          >
            {{ deskripsi }}
          </p>
          <!-- footer -->
          <div class="flex flex-row items-start gap-10 pt-6">
            <div
              class="flex flex-row items-center justify-start py-[2px] gap-1 w-full"
            >
              <NuxtLink to="">
                <Icon name="bx:bxl-gmail" class="text-[#1584EB]" />
                <span
                  class="pl-2 text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#1584EB] from-5% to-[#24D6D9] to-95%"
                >
                  {{ footer }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- image -->
      <div
        class="flex flex-col items-center w-full lg:items-start lg:pl-8 lg:w-1/2"
      >
        <picture class="block dark:hidden">
          <nuxt-img
            loading="lazy"
            format="webp"
            provider="cloudinary"
            :src="urlLight"
          />
        </picture>
        <picture class="hidden dark:block">
          <nuxt-img
            loading="lazy"
            format="webp"
            provider="cloudinary"
            :src="urlDark"
          />
        </picture>
      </div>
    </div>
  </div>
</template>
