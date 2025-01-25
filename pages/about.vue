<script lang="ts" setup>
useSeoMeta({
  title: 'About us',
  ogTitle: 'About us',
  description:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogDescription:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
});
</script>
<template>
  <div class="bg-gradient-to-r from-[#fdcb64] via-[#f0bb50] to-[#e0a837]">
    <div class="container mx-auto">
      <div
        class="flex flex-col md:flex-row items-start md:pt-[246px] pt-[170px]"
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
            class="w-full h-auto"
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
          class="md:bg-none w-full md:ml-0 ml-0 flex flex-col items-start justify-start text-start px-5 md:px-0 bg-gradient-to-b from-primary-orange-100 to-primary-dark pb-10 mt-6 gap-8"
        >
          <h1
            class="lg:text-[48px] text-[24px] font-bold text-colors-red-main font-khmer"
          >
            អំពី App My Destiny - វាសនាខ្ញុំ
          </h1>

          <p
            class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
          >
            ការខិតខំប្រឹងប្រែង និងការប្ដេជ្ញាចិត្តរបស់ឧកញ៉ាសាស្ត្រចារ្យ ឡុង ណាលី
            ក្នុងការ ចែករំលែកចំណេះដឹងហុងស៊ុយ មានក្បួនខ្នាតត្រឹម ត្រូវពិតប្រាកដ
            ដែលទទួល ស្គាល់ជាអន្តរជាតិទៅកាន់បងប្អូនប្រជាជនកម្ពុជា បានធ្វើឲ្យ
            <span class="text-gray-main font-[700] lg:text-[24px] text-[20px]"
              >ឧកញ៉ាសាស្ត្រចារ្យ ឡុង ណាលី</span
            >
            ក្លាយទៅជាម៉ាស្ទ័រ ហុងស៊ុយ ដ៏ល្បីនៅក្នុង ប្រទេសកម្ពុជា និងក្រៅប្រទេស។
          </p>

          <div>
            <p
              class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
            >
              <span class="text-gray-main font-[700] lg:text-[24px] text-[20px]"
                >ឧកញ៉ាសាស្ត្រចារ្យ ឡុង ណាលី</span
              >
              បានបញ្ចប់ការសិក្សាផ្នែកវិជ្ជាហុងស៊ុយ
              ពីគ្រូហុងស៊ុយល្បីៗនៅលើពិភពលោកជាច្រើនរូបរួមមាន៖
            </p>
            <ul
              class="list-disc pl-10 text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
            >
              <li>Grand Master Vincent Koh (ប្រទេសសឹង្ហបុរី)</li>
              <li>Grand Master Tan Khoon Yong (ប្រទេសសឹង្ហបុរី)</li>
              <li>Grand Master Dr. Stephen Skinner (សហរដ្ឋអាមេរិក)</li>
              <li>Master Mas (ប្រទេសថៃ)</li>
              <li>Master Goh Guan Leong (ប្រទេសសឹង្ហបុរី)</li>
              <li>Master Francis Leyau (ប្រទេសម៉ាឡេស៊ី)</li>
              <li>Master Davin (សហរដ្ឋអាមេរិក)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative">
    <NuxtImg
      src="/images/programming-background-with-person-working-with-codes-computer 1.png"
      class="w-full h-[1052px] object-cover"
    />

    <div
      class="absolute bg-primary-main/80 h-auto w-full bottom-16 lg:px-[120px] px-4 my-10 py-10 flex flex-col items-center"
    >
      <p
        class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer"
      >
        រូបមន្តហុងស៊ុយសំខាន់ៗមានការទទួលស្គាល់ជាអន្តរជាតិ
        បានរៀបចំចងក្រងយ៉ាងល្អិតល្អន់ ហ្មត់ចត់ និងផ្ចិតផ្ទង់ ដោយ
        <span class="text-gray-main font-[700] lg:text-[24px] text-[20px]">
          ឧកញ៉ាសាស្ត្រចារ្យ ឡុង ណាលី
        </span>
        ដើម្បីយកមកអភិវឌ្ឍឲ្យក្លាយ ទៅជា App ហុងស៊ុយបែបវិទ្យាសាស្ត្រ។
      </p>

      <p
        class="text-gray-main font-[400] lg:text-[24px] text-[20px] font-khmer pt-10"
      >
        អ្នកអភិវឌ្ឍន៍ App My Destiny - វាសនាខ្ញុំ
        គឺជាក្រុមដែលមានសម្ថភាពមានបទពិសោធន៍ជាច្រើនលើការអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ
        និងប្រព័ន្ធគ្រប់គ្រងទូទៅ សម្រាប់វិស័យឯកជន និងស្ថាប័នសាធារណៈ។
      </p>
    </div>
  </div>

  <PartnersFooter />
</template>
