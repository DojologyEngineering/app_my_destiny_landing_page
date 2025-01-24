<template>
  <div>
    <HomeOne />
  </div>
  <div class="bg-gradient-to-r from-primary-dark to-[#F6C96E]">
    <HomeTwo />
  </div>
  <div>
    <HomeThree />
  </div>
  <div>
    <Vision />
  </div>
  <div>
    <AboutUsage />
  </div>
  <div>
    <Sansana />
  </div>
  <div>
    <CompanyGroup />
  </div>
  <!-- <div class="h-screen bg-primary-dark">{{ $t('home') }}</div> -->
</template>
<script setup lang="ts">
import CompanyGroup from '~/components/home/CompanyGroup.vue';
import AboutUsage from '~/components/home/AboutUsage.vue';
import HomeOne from '~/components/home/HomeOne.vue';
import HomeThree from '~/components/home/HomeThree.vue';
import HomeTwo from '~/components/home/HomeTwo.vue';
import Sansana from '~/components/home/Sansana.vue';
import Vision from '~/components/home/vision/Vision.vue';
useSeoMeta({
  title: 'Home',
  ogTitle: 'Home',
  description:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogDescription:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
});
</script>
