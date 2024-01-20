<script setup>
const header = ref({
  title: "Dimas Okta",
  subtitle: `realdms`,
  deskripsi: `Passion dalam Front-end Development. Saya juga menceritakan kisah di medium . Saya menghabiskan sebagian besar waktu saya membuat project dan belajar teknologi dalam Front-end Development.`,
  link: `/about`,
  picture: "ic:baseline-waving-hand",
});
const footer = ref({
  title: "Download my curriculum vitae at",
  subtitle: "@here",
  cv: "http://tinyurl.com/bdf99ft4",
  end: `, thank you`,
});
</script>
<template>
  <!-- wrapper  -->
  <div class="flex flex-col items-start gap-4 p-4 transition-all lg:py-16">
    <!-- pict profile -->
    <div class="flex cursor-pointer flex-row items-center group gap-[.938rem] pb-[.75rem] w-[15.563rem] h-[6.375rem]">
      <!-- picture -->
      <picture class="w-[90px] h-[90px]">
        <Icon :name="header.picture" size="5.625rem"
          class="transition-all text-primary dark:text-white opacity-90 group-hover:rotate-6" />
      </picture>
      <div>
        <h1 class="text-2xl font-medium text-black dark:text-white">
          {{ header.title }}
        </h1>
        <!-- wrapper -->
        <div class="flex flex-row items-center gap-1">
          <NuxtLink :to="header.link" class="text-base font-semibold text-[#4A576F] opacity-70">
            {{ header.subtitle }}
            <svg class="inline-block transition-all group-hover:ml-2" width="17" height="16" viewBox="0 0 17 16"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.66488 4C5.29669 4 4.99821 4.29848 4.99821 4.66667C4.99821 5.03485 5.29669 5.33333 5.66488 5.33333V4ZM12.3315 4.66667H12.9982C12.9982 4.29848 12.6997 4 12.3315 4V4.66667ZM11.6649 11.3333C11.6649 11.7015 11.9634 12 12.3315 12C12.6997 12 12.9982 11.7015 12.9982 11.3333H11.6649ZM4.52681 11.5286C4.26645 11.7889 4.26645 12.2111 4.52681 12.4714C4.78716 12.7318 5.20927 12.7318 5.46961 12.4714L4.52681 11.5286ZM5.66488 5.33333H12.3315V4H5.66488V5.33333ZM11.6649 4.66667V11.3333H12.9982V4.66667H11.6649ZM11.8601 4.19527L4.52681 11.5286L5.46961 12.4714L12.8029 5.13807L11.8601 4.19527Z"
                fill="#4A576F" fill-opacity="0.7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- deskripsi -->
    <p class="font-normal text-[20px] dark:text-[#ECEDEE] leading-8 tracking-[-1.7%] text-[#22242C]">
      {{ header.deskripsi }}
    </p>
    <!-- footer text -->
    <div class="flex flex-row items-start gap-[9px] lg:w-[344px] h-[24px]">
      <div class="font-medium text-lg text-[#4A576F] opacity-70 lg:pr-0">
        {{ footer.title }}
        <NuxtLink target="_blank" :to="footer.cv" download
          class="inline-block font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#4AB1F1] to-[#FF7C51]">
          {{ footer.subtitle }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script></script>
