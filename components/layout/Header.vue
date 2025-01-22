<template>
  <header
    class="py-2 min-h-[120px] container mx-auto flex items-center justify-center"
  >
    <nav class="relative w-full">
      <div
        class="bg-white rounded-full shadow-lg px-8 py-4 flex items-center justify-between relative"
      >
        <div class="hidden md:flex items-center justify-between w-full gap-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item"
            :to="item.route"
            class="text-colors-red-main font-semibold hover:opacity-80 transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-[#8B2635]"
        >
          test
        </button>
        <div
          class="absolute left-1/2 -translate-x-1/2 -top-1 -translate-y-1/4 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <div
            class="w-28 h-28 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A028] flex items-center justify-center"
          >
            <NuxtImg src="/images/logo.png" />
          </div>
        </div>
      </div>
      <div
        v-if="isMenuOpen"
        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg py-4 px-6 md:hidden z-50"
      >
        <NuxtLink
          v-for="item in navigationItems"
          :key="item"
          :to="item.toLowerCase()"
          class="block py-2 text-[#8B2635] font-semibold hover:opacity-80 transition-colors"
          @click="isMenuOpen = false"
        >
          {{ item }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navigationItems = [
  { name: 'HOME', route: '/' },
  { name: 'PRODUCT', route: '/product' },
  { name: 'VIDEO', route: '/video' },
  { name: 'PRICE', route: '/price' },
  { name: 'ABOUT', route: '/about' },
  { name: 'CONTACT', route: '/contact' },
];
</script>
