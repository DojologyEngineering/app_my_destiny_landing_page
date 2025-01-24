<template>
  <div class="">
    <div class="fixed top-14 w-full z-50">
      <Transition name="fade" appear>
        <Header />
      </Transition>
    </div>
    <main class="">
      <slot />
    </main>

    <div class="z-10">
      <Transition name="fade" appear>
        <Footer />
      </Transition>
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
