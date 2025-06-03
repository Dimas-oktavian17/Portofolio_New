<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
import type { ProjectData } from '~/types/stepper';
// Define the type for a single project data

// Define props to receive the array of projects
const props = defineProps<{
  projects: ProjectData[]; // Now accepts an array of projects
}>();

// State for the currently open modal
const galleryStores = galleryStore();
const { showModal, currentModalProject } = galleryStores;
// action
const openProjectModal = (project: ProjectData) => galleryStores.openProjectModal(project);

// Default modal options (can be global for all modals)
const modalOptions = {
  teleportTo: "body",
  displayDirective: "if" as const,
  hideOverlay: true,
  overlayTransition: "vfm-slide-up",
  contentTransition: "vfm-slide-up",
  clickToClose: true,
  escToClose: true,
  background: "non-interactive" as const,
  lockScroll: true,
  swipeToClose: "none" as const,
};
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center">
    <div v-for="(project, index) in projects" :key="index" :class="{
      'flex lg:flex-row flex-col': index % 2 === 0, // Start a new row for every two projects
      'mt-16': index >= 2 && index % 2 === 0 // Add top margin to new rows, except the first one
    }" class="w-full">
      <article
        class="group dark:from-[#1E1C32]/50 rounded-2xl dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50"
        :class="{
          'lg:w-1/2 w-full lg:mr-8 mb-8 lg:mb-0': (index % 2 === 0 && index < projects.length - 1) || (index % 2 === 0 && index === projects.length - 1 && projects.length % 2 !== 0), // Styles for the first item in a pair
          'lg:w-1/2 w-full': index % 2 !== 0 || (index % 2 === 0 && projects.length % 2 === 0), // Styles for the second item in a pair, or single item if odd count
        }">
        <div>
          <picture>
            <nuxt-img :alt="project.title"
              class="transition-all group-hover:rounded-2xl group-hover:scale-95 rounded-2xl" loading="lazy"
              format="webp" provider="cloudinary" :src="project.picture" />
          </picture>
          <h1 class="pt-16 text-3xl font-bold text-center text-[#22242C] dark:text-[#ECEDEE]">
            {{ project.title }}
          </h1>
        </div>
        <div class="flex flex-row items-center justify-between py-4">
          <button @click="openProjectModal(project)"
            class="w-1/2 py-4 text-lg text-center transition-all duration-500 group hover:opacity-70 text-[#22242C] dark:text-[#ECEDEE]">
            <!-- {{ project.read }} -->
            <Icon name="uil:arrow-right" class="transition-all duration-500 group-hover:ml-3" />
          </button>
          <div v-for="(item, linkIndex) in project.links" :key="linkIndex"
            class="flex flex-col items-center justify-center w-1/2 text-white">
            <NuxtLink :aria-label="item.live"
              class="transition-all duration-500 group hover:opacity-70 text-[#22242C] dark:text-[#ECEDEE]"
              :to="item.link" target="_blank">
              <Icon :name="item.preview" size="2rem"
                class="transition-all duration-500 group-hover:rotate-12 dark:text-white" />
              {{ item.live }}
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
    <slot />
  </div>
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