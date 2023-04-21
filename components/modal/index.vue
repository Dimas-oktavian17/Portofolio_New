<script setup>
import { ModalsContainer, VueFinalModal } from "vue-final-modal";
const getInitialValues = () => ({
  teleportTo: "body",
  modelValue: false,
  displayDirective: "if",
  hideOverlay: false,
  overlayTransition: "vfm-fade",
  contentTransition: "vfm-fade",
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
</script>
<template>
  <div class="mt-4 space-x-4">
    <button class="ml-auto" @click="options.modelValue = true">
      Open modal
    </button>
    <button @click="reset">Reset</button>
  </div>
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
    content-class="max-w-xl p-4 mx-4 space-y-2 bg-white border rounded-lg dark:bg-gray-900 dark:border-gray-700"
  >
    <h1 class="text-xl">Hello World!</h1>
    <p>
      Magna deserunt nulla aliquip velit aute. Et occaecat elit nulla excepteur
      labore cupidatat. Duis culpa mollit commodo dolor qui Lorem qui laborum
      elit elit Lorem occaecat. Commodo eiusmod esse voluptate officia amet quis
      occaecat aliqua. Proident do irure amet ut occaecat dolor laboris
      consectetur.
    </p>
    <button @click="options.modelValue = false">Close</button>
  </VueFinalModal>
  <ModalsContainer />
</template>
<style scoped lang="css">
button {
  @apply px-2 py-1 border rounded;
}
</style>
