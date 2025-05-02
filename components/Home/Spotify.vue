<script setup lang="ts">
const DiscordUser = useLanyard({ method: "rest", id: "216662585737478144" });

const startedTimestamp = ref<number>(0);
const endTimestamp = ref<number>(0);
const progress = ref<number>(0);
const elapsed = ref<Date | null>(null);
const duration = ref<Date | null>(null);
let interval: ReturnType<typeof setInterval> | null = null;

function getMinuteAndSeconds(date: Date | number): string {
  return new Date(date).toLocaleTimeString(navigator.language, {
    minute: "2-digit",
    second: "2-digit",
  });
}

watch(
  () => DiscordUser?.value?.spotify,
  (newSpotify) => {
    if (
      newSpotify &&
      newSpotify.timestamps.end &&
      newSpotify.timestamps.end !== endTimestamp.value
    ) {
      startedTimestamp.value = newSpotify.timestamps.start;
      endTimestamp.value = newSpotify.timestamps.end;
      duration.value = new Date(endTimestamp.value - startedTimestamp.value);

      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        if (Date.now() >= endTimestamp.value || !newSpotify) {
          return clearInterval(interval!);
        }

        elapsed.value = new Date(Date.now() - startedTimestamp.value);
        progress.value =
          100 -
          (100 * (endTimestamp.value - Date.now())) / (endTimestamp.value - startedTimestamp.value);
      }, 1000);
    } else if (!newSpotify) {
      if (interval) clearInterval(interval);
      startedTimestamp.value = 0;
      endTimestamp.value = 0;
      progress.value = 0;
      elapsed.value = null;
      duration.value = null;
    }
  }
);

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

<template>
  <div class="grid-style space-y-3">
    <NuxtLink
      to="/lastfm"
      target="_blank"
      class="flex items-center justify-between text-green-500 hover:text-green-600 transition-colors"
    >
      <h2 class="font-bold sm:text-xl">
        {{ DiscordUser?.spotify ? $t("spotify.listening") : $t("spotify.not") }}
      </h2>
      <Icon name="cbi:spotify" size="30" />
    </NuxtLink>

    <div class="flex w-full flex-col">
      <div class="grid grid-cols-12">
        <template v-if="DiscordUser?.spotify">
          <img
            :src="DiscordUser.spotify.album_art_url || ''"
            alt="album cover"
            width="94"
            height="94"
            class="col-span-3 drop-shadow-[0_0_2px_#ef4444] h-16 w-16 justify-self-start rounded-md md:col-span-2 md:h-20 md:w-20"
          />
          <div class="md:ml-2 col-span-9 flex flex-col justify-center">
            <h2 class="truncate text-base md:text-lg font-semibold leading-tight text-white">
              {{ DiscordUser.spotify.song }}
            </h2>
            <h4 class="truncate text-xs leading-tight text-white/80">
              {{ $t("spotify.artist") }}
              {{ DiscordUser.spotify.artist }}
            </h4>
            <h4 class="truncate text-xs leading-tight text-white/80">
              {{ $t("spotify.album") }}
              {{ DiscordUser.spotify.album }}
            </h4>
          </div>
        </template>
        <template v-else>
          <div class="col-span-3 bg-white/10 h-16 w-16 rounded-md md:col-span-2 md:h-20 md:w-20" />
          <div class="md:ml-2 col-span-9 gap-2 flex flex-col justify-center">
            <div class="h-4 w-52 bg-white/10 rounded-[5px]" />
            <div class="h-3 w-12 bg-white/10 rounded-[4px]" />
            <div class="h-3 w-24 bg-white/10 rounded-[4px]" />
          </div>
        </template>
      </div>
      <div class="mt-2 w-full md:mt-4">
        <template v-if="DiscordUser?.spotify">
          <div class="relative h-2 w-full rounded-md bg-white/10">
            <span
              class="absolute h-2 rounded-md drop-shadow-[0_0_2px_#ef4444]"
              :class="{
                'bg-green-500': DiscordUser?.spotify,
              }"
              :style="{ width: `${DiscordUser?.spotify ? progress : 100}%` }"
            />
          </div>
          <div
            class="mt-1.5 flex items-center justify-between px-0.5 text-xs"
            :class="{
              'text-white': DiscordUser?.spotify,
              'text-white/30': !DiscordUser?.spotify,
            }"
          >
            <span>{{
              elapsed && DiscordUser?.spotify ? getMinuteAndSeconds(elapsed) : "00:00"
            }}</span>
            <span>{{ duration ? getMinuteAndSeconds(duration) : "00:00" }}</span>
          </div>
        </template>
        <template v-else>
          <div class="w-full">
            <div class="h-2 w-full rounded-md bg-white/10" />
            <div class="mt-1.5 text-white/25 flex items-center justify-between px-0.5 text-xs">
              <span>00:00</span>
              <span>00:00</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
