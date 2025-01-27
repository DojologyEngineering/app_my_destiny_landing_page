<template>
  <div class="relative w-full h-full">
    <NuxtImg
      src="/images/home-image/Sansana.png"
      class="w-full h-auto"
      format="webp"
    />
    <NuxtImg
      v-if="locale == 'km'"
      src="/images/home-image/follow.png"
      class="absolute object-contain w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] top-0 sm:top-30 md:top-0 right-20 sm:right-20 md:right-24 lg:right-40 xl:right-96 xl:top-20"
      format="webp"
    />
    <NuxtImg
      v-if="locale == 'en'"
      src="/images/home-image/follow_kh.png"
      class="absolute object-contain w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] top-0 sm:top-30 md:top-0 right-20 sm:right-20 md:right-24 lg:right-40 xl:right-96 xl:top-20"
      format="webp"
    />
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
</script>
