import { useEffect, useState } from "react";
import { LargeWeatherIcon } from "./ui/LargeWeatherIcon";
import {
  WindyIcon,
  HumidityIcon,
  SunsetIcon,
  SunriseIcon,
} from "../assets/icons";
import "./WeatherMain.scss";
import { fetchWeather } from "../api/weather";
import type { Weather } from "../types/weather";

type WeatherMainProps = {
  city: string;
};

/**
 * WEATHER MAIN
 * Main section displaying current weather information and related stats.
 */
export const WeatherMain = ({ city }: WeatherMainProps) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);

  function formatTime(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  useEffect(() => {
    if (!city) return;

    setLoading(true);

    fetchWeather(city)
      .then(setWeather)
      .catch((err) => {
        console.error("Failed to fetch weather", err);
      })
      .finally(() => setLoading(false));
  }, [city]);

  if (loading) {
    // TODO: replace with a more visually appealing loader or skeleton component
    return <div className="weather-main-card">Loading...</div>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-main-card">
      <div className="weather-content">
        <div className="weather-details">
          <div className="temperature-section">
            <div className="temperature-left">
              <div className="temperature-display">
                <div className="temperature">
                  {Math.round(weather.main.temp)}
                </div>
                <span className="degree-symbol">°C</span>
              </div>

              <p className="weather-description">
                {weather.weather[0].description}
              </p>
            </div>

            <div>
              <LargeWeatherIcon
                condition={weather.weather[0].main}
                iconCode={weather.weather[0].icon}
              />
            </div>
          </div>

          <div className="weather-stats">
            <div className="stat-item">
              <div className="stat-top">
                <WindyIcon className="stat-icon" />
                <span className="stat-label">Wind</span>
              </div>
              <span className="stat-value">{weather.wind.speed} m/s</span>
            </div>

            <div className="stat-item">
              <div className="stat-top">
                <HumidityIcon className="stat-icon" />
                <span className="stat-label">Humidity</span>
              </div>
              <span className="stat-value">{weather.main.humidity}%</span>
            </div>

            <div className="stat-item">
              <div className="stat-top">
                <SunriseIcon className="stat-icon" />
                <span className="stat-label">Sunrise</span>
              </div>
              <span className="stat-value">
                {formatTime(weather.sys.sunrise)}
              </span>
            </div>

            <div className="stat-item">
              <div className="stat-top">
                <SunsetIcon className="stat-icon" />
                <span className="stat-label">Sunset</span>
              </div>
              <span className="stat-value">
                {formatTime(weather.sys.sunset)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
