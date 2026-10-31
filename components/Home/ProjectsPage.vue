<script setup lang="ts">
const repositories = useRepositories();
const previewRepository = computed(
  () =>
    repositories.data.find((repository) => repository.name.toLowerCase().includes("portfolio")) ??
    repositories.data[0],
);

onMounted(() => {
  if (repositories.data.length === 0) repositories.fetch();
});
</script>

<template>
  <div class="h-full">
    <NuxtLink
      to="/projects"
      class="grid-style group relative flex h-full min-h-32 w-full flex-col justify-between overflow-hidden transition-colors duration-200 hover:bg-white/10"
    >
      <div class="relative z-10 flex w-full items-center justify-between">
        <Icon name="ri:code-s-slash-line" size="30" class="text-sky-400" />
        <div class="flex items-center gap-2 text-sky-400 transition-colors group-hover:text-sky-300">
          <h2 class="font-bold sm:text-xl">{{ $t("projects.title") }}</h2>
        </div>
      </div>
      <p class="relative z-10 mt-2 text-sm text-white/60">{{ $t("projects.viewAll") }}</p>
      <Icon
        name="ep:arrow-right-bold"
        size="22"
        class="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
      />

      <div
        v-if="previewRepository"
        aria-hidden="true"
        class="pointer-events-none absolute bottom-1 right-8 min-h-36 w-4/5 max-w-80 translate-y-2 rotate-[-3deg] rounded-md border border-white/15 bg-black/75 p-4 opacity-45 shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-65"
      >
        <div class="mb-3 flex items-center gap-2 text-sm font-semibold text-white/80">
          <Icon name="ri:github-fill" size="18" class="shrink-0" />
          <span class="truncate">{{ previewRepository.name }}</span>
        </div>
        <p class="line-clamp-2 text-xs text-white/50">
          {{ previewRepository.description || previewRepository.language }}
        </p>
        <div class="mt-4 flex gap-1.5">
          <span class="h-1.5 w-12 rounded bg-sky-400/60" />
          <span class="h-1.5 w-8 rounded bg-white/20" />
          <span class="h-1.5 w-16 rounded bg-white/10" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
