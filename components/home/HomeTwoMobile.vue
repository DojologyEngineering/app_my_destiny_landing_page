<template>
  <div class="w-full bg-gradient-to-b from-[#EBB143] via-[#F1C361] to-[#E3A330]">
    <div class="container max-w-[768px] mx-auto px-0 md:px-5">
      <div class="flex flex-col md:flex-row items-center">
        
        <div class="relative w-full max-w-[400px] md:max-w-[470px] pt-4">
          <NuxtImg
            src="/images/home-image/MasterNaly.png"
            class="w-full h-auto object-contain"
            alt="Master Naly Long"
            :placeholder="[50, 25]"
          />
          <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F1C361] to-transparent md:hidden"></div>
        </div>

        <div class="w-full md:ml-16 flex flex-col items-center md:items-start text-center md:text-left px-6 py-8">
          <h2 class="font-khmer font-bold text-2xl md:text-4xl text-[#8B1E1E] mb-6">
            {{ $t('About App My Destiny - វាសនាខ្ញុំ') }}
          </h2>

          <div v-if="locale == 'km'" class="space-y-6">
            <p class="font-khmer text-lg text-[#333333] leading-relaxed">
              រូបមន្តហុងស៊ុយសំខាន់ៗមានការទទួលស្គាល់ជាអន្តរជាតិ បានរៀបចំចងក្រង
              យ៉ាងល្អិតល្អន់ ហ្មត់ចត់ និងផ្ចិតផ្ទង់ ដោយ
              <span class="font-bold">ឧកញ៉ាសាស្ត្រចារ្យ ឡុង ណាលី</span>
              ដើម្បីយកមកអភិវឌ្ឍឲ្យក្លាយ ទៅជា App ហុងស៊ុយបែបវិទ្យាសាស្ត្រ។
            </p>
            <p class="font-khmer text-lg text-[#333333] leading-relaxed">
              <span class="font-bold">ឧកញ៉ាសាស្ត្រចារ្យ ឡុង ណាលី</span>
              បានបញ្ចប់ការសិក្សាផ្នែកវិជ្ជាហុងស៊ុយ
              ពីគ្រូចិនសែល្បីៗនៅលើពិភពលោកជាច្រើនរូបរួមមាន៖....
            </p>
          </div>
          <p class="font-khmer text-xl text-[#333333] leading-relaxed" v-else>
            {{$t('The most substantial outcome of Oknha Master Naly Long’s resolute and tenacious commitment, along with her striving, responsibility, morality, and professionalism, is her well-organized plan for discovering, gathering, and compiling practical Strategic and Scientific Feng Shui formulas corresponding with accuracy, precision,') }}
          </p>

          <div class="mt-8 pb-4">
            <CustomButton url="/contact" class="shadow-lg">
              <span class="text-white text-lg font-khmer px-8">
                {{ $t('Learn More') }}
              </span>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from '../cusComponents/CustomButton.vue';
const { locale } = useI18n();
</script>