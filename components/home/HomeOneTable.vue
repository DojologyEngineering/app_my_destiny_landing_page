<template>
  <div class="bg-primary-light w-full">
    <div class="container mx-auto px-5 md:px-10 py-16 md:py-24 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
        
        <div class="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
          <div class="border-l-4 border-colors-red-main pl-6">
            <h1
              class="font-khmer font-bold text-3xl md:text-5xl text-colors-red-main leading-tight"
              v-motion-fade
            >
              App My Destiny - វាសនាខ្ញុំ
            </h1>
          </div>

          <div class="mt-8 max-w-[700px]">
            <p
              class="font-khmer text-xl md:text-2xl font-normal text-gray-main leading-relaxed"
              v-motion-fade
              v-if="locale == 'km'"
            >
              ជា App ហុងស៊ុយបែបវិទ្យាសាស្ត្រតែមួយគត់
              <span class="font-khmer font-bold text-gray-dark">
                របស់ប្រទេសកម្ពុជា
              </span>
              បង្កើតឡើងដោយជនជាតិខ្មែរ ប្រកបដោយស្តង់ដារល្អបំផុត កម្រិតអន្តរជាតិ
              ដែលមានចំនួនអ្នកដោនឡូត ច្រើនជាង 600,000 (ប្រាំមួយរយពាន់) នាក់។
            </p>
            <p
              v-else
              class="font-khmer text-xl md:text-2xl font-normal text-gray-main leading-relaxed"
            >
              {{ $t('with_more_than') }}
            </p>
          </div>

          <div
            class="mt-10 w-full max-w-[400px]"
            v-motion-fade
          >
            <NuxtImg
              src="/images/home-image/qr.png"
              alt="App My Destiny"
              class="w-full h-auto object-contain"
              :placeholder="[50, 25]"
            />
          </div>
        </div>

        <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <div class="relative w-full max-w-[500px]" v-motion-fade>
            <NuxtImg
              class="w-full h-auto object-cover"
              src="/images/home-image/mobile-background.png"
              alt="Background"
              :placeholder="[50, 25]"
            />
            <NuxtImg
              class="absolute inset-0 mx-auto w-auto h-full object-contain z-10 scale-110"
              src="/images/home-image/mobile.png"
              alt="Mobile"
              :placeholder="[50, 25]"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>