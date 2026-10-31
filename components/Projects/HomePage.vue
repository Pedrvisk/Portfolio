<script setup lang="ts">
const repositories = useRepositories();
const hasError = ref(false);

onMounted(async () => {
  hasError.value = !(await repositories.fetch());
});
</script>

<template>
  <section class="col-span-12 min-w-0 space-y-4">
    <header v-if="repositories.isLoading">
      <div
        class="grid-style flex h-24 w-full items-center justify-between"
        role="status"
        :aria-label="$t('projects.loading')"
      >
        <div class="h-5 w-28 animate-pulse rounded bg-sky-400/20" />
        <div class="h-5 w-5 animate-pulse rounded bg-white/10" />
      </div>
    </header>

    <header v-else>
      <NuxtLink
        to="/"
        class="grid-style group flex h-24 w-full items-center justify-between transition-colors hover:bg-white/10"
      >
        <div>
          <h1 class="text-xl font-bold text-sky-400 transition-colors group-hover:text-sky-300">
            {{ $t("projects.title") }}
          </h1>
        </div>
        <Icon
          name="ep:arrow-left-bold"
          size="20"
          class="text-white/70 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-white"
        />
      </NuxtLink>
    </header>

    <div
      v-if="repositories.isLoading"
      class="grid min-w-0 grid-cols-1 gap-2 md:grid-cols-2"
      role="status"
      :aria-label="$t('projects.loading')"
    >
      <div
        v-for="item in 4"
        :key="item"
        class="grid-style flex h-32 min-w-0 flex-col justify-between"
      >
        <div>
          <div class="mb-2 flex items-center justify-between gap-3">
            <div class="h-4 w-2/5 animate-pulse rounded bg-white/15" />
            <div class="h-[18px] w-[18px] shrink-0 animate-pulse rounded-full bg-sky-300/15" />
          </div>
          <div class="space-y-1.5">
            <div class="h-3 w-full animate-pulse rounded bg-white/10" />
            <div class="h-3 w-3/5 animate-pulse rounded bg-white/10" />
          </div>
        </div>
        <div class="mt-3 flex items-center justify-between gap-3">
          <div class="h-3 w-16 animate-pulse rounded bg-sky-300/15" />
          <div class="h-3 w-20 animate-pulse rounded bg-white/10" />
        </div>
      </div>
    </div>

    <div
      v-else-if="hasError"
      class="grid-style text-center text-sm text-white/60"
      role="status"
    >
      {{ $t("projects.error") }}
    </div>

    <div
      v-else-if="repositories.data.length === 0"
      class="grid-style text-center text-sm text-white/60"
    >
      {{ $t("projects.empty") }}
    </div>

    <div v-else class="grid min-w-0 grid-cols-1 gap-2 md:grid-cols-2">
      <NuxtLink
        v-for="repository in repositories.data"
        :key="repository.id"
        :to="repository.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="grid-style group flex h-32 min-w-0 flex-col justify-between transition-all duration-200 hover:scale-[1.01] hover:bg-white/10"
      >
        <div>
          <div class="mb-1.5 flex items-center justify-between gap-3">
            <h2 class="min-w-0 truncate text-sm font-semibold text-white">
              {{ repository.name }}
            </h2>
            <Icon
              name="ri:github-fill"
              size="18"
              class="shrink-0 text-sky-300/50 transition-colors group-hover:text-sky-200"
            />
          </div>
          <p class="line-clamp-2 break-words text-xs text-white/60">
            {{ repository.description || $t("projects.noDescription") }}
          </p>
        </div>
        <div class="mt-3 flex items-center justify-between gap-3 text-xs text-white/40">
          <span v-if="repository.language" class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-sky-400" />
            {{ repository.language }}
          </span>
          <span v-else />
          <span class="transition-colors group-hover:text-sky-200">{{ $t("projects.viewOnGithub") }}</span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
