<template>
  <div class="flex items-start md:items-center p-6 md:p-5 gap-5 hover:shadow-md transition-shadow duration-300 bg-info-text rounded-[30px]">
    <div class="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
      <NuxtImg :src="src" class="w-full h-full object-contain" />
    </div>
    
    <div class="flex-1">
      <p class="font-khmer text-sm md:text-base text-gray-700 leading-relaxed mb-3">
        {{ des }}
      </p>
      <NuxtLink :to="url" class="text-colors-red-main font-khmer text-xs md:text-sm font-bold underline">
        {{ $t('ស្វែងយល់បន្ថែម') }}
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