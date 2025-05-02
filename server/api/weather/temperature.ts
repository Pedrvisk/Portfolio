interface WeatherResponse {
  current: Weather & { temp_c: string };
}

export default defineEventHandler(async (): Promise<Weather | null> => {
  const res = await $fetch<WeatherResponse>(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=-21.9239,-42.6149`
  ).catch(() => null);

  if (!res) return null;

  return {
    temperature: res.current.temp_c,
    humidity: res.current.humidity,
    last_updated: res.current.last_updated,
  };
});
