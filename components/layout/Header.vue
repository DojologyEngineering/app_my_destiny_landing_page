<template>
  <header
    class="bg-info-text md:container md:mx-auto rounded-full shadow-lg mx-5"
  >
    <!-- <div class="relative flex items-center justify-between">
      <div class="hidden space-x-6 lg:flex lg:pl-5">
        <NuxtLink
          v-for="item in navigationItemsLeft"
          :to="item.route"
          class="text-colors-red-main font-bold hover:opacity-80 transition-colors text-[22px]"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <div class="lg:hidden flex pl-5">
        <button @click="toggleDrawer">
          <Icon icon="ic:round-menu" width="36" height="24" />
        </button>
      </div>

      <div
        class="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4"
      >
        <div
          class="md:w-28 md:h-28 w-20 h-20 rounded-full overflow-hidden bg-[#FFF3D7]"
        >
          <NuxtImg
            src="/images/logo.png"
            alt="Logo"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
      <div class="hidden space-x-6 lg:pr-5 lg:flex items-center">
        <NuxtLink
          v-for="item in navigationItemsRight"
          :key="item"
          :to="item.route !== '/video' && item.route"
          class="text-colors-red-main font-bold hover:opacity-80 transition-colors md:text-[22px]"
        >
          {{ item.name }}
        </NuxtLink>
        <LanguageSelector />
      </div>

      <div class="lg:hidden flex pr-5">
        <LanguageSelector />
      </div>
    </div> -->
    <div class="relative flex flex-row items-center">
      <div class="lg:hidden flex pl-5 w-[45%]">
        <button @click="toggleDrawer">
          <Icon icon="ic:round-menu" width="36" height="24" />
        </button>
      </div>
      <div class="w-[45%] hidden lg:flex flex-row justify-around items-center">
        <NuxtLink
          v-for="item in navigationItemsLeft"
          :to="localePath(item.route)"
          class="text-colors-red-main font-bold hover:opacity-80 transition-colors text-[22px]"
        >
          {{ $t(item.name) }}
        </NuxtLink>
      </div>

      <div class="w-[10%] flex justify-center">
        <div
          class="hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-info-text rounded-full shadow-lg p-4"
          @click="handleNavigate"
        >
          <div class="md:w-28 md:h-28 w-20 h-20 rounded-full overflow-hidden">
            <NuxtImg
              src="/images/logo.png"
              alt="Logo"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div class="w-[45%] hidden lg:flex justify-around items-center">
        <NuxtLink
          v-for="item in navigationItemsRight"
          :key="item"
          :to="localePath(item.route)"
          class="text-colors-red-main font-bold hover:opacity-80 transition-colors md:text-[22px]"
        >
          {{ $t(item.name) }}
        </NuxtLink>
        <LanguageSelector />
      </div>
      <div class="lg:hidden flex justify-end w-[45%] pr-5">
        <LanguageSelector />
      </div>
    </div>
  </header>
  <CusDrawer
    drawerId="custom-drawer"
    buttonText="Show Drawer"
    :isDrawerOpen="isDrawerOpen"
    @toggleDrawer="toggleDrawer"
  >
    <template #title>
      <span class="flex items-center">My Destiny - វាសនាខ្ញុំ </span>
    </template>
    <template #default>
      <nav class="flex flex-col space-y-4">
        <NuxtLink
          v-for="item in menuItems"
          :key="item"
          :to="localePath(item.route)"
          @click="toggleDrawer"
          class="text-colors-red-main text-lg font-khmer font-bold"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
    </template>
  </CusDrawer>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref } from 'vue';
import CusDrawer from '../cusComponents/CusDrawer.vue';
import LanguageSelector from '../cusComponents/LanguageSelector.vue';
const navigate = useRouter();
const handleNavigate = () => {
  navigate.push('/');
};
const localePath = useLocalePath();
const isDrawerOpen = ref(false);
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
const navigationItemsLeft = [
  { name: 'HOME', route: '/' },
  { name: 'PRODUCT', route: '/product' },
  { name: 'PRICE', route: '/price' },
];
const navigationItemsRight = [
  { name: 'ABOUT US', route: '/about' },
  { name: 'CONTACT US', route: '/contact' },
];
const menuItems = [
  { name: 'HOME', route: '/' },
  { name: 'PRODUCT', route: '/product' },
  { name: 'PRICE', route: '/price' },
  { name: 'ABOUT US', route: '/about' },
  { name: 'CONTACT US', route: '/contact' },
];
</script>
