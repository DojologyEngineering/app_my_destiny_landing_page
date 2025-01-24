<template>
  <div
    class="lg:px-[225px] sm:px-[100px] px-[130px] py-20 flex flex-col justify-center items-center gap-10 overflow-x-hidden"
  >
    <h1
      class="font-khmer font-bold md:text-[48px] text-[24px] text-colors-red-main whitespace-nowrap"
    >
      ក្រុមហ៊ុនបុត្រសម្ព័ន្ធ
    </h1>

    <div class="hidden lg:flex flex-row items-center justify-center gap-16">
      <NuxtImg
        v-for="(item, index) in imgPartners"
        :key="index"
        :src="item.img"
        :width="item.w"
        :height="item.h"
      />
    </div>

    <div class="flex flex-row items-center justify-center gap-16 lg:hidden">
      <NuxtImg
        v-for="(item, index) in imgPartners.slice(2, 3)"
        :key="index"
        :src="item.img"
        :width="item.w"
        :height="item.h"
      />
    </div>
    <div class="flex flex-row items-center justify-center gap-16 lg:hidden">
      <NuxtImg
        v-for="(item, index) in [imgPartners[1], imgPartners[3]]"
        :key="index"
        :src="item.img"
        :width="item.w"
        :height="item.h"
      />
    </div>
    <div class="flex flex-row items-center justify-center gap-16 lg:hidden">
      <NuxtImg
        v-for="(item, index) in [imgPartners[0], imgPartners[4]]"
        :key="index"
        :src="item.img"
        :width="item.w"
        :height="item.h"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
