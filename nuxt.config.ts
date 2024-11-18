import nuxtHeadConfig from "./nuxt-head.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@pinia/nuxt",
    "@virenbar/nuxt-lanyard",
    "@nuxt/icon",
    "@vueuse/motion/nuxt",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/styles/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: nuxtHeadConfig,
    pageTransition: { name: "page", mode: "out-in" },
  },
  routeRules: {
    "/discord": {
      redirect: "https://discord.com/users/216662585737478144",
    },
    "/github": {
      redirect: "https://github.com/Pedrvisk",
    },
    "/lastfm": {
      redirect: "https://www.last.fm/user/Pedrov1sk",
    },
    "/steam": {
      redirect: "https://steamcommunity.com/id/pedroviskrx/",
    },
    "/spotify": {
      redirect: "https://open.spotify.com/user/novoshigod?si=9636b45d17a84ab9",
    },
  },
  i18n: {
    vueI18n: "./nuxt-i18n.config.ts",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        icon: "twemoji:flag-united-nations",
      },
      {
        code: "pt-BR",
        name: "Portugues-Brasil",
        icon: "twemoji:flag-brazil",
      },
    ],
  },
});
