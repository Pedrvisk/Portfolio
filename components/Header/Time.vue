<script setup lang="ts">
const time = ref<string>("00:00:00");
const date = ref<string>(new Date().toLocaleDateString());

const updateTime = () => {
  const now = new Date();
  time.value = now.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
};

onMounted(() => {
  updateTime();
  const intervalId = setInterval(updateTime, 1000);
  onBeforeUnmount(() => clearInterval(intervalId));
});
</script>

<template>
  <div class="flex items-center text-center justify-between flex-col h-full">
    <div
      class="flex items-center justify-between bg-white/10 w-full rounded-t-[4px]"
    >
      <div class="px-4 bg-white/20 h-full flex items-center rounded-tl-[4px]">
        <Icon name="ic:sharp-share-arrival-time" size="20" />
      </div>
      <div class="flex items-center justify-center w-full">
        <div class="font-bold relative flex items-center py-2">
          {{ time.slice(0, 2) }}
          <span class="animate-pulse">:</span>
          {{ time.slice(3, 5) }}
          <span
            class="absolute left-[90%] bottom-[60%] text-white/50 text-[10px]"
          >
            {{ time.slice(6, 9) }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center bg-white/5 w-full h-full flex-col font-bold px-5 py-2"
    >
      <div class="text-sm">Rio de Janeiro</div>
      <div class="text-xs text-white/80">{{ $t("time") }}</div>
    </div>
    <div
      class="px-4 py-3 md:py-2 bg-white/25 h-full w-full flex items-center justify-center text-xs font-bold rounded-b-[4px] tracking-wider"
    >
      {{ date }}
    </div>
  </div>
</template>
