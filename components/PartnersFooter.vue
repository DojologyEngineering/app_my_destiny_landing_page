<template>
  <div
    v-motion
    :initial="{
      x: 0,
      opacity: 0.5,
    }"
    :visible-once="{
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
        delay: 100,
      },
    }"
    class="lg:px-[225px] sm:px-[100px] px-[130px] py-20 flex flex-col justify-center items-center gap-10 overflow-x-hidden"
  >
    <h1
      class="font-khmer font-bold md:text-[48px] text-[24px] text-colors-red-main whitespace-nowrap"
    >
      {{ $t('Our Operating Companies') }}
    </h1>

    <div class="hidden lg:flex flex-row items-center justify-center gap-16">
      <NuxtImg
        v-for="(item, index) in imgPartners"
        :key="index"
        :src="item.img"
        :width="item.w"
        :height="item.h"
        :placeholder="index"
      />
    </div>

    <div class="flex flex-row items-center justify-center gap-16 lg:hidden">
      <NuxtImg
        v-for="(item, index) in imgPartners.slice(2, 3)"
        :key="index"
        :src="item.img"
        :width="item.w"
        :height="item.h"
        :placeholder="index"
      />
    </div>
    <div class="flex flex-row items-center justify-center gap-16 lg:hidden">
      <NuxtImg
        v-for="(item, index) in [imgPartners[1], imgPartners[3]]"
        :key="index"
        :src="item.img"
        :width="item.w"
        :height="item.h"
        :placeholder="index"
      />
    </div>
    <div class="flex flex-row items-center justify-center gap-16 lg:hidden">
      <NuxtImg
        v-for="(item, index) in [imgPartners[0], imgPartners[4]]"
        :key="index"
        :src="item.img"
        :width="item.w"
        :height="item.h"
        :placeholder="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
