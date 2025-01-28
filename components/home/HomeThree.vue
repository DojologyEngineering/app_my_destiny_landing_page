<template>
  <div class="bg-primary-light">
    <div class="container mx-auto">
      <div class="flex justify-center py-14">
        <p
          class="font-khmer font-bold text-2xl md:text-5xl text-colors-red-main text-center"
        >
          {{ $t('Features of App My Destiny - វាសនាខ្ញុំ') }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 px-5 md:px-0">
        <div v-for="item in features">
          <div
            v-motion
            :initial="{
              y: 200,
            }"
            :visible-once="{
              y: 0,
              opacity: 1,
              transition: {
                delay: 100,
                duration: 400,
                easing: 'easeInOut',
              },
            }"
          >
            <FeatureCom
              :src="item.image"
              :des="item.des"
              :url="localPath(item.route)"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center my-10">
        <CustomButton url="/contact">
          <span class="text-info-text text-xl md:text-2xl font-khmer">{{
            $t('Learn More')
          }}</span>
        </CustomButton>
      </div>
    </div>
    <div class="bg-info-text">
      <PartnersFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import { features } from '@/utils/home-utils';
import CustomButton from '../cusComponents/CustomButton.vue';
import PartnersFooter from '../PartnersFooter.vue';
import FeatureCom from './feature/FeatureCom.vue';
const localPath = useLocalePath();
</script>
