<template>
  <NuxtLink
    :to="type"
    class="rounded-full text-white bg-colors-red-main uppercase py-4 px-6 font-semibold text-sm tracking-wider"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  type?: string;
}>();
</script>

<style scoped>
/* Styles just for this button */
</style>
