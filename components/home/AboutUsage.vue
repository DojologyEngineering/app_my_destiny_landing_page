<template>
  <div class="relative w-full overflow-hidden">
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/images/home-image/calendar.png"
        class="w-full h-full md:block hidden object-cover"
        :placeholder="[50, 20]"
      />
      <NuxtImg
        src="/images/home-image/calendar_small.png"
        class="md:pt-72 pt-44 md:hidden block bg-[#FFF2DE] w-full h-full object-cover"
        :placeholder="[50, 20]"
      />
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-10">
      <div class="grid grid-cols-1 md:grid-cols-12 items-center py-20 md:py-32 lg:py-48">
        
        <div class="md:col-span-5 pb-6 md:pb-0 md:pr-10 border-b md:border-b-0 md:border-r border-colors-red-main/20">
          <h1 class="font-khmer font-bold text-3xl md:text-4xl text-colors-red-main leading-tight">
            {{ $t('Subscribers App My Destiny - វាសនាខ្ញុំ') }}
          </h1>
          <p class="font-khmer text-lg md:text-2xl text-gray-main leading-relaxed mt-10">
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