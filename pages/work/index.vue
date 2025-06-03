<script setup lang="ts">
import type { ProjectData } from '~/types/stepper';

useHead({
  title: "realdms",
  meta: [{ name: "description", content: "My amazing work pages site." }],
});
const { projects,fetchContent,fetchSortedWorks, projectsResultComputed } =  await timelineStore();
const galleryStores = galleryStore();
const { currentModalProject,showModal } = galleryStores
const hamburgerStores = hamburgerStore();
const {isVideo, setVideo} = hamburgerStores
const route = useRoute();
const router = useRouter();
const result = ref();
// const setVideo = () => isVideo.value = !isVideo.value;
const openProjectModal = (project: ProjectData) => {
  galleryStores.openProjectModal(project);
  useRouter().push({ path: '/work', query: { slug: project.title } });
};
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
    else {
      result.value = null;
    }
  }
);
watchEffect(async()=>{
  if (route.query.sort && hamburgerStores.showGrid.value) {
  const newQuery = {...route.query}
  delete newQuery.sort
  router.replace({query: newQuery})
  }
  if (route.query.sort && !hamburgerStores.showGrid.value) {
  await fetchSortedWorks(projects.value, route.query.sort as string)    
}
})
onMounted(async()=>{
  await fetchSortedWorks(projects.value, route.query.sort as string);
})
</script>
<template>
  <div class="pages lg:scrolling">
    <navbar></navbar>
    <main class="container">
      <workme>
        <InputDropdown v-if="!hamburgerStores.showGrid.value"
          button-style="rounded max-w-xs flex flex-row items-center justify-center gap-[2px] py-[6px] px-3 bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] text-[#8C007E]/80 dark:text-[#ECEDEE] dark:from-[#8D2DE3]  dark:to-[#FF2497] transition-all duration-500 hover:opacity-60"
          title="Filter" :data="['most-recent', 'most-complex']" />
        <ButtonGridFlex @action="hamburgerStores.setGrid" />
      </workme>
      <Stepper v-if="!hamburgerStores.showGrid.value" :isButton="true" :data="projectsResultComputed"
        @view="openProjectModal">
        <Icon size="1.5rem" mode="css" class="text-blue-600 dark:bg-gray-800" name="gravity-ui:code" />
      </Stepper>
      <project v-if="hamburgerStores.showGrid.value" :data="projects" />
      <Modal :content="result" v-if="currentModalProject !== null" v-model="showModal" :data="currentModalProject"
        :isVideos="true">
      </Modal>
      <footerr></footerr>
    </main>
  </div>
</template>
