<template>
  <div class="relative">
    <NuxtImg
      src="/images/home-image/calendar.png"
      class="w-full h-auto md:block hidden"
    />
    <NuxtImg
      src="https://s3-alpha-sig.figma.com/img/26b3/3be2/d0b57525203b38411b49c5a28a501bf5?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8hihSDTw3DJvYlTG0TpEiHJjfW14TSZiIGAl2xt~ZnEhqd2uZsvH6ORJiAKwmt-~mb2WrGeSjrK27TDs2sbb-6hjn5j-QdI6XfwOZYFbqimgW7zmsiQpGpWH4sNKNrEB0o2ZrBwoIQoNJKeZOpYgkQIErzag1Khmn3UBurtqtY1hnzT6JVm9eXcheI0xEW0gbr1gAPaFFOX098NGSeXpVSF4-JuKgAY1LO9jUvBpAVbTq2idCg6oVqxNp3tpLRQkQeZQtGQ0A8u8XttrGIoJOUNyxmGvNkl3i7hxD8bHHzDFAzQV7IZuvZdfehJ9~9v-MRnERxzOqXwp1sFUA8nvA__"
      class="pt-72 md:hidden block bg-[#FFF2DE]"
    />

    <div
      class="absolute inset-0 -top-56 md:top-0 z-10 flex items-center justify-center px-5 md:px-0"
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
