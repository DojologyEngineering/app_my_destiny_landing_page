<template>
  <div class="bg-primary-light pt-36 pb-28">
    <div class="container mx-auto">
      <div class="flex md:flex-row flex-col-reverse items-center px-5 md:px-0">
        <!-- Text Content -->
        <div class="flex flex-col items-start mt-20 md:mt-0">
          <div class="px-0 md:px-0">
            <p
              class="font-khmer font-bold text-2xl md:text-5xl text-colors-red-main"
            >
              App My Destiny - វាសនាខ្ញុំ
            </p>
          </div>

          <div class="mt-4 md:px-0 px-0">
            <p
              class="font-khmer text-xl md:text-2xl font-normal text-gray-main"
            >
              ជា App ហុងស៊ុយបែបវិទ្យាសាស្ត្រតែមួយគត់
              <span
                class="font-khmer font-bold text-xl md:text-2xl text-gray-dark"
                >របស់ប្រទេសកម្ពុជា</span
              >
              បង្កើតឡើងដោយជនជាតិខ្មែរ ប្រកបដោយស្តង់ដារល្អបំផុត កម្រិតអន្តរជាតិ
              ដែលមានចំនួនអ្នកដោនឡូត ច្រើនជាង 600,000 (ប្រាំមួយរយពាន់) នាក់។
            </p>
          </div>
          <div
            class="mt-6 md:max-w-[422px] md:max-h-[144px] max-w-[349px] max-h-[50px]"
          >
            <NuxtImg
              src="/images/home-image/qr.png"
              alt="App My Destiny"
              class="w-full h-full"
            />
          </div>
        </div>
        <div class="relative w-full max-w-[664px]">
          <NuxtImg
            class="w-full h-auto object-cover"
            src="/images/home-image/mobile-background.svg"
            alt="Background"
          />

          <NuxtImg
            class="absolute inset-0 mx-auto w-auto h-full object-contain z-10"
            src="/images/home-image/mobile.png"
            alt="Mobile"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
