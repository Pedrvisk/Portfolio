<script setup lang="ts">
interface Social {
  icon: string;
  href: string;
  tooltip: string;
  color: string;
}

const socials = ref<Social[]>([
  {
    icon: "ri:discord-fill",
    color: "bg-blue-500/20 hover:bg-blue-500/40",
    tooltip: "Discord",
    href: "/discord",
  },
  {
    icon: "ri:github-fill",
    color: "bg-yellow-500/20 hover:bg-yellow-600/40",
    tooltip: "Github",
    href: "/github",
  },
  {
    icon: "foundation:social-lastfm",
    color: "bg-red-500/20 hover:bg-red-600/40",
    tooltip: "LastFM",
    href: "/lastfm",
  },
  {
    icon: "cbi:spotify",
    color: "bg-green-500/20 hover:bg-green-600/40",
    tooltip: "Spotify",
    href: "/spotify",
  },
  {
    icon: "ri:steam-fill",
    color: "bg-black/20 hover:bg-black/40",
    tooltip: "Steam",
    href: "/steam",
  },
]);
</script>

<template>
  <div class="grid grid-cols-5 gap-1 text-xs font-medium text-white items-end">
    <NuxtLink
      v-for="(social, index) in socials"
      :key="index"
      :to="social.href"
      target="_blank"
      class="flex items-center justify-center flex-col w-full h-full gap-1 transition-colors p-2 rounded-md"
      :class="social.color"
    >
      <Icon :name="social.icon" size="20" />
    </NuxtLink>
  </div>
</template>
