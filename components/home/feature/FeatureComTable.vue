<template>
  <div class="grid grid-cols-12 items-center p-4 gap-4 border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
    <div class="col-span-3 md:col-span-2 flex justify-center items-center">
      <div class="w-16 h-16 md:w-20 md:h-20">
        <NuxtImg :src="src" class="w-full h-full object-contain" />
      </div>
    </div>
    
    <div class="col-span-6 md:col-span-8 px-2">
      <p class="font-khmer text-sm md:text-base text-gray-700 line-clamp-2 md:line-clamp-none">
        {{ des }}
      </p>
    </div>

    <div class="col-span-3 md:col-span-2 text-right md:text-center">
      <NuxtLink 
        :to="url" 
        class="text-colors-red-main font-khmer text-xs md:text-sm font-bold hover:opacity-80 transition-opacity"
      >
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