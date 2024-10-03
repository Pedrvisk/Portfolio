<script setup lang="ts">
const DiscordUser = useLanyard({ method: "ws", id: "216662585737478144" });
</script>

<template>Spotify {{ DiscordUser.spotify?.song }}</template>
