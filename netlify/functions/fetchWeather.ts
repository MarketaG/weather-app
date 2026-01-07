import type { NetlifyHandler } from "./types";

const handler: NetlifyHandler = async (event) => {
  const city = event.queryStringParameters?.city;

  if (!city) {
    return { statusCode: 400, body: "City is required" };
  }

  const baseUrl = process.env.OPENWEATHER_FORECAST_URL!;
  const apiKey = process.env.OPENWEATHER_API_KEY!;

  const res = await fetch(
    `${baseUrl}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
  );

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
