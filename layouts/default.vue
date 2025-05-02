<script setup lang="ts">
const tracks = useTracks();

onMounted(() => {
  tracks.fetch();
});
</script>

<template>
  <BaseLoadingScreen />
  <BaseHeader />
  <BaseMain>
    <slot />
  </BaseMain>
</template>
