<template>
  <div
    class="flex md:flex-row flex-col align-top bg-primary-main rounded-[44px] p-3 py-9"
  >
    <div class="flex flex-col p-3 items-center">
      <div class="w-[142px] h-[142px]">
        <NuxtImg :src="src" class="w-full h-full" :placeholder="[50, 25]" />
      </div>
      <div class="mt-3">
        <p class="text-lg/10 md:text-xl/10 font-khmer font-bold text-gray-main">
          {{ $t(name || '') }}
        </p>
      </div>
    </div>
    <div>
      <p class="text-gray-main text-2xl/10">{{ $t(des || '') }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  src: String,
  name: String,
  des: String,
});
</script>
