<template>
  <div class="-z-50 h-screen">
    <transition name="slide">
      <div
        v-if="isDrawerOpen"
        class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform w-full bg-info-text"
        tabindex="-1"
        :aria-labelledby="drawerId"
      >
        <h5
          :id="drawerId"
          class="inline-flex items-center mb-4 font-khmer font-bold text-2xl"
        >
          <slot name="title">Drawer Title</slot>
        </h5>

        <button
          type="button"
          @click="emit('toggleDrawer')"
          :aria-controls="drawerId"
          class="bg-transparent rounded-lg text-sm w-8 h-8 absolute top-5 right-2.5 inline-flex items-center justify-center"
        >
          <Icon icon="ic:baseline-close" width="24" height="24" />
        </button>
        <slot>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Default drawer content.
          </p>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

defineProps({
  buttonText: {
    type: String,
    default: 'Open Drawer',
  },
  drawerId: {
    type: String,
    required: true,
  },
  isDrawerOpen: {
    type: Boolean,
  },
});
const emit = defineEmits(['toggleDrawer']);
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
