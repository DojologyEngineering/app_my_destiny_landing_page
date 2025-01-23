<template>
  <div class="bg-primary-light pt-36 pb-28">
    <div class="container mx-auto">
      <div class="flex md:flex-row flex-col-reverse items-center px-5 md:px-0">
        <!-- Text Content -->
        <div class="flex flex-col items-start">
          <div class="px-5 md:px-0">
            <p class="font-khmer font-bold text-5xl text-colors-red-main">
              App My Destiny - វាសនាខ្ញុំ
            </p>
          </div>
          <div class="mt-4 px-5 md:px-0">
            <p class="font-khmer text-2xl font-normal text-gray-main">
              ជា App ហុងស៊ុយបែបវិទ្យាសាស្ត្រតែមួយគត់
              <span class="font-khmer font-bold text-2xl text-gray-dark"
                >របស់ប្រទេសកម្ពុជា</span
              >
              បង្កើតឡើងដោយជនជាតិខ្មែរ ប្រកបដោយស្តង់ដារល្អបំផុត កម្រិតអន្តរជាតិ
              ដែលមានចំនួនអ្នកដោនឡូត ច្រើនជាង 600,000 (ប្រាំមួយរយពាន់) នាក់។
            </p>
          </div>
          <div class="mt-6">
            <NuxtImg
              src="/images/home-image/qr.png"
              alt="App My Destiny"
              class="max-w-[422px] max-h-[144px]"
            />
          </div>
        </div>

        <!-- Image Container -->
        <div class="relative w-full max-w-[664px]">
          <!-- Background Image -->
          <NuxtImg
            class="w-full h-auto object-cover"
            src="/images/home-image/mobile-background.svg"
            alt="Background"
          />

          <!-- Mobile Image (Positioned above Background) -->
          <NuxtImg
            class="absolute top-0 left-0 w-full h-auto md:w-[555px] md:h-[695px] object-contain z-20"
            src="/images/home-image/mobile.png"
            alt="Mobile"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
