<script setup lang="ts">
import { NuxtLink } from '#components';
import type { MediumProps } from '~/types/support';
defineProps<{
  data: MediumProps[];
  isButton: boolean;
}>();

defineEmits(['action']);
</script>
<template>
  <!-- wrapper -->
  <div class="flex flex-row items-center justify-center gap-4">
    <button @click="$emit('action', item.title)" v-if="isButton" type="button" :class="item.style" v-for="item in data"
      :key="item.id">
      <Icon :name="item.icon" :class="item.iconS" size="2rem" />
      {{ item.title }}
    </button>
    <NuxtLink v-if="!isButton" :to="item.link" :class="item.style" target="_blank" v-for="item in data" :key="item.id">
      <Icon :name="item.icon" :class="item.iconS" size="2rem" />
      {{ item.title }}
    </NuxtLink>
  </div>
</template>
