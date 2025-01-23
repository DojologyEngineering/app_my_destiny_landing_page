<script setup lang="ts"></script>

<template>
  <div class="bg-primary-main h-screen pt-36 relative">
    <NuxtImg
      src="/images/price_banner.png"
      class="w-[904px] h-[600px] absolute left-1/2 bottom-0 transform -translate-x-1/2"
    />
  </div>

  <div class="bg-primary-brown h-auto pt-28">
    <div class="flex flex-col md:flex-row justify-center items-center">
      <div class="flex flex-col items-center relative right-10">
        <NuxtImg
          src="/images/Phone-Women-Hand-Mockup 1.png"
          width="829"
          height="1137"
          class="relative"
        />
        <p
          class="text-[48px] font-bold font-khmer text-info-text absolute -bottom-[100] -mr-36 mt-8"
        >
          តារាងតម្លៃ
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-12 pb-48 md:pr-28 md:place-items-start place-items-center"
      >
        <div
          v-for="(item, index) in priceList"
          :key="index"
          class="bg-background-main rounded-[30px] flex flex-col items-center px-10 pt-28 pb-10 relative text-center"
        >
          <h1
            class="lg:text-[48px] md:text-[32px] text-[16px] font-khmer font-bold text-colors-red-main absolute top-[88px]"
          >
            {{ item.title }}
          </h1>
          <h1 class="lg:text-[128px] md:text-[64px] font-bold">
            <span class="text-[48px]">$</span>{{ item.price }}
          </h1>
          <p
            class="font-[400] text-colors-red-main text-[24px] absolute top-[260px] ]"
          >
            {{ item.date }}
          </p>

          <button
            class="px-8 py-4 font-[400] text-info-text bg-colors-red-main rounded-[100px] mt-4"
          >
            DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
