import { LargeWeatherIcon } from "./ui/LargeWeatherIcon";
import {
  WindyIcon,
  HumidityIcon,
  SunsetIcon,
  SunriseIcon,
} from "../assets/icons";
import "./WeatherMain.scss";
import type { Weather } from "../types/weather";

type WeatherMainProps = {
  weather: Weather | null;
  loading: boolean;
};

/**
 * WEATHER MAIN
 * Main section displaying current weather information and related stats.
 */
export const WeatherMain = ({ weather, loading }: WeatherMainProps) => {
  function formatTime(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (loading) {
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

            <LargeWeatherIcon
              condition={weather.weather[0].main}
              iconCode={weather.weather[0].icon}
            />
          </div>

          <div className="weather-stats">
            <div className="stat-item">
              <WindyIcon className="stat-icon" />
              <span className="stat-label">Wind</span>
              <span className="stat-value">{weather.wind.speed} m/s</span>
            </div>

            <div className="stat-item">
              <HumidityIcon className="stat-icon" />
              <span className="stat-label">Humidity</span>
              <span className="stat-value">{weather.main.humidity}%</span>
            </div>

            <div className="stat-item">
              <SunriseIcon className="stat-icon" />
              <span className="stat-label">Sunrise</span>
              <span className="stat-value">
                {formatTime(weather.sys.sunrise)}
              </span>
            </div>

            <div className="stat-item">
              <SunsetIcon className="stat-icon" />
              <span className="stat-label">Sunset</span>
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
