<script setup lang="ts">
useSeoMeta({
  title: 'Product',
  ogTitle: 'Product',
  description:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogDescription:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogImage: '/images/logo.png',
});
</script>

<template>
  <div class="relative">
    <NuxtImg
      src="/images/Opt01_IFSA-Leaflet_A5 1.png"
      class="hidden md:flex w-full"
      :placeholder="[50, 25]"
    />
    <NuxtImg
      src="/images/Opt01_IFSA-Leaflet_A5 1.png"
      class="md:hidden flex h-[698px] object-cover w-full"
      :placeholder="[50, 25]"
    />

    <div
      style="
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          #e6b71f 37.07%,
          #ecc01b 60.5%,
          rgba(255, 255, 255, 0) 100%
        );
      "
      class="flex flex-col absolute md:bottom-10 bottom-0 left-1/2 transform -translate-x-1/2 pb-8 w-[100%] md:w-[70%] md:py-4 py-4"
    >
      <h1
        class="text-center font-bold md:text-[48px] text-[24px] text-colors-red-main"
      >
        App My Destiny - វាសនាខ្ញុំ
      </h1>
      <p
        class="text-center text-gray-main md:text-[36px] text-[20px] font-[400]"
      >
        {{ $t('Scientific Feng Shui App') }}
      </p>
    </div>
  </div>

  <div
    class="flex flex-col justify-center items-center gap-8 py-20 lg:px-[124px] px-4 bg-primary-yellow"
  >
    <h1
      class="lg:text-[48px] text-[24px] font-bold text-colors-red-main font-khmer"
    >
      App My Destiny-វាសនាខ្ញុំ
    </h1>
    <p
      class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer text-center lg:px-[190px] px:[46px]"
    >
      <span class="text-gray-main font-[700] lg:text-[24px] text-[20px]">{{
        $t('App My Destiny - វាសនាខ')
      }}</span
      >{{
        $t(
          'includes Bazi’s function enabling us to keep track of our daily zodiac, and it comprises a number horoscope that permits us to figure out whether or not our phone number, house number, vehicle plate number, and bank account number are good; and the Chinese compass (Luo Pan) allows us to calculate the positive and negative energies from each direction so that we can take preventative actions.'
        )
      }}
    </p>

    <NuxtImg
      src="/images/19 1.png"
      :placeholder="[50, 25]"
      width="1516"
      height="899"
      v-motion
      :initial="{
        y: 200,
      }"
      :visible-once="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 100,
          duration: 500,
          easing: 'easeInOut',
        },
      }"
    />
  </div>

  <div
    class="flex flex-col gap-20 md:py-20 py-4 lg:px-[124px] px-4 bg-primary-main overflow-x-hidden overflow-y-hidden"
  >
    <h1
      v-motion
      :initial="{
        y: 200,
      }"
      :visible-once="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 100,
          duration: 500,
          easing: 'easeInOut',
        },
      }"
      class="lg:text-[48px] text-[24px] font-bold text-colors-red-main font-khmer text-center lg:mb-0 xs:mb-20 mb-1"
    >
      {{ $t('App Features') }}
    </h1>

    <div class="bg-primary-yellow-dark relative rounded-[30px]">
      <div
        v-motion
        :initial="{
          x: 200,
        }"
        :visible-once="{
          x: 0,
          opacity: 1,
          transition: {
            delay: 100,
            duration: 500,
            easing: 'easeInOut',
          },
        }"
        class="flex flex-col justify-center pb-[120px] lg:pt-[120px] md:pt-[450px] xs:pt-[400px] pt-[300px] lg:pl-[500px] lg:pr-[170px] pl-10 pr-10 gap-4"
      >
        <h1
          class="lg:text-[32px] text-[24px] font-bold text-colors-red-main font-khmer"
        >
          {{ $t('Basic Info') }}
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
        >
          {{
            $t(
              'It enables the users to access useful and informative data such as whether or not the day master of one’s Bazi is strong, which category the four pillars will fall under, favorable colors, advantageous careers, and other significant details. '
            )
          }}
        </p>
      </div>

      <NuxtImg
        :placeholder="[50, 25]"
        src="/images/Scene-8 1.png"
        class="absolute lg:-bottom-8 md:bottom-[230px] sm:bottom-[300px] xs:bottom-[300px] bottom-[400px] lg:left-0 md:left:0 xs:-left-20 -left-3 sm:w-[496px] sm:h-[591px] w-[296px] h-[391px] object-cover"
      />
    </div>

    <!-- revers -->

    <div class="bg-info-text relative rounded-[30px] py-[10px] mt-10">
      <div
        v-motion
        :initial="{
          x: 200,
        }"
        :visible-once="{
          x: 0,
          opacity: 1,
          transition: {
            delay: 100,
            duration: 500,
            easing: 'easeInOut',
          },
        }"
        class="flex flex-col justify-center pb-[100px] lg:pt-[60px] md:pt-[450px] sm:pt-[400px] pt-[260px] lg:pr-[500px] lg:pl-[170px] pr-10 pl-10 gap-4"
      >
        <h1
          class="lg:text-[32px] text-[24px] font-bold text-colors-red-main font-khmer"
        >
          {{ $t('Bazi') }}
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
        >
          {{
            $t(
              'By entering their date and time of birth, users are capable of calculating their Bazi chart consisting of eight Chinese characters. With the guidance and help of the Bazi chart, we are able to forecast how our life stage will fluctuate and present opportunities based on the luck cycle shifting forward every ten years in which we can also track it annually, monthly, daily, and every two hours.  '
            )
          }}
        </p>
      </div>

      <NuxtImg
        :placeholder="[50, 25]"
        src="/images/Scene-3 1.png"
        class="absolute left-1/2 top-1/2 lg:translate-x-[40%] md:-translate-x-[10%] sm:-translate-x-[7%] -translate-x-[10%] lg:translate-y-[-58%] md:translate-y-[-78%] sm:-translate-y-[88%] -translate-y-[130%] sm:w-[587px] sm:h-[630px] w-[387px] h-[387px] object-cover"
      />
    </div>

    <div class="bg-info-light relative rounded-[30px] mt-10">
      <div
        v-motion
        :initial="{
          x: 200,
        }"
        :visible-once="{
          x: 0,
          opacity: 1,
          transition: {
            delay: 100,
            duration: 500,
            easing: 'easeInOut',
          },
        }"
        class="flex flex-col justify-center pb-[120px] lg:pt-[100px] md:pt-[450px] sm:pt-[400px] pt-[300px] lg:pl-[500px] lg:pr-[170px] pl-10 pr-10 gap-4"
      >
        <h1
          class="lg:text-[32px] text-[24px] font-bold text-colors-red-main font-khmer"
        >
          {{ $t('Compass') }}
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
        >
          {{
            $t(
              'App My Destiny- វាសនាខ្ញុំ has offered us two distinct categories of compasses: the first one makes it feasible to calculate the positive and negative energy directions, and the second one exhibits the flying star chart annually, monthly, daily, and every two hours. These compasses, therefore, carry a real intangible influence on our daily lives.'
            )
          }}
        </p>
      </div>

      <NuxtImg
        :placeholder="[50, 20]"
        src="/images/Scene-2 1.png"
        class="absolute right-1/2 top-1/2 lg:-translate-x-[40%] md:-translate-x-[10%] sm:-translate-x-[7%] translate-x-[10%] lg:translate-y-[-58%] md:translate-y-[-78%] sm:translate-y-[-88%] -translate-y-[130%] sm:w-[496px] sm:h-[600px] w-[400px] h-[400px] object-cover"
      />
    </div>

    <div class="bg-colors-red-light relative rounded-[30px] py-[10px] mt-10">
      <div
        v-motion
        :initial="{
          x: 200,
        }"
        :visible-once="{
          x: 0,
          opacity: 1,
          transition: {
            delay: 100,
            duration: 500,
            easing: 'easeInOut',
          },
        }"
        class="flex flex-col justify-center pb-[100px] lg:pt-[100px] md:pt-[450px] pt-[230px] lg:pr-[500px] lg:pl-[170px] pr-10 pl-10 gap-4"
      >
        <h1
          class="lg:text-[32px] text-[24px] font-bold text-colors-red-main font-khmer"
        >
          {{ $t('Number Horoscope ') }}
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer max-w-[800px]"
        >
          {{
            $t(
              'This feature allows users to evaluate the positive and negative aspects of their phone number, house number, vehicle plate number, and bank account number.'
            )
          }}
        </p>
      </div>

      <NuxtImg
        :placeholder="[50, 25]"
        src="/images/Scene-7 1.png"
        class="absolute left-1/2 top-1/2 lg:translate-x-[9%] md:-translate-x-[70%] -translate-x-[50%] -md:translate-x-[70%] lg:translate-y-[-55%] translate-y-[-98%] md:w-[587px] md:h-[630px] w-[587px] h-[430px] object-cover"
      />
    </div>
  </div>

  <div
    class="lg:h-auto h-auto flex flex-row items-start justify-center lg:px-[124px] px-[46px] overflow-x-hidden overflow-y-hidden"
  >
    <div class="flex lg:flex-row flex-col items-center gap-8 py-20">
      <NuxtImg
        :placeholder="[50, 25]"
        v-motion
        :initial="{
          y: 200,
        }"
        :visible-once="{
          y: 0,
          opacity: 1,
          transition: {
            delay: 100,
            duration: 500,
            easing: 'easeInOut',
          },
        }"
        src="/images/Mockup-02 1.png"
        width="532"
        height="766"
      />

      <div
        class="flex flex-col gap-10"
        v-motion
        :initial="{
          x: 200,
        }"
        :visible-once="{
          x: 0,
          opacity: 1,
          transition: {
            delay: 100,
            duration: 500,
            easing: 'easeInOut',
          },
        }"
      >
        <h1
          class="lg:text-[48px] text-[24px] font-bold text-colors-red-main font-khmer"
        >
          App My Destiny - វាសនាខ្ញុំ
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
        >
          {{
            $t(
              'App My Destiny - វាសនាខ្ញុំ adheres to international standards by displaying a variety of Feng Shui and Bazi applicable and practical formulas available to be downloaded from the Play Store for Android users and the App Store for iOS device owners. '
            )
          }}
        </p>

        <NuxtImg src="/images/download 1.png" :placeholder="[50, 20]" />
      </div>
    </div>
  </div>
</template>
