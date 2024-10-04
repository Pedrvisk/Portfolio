import { type GithubRepository } from "~/server/api/github/repositories";

export const useRepositories = defineStore("repositories", {
  state: (): GithubRepository[] => [
    {
      id: "",
      html_url: "",
      language: "",
      description: "",
      owner: {
        avatar_url: "",
        login: "",
      },
      name: "",
      pushed_at: "",
    },
  ],
  actions: {
    async fetch() {
      const repositories = await $fetch<{ data: GithubRepository[] }>(
        "/api/github/repositories"
      );
      
      if (!repositories) return;
      this.$patch(repositories.data);
    },
  },
});
