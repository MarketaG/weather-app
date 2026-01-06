import type { City, Weather, HourlyTemperaturePoint } from "../types/weather";

// I. mock data
export const DEFAULT_CITY: City = {
  id: 1,
  name: "New York City",
  state: "NY",
  country: "US",
};

// II. mock data
export const mockCities: City[] = [
  {
    id: 1,
    name: "Praha",
    state: "",
    country: "CZ",
  },
  {
    id: 2,
    name: "Brno",
    state: "",
    country: "CZ",
  },
  {
    id: 3,
    name: "Ostrava",
    state: "",
    country: "CZ",
  },
  {
    id: 4,
    name: "Berlin",
    state: "",
    country: "DE",
  },
  {
    id: 5,
    name: "Munich",
    state: "",
    country: "DE",
  },
];

// III. mock data
export const mockRecentCities: City[] = [
  {
    id: 1,
    name: "Olomouc",
    state: "",
    country: "CZ",
  },
  {
    id: 2,
    name: "Zlín",
    state: "",
    country: "CZ",
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

// V. mock data
export const hourlyByDay: HourlyTemperaturePoint[] = [
  // 1 — 2026-01-06
  { dt: 1714305600, dt_txt: "2026-01-06 00:00:00", main: { temp: 8 } },
  {
    dt: 1714305600 + 3 * 3600,
    dt_txt: "2026-01-06 03:00:00",
    main: { temp: 7 },
  },
  {
    dt: 1714305600 + 6 * 3600,
    dt_txt: "2026-01-06 06:00:00",
    main: { temp: 9 },
  },
  {
    dt: 1714305600 + 9 * 3600,
    dt_txt: "2026-01-06 09:00:00",
    main: { temp: 12 },
  },
  {
    dt: 1714305600 + 12 * 3600,
    dt_txt: "2026-01-06 12:00:00",
    main: { temp: 16 },
  },
  {
    dt: 1714305600 + 15 * 3600,
    dt_txt: "2026-01-06 15:00:00",
    main: { temp: 18 },
  },
  {
    dt: 1714305600 + 18 * 3600,
    dt_txt: "2026-01-06 18:00:00",
    main: { temp: 15 },
  },
  {
    dt: 1714305600 + 21 * 3600,
    dt_txt: "2026-01-06 21:00:00",
    main: { temp: 11 },
  },

  // 2 — 2026-01-07
  { dt: 1714392000, dt_txt: "2026-01-07 00:00:00", main: { temp: 10 } },
  {
    dt: 1714392000 + 3 * 3600,
    dt_txt: "2026-01-07 03:00:00",
    main: { temp: 9 },
  },
  {
    dt: 1714392000 + 6 * 3600,
    dt_txt: "2026-01-07 06:00:00",
    main: { temp: 11 },
  },
  {
    dt: 1714392000 + 9 * 3600,
    dt_txt: "2026-01-07 09:00:00",
    main: { temp: 14 },
  },
  {
    dt: 1714392000 + 12 * 3600,
    dt_txt: "2026-01-07 12:00:00",
    main: { temp: 17 },
  },
  {
    dt: 1714392000 + 15 * 3600,
    dt_txt: "2026-01-07 15:00:00",
    main: { temp: 19 },
  },
  {
    dt: 1714392000 + 18 * 3600,
    dt_txt: "2026-01-07 18:00:00",
    main: { temp: 16 },
  },
  {
    dt: 1714392000 + 21 * 3600,
    dt_txt: "2026-01-07 21:00:00",
    main: { temp: 12 },
  },

  // 3 — 2026-01-08
  { dt: 1714478400, dt_txt: "2026-01-08 00:00:00", main: { temp: 11 } },
  {
    dt: 1714478400 + 3 * 3600,
    dt_txt: "2026-01-08 03:00:00",
    main: { temp: 10 },
  },
  {
    dt: 1714478400 + 6 * 3600,
    dt_txt: "2026-01-08 06:00:00",
    main: { temp: 12 },
  },
  {
    dt: 1714478400 + 9 * 3600,
    dt_txt: "2026-01-08 09:00:00",
    main: { temp: 15 },
  },
  {
    dt: 1714478400 + 12 * 3600,
    dt_txt: "2026-01-08 12:00:00",
    main: { temp: 18 },
  },
  {
    dt: 1714478400 + 15 * 3600,
    dt_txt: "2026-01-08 15:00:00",
    main: { temp: 20 },
  },
  {
    dt: 1714478400 + 18 * 3600,
    dt_txt: "2026-01-08 18:00:00",
    main: { temp: 17 },
  },
  {
    dt: 1714478400 + 21 * 3600,
    dt_txt: "2026-01-08 21:00:00",
    main: { temp: 13 },
  },

  // 4 — 2026-01-09
  { dt: 1714564800, dt_txt: "2026-01-09 00:00:00", main: { temp: 9 } },
  {
    dt: 1714564800 + 3 * 3600,
    dt_txt: "2026-01-09 03:00:00",
    main: { temp: 8 },
  },
  {
    dt: 1714564800 + 6 * 3600,
    dt_txt: "2026-01-09 06:00:00",
    main: { temp: 10 },
  },
  {
    dt: 1714564800 + 9 * 3600,
    dt_txt: "2026-01-09 09:00:00",
    main: { temp: 13 },
  },
  {
    dt: 1714564800 + 12 * 3600,
    dt_txt: "2026-01-09 12:00:00",
    main: { temp: 16 },
  },
  {
    dt: 1714564800 + 15 * 3600,
    dt_txt: "2026-01-09 15:00:00",
    main: { temp: 18 },
  },
  {
    dt: 1714564800 + 18 * 3600,
    dt_txt: "2026-01-09 18:00:00",
    main: { temp: 14 },
  },
  {
    dt: 1714564800 + 21 * 3600,
    dt_txt: "2026-01-09 21:00:00",
    main: { temp: 11 },
  },

  // 5 — 2026-01-10
  { dt: 1714651200, dt_txt: "2026-01-10 00:00:00", main: { temp: 10 } },
  {
    dt: 1714651200 + 3 * 3600,
    dt_txt: "2026-01-10 03:00:00",
    main: { temp: 9 },
  },
  {
    dt: 1714651200 + 6 * 3600,
    dt_txt: "2026-01-10 06:00:00",
    main: { temp: 11 },
  },
  {
    dt: 1714651200 + 9 * 3600,
    dt_txt: "2026-01-10 09:00:00",
    main: { temp: 14 },
  },
  {
    dt: 1714651200 + 12 * 3600,
    dt_txt: "2026-01-10 12:00:00",
    main: { temp: 17 },
  },
  {
    dt: 1714651200 + 15 * 3600,
    dt_txt: "2026-01-10 15:00:00",
    main: { temp: 19 },
  },
  {
    dt: 1714651200 + 18 * 3600,
    dt_txt: "2026-01-10 18:00:00",
    main: { temp: 16 },
  },
  {
    dt: 1714651200 + 21 * 3600,
    dt_txt: "2026-01-10 21:00:00",
    main: { temp: 12 },
  },
];
