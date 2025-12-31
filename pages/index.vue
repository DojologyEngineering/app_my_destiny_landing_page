<template>
  <div>
    <div v-if="device === 'mobile'">
      <HomeOneMobile />
      <HomeTwoMobile />
      <HomeThreMobile />
      <VisionMobile />
      <AboutUsageMobile />
      <Sansana />
      <CompanyGroupMobile />
    </div>
    <div v-else-if="device === 'tablet'">
      <HomeOneTable />
      <HomeTwoTable />
      <HomeThreeTable />
      <VisionTable />
      <AboutUsageTable />
      <Sansana />
      <CompanyGroupTable />
    </div>
    <div v-else>
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <Vision />
      <AboutUsage />
      <Sansana />
      <CompanyGroup />
    </div>
  </div>
</template>
<script setup lang="ts">
//MARK: Tablet
import CompanyGroupTable from '~/components/home/CompanyGroupTable.vue';
import AboutUsageTable from '~/components/home/AboutUsageTable.vue';
import HomeThreeTable from '~/components/home/HomeThreeTable.vue';
import HomeTwoTable from '~/components/home/HomeTwoTable.vue';
import VisionTable from '~/components/home/vision/VisionTable.vue';
import HomeOneTable from '~/components/home/HomeOneTable.vue';

//MARK: Mobile
import CompanyGroupMobile from '~/components/home/CompanyGroupMobile.vue';
import AboutUsageMobile from '~/components/home/AboutUsageMobile.vue';
import HomeThreMobile from '~/components/home/HomeThreeMobile.vue';
import HomeTwoMobile   from '~/components/home/HomeTwoMobile.vue';
import VisionMobile from '~/components/home/vision/VisionMobile.vue';
import HomeOneMobile from '~/components/home/HomeOne.vue';

//MARK: Desktop
import CompanyGroup from '~/components/home/CompanyGroup.vue';
import AboutUsage from '~/components/home/AboutUsage.vue';
import HomeOne from '~/components/home/HomeOne.vue';
import HomeThree from '~/components/home/HomeThree.vue';
import HomeTwo from '~/components/home/HomeTwo.vue';
import Sansana from '~/components/home/Sansana.vue';
import Vision from '~/components/home/vision/Vision.vue';
import { useDevice } from '~/composables/useDevice';
const { device } = useDevice();
useSeoMeta({
  title: 'Home',
  ogTitle: 'Home',
  description:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogDescription:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogImage: '/images/logo.png',
});
</script>