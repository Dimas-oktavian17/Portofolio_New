<script setup>
// modal
import { ModalsContainer, VueFinalModal } from "vue-final-modal";
const getInitialValues = () => ({
  teleportTo: "body",
  modelValue: false,
  displayDirective: "if",
  hideOverlay: false,
  overlayTransition: "vfm-slide-up",
  contentTransition: "vfm-slide-up",
  clickToClose: true,
  escToClose: true,
  background: "non-interactive",
  lockScroll: true,
  swipeToClose: "none",
});
const getInitialValues2 = () => ({
  teleportTo: "body",
  modelValue: false,
  displayDirective: "if",
  hideOverlay: false,
  overlayTransition: "vfm-slide-up",
  contentTransition: "vfm-slide-up",
  clickToClose: true,
  escToClose: true,
  background: "non-interactive",
  lockScroll: true,
  swipeToClose: "none",
});
const getInitialValues3 = () => ({
  teleportTo: "body",
  modelValue: false,
  displayDirective: "if",
  hideOverlay: false,
  overlayTransition: "vfm-slide-up",
  contentTransition: "vfm-slide-up",
  clickToClose: true,
  escToClose: true,
  background: "non-interactive",
  lockScroll: true,
  swipeToClose: "none",
});
const getInitialValues4 = () => ({
  teleportTo: "body",
  modelValue: false,
  displayDirective: "if",
  hideOverlay: false,
  overlayTransition: "vfm-slide-up",
  contentTransition: "vfm-slide-up",
  clickToClose: true,
  escToClose: true,
  background: "non-interactive",
  lockScroll: true,
  swipeToClose: "none",
});
const options = ref(getInitialValues());
function reset() {
  options.value = getInitialValues();
}
const options2 = ref(getInitialValues2());
function reset2() {
  options2.value = getInitialValues2();
}
const options3 = ref(getInitialValues3());
function reset3() {
  options3.value = getInitialValues3();
}
const options4 = ref(getInitialValues4());
function reset4() {
  options4.value = getInitialValues4();
}
// slider & modal data
const oneMore = reactive([
  {
    link: `https://psb.smkkawung1sby.sch.id/`,
    live: "Preview",
    preview: "material-symbols:search-rounded",
  },
]);
const twoMore = reactive([
  {
    link: `https://volcano-project-pi.vercel.app/`,
    live: "Preview",
    preview: "material-symbols:search-rounded",
  },
  {
    link: `https://github.com/Dimas-oktavian17/Volcano-Project.git`,
    live: "Github",
    preview: "uil:github",
  },
]);
const threeMore = reactive([
  {
    link: `https://mstskp-id.vercel.app/`,
    live: "Preview",
    preview: "material-symbols:search-rounded",
  },
  {
    link: `https://github.com/Dimas-oktavian17/Mtskp--arrayid.git`,
    live: "Github",
    preview: "uil:github",
  },
]);
const fourMore = reactive([
  {
    link: `https://url-shortening-api-master-vite-project.vercel.app/`,
    live: "Preview",
    preview: "material-symbols:search-rounded",
  },
  {
    link: `https://github.com/Dimas-oktavian17/url-shortening-api-master.git`,
    live: "Github",
    preview: "uil:github",
  },
]);
const one = reactive({
  picture: "/v1681990026/portofolio/PPDB.png",
  title: `Website PPDB Kawung 1`,
  read: "Read More",
  modal: `Merupakan website pendaftaran peserta baru, bagi siswa yang ingin melanjutkan pendidikan di SMK Kawung 1 Surabaya.
  Website ini saya buat atas permintaan sekolah saya, dan website ini saya buat menggunakan js,tailwindcss dll.
  Pada project ini saya bertugas fokus pada tampilan front-end saja, bagian backend'nya telah dikerjakan sendiri oleh tim IT disekolah.
  `,
});
const two = reactive({
  picture: "/v1681990026/portofolio/mountain.png",
  title: `Volcano`,
  read: "Read More",
  modal: `Merupakan website pencarian gunung berapi yang ada di Indonesia, website ini dibuat menggunakan bantuan API dari Yogi Saputro.
  Website ini memiliki beberapa fitur seperti search, filter dan clear. Untuk info lebih lanjut kalian bisa mencoba'nya sendiri.`,
});
const three = reactive({
  picture: "/v1681990025/portofolio/vue.png",
  title: `MSTSKP Landing Page`,
  read: "Read More",
  modal: `Merupakan sebuah landing page sedherhana yang dibuat melalui slincing figma dari array id, website ini dibuat dengan vue js 3 serta berbagai macam libray animation`,
});
const four = reactive({
  picture: "/v1681990026/portofolio/shorlink.png",
  title: `Short Url`,
  read: "Read More",
  modal: `Merupakan website yang saya buat berdasarkan tantangan dari front-end mentor, website ini memiliki fungsi untuk mengkonversi link yang panjang menjadi lebih ringkas.`,
});
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
    <!-- 1 -->
    <swiper-slide
      class="dark:from-[#1E1C32]/50 rounded-2xl dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50"
    >
      <div>
        <picture>
          <nuxt-img
            :alt="one.title"
            class="rounded-2xl"
            loading="lazy"
            format="webp"
            provider="cloudinary"
            :src="one.picture"
          />
        </picture>
        <h1
          class="pt-16 text-3xl font-bold text-center text-primary dark:text-secondary"
        >
          {{ one.title }}
        </h1>
      </div>
      <!-- preview -->
      <div class="flex flex-row items-center justify-between py-4">
        <button
          @click="options.modelValue = true"
          class="w-1/2 py-4 text-lg text-center transition-all duration-500 group hover:opacity-70 text-primary dark:text-secondary"
        >
          {{ one.read }}
          <Icon
            name="uil:arrow-right"
            class="transition-all duration-500 group-hover:ml-3"
          />
        </button>
        <div
          v-for="(item, index) in oneMore"
          :key="index"
          class="flex flex-col items-center justify-center w-1/2 text-white"
        >
          <NuxtLink
            :aria-label="item.live"
            class="transition-all duration-500 group hover:opacity-70 text-primary dark:text-secondary"
            :to="item.link"
            target="_blank"
          >
            <Icon
              :name="item.preview"
              class="transition-all duration-500 group-hover:rotate-12 dark:text-white"
            />
            {{ item.live }}
          </NuxtLink>
        </div>
      </div>
      <!-- modal -->
      <VueFinalModal
        v-model="options.modelValue"
        :teleport-to="options.teleportTo"
        :display-directive="options.displayDirective"
        :hide-overlay="options.hideOverlay"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
        :click-to-close="options.clickToClose"
        :esc-to-close="options.escToClose"
        :background="options.background"
        :lock-scroll="options.lockScroll"
        :swipe-to-close="options.swipeToClose"
        class="flex items-center justify-center"
        content-class="max-w-xl p-4 mx-4 space-y-2 modall"
      >
        <h1 class="text-xl font-semibold text-primary dark:text-secondary">
          {{ one.title }}
        </h1>
        <p class="text-primary/70 dark:text-secondary/70">
          {{ one.modal }}
        </p>
        <button
          @click="options.modelValue = false"
          class="text-primary/70 dark:text-secondary/70"
        >
          Close
        </button>
      </VueFinalModal>
      <ModalsContainer />
    </swiper-slide>
    <!-- 2 -->
    <swiper-slide
      class="dark:from-[#1E1C32]/50 rounded-2xl dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50"
    >
      <div>
        <picture>
          <nuxt-img
            :alt="two.title"
            class="rounded-2xl"
            loading="lazy"
            format="webp"
            provider="cloudinary"
            :src="two.picture"
          />
        </picture>
        <h1
          class="pt-16 text-3xl font-bold text-center text-primary dark:text-secondary"
        >
          {{ two.title }}
        </h1>
      </div>
      <!-- preview -->
      <div class="flex flex-row items-center justify-between py-4">
        <div
          v-for="(item, index) in twoMore"
          :key="index"
          class="flex flex-col items-center justify-center w-1/2 text-white"
        >
          <NuxtLink
            :aria-label="item.live"
            class="transition-all duration-500 group hover:opacity-70 text-primary dark:text-secondary"
            :to="item.link"
            target="_blank"
          >
            <Icon
              :name="item.preview"
              size="2rem"
              class="transition-all duration-500 group-hover:rotate-12 dark:text-white"
            />
            {{ item.live }}
          </NuxtLink>
        </div>
      </div>
      <!-- read more -->
      <button
        @click="options2.modelValue = true"
        class="py-4 text-lg text-center transition-all duration-500 group hover:opacity-70 text-primary dark:text-secondary"
      >
        {{ two.read }}
        <Icon
          name="uil:arrow-right"
          class="transition-all duration-500 group-hover:ml-3"
        />
      </button>
      <!-- modal -->
      <VueFinalModal
        v-model="options2.modelValue"
        :teleport-to="options2.teleportTo"
        :display-directive="options2.displayDirective"
        :hide-overlay="options2.hideOverlay"
        :overlay-transition="options2.overlayTransition"
        :content-transition="options2.contentTransition"
        :click-to-close="options2.clickToClose"
        :esc-to-close="options2.escToClose"
        :background="options2.background"
        :lock-scroll="options2.lockScroll"
        :swipe-to-close="options2.swipeToClose"
        class="flex items-center justify-center"
        content-class="max-w-xl p-4 mx-4 space-y-2 modall"
      >
        <h1 class="text-xl font-semibold text-primary dark:text-secondary">
          {{ two.title }}
        </h1>
        <p class="text-primary/70 dark:text-secondary/70">
          {{ two.modal }}
        </p>
        <button
          @click="options2.modelValue = false"
          class="text-primary/70 dark:text-secondary/70"
        >
          Close
        </button>
      </VueFinalModal>
      <ModalsContainer />
    </swiper-slide>
    <!-- tiga -->
    <swiper-slide
      class="dark:from-[#1E1C32]/50 rounded-2xl dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50"
    >
      <div>
        <picture>
          <nuxt-img
            :alt="three.title"
            class="rounded-2xl"
            loading="lazy"
            format="webp"
            provider="cloudinary"
            :src="three.picture"
          />
        </picture>
        <h1
          class="pt-16 text-3xl font-bold text-center text-primary dark:text-secondary"
        >
          {{ three.title }}
        </h1>
      </div>
      <!-- preview -->
      <div class="flex flex-row items-center justify-between py-4">
        <div
          v-for="(item, index) in threeMore"
          :key="index"
          class="flex flex-col items-center justify-center w-1/2 text-white"
        >
          <NuxtLink
            :aria-label="item.live"
            class="transition-all duration-500 group hover:opacity-70 text-primary dark:text-secondary"
            :to="item.link"
            target="_blank"
          >
            <Icon
              :name="item.preview"
              size="2rem"
              class="transition-all duration-500 group-hover:rotate-12 dark:text-white"
            />
            {{ item.live }}
          </NuxtLink>
        </div>
      </div>
      <!-- read more -->
      <button
        @click="options3.modelValue = true"
        class="py-4 text-lg text-center transition-all duration-500 group hover:opacity-70 text-primary dark:text-secondary"
      >
        {{ three.read }}
        <Icon
          name="uil:arrow-right"
          class="transition-all duration-500 group-hover:ml-3"
        />
      </button>
      <!-- modal -->
      <VueFinalModal
        v-model="options3.modelValue"
        :teleport-to="options3.teleportTo"
        :display-directive="options3.displayDirective"
        :hide-overlay="options3.hideOverlay"
        :overlay-transition="options3.overlayTransition"
        :content-transition="options3.contentTransition"
        :click-to-close="options3.clickToClose"
        :esc-to-close="options3.escToClose"
        :background="options3.background"
        :lock-scroll="options3.lockScroll"
        :swipe-to-close="options3.swipeToClose"
        class="flex items-center justify-center"
        content-class="max-w-xl p-4 mx-4 space-y-2 modall"
      >
        <h1 class="text-xl font-semibold text-primary dark:text-secondary">
          {{ three.title }}
        </h1>
        <p class="text-primary/70 dark:text-secondary/70">
          {{ three.modal }}
        </p>
        <button
          @click="options3.modelValue = false"
          class="text-primary/70 dark:text-secondary/70"
        >
          Close
        </button>
      </VueFinalModal>
      <ModalsContainer />
    </swiper-slide>
    <!-- four -->
    <swiper-slide
      class="dark:from-[#1E1C32]/50 rounded-2xl dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50"
    >
      <div>
        <picture>
          <nuxt-img
            :alt="four.title"
            class="rounded-2xl"
            loading="lazy"
            format="webp"
            provider="cloudinary"
            :src="four.picture"
          />
        </picture>
        <h1
          class="pt-16 text-3xl font-bold text-center text-primary dark:text-secondary"
        >
          {{ four.title }}
        </h1>
      </div>
      <!-- preview -->
      <div class="flex flex-row items-center justify-between py-4">
        <div
          v-for="(item, index) in fourMore"
          :key="index"
          class="flex flex-col items-center justify-center w-1/2 text-white"
        >
          <NuxtLink
            :aria-label="item.live"
            class="transition-all duration-500 group hover:opacity-70 text-primary dark:text-secondary"
            :to="item.link"
            target="_blank"
          >
            <Icon
              :name="item.preview"
              size="2rem"
              class="transition-all duration-500 group-hover:rotate-12 dark:text-white"
            />
            {{ item.live }}
          </NuxtLink>
        </div>
      </div>
      <!-- read more -->
      <button
        @click="options4.modelValue = true"
        class="py-4 text-lg text-center transition-all duration-500 group hover:opacity-70 text-primary dark:text-secondary"
      >
        {{ four.read }}
        <Icon
          name="uil:arrow-right"
          class="transition-all duration-500 group-hover:ml-3"
        />
      </button>
      <!-- modal -->
      <VueFinalModal
        v-model="options4.modelValue"
        :teleport-to="options4.teleportTo"
        :display-directive="options4.displayDirective"
        :hide-overlay="options4.hideOverlay"
        :overlay-transition="options4.overlayTransition"
        :content-transition="options4.contentTransition"
        :click-to-close="options4.clickToClose"
        :esc-to-close="options4.escToClose"
        :background="options4.background"
        :lock-scroll="options4.lockScroll"
        :swipe-to-close="options4.swipeToClose"
        class="flex items-center justify-center"
        content-class="max-w-xl p-4 mx-4 space-y-2 modall"
      >
        <h1 class="text-xl font-semibold text-primary dark:text-secondary">
          {{ four.title }}
        </h1>
        <p class="text-primary/70 dark:text-secondary/70">
          {{ four.modal }}
        </p>
        <button
          @click="options4.modelValue = false"
          class="text-primary/70 dark:text-secondary/70"
        >
          Close
        </button>
      </VueFinalModal>
      <ModalsContainer />
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
