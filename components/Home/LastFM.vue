<script setup lang="ts">
const tracks = useTracks();
</script>

<template>
  <div class="grid-style space-y-3">
    <NuxtLink
      to="/lastfm"
      target="_blank"
      class="flex items-center justify-between text-red-500 hover:text-red-600 transition-colors"
    >
      <h2 class="font-bold sm:text-xl">LastFM</h2>
      <Icon name="foundation:social-lastfm" size="30" />
    </NuxtLink>
    <div
      v-if="!tracks.isLoading && tracks.data?.length > 0"
      class="flex flex-col items-center justify-between gap-1"
    >
      <NuxtLink
        v-for="(track, index) in tracks.data"
        :duration="150 * index + 1"
        v-motion-pop-visible
        :key="track?.name"
        :href="track?.url"
        target="_blank"
        class="w-full"
      >
        <div
          class="w-full h-full bg-white/5 pl-2 rounded-md flex justify-between hover:scale-[1.01] hover:bg-white/10 transition-all"
        >
          <div class="flex items-center justify-center gap-2 font-medium py-1.5">
            <img
              class="w-7 h-7 rounded-md drop-shadow-[0_0_2px_#ef4444]"
              v-if="track?.image"
              :src="track?.image"
            />
            <h3 class="text-xs md:text-sm capitalize truncate text-white">
              {{ track?.name }}
            </h3>
            <span class="text-red-500 text-xs md:text-sm drop-shadow-[0_0_2px_#ef4444]">-</span>
            <span class="text-xs md:text-sm truncate text-white/50">{{ track?.artist?.name }}</span>
          </div>
          <div class="flex items-center justify-center gap-2">
            <div
              class="bg-white/5 py-1 px-2 rounded-md flex items-center justify-center text-xs text-white font-medium"
            >
              {{ track?.playcount }}
            </div>
            <div
              class="bg-white/10 mb-auto px-3 py-0.5 text-[11px] font-medium text-white rounded-tr-md rounded-bl-md"
            >
              {{ track?.rank }}º
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div v-else class="flex flex-col gap-1 items-center justify-between">
      <div class="w-full bg-white/5 h-10 rounded-md" />
      <div class="w-full bg-white/5 h-10 rounded-md" />
      <div class="w-full bg-white/5 h-10 rounded-md" />
    </div>
  </div>
</template>
