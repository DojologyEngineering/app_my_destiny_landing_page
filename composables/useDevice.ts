import { ref, onMounted, onUnmounted } from 'vue';

export function useDevice() {
  const device = ref('desktop');

  const checkDevice = () => {
    if (window.innerWidth < 768) {
      device.value = 'mobile';
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      device.value = 'tablet';
    } else {
      device.value = 'desktop';
    }
  };

  onMounted(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice);
  });

  return { device };
}