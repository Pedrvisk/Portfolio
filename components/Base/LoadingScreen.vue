<script setup lang="ts">
import Logo from "~/assets/img/Logo.vue";
import { onMounted } from "vue";

const hideLoader = () => {
  const loader = document.getElementById("__nuxtloader");

  if (loader) {
    const loaderLogo = document.getElementById("__nuxtlogo");
    if (loaderLogo) setTimeout(() => (loaderLogo.style.opacity = "0"), 2900);

    setTimeout(() => (loader.style.opacity = "0"), 3000);
    setTimeout(() => (loader.style.display = "none"), 4000);
  }
};

onMounted(() => hideLoader());
</script>

<template>
  <div
    id="__nuxtloader"
    class="fixed inset-0 flex items-center justify-center w-full h-full transition-all duration-1000 ease-in-out z-10"
  >
    <div
      class="absolute inset-0 bg-gradient-to-bl from-black to-nero opacity-60"
    />
    <Logo
      id="__nuxtlogo"
      class="absolute animate-smoothLoading fill-white transition-opacity duration-500 ease-in-out drop-shadow-[0px_0px_3px_white]"
    />
  </div>
</template>
