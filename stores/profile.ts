interface ProfileState {
  data: GithubProfile;
  isLoading: boolean;
}

export const useProfile = defineStore("profile", {
  state: (): ProfileState => ({
    data: {
      login: "Pedrovisk",
      avatar_url:
        "https://media.discordapp.net/attachments/807898541368410122/1095666270613016676/660d41a00af89c772b8f1990a2d76d00.png?ex=67026f3b&is=67011dbb&hm=d7862db7b4ee7bd11e481ed62442892f2e265c2ffd65306f54eff952a3761b65&=&format=webp",
      html_url: "",
      bio: "",
      public_repos: 0,
      followers: 0,
      following: 0,
    },
    isLoading: true,
  }),
  actions: {
    setLoading(value: boolean) {
      this.isLoading = value;
    },
    async fetch(): Promise<boolean> {
      this.setLoading(true);

      try {
        const res = await $fetch<GithubProfile>("/api/github/profile");
        if (!res) return false;

        this.data = res;
        return true;
      } catch (err) {
        console.error(err);
        return false;
      } finally {
        this.setLoading(false);
      }
    },
  },
});
