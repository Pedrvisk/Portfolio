<script setup lang="ts">
const profile = useProfile();
await callOnce(profile.fetch);
</script>

<template>
  <div class="grid-start md:h-44">
    <div class="col-span-12 md:col-span-9 grid-style flex flex-row gap-4">
      <div class="relative">
        <NuxtImg
          :src="profile.avatar_url"
          alt="Avatar of Pedrovisk"
          format="jpeg"
          quality="100"
          class="rounded-full !w-[100px] !h-[100px] border-[1px] border-white/5"
        />
        <div
          class="absolute inset-0 !w-[100px] !h-[100px] animate-[spin_4s_linear_infinite] flex items-center justify-start"
        >
          <div
            class="w-[1px] h-[8px] bg-white/80 rounded-full drop-shadow-[0px_0px_3px_white]"
          />
        </div>
        <div
          class="absolute inset-0 !w-[100px] !h-[100px] animate-[spin_4s_linear_infinite] flex items-center justify-end"
        >
          <div
            class="w-[1px] h-[8px] bg-white/80 rounded-full drop-shadow-[0px_0px_3px_white]"
          />
        </div>
      </div>
      <div>
        <h1 class="font-bold text-lg drop-shadow-[0px_0px_3px_white]">
          <NuxtLink to="/discord" target="_blank">
            {{ profile.login || "Pedrovisk" }}
          </NuxtLink>
        </h1>
      </div>
    </div>
    <div
      class="col-span-12 md:col-span-3 grid-cols-1 gap-2 md:gap-4 flex flex-col"
    >
      <div class="grid-style">1</div>
      <div class="grid-style">2</div>
    </div>
  </div>
</template>
