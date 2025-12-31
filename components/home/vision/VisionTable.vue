<template>
  <div class="relative bg-cover bg-center py-20 px-4 min-h-screen bg-[url('/images/home-image/vr.jpg')]">
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative z-10 max-w-4xl mx-auto">
      <h2 class="text-white text-center font-khmer font-bold text-2xl md:text-5xl mb-24">
        {{ $t('Vision, Mission, Core Value') }}
      </h2>

      <div class="flex flex-col gap-24">
        <div v-for="item in visions" :key="item.name" 
             class="relative bg-[#D9D1B8]/90 rounded-[40px] p-8 pt-16 text-center border border-white/20 shadow-xl">
          <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#8B1E1E] rounded-full flex items-center justify-center border-4 border-[#D9D1B8] z-20">
            <img 
              :src="item.image" 
              :alt="item.name" 
              class="w-12 h-12 object-contain"
            />
          </div>
          <h3 class="font-khmer font-bold text-2xl md:text-3xl text-[#8B1E1E] mb-6">
            {{ $t(item.name) }}
          </h3>
          
          <p class="font-khmer text-lg md:text-xl text-gray-800 leading-relaxed">
            {{ $t(item.des) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { visions } from '@/utils/home-utils';
</script>