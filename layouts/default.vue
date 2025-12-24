<template>
  <div class="max-w-[1280px] mx-auto">
    <div class="fixed top-14 w-full z-50 max-w-[1280px] mx-auto">
      <Header />
    </div>
    <main class="pt-44">
      <slot />
    </main>

    <div class="z-10">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Footer from '~/components/layout/Footer.vue';
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