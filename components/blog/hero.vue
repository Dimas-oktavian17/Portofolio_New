<template>
    <Section id="blog" class="text-typography_primary">
        <div
            class="flex flex-col items-center pt-8 mb-6 border-t-2 border-typography_primary md:flex-row md:justify-between md:text-right md:mb-8">
            <!-- <Navbar /> -->
            <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="blog-breadcrumb">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a itemprop="item" href="/"> <span itemprop="name">Home</span></a>
                    <meta itemprop="position" content="1" />
                </li>
                <span>/</span>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <span itemprop="name">Blog</span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
        <h1 class="mb-4 font-bold text-center md:mb-6 text-h3 leading-h3 md:text-h1 md:leading-h1 md:text-left">Blog</h1>
        <p class="mb-3 text-center md:w-8/12 md:text-lg md:leading-lg md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos porro consectetur aliquid debitis odit labore
            eveniet, nesciunt, deleniti
            totam aspernatur blanditiis laborum esse nam fugit ipsa sunt eum, provident consequuntur.
        </p>
        <div
            class="flex flex-col items-center mt-8 border-t-2 border-typography_primary md:flex-row md:justify-between md:text-right">
        </div>
    </Section>
</template>
