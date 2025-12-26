<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDevice } from './composables/useDevice';

const { device } = useDevice();

const layout = computed(() => {
  // console.log('Current device:', device.value);
  if (device.value === 'mobile') {
    return 'mobile';
  }
  if (device.value === 'tablet') {
    return 'tablet';
  }
  return 'default';
});
</script>