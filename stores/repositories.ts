import { type GithubRepository } from "~/server/api/github/repositories";

export const useRepositories = defineStore("repositories", {
  state: (): GithubRepository[] => [],
  actions: {
    async fetch(): Promise<GithubRepository[] | null> {
      const res = await $fetch("/api/github/repositories");

      if (!res || !res?.data) return null;
      this.$patch(res.data);
      return res.data;
    },
  },
});
