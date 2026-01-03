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
export const mockWeather: Weather[] = [
  {
    dt: 1714305600,
    weather: [
      { id: 802, main: "Clouds", description: "partly cloudy", icon: "03d" },
    ],
    main: { temp: 295.15, feels_like: 294.15, humidity: 65 },
    wind: { speed: 12 },
    sys: { sunrise: 1714281840, sunset: 1714333500 },
  },
  {
    dt: 1714392000,
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
    ],
    main: { temp: 300.15, feels_like: 301.15, humidity: 40 },
    wind: { speed: 5 },
    sys: { sunrise: 1714368240, sunset: 1714419900 },
  },
  {
    dt: 1714478400,
    weather: [
      { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
    ],
    main: { temp: 288.15, feels_like: 287.15, humidity: 80 },
    wind: { speed: 15 },
    sys: { sunrise: 1714454640, sunset: 1714506300 },
  },
  {
    dt: 1714564800,
    weather: [
      { id: 600, main: "Snow", description: "light snow", icon: "13d" },
    ],
    main: { temp: 273.15, feels_like: 270.15, humidity: 90 },
    wind: { speed: 8 },
    sys: { sunrise: 1714541040, sunset: 1714592700 },
  },
  {
    dt: 1714651200,
    weather: [{ id: 741, main: "Fog", description: "foggy", icon: "50d" }],
    main: { temp: 285.15, feels_like: 284.15, humidity: 95 },
    wind: { speed: 3 },
    sys: { sunrise: 1714627440, sunset: 1714679100 },
  },
];
