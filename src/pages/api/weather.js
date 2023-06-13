export default async function handler(req, res) {
  try {
    const weatherData = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=-21.9239,-42.6149`,
      {
        method: 'GET',
      }
    ).then((res) => res.json());

    res.status(200).json({ ...weatherData.current });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'ERROR!' });
  }
}
