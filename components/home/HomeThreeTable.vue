<template>
  <div class="bg-primary-light w-full">
    <div class="container max-w-[1024px] mx-auto px-6 md:px-8 lg:px-0">
      
      <div class="flex justify-center py-12 md:py-16">
        <h2
          class="font-khmer font-bold text-2xl md:text-3xl lg:text-4xl text-colors-red-main text-center leading-tight"
        >
          {{ $t('Features of App My Destiny - វាសនាខ្ញុំ') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        <div v-for="item in features" :key="item.route">
          <div
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible-once="{
              y: 0,
              opacity: 1,
              transition: {
                duration: 600,
                easing: 'easeOut',
              },
            }"
          >
            <FeatureComTable
              :src="item.image"
              :des="item.des"
              :url="localPath(item.route)"
              class="h-full bg-white rounded-3xl shadow-sm border border-amber-100" 
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-12 mb-16 md:mt-16 md:mb-20">
        <CustomButton url="/contact">
          <span class="text-white text-lg md:text-xl font-khmer px-10">
            {{ $t('Learn More') }}
          </span>
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
import FeatureComTable from './feature/FeatureComTable.vue';
const localPath = useLocalePath();
</script>