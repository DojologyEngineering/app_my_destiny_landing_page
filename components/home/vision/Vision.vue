<template>
  <div
    class="bg-cover bg-center bg-no-repeat bg-[url(/images/home-image/vr.jpg)]"
  >
    <div class="flex justify-center pt-8">
      <p class="font-khmer font-bold md:text-5xl text-2xl text-info-text">
        ទស្សនវិស័យ បេសកកម្ម និងគុណតម្លៃ
      </p>
    </div>
    <div class="container mx-auto mt-10">
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
</script>
