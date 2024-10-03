// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@pinia/nuxt",
    "@virenbar/nuxt-lanyard",
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
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      title: "Pedrovisk",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/img/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/img/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/img/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/img/site.webmanifest",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "This website was created with the intention of publicizing my projects, my skills and putting my programming skills into practice.",
        },
        {
          name: "author",
          content: "Pedrovisk",
        },
        {
          name: "publisher",
          content: "Pedrovisk",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "keywords",
          content:
            "Discord, Bot, DiscordBot, Discord Bot, Miuky, miuky, portfolio, web, web developer, dev, developer",
        },
        {
          name: "msapplication-TileColor",
          content: "#0000000",
        },
        {
          name: "theme-color",
          content: "#0000000",
        },
      ],
    },
  },
  routeRules: {
    "/discord": {
      redirect: "https://discord.com/users/216662585737478144",
    },
  },
  i18n: {
    vueI18n: "./nuxt-i18n.js",
  },
});
