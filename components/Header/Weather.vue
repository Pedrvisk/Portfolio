<script setup lang="ts">
const weather = useWeather();

onMounted(() => {
  weather.fetch();
});
</script>

<template>
  <div
    class="relative w-full h-32 md:h-full flex items-center justify-center bg-gradient-to-bl from-black/80 to-nero/15 rounded"
  >
    <div
      class="bg-[url('/base/map-dark.webp')] absolute inset-0 z-[-1] bg-center bg-no-repeat bg-cover rounded"
    />
    <div class="w-full flex items-center justify-center drop-shadow-[0px_0px_3px_white]">
      <Icon name="solar:map-point-search-bold" size="36" class="text-white" />
    </div>
    <template v-if="!weather.isLoading && weather.data">
      <div
        class="absolute top-0 right-0 flex items-center gap-1 p-2 bg-white/5 rounded-tr-[4px] rounded-bl-[4px] text-xs font-medium tracking-wider"
      >
        <Icon name="fluent:temperature-24-filled" size="15" />
        {{ weather.data?.temperature }}°
      </div>
      <div
        class="absolute bottom-0 right-0 flex items-center gap-1 p-2 bg-white/5 rounded-tl-[4px] rounded-br-[4px] text-xs font-medium tracking-wider"
      >
        <Icon name="carbon:humidity" size="15" />
        {{ weather.data?.humidity }}%
      </div>
    </template>
  </div>
</template>
