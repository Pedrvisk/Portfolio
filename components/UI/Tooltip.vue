<script setup lang="ts">
const { content } = defineProps({
  content: {
    type: String,
    required: false,
  },
});

const tooltipVisible = ref<boolean>(false);
const mousePosition = ref<{ x: number; y: number }>({ x: 0, y: 0 });
const tooltipRef = ref<HTMLElement | null>(null);

const showTooltip = () => (tooltipVisible.value = true);
const hideTooltip = () => (tooltipVisible.value = false);

const handleMouseMove = (event: MouseEvent) => {
  if (tooltipRef.value) {
    mousePosition.value.x = event.clientX - tooltipRef.value.offsetWidth / 2;
    mousePosition.value.y = event.clientY - tooltipRef.value.offsetHeight - 10;
  }
};

onMounted(() => document.addEventListener("mousemove", handleMouseMove));
onBeforeUnmount(() =>
  document.removeEventListener("mousemove", handleMouseMove)
);
</script>

<template>
  <div @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot />
  </div>
  <div
    v-if="tooltipVisible"
    ref="tooltipRef"
    class="fixed z-[100]"
    :style="{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }"
  >
    <slot name="tooltip-content">
      <div
        v-if="typeof content === 'string'"
        class="flex flex-col truncate text-xs items-center justify-center gap-2 bg-[#191919]/80 px-2 py-1 rounded-md"
      >
        {{ content }}
      </div>
    </slot>
  </div>
</template>
