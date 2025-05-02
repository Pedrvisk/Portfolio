interface WeatherState {
  data: Weather;
  isLoading: boolean;
}

export const useWeather = defineStore("weather", {
  state: (): WeatherState => ({
    data: {
      temperature: null,
      humidity: null,
      last_updated: null,
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
        const res = await $fetch<Weather>("/api/weather/temperature");
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
