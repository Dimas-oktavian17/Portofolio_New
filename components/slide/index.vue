<script setup>
const open = ref(false);
const slider = reactive([
  {
    picture: "/v1681990026/portofolio/PPDB.png",
    title: "Website PPDB Kawung 1",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.`,
    read: "Get Started",
  },
  {
    picture: "/v1681990026/portofolio/mountain.png",
    title: "Volcano",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.`,
    read: "Get Started",
  },
  {
    picture: "/v1681990025/portofolio/vue.png",
    title: "MSTSKP Landing Page",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.`,
    read: "Get Started",
  },
  {
    picture: "/v1681990026/portofolio/shorlink.png",
    title: "Short Url",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.`,
    read: "Get Started",
  },
]);
</script>
<template>
  <swiper
    :modules="[SwiperAutoplay]"
    :grabCursor="true"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }"
    class="text-center"
  >
    <swiper-slide
      class="dark:from-[#1E1C32]/50 rounded-2xl dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50"
      v-for="item in slider"
      :key="item"
    >
      <div>
        <picture>
          <nuxt-img
            class="rounded-2xl"
            loading="lazy"
            format="webp"
            provider="cloudinary"
            :src="item.picture"
          />
        </picture>
        <h1
          class="pt-16 font-bold text-center text-3xl text-primary dark:text-secondary"
        >
          {{ item.title }}
        </h1>
      </div>

      <button
        @click="open = true"
        class="transition-all duration-500 group text-center py-4 hover:opacity-70 text-primary dark:text-secondary text-lg"
      >
        {{ item.read }}
        <Icon
          name="uil:arrow-right"
          class="group-hover:ml-3 transition-all duration-500"
        />
      </button>
      <div
        v-if="open"
        class="bg-white dark:bg-black fixed z-[999] h-[30rem] w-[47rem] top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
      >
        <p class="text-base text-primary/70 dark:text-secondary/70">
          {{ item.deskripsi }}
        </p>
        <button
          @click="open = false"
          class="py-2 px-6 bg-primary dark:bg-secondary dark:text-primary text-secondary rounded-lg mt-4"
        >
          Close
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
