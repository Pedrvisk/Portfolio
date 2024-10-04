import { type GithubProfile } from "~/server/api/github/profile";

export const useProfile = defineStore("profile", {
  state: (): GithubProfile => ({
    login: "",
    avatar_url: "",
    html_url: "",
    bio: "",
    public_repos: 0,
    followers: 0,
    following: 0,
  }),
  actions: {
    async fetch() {
      const profile = await $fetch<{ data: GithubProfile }>(
        "/api/github/profile"
      );

      if (!profile) return;
      this.$patch(profile.data);
    },
  },
});
