interface RepositoriesState {
  data: GithubRepository[];
  isLoading: boolean;
}

export const useRepositories = defineStore("repositories", {
  state: (): RepositoriesState => ({
    data: [],
    isLoading: true,
  }),
  actions: {
    setLoading(value: boolean) {
      this.isLoading = value;
    },
    async fetch(): Promise<boolean> {
      this.setLoading(true);

      try {
        const res = await $fetch<GithubRepository[]>("/api/github/repositories");
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
