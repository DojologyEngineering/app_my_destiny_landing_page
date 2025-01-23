<template>
  <Menu as="div" class="text-left md:inline-block">
    <div>
      <MenuButton
        class="font-khmer font-bold text-colors-red-main inline-flex items-center justify-center py-2 bg-transparent"
      >
        <button
          class="md:text-[22px] font-khmer font-bold text-colors-red-main"
        >
          EN | KH
        </button>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
    >
      <MenuItems
        class="absolute right-0 w-[130px] origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem
            v-for="item in locales"
            :key="typeof item === 'object' ? item.code : item"
            v-slot="{ active }"
            class="text-base font-sans font-medium text-gray-dark"
          >
            <button
              @click="
                updateLanguage(typeof item === 'object' ? item.code : item)
              "
              :class="[
                active ? 'bg-primary' : 'text-gray-900',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              {{ typeof item === 'object' ? item.name : item }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { computed, ref } from 'vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { useI18n } from 'vue-i18n';

const { locales, locale, setLocale } = useI18n();
const selectedLanguageName = computed(() => {
  const currentLocale = locale.value;
  return (
    locales.value.find((item) =>
      typeof item === 'object'
        ? item.code === currentLocale
        : item === currentLocale
    )?.name || 'English'
  );
});

const updateLanguage = (newLanguage) => {
  setLocale(newLanguage);
};
</script>
