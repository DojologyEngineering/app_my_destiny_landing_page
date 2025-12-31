<template>
  <div class="bg-[#FFF2DE] w-full overflow-hidden">
    <div class="pt-10 md:pt-20 px-6">
      <div class="container mx-auto max-w-[1024px]">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="font-khmer font-bold text-2xl md:text-5xl text-colors-red-main mb-6 leading-tight">
            {{ $t('Subscribers App My Destiny - វាសនាខ្ញុំ') }}
          </h2>
          <p class="font-khmer text-lg md:text-2xl text-gray-700 leading-relaxed">
            {{
              $t(
                'We hold the unequivocal and firm conviction that with the backing of the guidance and preventative measures that App My Destiny- វាសនាខ្ញុំ offers, our Cambodians will rapidly step forward to a better living standard, prosperity, harmony, enhancement, and development.'
              )
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="relative mt-8 md:mt-0">
      <NuxtImg
        src="/images/home-image/calendar.png"
        class="w-full h-auto hidden md:block object-contain"
        alt="App Preview Desktop"
      />
      
      <div class="md:hidden flex justify-center">
        <NuxtImg
          src="/images/home-image/calendar_small.png"
          class="w-full max-w-sm h-auto object-cover"
          alt="App Preview Mobile"
        />
      </div>
    </div>
  </div>
</template>