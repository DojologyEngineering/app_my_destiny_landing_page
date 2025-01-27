<template>
  <footer class="bg-primary-light w-full">
    <div class="container mx-auto pt-8 lg:px-5">
      <div
        class="flex lg:flex-row flex-col lg:items-start items-center md:justify-around justify-center"
      >
        <div class="lg:hidden flex flex-row w-full px-5 justify-center gap-3">
          <a
            v-for="(name, index) in socialIcons"
            :key="index"
            href="#"
            class="hover:opacity-80 transition-opacity"
          >
            <NuxtImg :src="name" :alt="name" class="w-7 h-7" />
          </a>
        </div>
        <div class="flex flex-row pr-5 gap-5 lg:mt-0 mt-10 align-top">
          <div class="flex justify-center md:justify-start pl-5 md:pl-0">
            <NuxtImg
              src="/images/footer-image/footer-logo.png"
              alt="My Destiny Logo"
              width="259"
              height="227"
              class="object-contain min-w-[118px] min-h-[104px] md:min-w-[259px] md:min-h-[227px]"
            />
          </div>
          <div class="text-center md:flex flex-col items-start">
            <h2 class="text-xl font-semibold mb-4">
              <p
                class="text-khmer text-xs md:text-xl bold text-left"
                v-if="locale == 'km'"
              >
                ក្រុមហ៊ុន ហ្វេង ស៊ុយ សេនធ័រ (ខេមបូឌា) ឯ.ក Feng Shui Center
                (Cambodia) Co., Ltd.
              </p>
              <p class="text-khmer text-xs md:text-xl bold text-left" v-else>
                {{ $t('Feng Shui Center (Cambodia) Co., Ltd.') }}
              </p>
            </h2>

            <p
              class="flex items-center md:justify-center text-khmer text-body md:text-xl text-left mt-2"
            >
              {{ $t('Building 743, 744 Street 1952, Phnom Penh 120801') }}
            </p>

            <p
              class="flex items-center md:justify-center text-khmer text-body md:text-xl text-left mt-3"
            >
              (+855) 96 82 88 789 | (+855) 92 981 616
            </p>

            <p class="flex items-center text-khmer text-body md:text-xl mt-3">
              info@appmydestiny.com
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-16 items-start">
          <nav class="hidden lg:flex flex-col space-y-2 text-xs">
            <a
              v-for="item in menuItems"
              :key="item.name"
              href="#"
              class="transition-colors text-xs md:text-base font-khmer font-bold"
            >
              {{ item.name }}
            </a>
          </nav>

          <div
            class="hidden lg:flex justify-center md:justify-end gap-4 flex-col items-center"
          >
            <p class="md:text-base font-khmer font-bold">FOLLOW US</p>
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
        <nav
          class="lg:hidden flex flex-row items-center justify-around w-full px-5 mt-5"
        >
          <a
            v-for="item in menuItemsSmallScreen"
            :key="item"
            href="#"
            class="transition-colors text-xs"
          >
            {{ item }}
          </a>
        </nav>
      </div>
    </div>
    <div
      class="flex mt-5 py-4 text-sm text-center md:text-left bg-primary-dark sm:flex-start md:flex-start"
    >
      <div class="container mx-auto">
        <p class="text-khmer md:text-base text-body text-info-text">
          Privacy Policy | Terms and Conditions | Copyright 2025 App My Destiny
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
const { locale } = useI18n();
</script>

<style scoped></style>
