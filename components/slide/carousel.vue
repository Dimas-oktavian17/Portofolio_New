<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { ref } from 'vue';
defineProps({
    images: {
        type: Array,
        required: true,
        default: () => [],
    }
});
const currentSlide = ref(0);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const galleryConfig = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: 'fade',
    mouseDrag: false,
    touchDrag: false,
    height: 320,
};

const thumbnailsConfig = {
    height: 80,
    itemsToShow: 6,
    wrapAround: true,
    touchDrag: false,
    gap: 10,
};

// const images = Array.from({ length: 10 }, (_, index) => ({
//     id: index + 1,
//     url: `https://picsum.photos/seed/${Math.random()}/800/600`,
// }));
</script>

<template>
    <section>
        <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
            <Slide v-for="image in images" :key="image.id">
                <img :src="image.url" alt="Gallery Image" class="gallery-image" />
            </Slide>
        </Carousel>

        <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
            <Slide v-for="image in images" :key="image.id">
                <template #default="{ currentIndex, isActive }">
                    <div :class="['thumbnail', { 'is-active': isActive }]" @click="slideTo(currentIndex)">
                        <img :src="image.url" alt="Thumbnail Image" class="thumbnail-image" />
                    </div>
                </template>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
        <slot/>
    </section>
</template>

<style>
:root {
    background-color: #242424;
}

.carousel {
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
}

img {
    border-radius: 8px;
    width: 100%;
    height: auto;
    object-fit: cover;
}

.gallery-image {
    border-radius: 16px;
}

#thumbnails {
    margin-top: 10px;
}

.thumbnail {
    height: auto;
    width: 100%;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
    opacity: 1;
}
/* Responsive adjustment for small screens */
@media (max-width: 500px) and (min-width: 375px) {
    img,
    .thumbnail {
      width: 90%;     /* atau bisa 100%, tapi beri padding/margin luar agar tidak mentok */
      margin: 0 auto; /* untuk center jika tidak menggunakan flex/grid */
      display: block;
    }
  }
</style>
