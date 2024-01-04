<template>
    <div class="pages lg:scrolling">
        <Navbar />
        <main class="container">
            <storyme :deskripsi="deskripsi" :title="title" />
            <Section id="main" class="!pt-0">
                <ContentQuery path="/blog" :only="['headline', 'description', 'excerpt', 'date', 'tags', '_path', 'image']"
                    :sort="{
                        date: -1
                    }" :limit="blogCountLimit" v-slot="{ data }">
                    <BlogList :data="data" />
                </ContentQuery>
                <BlogPagination v-if="data > 1" class="mt-8" :currentPage="1" :totalPages="data" :nextPage="data > 1"
                    baseUrl="/blog/" pageUrl="/blog/page/" />
            </Section>
        </main>
    </div>
</template>

<script setup>
// blog props
const title = ref('Blog')
const deskripsi = ref(`Di sini, saya berbagi proses-proses dan studi kasus dari pengalaman saya yang penuh warna dalam berbagai proyek. Dari tantangan teknis hingga inspirasi kreatif, blog ini mencakup perjalanan saya dalam menghadapi berbagai aspek kehidupan profesional dan pribadi.`)
// Find the number of blogs present
const blogCountLimit = 6;
const { data } = await useAsyncData(`content-/blog`, async () => {
    const _posts = await queryContent('/blog').only('headline').find()
    return Math.ceil(_posts.length / blogCountLimit);
});
</script>
