import { type LastFMTrack } from "~/server/api/lastfm/tracks";

export const useTracks = defineStore("tracks", {
  state: (): LastFMTrack[] => [],
  actions: {
    async fetch() {
      if (!this.hasTracks()) {
        const res = await $fetch("/api/lastfm/tracks");

        if (!res || !res?.data) return;
        this.$patch(res.data);
        return res.data;
      }
    },
    hasTracks() {
      return this.length >= 3;
    },
  },
});
