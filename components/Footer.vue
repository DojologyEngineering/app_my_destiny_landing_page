<template>
  <footer class="bg-[#f7e6c9] w-full">
    <div class="container mx-auto py-8">
      <div class="flex flex-row items-start justify-around">
        <div class="flex justify-center md:justify-start">
          <NuxtImg
            src="/images/footer-logo.png"
            alt="My Destiny Logo"
            class="h-24 object-contain min-w-[259px] min-h-[227px]"
          />
        </div>
        <div class="text-center">
          <h2 class="text-xl font-semibold mb-4">
            <div class="mb-1">ក្រុមហ៊ុន ហេង ស៊ុយ សេនធ័រ (ខេមបូឌា) ម.ក</div>
            <div>Feng Shui Center (Cambodia) Co., Ltd.</div>
          </h2>
          <p class="flex items-center justify-center gap-2">
            #អគារ 743-744 ផ្លូវ 1952 ភូមិចាក់អង្រែ សង្កាត់ទឹកល្អក់១ ខណ្ឌសែនសុខ
            រាជធានីភ្នំពេញ
          </p>
          <p class="flex items-center justify-center gap-2">
            (+855) 96 82 88 789 | (+855) 92 981 616
          </p>
          <p class="flex items-center justify-center gap-2">
            info@appmydestiny.com
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-16 items-start">
          <nav class="flex flex-col space-y-2">
            <a
              v-for="item in menuItems"
              :key="item"
              href="#"
              class="hover:text-[#b08d57] transition-colors"
            >
              {{ item }}
            </a>
          </nav>
          <div
            class="flex justify-center md:justify-end gap-4 flex-col items-center"
          >
            <p>FOLLOW US</p>
            <div class="grid grid-cols-2 gap-4 justify-items-center">
              <a
                v-for="(name, index) in socialIcons"
                :key="index"
                href="#"
                class="hover:opacity-80 transition-opacity"
              >
                <NuxtImg :src="name" :alt="name" class="w-12 h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-8 pt-4 border-t border-[#b08d57] text-sm text-center md:text-left"
      >
        <div
          class="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center"
        >
          <a href="#" class="hover:underline">Privacy Policy</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:underline">Terms and Conditions</a>
          <span class="hidden md:inline">|</span>
          <span>Copyright 2025 Copyright Way Fengshui Group</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const menuItems = [
  'HOME',
  'PRODUCT',
  'PRICE',
  'EVENT',
  'ABOUT US',
  'CONTACT US',
];

const socialIcons = [
  '/images/tiktok.svg',
  '/images/facebook.svg',
  '/images/instagram.svg',
  '/images/telegram.svg',
  '/images/linkedin.svg',
  '/images/youtube.svg',
];
</script>

<style scoped></style>
