<template>
  <header
    class="bg-info-text md:container md:mx-auto rounded-full shadow-lg"
  >
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
          format="webp,png"
          class="relative text-colors-red-main md:text-base text-xl font-khmer font-bold transition-all after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary-dark after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-primary-dark"
          :class="{
            'after:scale-x-100 text-primary-dark': isActive(item.route),
          }"
        >
          {{ $t(item.name) }}
        </NuxtLink>
      </div>

      <div class="w-[10%] flex justify-center">
        <NuxtLink
          class="hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-info-text rounded-full shadow-lg md:p-4 p-2"
          :to="localePath('/')"
        >
          <div class="md:w-28 md:h-28 w-20 h-20 rounded-full overflow-hidden">
            <NuxtImg
              src="/images/logo.png"
              alt="Logo"
              class="object-cover w-full h-full"
              format="webp"
              :placeholder="[50, 25]"
            />
          </div>
        </NuxtLink>
      </div>
      <div
        class="w-[45%] hidden lg:flex justify-around items-center font-khmer"
      >
        <NuxtLink
          v-for="item in navigationItemsRight"
          :key="item"
          :to="localePath(item.route)"
          class="relative text-colors-red-main md:text-base text-xl font-khmer font-bold transition-all after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary-dark after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-primary-dark"
          :class="{
            'after:scale-x-100 text-primary-dark': isActive(item.route),
          }"
        >
          {{ $t(item.name) }}
        </NuxtLink>
        <LanguageSelector />
      </div>
      <div class="lg:hidden flex justify-end w-[45%] pr-3">
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
          :class="{
            'underline text-primary-dark': isActive(item.route),
          }"
        >
          {{ $t(item.name) }}
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
const localePath = useLocalePath();
const isDrawerOpen = ref(false);
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
const route = useRoute();
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
const isActive = (itemRoute) => route.path === localePath(itemRoute);
</script>