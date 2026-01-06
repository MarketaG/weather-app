export async function fetchWeather(city: string) {
  const baseUrl = import.meta.env.VITE_OPENWEATHER_BASE_URL;
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new Error("OpenWeather API is not configured. See .env.example.");
  }

  const url = `${baseUrl}?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);

  if (!res.ok) {
    const text = await res.text();
    console.error("[fetchWeather] API response error:", text);
    throw new Error(`Failed to fetch weather for "${city}"`);
  }

  return res.json();
}
