export async function fetchForecast(city: string) {
  // PROD – Netlify Function
  if (!import.meta.env.VITE_OPENWEATHER_API_KEY) {
    const endpoint = import.meta.env.VITE_FORECAST_FUNCTION_URL;

    if (!endpoint) {
      throw new Error("Forecast Netlify function endpoint is not configured.");
    }

    const res = await fetch(`${endpoint}?city=${encodeURIComponent(city)}`);

    if (!res.ok) {
      const text = await res.text();
      console.error("[fetchForecast][netlify]", text);
      throw new Error("Failed to fetch forecast from Netlify function");
    }

    return res.json();
  }

  // LOCAL – OpenWeather
  const forecastUrl = import.meta.env.VITE_OPENWEATHER_FORECAST_URL;
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const res = await fetch(
    `${forecastUrl}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch forecast from OpenWeather");
  }

  return res.json();
}
