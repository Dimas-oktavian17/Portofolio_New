<template>
    <ClientOnly>
        <div class="lang-js min-[320px]:w-72 min-[375px]:w-80 min-[425px]:w-96 min-[500px]:w-auto ">
            <h2 v-if="languageText" class="language-text ">
                {{ languageText }}
            </h2>
            <slot />
            <div
                class="transition-opacity duration-150 opacity-100 bottom-container group-hover:md:opacity-100 md:opacity-0">

                <button @click="copy(code)"
                    class="p-1 border rounded-md text-background border-background hover:border-brand_primary hover:bg-brand_primary hover:text-background">
                    <IconsCheck v-if="copied" class="w-5 h-5" width="20" height="20" />
                    <IconsCopy v-else class="w-5 h-5" width="20" height="20" />
                </button>

            </div>
        </div>
    </ClientOnly>
</template>


<script setup lang="ts">
// https://mokkapps.de/blog/how-to-create-a-custom-code-block-with-nuxt-content-v2/
import { useClipboard } from '@vueuse/core';
import { onMounted } from 'vue';

import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

onMounted(() => {
    Prism.highlightAll();
});
const { copy, copied, text } = useClipboard();

const props = withDefaults(
    defineProps<{
        code?: string;
        language?: string | null;
        filename?: string | null;
        highlights?: Array<number>;
    }>(),
    { code: '', language: null, filename: null, }
);
const languageMap: Record<string, { text: string }> = {
    java: {
        text: 'Java'
    },
    javascript: {
        text: 'JavaScript'
    },
    python: {
        text: 'Python'
    }
};

const languageText = computed(() => (props.language ? languageMap[props.language]?.text : null));
</script>

