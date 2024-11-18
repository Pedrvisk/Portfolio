import type { Weather } from "~/server/api/weather/temperature";

export const useWeather = defineStore("weather", {
  state: (): Weather => ({
    temperature: "",
    humidity: "",
    last_updated: "",
  }),
  actions: {
    async fetch() {
      const res = await $fetch("/api/weather/temperature");

      if (!res || !res?.data) return;
      this.$patch(res.data);
      return res.data;
    },
  },
});
