import type { City, Weather } from "../types/weather";

// I. mock data
export const DEFAULT_CITY: City = {
  id: 1,
  name: "New York City",
  state: "NY",
  country: "US",
  coord: { lon: -74.006, lat: 40.7128 },
};

// II. mock data
export const mockCities: City[] = [
  {
    id: 1,
    name: "Praha",
    state: "",
    country: "CZ",
    coord: { lat: 50.0755, lon: 14.4378 },
  },
  {
    id: 2,
    name: "Brno",
    state: "",
    country: "CZ",
    coord: { lat: 49.1951, lon: 16.6068 },
  },
  {
    id: 3,
    name: "Ostrava",
    state: "",
    country: "CZ",
    coord: { lat: 49.834, lon: 18.292 },
  },
  {
    id: 4,
    name: "Berlin",
    state: "",
    country: "DE",
    coord: { lat: 52.52, lon: 13.405 },
  },
  {
    id: 5,
    name: "Munich",
    state: "",
    country: "DE",
    coord: { lat: 48.1351, lon: 11.582 },
  },
];

// III. mock data
export const mockRecentCities: City[] = [
  {
    id: 1,
    name: "Olomouc",
    state: "",
    country: "CZ",
    coord: { lat: 49.59552, lon: 17.251751 },
  },
  {
    id: 2,
    name: "Zlín",
    state: "",
    country: "CZ",
    coord: { lat: 49.216671, lon: 17.66667 },
  },
];

// IV. mock data
export const mockWeather = (): Weather => ({
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "partly cloudy",
      icon: "03d",
    },
  ],
  main: {
    temp: 295.15, // 22 °C
    feels_like: 294.15, // 21 °C
    humidity: 65,
  },
  wind: {
    speed: 12,
  },
  sys: {
    sunrise: 1714281840, // UNIX timestamp (s)
    sunset: 1714333500,
  },
});
