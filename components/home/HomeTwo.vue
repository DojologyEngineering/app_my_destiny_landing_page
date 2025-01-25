<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row items-center">
      <div class="relative w-full">
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
        class="md:bg-none w-full md:ml-16 ml-0 flex flex-col items-center justify-center text-center md:text-left px-5 md:px-0 bg-gradient-to-b from-primary-orange-100 to-primary-dark"
      >
        <div class="md:mt-10 mt-0">
          <p
            class="font-khmer font-bold text-2xl md:text-5xl text-colors-red-main pb-8"
          >
            App My Destiny - វាសនាខ្ញុំ
          </p>
          <p class="font-khmer text-xl md:text-2xl/10 text-gray-main">
            រូបមន្តហុងស៊ុយសំខាន់ៗមានការទទួលស្គាល់ជាអន្តរជាតិ បានរៀបចំចងក្រង
            យ៉ាងល្អិតល្អន់ ហ្មត់ចត់ និងផ្ចិតផ្ទង់ ដោយ
            <span class="font-khmer text-xl md:text-2xl/10 font-bold"
              >ឧកញ៉ាសាស្ត្រចារ្យ ឡុង ណាលី</span
            >
            ដើម្បីយកមកអភិវឌ្ឍឲ្យក្លាយ ទៅជា App ហុងស៊ុយបែបវិទ្យាសាស្ត្រ។ 
          </p>
        </div>
        <div class="mt-10">
          <p class="font-khmer text-xl md:text-2xl/10 text-gray-main">
            <span class="font-khmer text-xl md:text-2xl/10 font-bold"
              >ឧកញ៉ាសាស្ត្រចារ្យ ឡុង ណាលី</span
            >
            បានបញ្ចប់ការសិក្សាផ្នែកវិជ្ជាហុងស៊ុយ
            ពីគ្រូចិនសែល្បីៗនៅលើពិភពលោកជាច្រើនរូបរួមមាន៖....
          </p>
          <div class="flex justify-center mt-10 mb-pb-0 pb-12">
            <CustomButton url="/contact">
              <span class="text-info-text">ស្វែងយល់បន្ថែម</span>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomButton from '../cusComponents/CustomButton.vue';
</script>
