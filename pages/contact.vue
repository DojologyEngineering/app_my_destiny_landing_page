<template>
  <div
    class="bg-primary-orange-light text-center text-[#5a5a5a] pt-20 md:pt-40"
  >
    <div
      class="bg-cover text-info-text bg-[url(/images/contact/map.png)] pb-10"
    >
      <Transition name="fade" appear>
        <div class="pt-20 md:pt-40">
          <p
            class="text-2xl md:text-title font-khmer font-bold text-colors-red-main"
          >
             ទំនាក់ទំនង យើងខ្ញុំ
          </p>
          <p class="text-xl md:text-title font-khmer font-bold text-info-text">
            App My Destiny- វាសនាខ្ញុំ
          </p>
          <p class="text-xl md:text-title font-khmer">ដោយ</p>
          <p class="text-xl md:text-title font-bold text-info-text font-khmer">
            ក្រុមហ៊ុន ហ្វេង ស៊ុយ សេនធ័រ (ខេមបូឌា) ឯ.ក
          </p>
          <p class="text-xl md:text-title font-khmer font-bold">
            Feng Shui Center (Cambodia) Co., Ltd.
          </p>
        </div>
      </Transition>
      <Transition name="fade" appear>
        <div
          class="relative z-10 container mx-auto mt-5 md:mt-10 flex justify-center px-5 md:px-0"
        >
          <img
            src="/images/contact/center.png"
            alt="My Destiny Building"
            class="rounded-xl"
          />
        </div>
      </Transition>
    </div>
    <Transition name="fade" appear>
      <div
        class="bg-info-text h-auto text-primary-orange-dark py-8 md:py-16 px-5 text-sm leading-relaxed relative -mt-[115px] md:-mt-[230px] z-0"
      >
        <div class="mt-[100px] md:mt-[200px] text-xl md:text-2xl">
          <p class="mb-1">
            អាសយដ្ឋាន៖ #អាគារ743-744 ជុ.1952 ភូមិជាប់ សង្កាត់ទឹកល្អក់ទី១
            ខណ្ឌទួលគោក រាជធានីភ្នំពេញ
          </p>
          <p class="mb-1">
            ទំនាក់ទំនង៖ (+855) 96 82 88 789 | (+855) 92 981 616<br />
            info@appmydestiny.com
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us',
  ogTitle: 'Contact Us',
  description:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
  ogDescription:
    'As a team feng shui app of Cambodia is responsible International level of 600,000 students six hundred thousand',
});
</script>
