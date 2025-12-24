<template>
  <div
    class="bg-cover bg-center bg-no-repeat bg-[url(/images/home-image/vr.jpg)]"
  >
    <div class="flex justify-center pt-8">
      <p class="font-khmer font-bold md:text-5xl text-2xl text-info-text">
        {{ $t('Vision, Mission, Core Value') }}
      </p>
    </div>
    <div class="container mx-auto mt-10">
      <div v-for="item in visions" class="pb-10 md:block hidden mr-5 ml-5">
        <CusItem :des="item.des" :name="item.name" :src="item.image" />
      </div>
      <div v-for="item in visions" class="pb-10 md:hidden block mr-10 ml-10">
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
