<script setup lang="ts">
const profile = useProfile();
const { data } = await useAsyncData("profile", () => profile.fetch());
</script>

<template>
  <div class="grid-start">
    <div class="col-span-12 md:col-span-6 grid grid-cols-1 gap-2">
      <div class="flex gap-4 items-center grid-style">
        <HeaderAvatar :avatarUrl="data?.avatar_url" />
        <HeaderDescription :title="data?.login" :description="data?.bio" />
      </div>
      <HeaderSocial />
    </div>
    <div class="col-span-12 md:col-span-2 gap-2 grid grid-cols-1">
      <HeaderLocale />
      <div class="grid-style !p-0">
        <HeaderTime />
      </div>
    </div>
    <div
      class="col-span-12 md:col-span-4 grid-cols-1 gap-2 md:gap-4 flex flex-col grid-style !p-0"
    >
      <HeaderWeather />
    </div>
  </div>
</template>
