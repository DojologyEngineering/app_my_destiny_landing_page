<template>
  <div>
    <HomeOne />
  </div>
  <div class="bg-primary-dark">
    <HomeTwo />
  </div>
  <!-- <div class="h-screen bg-primary-dark">{{ $t('home') }}</div> -->
</template>
<script setup lang="ts">
import HomeOne from '~/components/home/HomeOne.vue';
import HomeTwo from '~/components/home/HomeTwo.vue';
</script>
