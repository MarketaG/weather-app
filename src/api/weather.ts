export async function fetchForecast(city: string) {
  const netlifyEndpoint = import.meta.env.VITE_NETLIFY_FORECAST_ENDPOINT;

  // PROD (Netlify) – API key is not available in Vite
  if (!import.meta.env.VITE_OPENWEATHER_API_KEY) {
    if (!netlifyEndpoint) {
      throw new Error("Netlify forecast endpoint is not configured.");
    }

    const res = await fetch(
      `${netlifyEndpoint}?city=${encodeURIComponent(city)}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch forecast from Netlify function");
    }

    return res.json();
  }

  // LOCAL – direct call to OpenWeather
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
    throw new Error(`Failed to fetch forecast for "${city}"`);
  }

  return res.json();
}
