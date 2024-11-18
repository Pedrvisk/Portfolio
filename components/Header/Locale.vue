<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
    class="group transition-all relative flex items-center justify-center w-full h-full px-2 py-6 rounded-md"
  >
    <Icon
      :name="locale.icon"
      class="absolute inset-0 w-full h-full bg-cover bg-center rounded-md z-[-1] opacity-100 group-hover:opacity-80 group-hover:scale-[0.99] transition-all"
    />
  </NuxtLink>
</template>
