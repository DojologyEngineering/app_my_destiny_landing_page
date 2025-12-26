<template>
  <div class="max-w-[768px] mx-auto">
    <div class="fixed top-14 w-full z-50 max-w-[768px] mx-auto">
      <Header />
    </div>
    <main class="pt-44">
      <slot />
    </main>

    <div class="z-10">
      <FooterMobile />
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterMobile from '~/components/layout/FooterMobile.vue';
import Header from '~/components/layout/Header.vue';
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>