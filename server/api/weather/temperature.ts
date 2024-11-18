export interface Weather {
  temperature: string;
  humidity: string;
  last_updated: string;
}

interface WeatherResponse {
  current: Weather & { temp_c: string };
}

export default defineEventHandler(
  async (event): Promise<{ data: Weather | null }> => {
    const res = await $fetch<WeatherResponse>(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=-21.9239,-42.6149`
    ).catch(() => null);

    if (!res) {
      return {
        data: null,
      };
    }

    return {
      data: {
        temperature: res.current.temp_c,
        humidity: res.current.humidity,
        last_updated: res.current.last_updated,
      },
    };
  }
);
