<template>
  <!-- <Menu as="div" class="text-left md:inline-block">
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
  </Menu> -->
  <div class="">
    <Listbox v-model="selectedLang" class="h-full">
      <div class="relative">
        <ListboxButton
          class="relative w-full cursor-default bg-transparent py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <li class="flex items-center">
            <NuxtImg
              :src="getLang.logo"
              width="40"
              height="auto"
              class="md:flex hidden"
            />
            <div class="left-0 pl-3 text-amber-600">
              <span
                class="block truncate md:text-xl font-khmer text-colors-red-main font-bold"
                >{{ selectedLang.name }}</span
              >
            </div>
          </li>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <Icon
              icon="gridicons:dropdown"
              width="24"
              height="24"
              style="color: #000"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute max-h-60 w-[140px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="lang in listLang"
              :key="lang.name"
              :value="lang"
              as="template"
            >
              <li
                @click="updateLanguage(lang.code)"
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-16 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ lang.name }}</span
                >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <NuxtImg :src="lang.logo" width="40" height="40" />
                </div>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { NuxtImg } from '#components';
import { Icon } from '@iconify/vue/dist/iconify.js';
const { locale, setLocale } = useI18n();
// console.log('locale', locale.value);
const updateLanguage = (newLanguage) => {
  setLocale(newLanguage);
};
const listLang = [
  { name: 'KH', logo: '/images/header/cambodia.png', code: 'km' },
  { name: 'EN', logo: '/images/header/united-kingdom.png', code: 'en' },
];
const selectedLang = ref();
const getLang = computed(() => {
  const lang = listLang.find((val) => val.code === locale.value);
  selectedLang.value = lang;
  return lang;
});
// console.log('getLang', getLang);
</script>
