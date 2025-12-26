<template>
  <div class="relative h-full mx-auto w-full max-w-[1280px]">
    <NuxtImg
      src="/images/home-image/Sansana.png"
      class="w-full h-auto"
      :placeholder="[50, 25]"
    />
    <NuxtImg
      v-if="locale == 'km'"
      src="/images/home-image/follow.png"
      class="absolute object-contain w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] top-0 sm:top-30 md:top-0 right-10 sm:right-20 md:right-24 lg:right-40 xl:right-1/4"
      :placeholder="[50, 25]"
    />
    <NuxtImg
      v-if="locale == 'en'"
      src="/images/home-image/follow_kh.png"
      class="absolute object-contain w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] top-0 sm:top-30 md:top-0 right-10 sm:right-20 md:right-24 lg:right-40 xl:right-1/4"
      :placeholder="[50, 25]"
    />
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
</script>