<script setup lang="ts">
interface Tool {
  icon: string;
  tooltip: string;
  href: string;
}

const tools = ref<Tool[]>([
  {
    icon: "devicon:express",
    tooltip: "Express",
    href: "https://expressjs.com/",
  },
  {
    icon: "devicon:git",
    tooltip: "Git",
    href: "https://git-scm.com/doc",
  },
  {
    icon: "devicon:javascript",
    tooltip: "JavaScript",
    href: "https://devdocs.io/javascript-array/",
  },
  {
    icon: "devicon:typescript",
    tooltip: "TypeScript",
    href: "https://www.typescriptlang.org/docs/",
  },
  {
    icon: "devicon:java",
    tooltip: "Java",
    href: "https://dev.java/learn/",
  },
  {
    icon: "devicon-plain:jest",
    tooltip: "Jest",
    href: "https://jestjs.io/pt-BR/docs/getting-started",
  },
  {
    icon: "devicon:mongodb",
    tooltip: "MongoDB",
    href: "https://www.mongodb.com/docs/",
  },
  {
    icon: "devicon:mysql",
    tooltip: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    icon: "devicon:postgresql",
    tooltip: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    icon: "devicon:nextjs",
    tooltip: "NextJS",
    href: "https://nextjs.org/docs",
  },
  {
    icon: "devicon:nuxtjs",
    tooltip: "Nuxt",
    href: "https://nuxt.com/docs",
  },
  {
    icon: "devicon:react",
    tooltip: "React",
    href: "https://react.dev/learn",
  },
  {
    icon: "devicon:vuejs",
    tooltip: "Vue",
    href: "https://vuejs.org/guide",
  },
  {
    icon: "devicon:nodejs",
    tooltip: "NodeJS",
    href: "https://nodejs.org/en/docs",
  },
  {
    icon: "devicon:spring",
    tooltip: "SpringBoot",
    href: "https://spring.io/learn",
  },
  {
    icon: "devicon:tailwindcss",
    tooltip: "Taildwind CSS",
    href: "https://tailwindcss.com/docs/installation",
  },
]);
</script>

<template>
  <div class="grid-style space-y-3">
    <NuxtLink
      to="/github"
      target="_blank"
      class="flex items-center justify-between text-yellow-500 hover:text-yellow-600 transition-colors"
    >
      <Icon name="ri:github-fill" size="30" />
      <h2 class="font-bold sm:text-xl">Github</h2>
    </NuxtLink>
    <div class="grid grid-cols-7 gap-2 md:grid-cols-10">
      <NuxtLink
        v-for="(tool, index) in tools"
        :key="index"
        :to="tool.href"
        target="_blank"
      >
        <UITooltip :content="tool.tooltip">
          <div
            v-motion-pop-visible
            :duration="20 * index + 1"
            class="flex items-center justify-center drop-shadow-[0_0_1px_#eab308] transition-all bg-white/5 hover:bg-white/10 py-1 md:py-1.5 rounded-md gap-2 font-medium"
          >
            <Icon :name="tool.icon" size="30" />
          </div>
        </UITooltip>
      </NuxtLink>
    </div>
  </div>
</template>
