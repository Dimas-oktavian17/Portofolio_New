<script setup lang="ts">
import { useHead } from 'nuxt/app';
import type { ProjectData } from '~/types/stepper';

useHead({
  title: "realdms",
  meta: [{ name: "description", content: "My amazing work timeline site." }],
});

// Destructure the properties that timelineStore now returns
// Await the resolution of the Promise returned by timelineStore()
const timelineStoreData = await timelineStore();

// Destructure the properties of the resolved data
const { experinceWork, experinceEducation,fetchContent } = timelineStoreData;

const supportStores = supportStore();
const { supportCta, supportBtn, realtToggle, toogle } = supportStores; // Assuming supportStore provides these
const galleryStores = galleryStore();
const { showModal, currentModalProject } = galleryStores;
const isOpen = ref(false);
const openProjectModal = (project: ProjectData) => {
  galleryStores.openProjectModal(project);
  useRouter().push({ path: '/timeline', query: { slug: project.title } });
};
// handle toggle
const handleToggle = (e: string) => {
  supportStores.setToogle(e); // Assuming supportStore has a setToogle action
};
const route = useRoute();
const result = ref()
watch(
  () => route.query.slug,
 async (newSlug) => {
    if (newSlug) {
      try {
        const newData = await fetchContent(String(newSlug));
        if (newData && !newData.statusCode) { // Check it's not an error object
          result.value = newData;
          console.log(newData);
        } else {
          console.error('Failed to fetch content:', newData);
        }
      } catch (error) {
        console.error('Error in watcher:', error);
      }
    }
    else{
      result.value = null
    }
  }
);
</script>

<template>
  <div class="pages lg:scrolling">
    <navbar></navbar>
    <main class="container">
      <Timelineme />
      <support :data="supportBtn" :isButton="true" v-on:action="handleToggle" />
      <Stepper :isButton="true" v-if="realtToggle" :data="experinceWork" @view="openProjectModal">
        <Icon size="1.5rem" mode="css" class="text-blue-600 dark:bg-gray-800"
          name="material-symbols:work-outline" />
      </Stepper>
      <Stepper v-else :data="experinceEducation">
        <Icon size="1.5rem" mode="css" class="text-blue-600 dark:bg-gray-800" name="mdi:school" />
      </Stepper>
      <Modal :content="result" v-if="currentModalProject !== null" v-model="showModal" :data="currentModalProject" :isVideos="false"/>
      <footerr></footerr>
    </main>
  </div>
</template>