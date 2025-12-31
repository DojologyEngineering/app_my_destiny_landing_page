<template>
  <div
    class="bg-cover bg-center bg-no-repeat bg-[url(/images/home-image/vr.jpg)] min-h-screen py-10">
    <div class="flex justify-center mb-12">
      <p class="font-khmer font-bold md:text-5xl text-2xl text-info-text">
        {{ $t('Vision, Mission, Core Value') }}
      </p>
    </div>
    <div class="container mx-auto px-4 md:px-10">
      <div v-for="item in visions" class="pb-10 md:block hidden">
        <CusItem :des="item.des" :name="item.name" :src="item.image" />
      </div>
      <div v-for="item in visions" class="pb-10 md:hidden block">
        <CusItemSmallS :des="item.des" :name="item.name" :src="item.image" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CusItem from './CusItem.vue';
import CusItemSmallS from './CusItemSmallS.vue';
import { visions } from '@/utils/home-utils';
</script>
