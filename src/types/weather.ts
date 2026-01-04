export type CityCoord = {
  lon: number;
  lat: number;
};

export type City = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: CityCoord;
};

export type Weather = {
  dt: number;
  weather: {
    id: number;
    main: string; // "Snow", "Rain", "Clear", ...
    description: string; // "light snow"
    icon: string;
  }[];
  main: {
    temp: number; // Kelvin
    feels_like: number;
    humidity: number; // %
  };
  wind: {
    speed: number; // m/s
  };
  sys: {
    sunrise: number; // UNIX timestamp (seconds)
    sunset: number; // UNIX timestamp (seconds)
  };
};

export type WeatherCondition =
  | "Clear"
  | "Clouds"
  | "Rain"
  | "Drizzle"
  | "Thunderstorm"
  | "Snow"
  | "Mist"
  | "Fog"
  | "Haze";

export type HourlyTemperaturePoint = {
  time: string;
  temp: number;
};
