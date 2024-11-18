<script lang="ts">
export default {
  props: {
    avatarUrl: {
      type: String as PropType<string>,
      required: false,
    },
  },
};
</script>

<template>
  <div class="relative">
    <NuxtImg
      :src="avatarUrl"
      alt="Avatar of Pedrovisk"
      format="jpeg,webp"
      quality="100"
      class="rounded-full !max-w-[90px] !h-[90px] border-[1px] border-white/5"
    />
    <div
      class="absolute inset-0 !max-w-[90px] !h-[90px] animate-[spin_4s_linear_infinite] flex items-center justify-start"
    >
      <div
        class="w-[1px] h-[8px] bg-white/80 rounded-full drop-shadow-[0px_0px_3px_white]"
      />
    </div>
    <div
      class="absolute inset-0 !max-w-[90px] !h-[90px] animate-[spin_4s_linear_infinite] flex items-center justify-end"
    >
      <div
        class="w-[1px] h-[8px] bg-white/80 rounded-full drop-shadow-[0px_0px_3px_white]"
      />
    </div>
  </div>
</template>
