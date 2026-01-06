export async function fetchForecast(city: string) {
  const forecastUrl = import.meta.env.VITE_OPENWEATHER_FORECAST_URL;
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  if (!forecastUrl || !apiKey) {
    throw new Error("OpenWeather API is not configured. See .env.example.");
  }

  const url = `${forecastUrl}?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);

  if (!res.ok) {
    const text = await res.text();
    console.error("[fetchForecast] API response error:", text);
    throw new Error(`Failed to fetch weather for "${city}"`);
  }

  return res.json();
}
