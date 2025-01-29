<template>
  <footer class="bg-primary-light w-full">
    <div class="container mx-auto pt-8">
      <div
        class="flex lg:flex-row flex-col lg:items-start items-center md:justify-between justify-center"
      >
        <div class="lg:hidden flex flex-row w-full px-5 justify-center gap-3">
          <a
            v-for="(name, index) in socialIcons"
            :key="index"
            href="#"
            class="hover:opacity-80 transition-opacity"
          >
            <NuxtImg
              :src="name"
              :alt="name"
              class="w-7 h-7"
              :placeholder="[50, 25]"
            />
          </a>
        </div>
        <div class="hidden justify-center md:justify-start md:flex">
          <NuxtImg
            src="/images/footer-image/footer-logo.png"
            alt="My Destiny Logo"
            width="259"
            height="227"
            class="object-contain min-w-[118px] min-h-[104px] md:min-w-[259px] md:min-h-[227px] hidden lg:block"
            :placeholder="[50, 25]"
          />
        </div>
        <div class="flex flex-row lg:mt-0 mt-5 align-top space-x-4">
          <NuxtImg
            src="/images/footer-image/footer-logo.png"
            alt="My Destiny Logo"
            width="259"
            height="227"
            class="object-contain min-w-[118px] min-h-[104px] pl-4 lg:hidden"
            :placeholder="[50, 25]"
          />
          <div
            class="text-center md:flex flex-col items-start gap-y-4 space-y-2 pr-10"
          >
            <p
              class="font-khmer text-xs md:text-xl font-bold text-left md:max-w-[380px]"
              v-if="locale == 'km'"
            >
              ក្រុមហ៊ុន ហ្វេង ស៊ុយ សេនធ័រ (ខេមបូឌា) ឯ.ក Feng Shui Center
              (Cambodia) Co., Ltd.
            </p>
            <p class="font-khmer text-xs md:text-xl font-bold text-left" v-else>
              {{ $t('Feng Shui Center (Cambodia) Co., Ltd.') }}
            </p>
            <div class="flex items-center">
              <Icon
                icon="lucide:map-pin"
                style="color: #000"
                class="mr-2 w-6 h-6 md:w-6 md:h-6"
              />
              <p
                class="flex items-center md:justify-center font-khmer text-body md:text-xl text-left max-w-[340px]"
              >
                {{ $t('Building 743, 744 Street 1952, Phnom Penh 120801') }}
              </p>
            </div>
            <div class="flex items-center">
              <Icon
                icon="akar-icons:phone"
                style="color: #000"
                class="mr-2 w-5 h-5 md:w-6 md:h-6"
              />
              <p
                class="flex items-center md:justify-center font-khmer text-body md:text-xl text-left"
              >
                (+855) 96 82 88 789 | (+855) 92 981 616)
              </p>
            </div>
            <div class="flex items-center">
              <Icon
                icon="eva:email-outline"
                style="color: #000"
                class="mr-2 w-5 h-5 md:w-6 md:h-6"
              />
              <p class="flex items-center font-khmer text-body md:text-xl">
                info@appmydestiny.com
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <nav class="hidden lg:flex flex-col space-y-4 text-xs">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.name"
              :to="localePath(item.route)"
              class="transition-colors text-xs md:text-base font-khmer font-bold"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>
        </div>
        <div class="flex flex-col md:flex-row items-start">
          <div
            class="hidden lg:flex justify-center md:justify-end gap-4 flex-col items-center"
          >
            <p class="md:text-base font-khmer font-bold">FOLLOW US</p>
            <div class="grid grid-cols-2 gap-4 justify-items-center">
              <NuxtLink
                v-for="(name, index) in socialIcons"
                :key="index"
                href="#"
                class="hover:opacity-80 transition-opacity"
              >
                <NuxtImg
                  :src="name"
                  :alt="name"
                  class="w-12 h-12"
                  :placeholder="[50, 25]"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
        <nav
          class="lg:hidden flex flex-row items-center justify-around w-full px-5 mt-5"
        >
          <NuxtLink
            v-for="item in menuItemsSmallScreen"
            :key="item.name"
            :to="localePath(item.route)"
            class="transition-colors text-xs"
          >
            {{ item.name }}
          </NuxtLink>
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
import { menuItems } from '@/utils/footer-util';
const localePath = useLocalePath();
const { locale } = useI18n();
</script>

<style scoped></style>
