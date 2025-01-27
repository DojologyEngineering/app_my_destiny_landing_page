<template>
  <NuxtLink
    :to="localePath(url)"
    class="rounded-full bg-colors-red-main py-4 px-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
defineProps<{
  url: string;
}>();
</script>

<style scoped></style>
