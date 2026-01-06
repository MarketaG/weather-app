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

export type HourlyTemperaturePoint = {
  dt: number; // UNIX timestamp (UTC)
  dt_txt: string; // "YYYY-MM-DD HH:MM:SS"
  main: {
    temp: number; // °C
  };
};

export type ForecastItem = {
  dt: number;
  dt_txt: string;

  main: {
    temp: number;
    humidity: number;
  };

  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;

  wind: {
    speed: number;
  };
};

export type ForecastCity = {
  name: string;
  sunrise: number;
  sunset: number;

  coord: {
    lat: number;
    lon: number;
  };
  timezone: number;
};

export type ForecastResponse = {
  city: ForecastCity;
  list: ForecastItem[];
};

export type DailyForecast = {
  date: string; // YYYY-MM-DD
  avgTemp: number;
  humidity: number;
  icon: string;
  description: string;
};
