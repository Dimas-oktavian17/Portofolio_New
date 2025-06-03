<script setup lang="ts">
const props = defineProps<{
  url: string
}>()
const chaptersInSeconds = {
  0: "Introduction",
   3000:"Auth",
  70:"Forgot Password",
  130: "Dashboard",
  246   : "CRUD" ,
  570: "Data Excel"
};
const realUrl = computed(() => `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/c_scale,h_2160/${props.url}`)
</script>

<template>
  <CldVideoPlayer width="600" height="400" :src="realUrl" :chapters="chaptersInSeconds" chaptersButton pictureInPictureToogle />
</template>