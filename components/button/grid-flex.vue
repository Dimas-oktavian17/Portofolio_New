<script setup lang="ts">
import type { buttonIcons } from '~/types/stepper';

const props = withDefaults(defineProps<buttonIcons>(),{
icons: ()=>[
    {
        name: 'solar:list-line-duotone'
    },
    {
        name: 'flowbite:grid-solid'
     },
]
})
defineEmits(['action']);
</script>
<template>
    <div class="flex flex-row items-center justify-center gap-4 pt-4">
        <button v-for="(item, index) in props.icons" :key="index" type="button" @click="$emit('action')"
            class="p-2  rounded-xl bg-slate-50 dark:bg-transparent   group transition-all text-[#5C1BAE]/80 dark:text-[#ECEDEE]  hover:-rotate-45 hover:transition-all">
            <Icon size="3rem" mode="css" :name="String(item.name)" />
        </button>
    </div>
</template>