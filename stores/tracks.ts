interface TracksState {
  data: LastFMTrack[];
  isLoading: boolean;
}

export const useTracks = defineStore("tracks", {
  state: (): TracksState => ({
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
        const res = await $fetch<LastFMTrack[]>("/api/lastfm/tracks");
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
