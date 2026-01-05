export async function fetchWeather(city: string) {
  const baseUrl =
    import.meta.env.VITE_OPENWEATHER_BASE_URL ??
    "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY ?? "DUMMY_KEY";

  if (apiKey === "DUMMY_KEY") {
    console.warn(
      "[fetchWeather] API key is missing. The request will fail if attempted, but build will not break."
    );
  }

  const url = `${baseUrl}?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);

  if (!res.ok) {
    const text = await res.text();
    console.error("[fetchWeather] API response error:", text);
    throw new Error(`Failed to fetch weather for ${city}`);
  }

  return res.json();
}
