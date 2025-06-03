<script setup lang="ts">
const isActive = ref(false)
defineProps<{
    data: Array<string>,
    title: string,
    buttonStyle: string
}>()
</script>
<template>
    <div class="relative transition-all duration-300">
        <button @click="isActive =!isActive" id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
            :class="buttonStyle" type="button">
            {{ title }}
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown" v-if="isActive"
            class="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li v-for="(item, index) in data" :key="index">
                    <NuxtLink @click="isActive = !isActive" :to="{ path: '/work', query: { sort: item } }"
                        class="block px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {{ item }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>