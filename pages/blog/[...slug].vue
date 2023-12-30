<template>
    <div class="pages lg:scrolling">
        <main class="container">
            <ContentDoc>
                <template v-slot="{ doc }" class="">
                    <Section id="blog-title" type="header">
                        <div
                            class="flex flex-row items-center pt-8 pl-8 mb-12 border-t-2 lg:pl-0 border-typography_primary md:flex-row md:justify-between md:text-right md:mb-8">
                            <!-- Breadcrumbs -->
                            <ol itemscope itemtype="https://schema.org/BreadcrumbList"
                                class="flex flex-row mt-4 transition-all duration-500 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                    <a itemprop="item" href="/"> <span itemprop="name">Home</span></a>
                                    <meta itemprop="position" content="1" />
                                </li>
                                <li class="separator">/</li>
                                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                    <a itemscope itemtype="https://schema.org/WebPage" itemprop="item" itemid="/blog/"
                                        href="/blog/">
                                        <span itemprop="name">Blog</span></a>
                                    <meta itemprop="position" content="2" />

                                </li>
                                <!-- <li>
                                    <button type="button" aria-label="switchMode" @click="
                                        mode($colorMode.preference === 'dark' ? 'light' : 'dark')
                                        " class="group lg:pr-4"> -->
                                <!-- moon -->
                                <!-- <nuxt-icon name="moon"
                                    class="hidden transition-all dark:block group-hover:rotate-12 dark:text-white" /> -->
                                <!-- sun -->
                                <!-- <nuxt-icon name="sun" class="transition-all dark:hidden group-hover:rotate-12" />
                                </button>
                                </li> -->
                                <!-- <li class="separator">/</li> -->
                                <!-- <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                    <span itemprop="name">{{ doc.headline }}</span>
                                    <meta itemprop="position" content="3" />
                                </li> -->
                            </ol>
                            <!-- Publish date -->
                            <span class="hidden -mt-8 font-light text-black/70 lg:block md:mt-0">
                                {{ $formatDate(doc.date) }}
                            </span>
                        </div>
                        <!-- Headline -->
                        <h1 class="pl-8 lg:pl-0 text-3xl font-bold text-[#242424]">
                            {{ doc.headline }}
                        </h1>
                        <p class="pl-8 mb-8 lg:pl-0 text-black/70">
                            {{ doc.description }}
                        </p>
                        <div
                            class="flex flex-col items-start pb-8 mt-12 border-b-2 border-typography_primary dark:border-typography_primary_dark md:flex-row md:justify-between md:mt-4">
                            <!-- Author -->
                            <aside class="flex flex-row items-center justify-center pl-8 lg:pl-0">
                                <header class="text-lg font-light ">By
                                    <NuxtLink :to="doc.authorUrl" class="italic hover:underline">
                                        {{ doc.author }}
                                    </NuxtLink>
                                    <footer class="lg:hidden">
                                        {{ $formatDate(doc.date) }}
                                    </footer>
                                </header>
                            </aside>
                            <!-- Social Share -->
                            <!-- <div class="mt-6 md:mt-0">
                                <NavShareIcons :headline="doc.headline" :excerpt="doc.excerpt" :path="doc._path + '/'" />
                            </div> -->
                        </div>
                    </Section>
                    <!-- Content -->
                    <Section id="main">
                        <div class="flex flex-row items-center justify-center">
                            <div class="flex flex-col items-center justify-center gap-12">
                                <!-- artikel about me  -->
                                <article class="pl-8 text-base font-normal lg:pl-0 text-primary dark:text-secondary">

                                    <!-- Update date -->
                                    <span v-show="doc.dateUpdated"
                                        class="absolute text-sm italic font-light -top-8 leading-sm text-typography_primary/75 dark:text-typography_primary_dark/75">(Updated:
                                        {{ $formatDate(doc.dateUpdated) }})</span>
                                    <!-- Blog content -->
                                    <ContentRenderer :value="doc" class="blog-content blog-post-text" />
                                </article>


                            </div>
                        </div>
                        <!-- Table of Contents -->
                        <!-- <aside class="col-span-full md:col-span-3 md:hidden">
                            <div class="mb-2 blog-post-text blog-aside-wrapper">
                                <BlogTableOfContents :links="doc.body?.toc?.links" />
                            </div>
                        </aside> -->

                        <!-- <aside class="col-span-full md:col-span-3 blog-aside h-fit"> -->
                        <!-- Mobile Table of Content -->
                        <!-- <div class="!hidden blog-aside-wrapper md:!flex mb-4">
                                <BlogTableOfContents :links="doc.body?.toc?.links" class="blog-post-text" />
                            </div> -->
                        <!-- Related articles -->
                        <!-- <div v-if="data?.surround?.filter((elem) => elem !== null)?.length > 0"
                                class="blog-aside-wrapper">
                                <BlogRelatedArticles :surround="data?.surround" class="blog-post-text" />
                            </div>
                        </aside> -->
                    </Section>
                    <!-- Scroll to top -->
                    <NavScrollTopIcon />
                </template>
                <!-- Error in case not found -->
                <template #not-found>
                    <SectionsError />
                </template>
            </ContentDoc>
        </main>
    </div>
</template>

<script setup>
const { $formatDate } = useNuxtApp();
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');
const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
    // Remove a trailing slash in case the browser adds it, it might break the routing
    // fetch document where the document path matches with the cuurent route
    let article = queryContent('/blog').where({ _path: cleanPath }).findOne();
    // get the surround information,
    // which is an array of documeents that come before and after the current document
    let surround = queryContent('/blog').sort({ date: -1 }).only(['_path', 'headline', 'excerpt']).findSurround(cleanPath, { before: 1, after: 1 });
    return {
        article: await article,
        surround: await surround
    };
});

// Get the authors
const { data: authorData } = await useAsyncData('home', () => queryContent('/authors').findOne());

// Set the meta
const baseUrl = 'https://example.com';
const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');
const image = baseUrl + (data.value?.article?.socialImage.src || '/sample.webp');

// JSON+LD
const jsonScripts = [
    {
        type: 'application/ld+json',
        children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://example.com/'
            },
            url: canonicalPath,
            image: image,
            headline: data.value?.article?.headline,
            abstract: data.value?.article?.excerpt,
            datePublished: data.value?.article?.date,
            dateModified: data.value?.article?.dateUpdated || data.value?.article?.date,
            author: authorData.value[data.value?.article?.author],
            publisher: authorData.value['Gonzalo Hirsch']
        })
    }
];
useHead({
    title: data.value?.article?.title,
    meta: [
        { name: 'author', content: data.value?.article?.author },
        { name: 'description', content: data.value?.article?.description },
        { property: 'article:published_time', content: data.value?.article?.date.split('T')[0] },
        // OG
        { hid: 'og:title', property: 'og:title', content: data.value?.article?.headline },
        { hid: 'og:url', property: 'og:url', content: canonicalPath },
        { hid: 'og:description', property: 'og:description', content: data.value?.article?.description },
        { hid: 'og:image', name: 'image', property: 'og:image', content: image },
        { hid: 'og:type', property: 'og:type', content: 'Article' },
        { hid: 'og:image:type', property: 'og:image:type', content: `image/${data.value?.article?.socialImage.mime}` },
        { hid: 'og:image:width', property: 'og:image:width', content: data.value?.article?.socialImage.width || 190 },
        { hid: 'og:image:height', property: 'og:image:height', content: data.value?.article?.socialImage.height || 190 },
        { hid: 'og:image:alt', property: 'og:image:alt', content: data.value?.article?.socialImage.alt },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: data.value?.article?.headline },
        { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
        { hid: 'twitter:description', name: 'twitter:description', content: data.value?.article?.description },
        { hid: 'twitter:image', name: 'twitter:image', content: image },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: data.value?.article?.socialImage.alt }
    ],
    link: [
        {
            hid: 'canonical',
            rel: 'canonical',
            href: canonicalPath
        }
    ],
    script: jsonScripts
});
const navOpen = ref(true);
function mode(theme) {
    useColorMode().preference = theme;
}

</script>

<style scoped lang="css">
.blog-aside {
    @apply sticky;
    top: calc(theme('spacing.nav') + 0.25rem);
}

.blog-aside-wrapper {
    @apply flex flex-col border-t-2 border-b-2 border-typography_primary py-4;
}

.blog-post-text {
    @apply text-typography_primary;
}

.separator {
    @apply mx-1;
}
</style>
