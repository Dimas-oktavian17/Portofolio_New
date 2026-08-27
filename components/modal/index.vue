<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { ProjectData } from '~/types/stepper';
// Default modal options (can be global for all modals)
defineProps<{
  data: ProjectData,
  isVideos: boolean;
  content?: Record<string, any>;
}>();
const modalOptions = {
  teleportTo: "body",
  displayDirective: "if" as const,
  hideOverlay: true,
  overlayTransition: "vfm-fade",
  contentTransition: "vfm-fade",
  clickToClose: true,
  escToClose: true,
  background: "non-interactive" as const,
  lockScroll: true,
  swipeToClose: "none" as const,
};
const route = useRoute()
const galleryStores = galleryStore();
const showModal = defineModel<boolean>();
const closeModals =()=>{
  showModal.value =!showModal.value
  isVideo.value = false
  galleryStores.closeModal(String(route.name))
}
const hamburgerStores = hamburgerStore();
const { isVideo,setVideo } =  hamburgerStores;
</script>
<template>
  <VueFinalModal v-model="showModal" :teleport-to="modalOptions.teleportTo"
    :display-directive="modalOptions.displayDirective" :hide-overlay="modalOptions.hideOverlay"
    :overlay-transition="modalOptions.overlayTransition" :content-transition="modalOptions.contentTransition"
    :click-to-close="modalOptions.clickToClose" :esc-to-close="modalOptions.escToClose"
    :background="modalOptions.background" :lock-scroll="modalOptions.lockScroll"
    :swipe-to-close="modalOptions.swipeToClose" class="overflow-y-scroll"
    content-class="max-w-full p-4 mx-4 mt-16 space-y-2 modall">
    <div class="flex items-center justify-between">
      <h1 class="text-lg md:text-xl font-semibold text-[#22242C] dark:text-[#ECEDEE]">
        {{ data.title }}
      </h1>
      <button @click="closeModals" type="button"
        class="inline-flex items-end px-4 py-2 text-sm   rounded-lg group text-[#22242C]/70 dark:text-[#ECEDEE]/70 font-bold transition-all  hover:opacity-50 ">
        <Icon size="1.5rem" mode="css"
          class="text-[#22242C]/70 dark:text-[#ECEDEE]/70 font-bold transition-all  hover:opacity-50 dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50 group-hover:ml-2"
          name="mdi:close-circle" />
      </button>
    </div>
    <div class="grid grid-flow-row gap-4 md:grid-cols-2">
      <section>
        <VideoCloudinary v-if="isVideo && data.linkYt" :url="data.linkYt">
        </VideoCloudinary>
        <slide-carousel v-if="data.images && !isVideo" :images="data.images">
        </slide-carousel>
        <ButtonGridFlex v-if="isVideos && data.linkYt" @action="setVideo" :icons="[
          { name: 'solar:video-library-outline' },
          { name: 'solar:gallery-outline' },
        ]" />
        <ul v-if="data.tech" class="grid grid-cols-1 gap-2 pt-12 text-lg lg:grid-cols-4">         
          <li v-for="item in data.tech" :key="item"
            class="cursor-pointer bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-white/70 dark:text-black">
            {{ item }}
          </li>
        </ul>
      </section>
      <article>
        <ContentRenderer class="font-display  max-w-3xl py-8 mx-auto prose text-black/70 dark:text-white/70 dark:prose-invert 
               prose-h1:text-5xl prose-h1:font-extrabold prose-h1:mb-6 
               prose-h2:text-4xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
               prose-h3:text-3xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
               prose-strong:font-extrabold 
               prose-a:text-inherit dark:prose-a:text-inherit prose-a:no-underline hover:prose-a:no-underline
               prose-p:text-lg prose-p:leading-relaxed prose-p:mb-4
               prose-ul:list-disc prose-ul:pl-5 prose-li:mb-2
               prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-600 prose-blockquote:pl-4 prose-blockquote:italic
               prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
               " v-if="content" :value="content" />
      </article>
    </div>
  </VueFinalModal>
</template>
<style scoped>
.modall {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  /* Add these lines for scrollable content */
  max-height: 80vh;
  /* Or a suitable pixel value like 500px */
  overflow-y: auto;
  /* This enables vertical scrolling when content exceeds max-height */
}

.dark .modall {
  background-color: #2c2c2c;
}
</style>