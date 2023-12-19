<template>
    <!-- <ul class="grid grid-cols-10 gap-4 text-typography_primary">
        <li
            v-for="article in data"
            :key="article._path"
            class="relative border-2 rounded-md col-span-full md:col-span-5 border-typography_primary hover:border-brand_primary group"
        >
            <NuxtLink :to="article._path + '/'" class="relative block p-4">
                <div class="wrapper">
                    <header>
                        <h2
                            class="mb-2 font-semibold text-h3 leading-h3 group-hover:text-brand_primary"
                        >
                            {{ article.headline }}
                        </h2>
                        <p class="mb-4 text-sm leading-sm text-typography_primary/75 dark:text-typography_primary_dark/75">
                            {{ $formatDate(article.date) }}
                        </p>
                        <p> {{ article.excerpt }} </p>
                    </header>
                </div>
            </NuxtLink>
        </li>
    </ul> -->
    <div class="flex flex-row items-center justify-center pt-[10.75rem]">
        <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
            <div v-for="article in data" :key="article._path" class="flex flex-col items-start gap-4 pl-8 lg:pl-0">
                <!-- url -->
                <NuxtLink :to="article._path + '/'">
                    <h1 class="text-lg font-semibold uppercase text-primary dark:text-secondary">
                        {{ article.headline }}
                    </h1>
                    <h2 class="text-base font-normal text-primary/60 dark:text-secondary/60">
                        {{ article.description }}
                    </h2>
                    <!-- date  -->
                    <p class="text-xs font-medium text-primary/60 dark:text-secondary/60">
                        {{ $formatDate(article.date) }}
                    </p>
                </NuxtLink>
            </div>
        </div>
    </div>
    <p v-if="data.length == 0" class="w-full font-bold md:w-7/12 text-h3 leading-h3 dark:text-white">{{ message }}</p>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    message: {
        type: String,
        default: "There are no posts right now, but stay tuned for newer releases in the future."
    }
});
const { $formatDate } = useNuxtApp();
</script>
