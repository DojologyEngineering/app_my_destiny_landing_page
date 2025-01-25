<script setup lang="ts">
import { NuxtImg } from '#components';
useSeoMeta({
  title: 'Product',
  ogTitle: 'Product',
  description:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogDescription:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
});
</script>

<template>
  <div class="relative">
    <NuxtImg src="/images/Opt01_IFSA-Leaflet_A5 1.png" class="hidden md:flex" />
    <NuxtImg
      src="/images/Opt01_IFSA-Leaflet_A5 1.png"
      class="md:hidden flex h-[698px] object-cover w-full"
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
        App ហុងស៊ុយបែបវិទ្យាសាស្ត្រ
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
      <span class="text-gray-main font-[700] lg:text-[24px] text-[20px]"
        >ជាអេបហុងស៊ុយបែបវិទ្យាសាស្ត្រ </span
      >គណនាតាមក្បួនប៉ាជឺ អាចតាមដានរាសីប្រចាំថ្ងៃ ហើយតាមរយៈក្បួន
      លេខសាស្ត្រក៏អាចឲ្យយើងបានដឹងពី លេខទូរស័ព្ទ លេខផ្ទះ លេខយានជំនិះ
      និងលេខគណនីធនាគារថាតើល្អ ឬមិនល្អ សម្រាប់ប្រើប្រាស់ និងចំណែកឯ ត្រីវិស័យ
      បានដាក់បញ្ចូលក្បួនត្រីវិស័យសម្រាប់វាស់ និងគណនា ទិសឆុង ទិសហេង
      ហើយក៏មានត្រីវិស័យតារាសាស្ត្រផងដែរ ដែលមានឥទ្ធិពល
      ទៅលើជោគជាតារាសីប្រចាំថ្ងៃរបស់មនុស្សជាតិ។
    </p>

    <NuxtImg
      src="/images/19 1.png"
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
      មុខងារសំខាន់ៗ
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
          ព័ត៌មានបឋម
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
        >
          អនុញ្ញាតឲ្យបងប្អូនអ្នកប្រើប្រាស់បានដឹង ពីតួរាសីផ្ទាល់ខ្លួន ដឹងពី
          ប្រភេទរាសី ថាតើជាប្រភេទរាសីរឹងមាំង ខ្សោយ​ ឬជារាសីករណីពិសេស 
          ដឹងអំពីពណ៌សំណាង និងប្រភេទអាជីកម្មសមប្រកប តាមធាតុត្រូវការ នីមួយៗ
          ហើយក៏មានព័ត៌មាន សំខាន់ៗផ្សេងៗទៀតផងដែរ។
        </p>
      </div>

      <NuxtImg
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
          ក្បួនប៉ាជឺ
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
        >
          អនុញ្ញាតឲ្យបងប្អូនអ្នកប្រើប្រាស់ អាចគណនាតាមរយៈតារាងប៉ាជឺ នូវតួរាសី
          ទាំង៨ ដែលរួមមានរាសីខាងលើ និងរាសីខាងក្រោម ដោយគ្រាន់តែបញ្ចូល ម៉ោង ថ្ងៃ
          ខែ ឆ្នាំកំណើត ឲ្យបានត្រឹមត្រូវ។ នោះនឹងអាចឲ្យបងប្អូនអ្នក ប្រើប្រាស់
          តាមដានពីការឡើងចុះ នៃរាសីផ្ទាល់ខ្លួនម្នាក់ៗ សម្រាប់រយៈពេល ប្រចាំ១០ឆ្នាំ
          ប្រចាំឆ្នាំ ប្រចាំខែ ប្រចាំថ្ងៃ និងប្រចាំម៉ោង។ 
        </p>
      </div>

      <NuxtImg
        src="/images/Scene-3 1.png"
        class="absolute left-1/2 top-1/2 lg:translate-x-[40%] md:-translate-x-[10%] sm:-translate-x-[7%] -translate-x-[10%] lg:translate-y-[-58%] md:translate-y-[-78%] sm:-translate-y-[88%] -translate-y-[120%] sm:w-[587px] sm:h-[630px] w-[387px] h-[387px] object-cover"
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
          ត្រីវិស័យ
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
        >
          App My Destiny - វាសនាខ្ញុំ បានដាក់បញ្ចូលក្បួនដែលអាចគណនា និងវាស់
          ត្រីវិស័យចំនួន ២ប្រភេទ៖ ទី១ គឺ ត្រីវិស័យសម្រាប់វាស់ និងគណនាទិសឆុង និង
          ទិសហេង និង ទី២ គឺ ត្រីវិស័យតារាសាស្ត្រ ដើម្បីគណនា
          និងបង្ហាញអំពីដំណើរគោចររបស់តារាសាស្ត្រ ដែលជះឥទ្ធិពលដល់ជោគជតារាសី
          របស់មនុស្សជាតិ។
        </p>
      </div>

      <NuxtImg
        src="/images/Scene-2 1.png"
        class="absolute right-1/2 top-1/2 lg:-translate-x-[40%] md:-translate-x-[10%] sm:-translate-x-[7%] translate-x-[10%] lg:translate-y-[-58%] md:translate-y-[-78%] sm:translate-y-[-88%] -translate-y-[120%] sm:w-[496px] sm:h-[600px] w-[400px] h-[400px] object-cover"
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
          លេខសាស្ត្រ
        </h1>

        <p
          class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer max-w-[800px]"
        >
          បងប្អូនអ្នកប្រើប្រាស់ អាចប្រើមុខងារនេះដើម្បីពិនិត្យមើល លេខទូរសព្ទ
          លេខផ្ទះ លេខយានយន្ត និង លេខគណនីធនាគារ ថាតើលេខនោះ ជាលេខនាំសំណាង ឬ
          មានឥទ្ធិពលអាក្រក់សម្រាប់ការប្រើប្រាស់។
        </p>
      </div>

      <NuxtImg
        src="/images/Scene-7 1.png"
        class="absolute left-1/2 top-1/2 lg:translate-x-[9%] md:-translate-x-[70%] -translate-x-[50%] -md:translate-x-[70%] lg:translate-y-[-55%] translate-y-[-98%] md:w-[587px] md:h-[630px] w-[587px] h-[430px] object-cover"
      />
    </div>
  </div>

  <div
    class="lg:h-auto h-auto flex flex-row items-start justify-center lg:px-[124px] px-[46px]"
  >
    <div class="flex lg:flex-row flex-col items-center gap-8 py-20">
      <NuxtImg
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
        class=""
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
          App ហុងស៊ុយបែបវិទ្យាសាស្ត្រ តែមួយគត់របស់ប្រទេសកម្ពុជា
          ដែលបង្កើតឡើងដោយជនជាតិខ្មែរ ប្រកបដោយស្តង់ដារល្អបំផុត កម្រិតអន្តរជាតិ
          ដែលអាចដោនឡូតបានតាមរយៈ Play Store Android និង App Store iOS ។
        </p>

        <NuxtImg src="/images/download 1.png" />
      </div>
    </div>
  </div>
</template>
