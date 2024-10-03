import { type GithubRepository } from "~/server/api/github/repositories";

export const useRepositories = defineStore("repositories", {
  state: (): GithubRepository[] => ({
    id: "",
    html_url: "",
    language: "",
    description: "",
    owner: "",
    name: "",
    pushed_at: "",
  }),
  actions: {
    async fetch() {
      const repositories = await $fetch<{ data: GithubRepository[] }>(
        "/api/github/repositories"
      );
      this.$patch(repositories.data);
    },
  },
});
