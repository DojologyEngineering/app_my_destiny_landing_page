<template>
  <div
    class="text-white flex flex-col justify-center items-center bg-cover bg-center bg-[url(/images/home-image/coporate.jpg)]"
  >
    <div class="bg-primary-dark bg-opacity-75 h-full w-full py-16">
      <div class="text-center px-5 md:px-0">
        <p
          class="text-2xl md:text-5xl font-bold font-khmer text-colors-red-main mb-4"
        >
          {{ $t('Partnership') }}
        </p>

        <div v-if="locale == 'km'">
          <p class="md:text-2xl/10 text-xl/10 font-khmer text-info-text mt-10">
            App My Destiny- វាសនាខ្ញុំ កម្មវិធីទូរស័ព្ទសម័យឌីជីថល
            និងបច្ចេកវិទ្យាខ្ពស់!
          </p>
          <p class="md:text-2xl/10 text-xl/10 font-khmer text-info-text">
            យើងបានសហការ យ៉ាងជិតស្និទ្ធជាមួយនឹងដៃគូអាជីវកម្មរបស់យើង
            ទាំងប្រព័ន្ធប្រតិបត្តិករធនាគារ និងប្រព័ន្ធប្រតិបត្តិករទូរស័ព្ទ
          </p>
          <p class="md:text-2xl/10 text-xl/10 font-khmer text-info-text">
            ជាមួយនឹងការប្រើប្រាស់បច្ចេកវិទ្យាទំនើប
            និងសុវត្ថិភាពបំផុតសម្រាប់ទូទាត់សាច់ប្រាក់
            តាមរយៈប្រព័ន្ធអេឡិចត្រូនិក។
          </p>
        </div>
        <div v-else>
          <p class="md:text-2xl/10 text-xl/7 font-khmer text-gray-main">
            {{
              $t(
                'App My Destiny- វាសនាខ្ញុំ - a cutting-edge Strategic and Scientific Feng Shui mobile application. We work closely and extensively with all of our business partners, ranging from the banking system to the telecommunications company, paving the way for us to capitalize on the most advanced digital technology and secure electronic payment methods.'
              )
            }}
          </p>
        </div>
      </div>

      <!-- Logo Section -->
      <div
        class="flex md:flex-row flex-col items-center justify-center gap-8 mt-16"
      >
        <div class="w-[300px] h-[86px]">
          <NuxtImg
            src="/images/home-image/aba.png"
            alt="ABA Bank"
            class="w-full h-full"
          />
        </div>
        <div class="w-[300px] h-[86px] bg-white rounded-[8px]">
          <NuxtImg
            src="/images/home-image/wing.png"
            alt="Wing Bank"
            class="w-full h-full"
          />
        </div>
        <div class="w-[300px] h-[86px]">
          <NuxtImg
            src="/images/home-image/cellcard.png"
            alt="Cellcard"
            class="w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
</script>
