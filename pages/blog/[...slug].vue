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
<template>
    <ClientOnly>
        <div class="dark:bg-[#121212] bg-white lg:scrolling">
            <main class="container ">
                <ContentDoc>
                    <template v-slot="{ doc }" class="">
                        <Section id="blog-title" type="header">

                            <div
                                class="z-[999]  flex flex-col items-end justify-end pt-8 mx-4 mb-12 transition-all border-t-2 relative  md:flex-row sm:mx-0 lg:pl-0 border-typography_primary md:justify-between md:text-right md:mb-8">
                                <div
                                    class="flex flex-row items-center justify-center mt-4 transition-all duration-500 md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                                    <button type="button" aria-label="switchMode" @click="
                                        mode($colorMode.preference === 'dark' ? 'light' : 'dark')
                                        " class="mr-4 sm:hidden group lg:pr-4">
                                        <!-- moon -->
                                        <nuxt-icon name="moon"
                                            class="hidden transition-all dark:block group-hover:rotate-12 dark:text-white" />
                                        <!-- sun -->
                                        <nuxt-icon name="sun" class="transition-all dark:hidden group-hover:rotate-12" />
                                    </button>

                                    <button @click="navOpen = !navOpen" data-collapse-toggle="mobile-menu-3" type="button"
                                        class="inline-flex items-center justify-center text-gray-400 transition-all duration-1000 rounded-lg md:hidden group hover:text-gray-900"
                                        aria-controls="mobile-menu-3" aria-expanded="false">
                                        <span class="sr-only">Open main menu</span>
                                        <div class="flex flex-col items-end pr-4">
                                            <p :class="{
                                                ' origin-bottom-left rotate-[0deg] dark:bg-white bg-[#0A0A0D] transition-all w-5 h-[1.33px] rounded':
                                                    navOpen,
                                            }"
                                                class="origin-bottom-left rotate-45 pb-1 mb-[2px] dark:bg-white bg-[#0A0A0D] transition-all w-5 h-[1.33px] rounded">
                                            </p>
                                            <p :class="{
                                                ' dark:bg-white origin-bottom-left scale-105  bg-[#0A0A0D] transition-all w-3 h-[1.33px] rounded':
                                                    navOpen,
                                            }"
                                                class="dark:bg-white origin-bottom-left scale-0 rotate-0 pb-1 mb-[2px] bg-[#0A0A0D] transition-all w-2 h-[1.33px] rounded">
                                            </p>
                                            <p :class="{
                                                'origin-top-left dark:bg-white rotate-[0deg] bg-[#0A0A0D] transition-all h-[1.33px]  rounded':
                                                    navOpen,
                                            }"
                                                class="origin-top-left dark:bg-white pb-1 mb-[2px] -rotate-45 bg-[#0A0A0D] transition-all w-5 h-[1.33px] rounded">
                                            </p>
                                        </div>
                                    </button>
                                </div>
                                <!-- Breadcrumbs -->
                                <ol :class="{ hidden: navOpen }" itemscope itemtype="https://schema.org/BreadcrumbList"
                                    class="flex-row self-center mt-4 transition-all duration-500 lg:justify-center lg:items-center lg:flex md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                    <li class="pb-4 sm:pb-0" itemprop="itemListElement" itemscope
                                        itemtype="https://schema.org/ListItem">
                                        <a itemprop="item" href="/"> <span itemprop="name"
                                                class=" dark:text-white">Home</span></a>
                                        <meta itemprop="position" content="1" />
                                    </li>
                                    <li class="hidden separator dark:text-white sm:block">/</li>
                                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                        <a itemscope itemtype="https://schema.org/WebPage" itemprop="item" itemid="/blog/"
                                            href="/blog/">
                                            <span itemprop="name" class="dark:text-white">Blog</span></a>
                                        <meta itemprop="position" content="2" />
                                    </li>
                                    <li class="flex-col items-center justify-center hidden lg:flex">
                                        <button type="button" aria-label="switchMode" @click="
                                            mode($colorMode.preference === 'dark' ? 'light' : 'dark')
                                            " class="group lg:pr-4">
                                            <!-- moon -->
                                            <nuxt-icon name="moon"
                                                class="hidden transition-all dark:block group-hover:rotate-12 dark:text-white" />
                                            <!-- sun -->
                                            <nuxt-icon name="sun"
                                                class="transition-all dark:hidden group-hover:rotate-12" />
                                        </button>
                                    </li>
                                    <!-- <li class="separator">/</li> -->
                                    <!-- <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                    <span itemprop="name">{{ doc.headline }}</span>
                                    <meta itemprop="position" content="3" />
                                </li> -->
                                </ol>
                                <!-- Publish date -->
                                <!-- <span class="hidden -mt-8 font-light text-black/70 lg:block md:mt-0">
                                {{ $formatDate(doc.date) }}
                            </span> -->
                            </div>
                            <!-- Headline -->
                            <h1
                                class="dark:text-white mx-4 sm:mx-0 lg:pl-0 text-3xl lg:pb-4 lg:text-5xl font-semibold text-[#242424]">
                                {{ doc.headline }}
                            </h1>
                            <p class="mx-4 mb-8 sm:mx-0 dark:text-white/70 lg:pl-0 text-black/70">
                                {{ doc.description }}
                            </p>
                            <div
                                class="flex flex-col items-start pb-8 mt-12 border-b-2 border-typography_primary dark:border-typography_primary_dark md:flex-row md:justify-between md:mt-4">
                                <!-- Author -->
                                <aside class="flex flex-row items-center justify-center mx-4 sm:mx-0 lg:pl-0">
                                    <header class="w-1/4">
                                        <picture class="">
                                            <nuxt-img
                                                class="w-24 h-auto transition-all duration-300 rounded-tr-lg rounded-bl-lg cursor-pointer "
                                                loading="lazy" format="webp" :src="doc.profil" quality="100" />
                                        </picture>
                                    </header>
                                    <footer class="w-3/4 mx-4">
                                        <div class="">
                                            <NuxtLink :to="doc.authorUrl"
                                                class="font-semibold text-[#242424] dark:text-white">
                                                {{ doc.author }}
                                            </NuxtLink>
                                        </div>
                                        <div class="text-black/70 dark:text-white/70">
                                            {{ $formatDate(doc.date) }}
                                        </div>
                                    </footer>

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
                                    <article
                                        class="mx-4 text-base font-normal sm:mx-0 contianer lg:pl-0 text-primary dark:text-secondary">
                                        <!-- Update date -->
                                        <span v-show="doc.dateUpdated"
                                            class="absolute text-sm italic font-light -top-8 leading-sm text-typography_primary/75 dark:text-typography_primary_dark/75">(Updated:
                                            {{ $formatDate(doc.dateUpdated) }})</span>
                                        <!-- Blog content -->
                                        <ContentRenderer :value="doc" class="max-w-3xl py-8 mx-auto dark:text-white" />
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
                        <!-- <NavScrollTopIcon /> -->
                    </template>
                    <!-- Error in case not found -->
                    <template #not-found>
                        <SectionsError />
                    </template>
                </ContentDoc>
            </main>
        </div>
    </ClientOnly>
</template>


/**
<style scoped lang="css">
/**
.blog-aside {
    @apply sticky;
    top: calc(theme('spacing.nav') + 0.25rem);
}
**/
/**
.blog-aside-wrapper {
    @apply flex flex-col border-t-2 border-b-2 border-typography_primary py-4;
}

.blog-post-text {
    @apply text-typography_primary;
}

.separator {
    @apply mx-1;
}
**/
</style>
