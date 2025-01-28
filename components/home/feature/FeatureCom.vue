<template>
  <div class="bg-info-text rounded-[30px] md:p-10 p-5">
    <div class="flex flex-row align-top">
      <NuxtImg
        :src="src"
        class="w-[97px] h-[97px] md:w-[130px] md:h-[130px] lg:w-[200px] lg:h-[200px] object-contain"
        format="webp"
      />

      <p
        class="ml-5 max-w-[340px] text-xl md:text-2xl font-khmer text-gray-main"
      >
        {{ $t(des) }}
      </p>
    </div>
    <div class="flex justify-end">
      <NuxtLink :to="url" class="md:mt-0 mt-5">
        <span
          class="text-xl md:text-2xl text-colors-red-main font-khmer font-bold"
          >{{ $t('Learn More') }}</span
        >
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  src: string;
  des: string;
  url: string;
}>();
</script>
