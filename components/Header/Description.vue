<script lang="ts">
export default {
  props: {
    title: {
      type: String as PropType<string>,
      required: false,
    },
    description: {
      type: String as PropType<string>,
      required: false,
    },
  },
};
</script>

<template>
  <div>
    <h1 class="font-bold text-lg drop-shadow-[0px_0px_2px_white]">Pedrovisk</h1>
    <div class="w-full my-2 bg-white/10 rounded-full h-[0.5px]" />
    <p class="text-sm text-white/80 font-base">
      {{ $t("description") }}
    </p>
  </div>
</template>
