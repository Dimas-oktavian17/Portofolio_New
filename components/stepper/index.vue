<script setup lang="ts">
import type { ProjectData, Timeline } from '~/types/stepper';
const props = defineProps<{
    data:   ProjectData[];
    isButton?: boolean;
}>();
defineEmits(['view']);
</script>
<template>
    <div class="flex flex-col items-center w-full">
        <ol class="relative items-center mx-8 mt-16 border-gray-200 sm:max-w-xs lg:mx-0 border-s dark:border-gray-700">
            <li class="mb-10 ms-6"
                v-for="({ title, dateEnd, dateStart, level, description, tech, images, longDescription, linkYt }, index) in data" :key="index">
                <span
                    class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#8C007E]/80">
                    <slot />
                </span>
                <ClientOnly>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Timeline
                        {{ useDateFormat(dateStart, 'MMM DD, YYYY') }} -
                        {{ useDateFormat(dateEnd, 'MMM DD,YYYY')
                        }}
                    </time>
                </ClientOnly>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {{ title }}
                    <span v-if="index === 0"
                        class="rounded flex flex-row text-xs items-center justify-center gap-[2px] py-[2px] px-1 bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] text-[#8C007E]/80 dark:text-[#ECEDEE] dark:from-[#8D2DE3]  dark:to-[#FF2497] transition-all duration-500 hover:opacity-60">Latest</span>
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {{ description }}
                </p>
                <p  v-if="level"  class="flex items-center mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Complexity:
                    <Icon size="1rem" mode="css" :class="{
                        'text-gray-500 dark:text-gray-400': level.name === 'Basic',
                        ' text-yellow-600 dark:text-yellow-400': level.name === 'Medium',
                        ' text-red-600 dark:text-red-400': level.name === 'High',
                    }" name="mdi:hash" />
                    <span :class="{
                        'text-gray-500 dark:text-gray-400': level.name === 'Basic',
                        ' text-yellow-600 dark:text-yellow-400': level.name === 'Medium',
                        ' text-red-600 dark:text-red-400': level.name === 'High',
                    }">
                        {{ level.name }}
                    </span>
                </p>
                <ul v-if="tech" class="grid grid-cols-3 gap-2 pb-4 text-lg">
                    <li v-for="item in tech?.slice(0, 6)" :key="item"
                        class="cursor-pointer text-[#22242C]/70 dark:text-[#ECEDEE]/70   transition-all duration-500 hover:opacity-50 dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50 rounded-md flex flex-row items-center text-base justify-center">
                        {{ item }}
                    </li>
                    <span v-if="tech?.length! > 6"
                        class="text-[#22242C]/70 cursor-pointer dark:text-[#ECEDEE]/70 font-bold transition-all duration-500 hover:opacity-50 dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50 rounded-md flex flex-row items-center text-base justify-center">
                        {{ tech?.length }} more..
                    </span>
                </ul>
                <button v-if="isButton && images" @click="$emit('view', {
                    title: title,
    longDescription: longDescription,
                    images: images,
    linkYt: linkYt,
    tech: tech
                })" type="button"
                    class="inline-flex items-center px-4 py-2 text-sm   rounded-lg group text-[#22242C]/70 dark:text-[#ECEDEE]/70 font-bold transition-all  hover:opacity-50 dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50">
                    View more
                    <Icon size="1.5rem" mode="css"
                        class="text-[#22242C]/70 dark:text-[#ECEDEE]/70 font-bold transition-all  hover:opacity-50 dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 bg-gradient-to-r from-[rgba(255,233,244,0.3)]/30 to-[rgba(234,243,255,0.5)]/50 group-hover:ml-2"
                        name="mdi:arrow-right" />
                </button>
            </li>
        </ol>
    </div>
</template>