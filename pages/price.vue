<script setup lang="ts">
useSeoMeta({
  title: 'Price',
  ogTitle: 'Price',
  description:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogDescription:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogImage: '/images/logo.png',
});
import { NuxtImg } from '#components';
const navigate = useRouter();

const navigateLink = () => {
  if (navigator.userAgent.match(/Android|BlackBerry|Opera Mini|IEMobile/i)) {
    window.open(
      'https://play.google.com/store/apps/details?id=com.ecoinsoft.mydestiny&hl=en_US' // Replace with your App Store URL
    );
  } else {
    window.open(
      'https://apps.apple.com/kh/app/my-destiny-by-master-naly/id884500810' // Replace with your App Store URL
    );
  }
};
</script>

<template>
  <div
    class="bg-primary-main md:h-[970px] sm:h-[500px] h-[420px] relative"
    v-motion-fade
  >
    <NuxtImg
      src="/images/price_banner.png"
      class="md:w-[1094px] w-[551px] md:h-[717px] sm:h-[360px] absolute left-1/2 bottom-0 transform -translate-x-1/2"
      :placeholder="[50, 25]"
    />
  </div>

  <div class="bg-primary-brown h-[1077px] relative xl:flex hidden">
    <div
      class="absolute bottom-0 left-0 -translate-x-1/2 w-full container mx-auto"
      v-motion
      :initial="{ y: 200 }"
      :visible-once="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 100,
          duration: 500,
          easing: 'easeInOut',
        },
      }"
    >
      <NuxtImg
        src="/images/Phone-Women-Hand-Mockup.png"
        width="929"
        height="1137"
        class=""
        placeholder="blur"
      />

      <p class="absolute top-40 left-[400px] text-white text-[48px] font-bold">
        {{ $t('Price List') }}
      </p>
    </div>

    <div
      class="flex lg:flex-row flex-col items-start gap-32 lg:pb-0 pb-10 container mx-auto justify-end lg:mt-36"
    >
      <div class="grid grid-cols-2 gap-12">
        <div
          v-motion
          :initial="{ y: 200 }"
          :visible-once="{
            y: 0,
            opacity: 1,
            transition: {
              delay: 100 * index * 2,
              duration: 500,
              easing: 'easeInOut',
            },
          }"
          v-for="(item, index) in priceList"
          :key="index"
          class="bg-background-main rounded-[30px] flex flex-col items-center px-10 pt-10 pb-8 text-center max-w-[300px]"
        >
          <h1
            class="lg:text-[48px] md:text-[32px] text-[16px] font-khmer font-bold text-colors-red-main mb-2"
          >
            {{ $t(item.title) }}
          </h1>
          <h1 class="lg:text-[128px] md:text-[64px] font-bold -mt-12">
            <span class="text-[48px]">$</span>{{ item.price }}
          </h1>
          <p class="font-[400] text-colors-red-main text-[24px] -mt-12">
            {{ $t(item.date) }}
          </p>

          <button
            class="px-8 py-4 font-[400] text-info-text bg-colors-red-main rounded-[100px] mt-8"
            @click="navigateLink"
          >
            DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- other com -->

  <div
    class="bg-primary-brown h-auto xl:hidden flex flex-col justify-center items-center"
  >
    <div class="flex flex-col">
      <p
        class="text-white md:text-[48px] text-[24px] font-bold text-center -mb-52 pt-8"
      >
        តារាងតម្លៃ
      </p>
      <NuxtImg
        src="/images/Phone-Women-Hand-Mockup.png"
        width="929"
        height="1137"
        class="hidden sm:flex mr-96"
      ></NuxtImg>
      <NuxtImg
        src="/images/Phone-Women-Hand-Mockup.png"
        class="relative w-[500px] h-[937px] object-cover -left-4 sm:hidden flex"
      >
      </NuxtImg>
    </div>
    <div class="flex flex-col items-start gap-12 lg:pb-0 pb-10">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-12">
        <div
          v-for="(item, index) in priceList"
          :key="index"
          class="bg-background-main rounded-[30px] flex flex-col items-center px-10 pt-10 pb-8 text-center max-w-[300px]"
        >
          <h1
            class="lg:text-[48px] text-[32px] font-khmer font-bold text-colors-red-main mb-2"
          >
            {{ item.title }}
          </h1>
          <h1 class="lg:text-[128px] text-[64px] font-bold">
            <span class="text-[48px]">$</span>{{ item.price }}
          </h1>
          <p class="font-[400] text-colors-red-main text-[24px] -mt-6">
            {{ item.date }}
          </p>

          <button
            class="px-8 py-4 font-[400] text-info-text bg-colors-red-main rounded-[100px] mt-8"
            @click="navigateLink"
          >
            DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
