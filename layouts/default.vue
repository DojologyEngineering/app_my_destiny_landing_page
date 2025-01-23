<template>
  <div class="">
    <div class="fixed top-14 w-full z-10">
      <!-- <Header /> -->
    </div>
    <main class="">
      <slot />
    </main>

    <div class="z-10">
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';
</script>

<style scoped></style>
