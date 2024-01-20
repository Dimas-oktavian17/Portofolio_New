<template>
    <figure>
        <img :src="refinedSrc" :alt="alt" :width="width" :height="height"
            class="mx-auto min-[320px]:w-60 min-[375px]:w-80 min-[425px]:w-96 min-[612px]:w-auto" />
        <figcaption class="mt-2 text-base text-center leading-base opacity-70">{{ alt }}</figcaption>
    </figure>
</template>

<script setup lang="ts">
import { withBase } from 'ufo';
import { useRuntimeConfig, computed } from '#imports';

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    }
});

const refinedSrc = computed(() => {
    if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
        return withBase(props.src, useRuntimeConfig().app.baseURL);
    }
    return props.src;
});
</script>
