<template>
  <div class="relative">
    <NuxtImg
      src="/images/home-image/calendar.png"
      class="w-full h-auto md:block hidden object-cover"
      :placeholder="[50, 20]"
    />
    <NuxtImg
      src="/images/home-image/calendar_small.png"
      class="md:pt-72 pt-44 md:hidden block bg-[#FFF2DE] w-full h-auto object-cover"
      :placeholder="[50, 20]"
    />

    <div
      class="absolute inset-0 md:-top-56 -top-20 z-10 flex items-center justify-center px-5 md:px-0 mr-[18%]"
    >
      <div class="container mx-auto">
        <div class="max-w-2xl text-center md:text-left">
          <p
            class="font-khmer font-bold text-2xl md:text-5xl text-colors-red-main mb-4"
          >
            {{ $t('Subscribers App My Destiny - វាសនាខ្ញុំ') }}
          </p>
          <p
            class="font-khmer text-xl md:text-2xl text-gray-main leading-relaxed"
          >
            {{
              $t(
                'We hold the unequivocal and firm conviction that with the backing of the guidance and preventative measures that App My Destiny- វាសនាខ្ញុំ offers, our Cambodians will rapidly step forward to a better living standard, prosperity, harmony, enhancement, and development.'
              )
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
