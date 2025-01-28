<template>
  <div class="p-4 flex items-center justify-center">
    <div class="relative w-full max-w-md">
      <div class="relative bg-primary-main rounded-[32px] p-6 shadow-xl">
        <div
          class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
        >
          <NuxtImg
            :src="src"
            alt="Icon"
            class="w-full h-full"
            placeholder="image item small screen"
          />
        </div>
        <div class="mt-10 space-y-4 text-center">
          <p class="text-xl font-khmer font-bold text-gray-main">
            {{ $t(name || '') }}
          </p>

          <p class="text-gray-main text-lg/10 md:text-xl/10 font-khmer">
            {{ $t(des || '') }}
          </p>
        </div>
        <div
          class="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-transparent to-[#D3D3D3]/20 rounded-bl-[2rem]"
        ></div>
      </div>
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

<style scoped>
/* Add any additional customizations here if necessary */
</style>
