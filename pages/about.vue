<script lang="ts" setup>
useSeoMeta({
  title: 'About us',
  ogTitle: 'About us',
  description:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogDescription:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogImage: '/images/logo.png',
});
</script>
<template>
  <div
    class="bg-gradient-to-r from-[#fdcb64] via-[#f0bb50] to-[#e0a837] overflow-x-hidden"
  >
    <div class="container mx-auto">
      <div
        class="flex flex-col md:flex-row items-end md:pt-[246px] pt-[170px] overflow-y-hidden"
      >
        <div
          v-motion
          :initial="{
            y: 800,
          }"
          :enter="{
            y: 0,
            opacity: 1,
            transition: {
              delay: 100 * 2,
              duration: 500,
              easing: 'easeInOut',
            },
          }"
          class="relative w-full"
        >
          <NuxtImg
            src="/images/home-image/MasterNaly.png"
            :placeholder="[50, 25]"
            class="w-[70%] mx-auto md:mx-0 md:w-[498px] md:h-full object-contain"
          />

          <div
            class="absolute bottom-0 left-0 right-0 h-40 md:hidden block"
            style="background: linear-gradient(to bottom, transparent, #edc125)"
          ></div>
        </div>
        <div
          v-motion
          :initial="{
            x: 500,
          }"
          :enter="{
            x: 0,
            opacity: 1,
            transition: {
              delay: 100,
              duration: 500,
              easing: 'easeInOut',
            },
          }"
          class="md:bg-none w-full md:-ml-20 ml-0 flex flex-col items-start justify-start text-start px-5 md:px-0 bg-gradient-to-b from-primary-orange-100 to-primary-dark pb-10 md:mt-6 gap-8"
        >
          <h1
            class="lg:text-[42px] text-[24px] font-bold text-colors-red-main font-khmer"
          >
            {{ $t('About App My Destiny - វាសនាខ្ញុំ') }}
          </h1>

          <p
            class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
          >
            {{ $t('The striving, dedication, and commitment of') }}
            <span
              class="text-gray-main font-[700] lg:text-[24px] text-[20px]"
              >{{ $t('Oknha Master Naly Long,') }}</span
            >
            {{
              $t(
                'the international accredited Feng Shui Master, to share and educate the Strategic and Scientific Feng Shui knowledge to Cambodian citizens made her a well-known figure both domestically and abroad for her generosity and expertise.'
              )
            }}
          </p>

          <div>
            <p
              class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
            >
              <span
                class="text-gray-main font-[700] lg:text-[24px] text-[20px]"
                >{{ $t('She') }}</span
              >
              {{
                $t(
                  'has completed and succeeded her studies in the field of Strategic and Scientific Feng Shui under the guidance and tutoring of various renowned Grand Masters and Masters from various parts of the world, involving'
                )
              }}
            </p>
            <ul
              class="list-disc pl-10 text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
            >
              <li>{{ $t('Grand Master Vincent Koh (Singapore)') }}</li>
              <li>{{ $t('Grand Master Tan Khoon Yong (Singapore)') }}</li>
              <li>
                {{
                  $t(
                    'Grand Master Stephen Skinner (The United States of America)'
                  )
                }}
              </li>
              <li>
                {{ $t('Master Mas (Thailand)') }}
              </li>
              <li>{{ $t('Master Goh Guan Leong (Singapore)') }}</li>
              <li>{{ $t('Master Leyau (Malaysia)') }}</li>
              <li>{{ $t('Master Davin (The United States of America') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative">
    <NuxtImg
      :placeholder="[50, 25]"
      src="/images/programming-background-with-person-working-with-codes-computer 1.png"
      class="w-full h-[1052px] object-cover"
    />

    <div
      class="absolute bg-primary-main/80 h-auto w-full bottom-16 lg:px-[120px] px-4 my-10 py-10 flex flex-col items-center"
    >
      <p
        class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
      >
        {{ $t('The most substantial outcome of') }}
        <span class="text-gray-main font-[700] lg:text-[24px] text-[20px]">
          {{ $t('Oknha Master Naly Long’s') }}
        </span>
        {{
          $t(
            'resolute and tenacious commitment, along with her striving, responsibility, morality, and professionalism, is her well-organized plan for discovering, gathering, and compiling practical Strategic and Scientific Feng Shui formulas corresponding with accuracy, precision, meticulousness, and logic as a means to construct the App My Destiny - វាសនាខ្ញុំ.'
          )
        }}
      </p>

      <p
        class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer pt-10"
      >
        {{ $t('No line') }}
      </p>
    </div>
  </div>

  <PartnersFooter />
</template>
