<script setup>
const title = ref(`Stack Technology`);
const learnTitle = ref(`current learning`);

const grid = ref(false)
const flex = ref(true)
const handleGrid = () => {
  flex.value = false
  grid.value = true
}
const handleFlex = () => {
  flex.value = true
  grid.value = false
}
const techStack = useTechStack()
const learnStack = useLearnStack()
</script>

<template>
  <!-- <ClientOnly> -->
  <div class="flex flex-row items-center justify-center gap-4">
    <button @click="handleFlex"
      class="px-4 py-4 rounded-full bg-slate-50 dark:bg-transparent dark:border dark:border-[#ecedee] group transition-all">
      <Icon name="material-symbols:flex-direction-rounded"
        class="text-[#5C1BAE]/80 dark:text-[#ECEDEE] w-12 h-auto group-hover:rotate-45 group-hover:transition-all transition-all " />
    </button>
    <button @click="handleGrid"
      class="px-4 py-4 rounded-full bg-slate-50 dark:bg-transparent dark:border dark:border-[#ecedee]  group transition-all">
      <Icon name="teenyicons:grid-layout-solid"
        class="text-[#8C007E]/80 dark:text-[#ECEDEE] w-12 h-auto group-hover:rotate-45 group-hover:transition-all transition-all " />
    </button>
  </div>
  <!-- </ClientOnly> -->
  <div v-if="flex" class="flex flex-row items-center justify-center pt-[10.75rem]">
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <!-- current tech stack -->
      <h1 class="text-base font-bold capitalize lg:pl-0 text-uniqe/70 dark:text-[#ECEDEE]/70">
        {{ title }}
      </h1>
      <!-- wrapper  -->
      <div class="flex flex-col items-start gap-5">
        <!-- skill stack -->
        <div class="group" v-for="(stacks, index) in techStack" :key="index">
          <div
            class="flex flex-col items-start max-w-xs gap-4 p-3 transition-all duration-1000 cursor-pointer lg:max-w-max lg:flex-row group-hover:gradient rounded-2xl isolate">
            <picture class="pl-4 lg:pl-0">
              <Icon class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="stacks.picture" />
            </picture>
            <!-- deskripsi -->
            <div class="flex items-start flex-col gap-[5px] pl-4 lg:pl-0 w-full lg:w-4/5">
              <!-- header -->
              <div class="flex flex-row items-center justify-center gap-3 lg:justify-start">
                <h1 class="text-lg font-bold text-[#22242C] dark:text-[#ECEDEE]/70">
                  {{ stacks.title }}
                </h1>
                <button
                  class="text-xs lg:text-base bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] rounded flex items-start py-[1px] px-[6px] gap-[10px] isolate text-[#22242C]/70 dark:text-uniqe/90">
                  {{ stacks.btn }}
                </button>
              </div>
              <!-- deskripsi -->
              <p class="text-base text-left text-[#22242C] opacity-60 dark:text-[#ECEDEE]">
                {{ stacks.deskripsi }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- current tech stack -->
      <h1 class="text-base font-bold capitalize text-uniqe/70 dark:text-[#ECEDEE]/70">
        {{ learnTitle }}
      </h1>
      <!-- wrapper  -->
      <div class="flex flex-col items-start gap-5">
        <!-- learn stack -->
        <div class="group" v-for="(learns, index) in learnStack" :key="index">
          <div
            class="flex flex-col items-start max-w-xs gap-4 p-3 transition-all duration-1000 cursor-pointer lg:max-w-max lg:flex-row group-hover:gradient rounded-2xl isolate">
            <picture class="pl-4 lg:pl-0">
              <Icon class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="learns.picture" :class="learns.style" />
            </picture>
            <!-- deskripsi -->
            <div class="flex items-start flex-col gap-[5px] pl-4 lg:pl-0 w-full lg:w-4/5">
              <!-- header -->
              <div class="flex flex-row items-center justify-center gap-3 lg:justify-start">
                <h1 class="text-lg font-bold text-[#22242C] dark:text-[#ECEDEE]/70">
                  {{ learns.title }}
                </h1>
                <button
                  class="text-xs lg:text-base bg-gradient-to-r from-[#FBCEFF] to-[#FFD1D1] rounded flex items-start py-[1px] px-[6px] gap-[10px] isolate text-[#22242C]/70 dark:text-uniqe/90">
                  {{ learns.btn }}
                </button>
              </div>
              <!-- deskripsi -->
              <p class="text-base text-left text-[#22242C] opacity-60 dark:text-[#ECEDEE]">
                {{ learns.deskripsi }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="grid" class="flex flex-row items-center justify-center pt-[10.75rem]">
    <div class="flex flex-col items-center justify-center gap-12 w-[500px]">
      <!-- current tech stack -->
      <h1 class="text-base font-bold capitalize lg:pl-0 text-uniqe/70 dark:text-[#ECEDEE]/70">
        {{ title }}
      </h1>
      <!-- wrapper  -->
      <div class="grid grid-cols-2 gap-5 lg:grid-cols-6 md:grid-cols-4 place-items-center">
        <!-- skill stack -->
        <div class="group" v-for="(stacks, index) in techStack" :key="index">
          <div
            class="flex flex-col items-start max-w-xs gap-4 p-3 transition-all duration-1000 cursor-pointer lg:max-w-max lg:flex-row group-hover:gradient rounded-2xl isolate">
            <picture class="pl-4 lg:pl-0">
              <Icon class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="stacks.picture" />
            </picture>
            <!-- deskripsi -->
          </div>
        </div>
      </div>
      <!-- current tech stack -->
      <h1 class="text-base font-bold capitalize text-uniqe/70 dark:text-[#ECEDEE]/70">
        {{ learnTitle }}
      </h1>
      <!-- wrapper  -->
      <div class="grid grid-cols-2 gap-5 md:grid-cols-3 place-items-center">
        <!-- learn stack -->
        <div class="group" v-for="(learns, index) in learnStack" :key="index">
          <div
            class="flex flex-col items-start max-w-xs gap-4 p-3 transition-all duration-1000 cursor-pointer lg:max-w-max lg:flex-row group-hover:gradient rounded-2xl isolate">
            <picture class="pl-4 lg:pl-0">
              <Icon class="group-hover:rotate-12 transition-all duration-500 w-20 h-20 lg:w-[6.25rem] lg:h-[6.25rem]"
                :name="learns.picture" :class="learns.style" />
            </picture>
            <!-- deskripsi -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
