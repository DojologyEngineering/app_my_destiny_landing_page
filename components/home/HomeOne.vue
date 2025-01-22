<template>
  <div class="bg-primary-light pt-36">
    <div class="container mx-auto">
      <div class="flex flex-row items-center">
        <div class="flex flex-col items-start">
          <div>
            <p class="font-khmer font-bold text-5xl text-colors-red-main">
              App My Destiny - វាសនាខ្ញុំ
            </p>
          </div>
          <div class="mt-4">
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

        <div class="relative overflow-hidden min-w-[664px] min-h-[674px]">
          <NuxtImg
            src="/images/home-image/mobile-background.svg"
            alt="Background"
            class="absolute top-0 right-0 w-full h-full"
          />
          <NuxtImg
            src="/images/home-image/mobile.png"
            alt="Mobile"
            class="absolute top-10 right-5 max-w-[695px] max-h-[655px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
