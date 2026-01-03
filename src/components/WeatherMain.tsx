import { WeatherIcon } from "./ui/WeatherIcon";
import {
  WindyIcon,
  HumidityIcon,
  SunsetIcon,
  SunriseIcon,
} from "../assets/icons";
import "./WeatherMain.scss";
import type { Weather } from "../types/weather";

type WeatherMainProps = {
  weather: Weather;
};

/**
 * WEATHER MAIN
 * Main section displaying current weather information and related stats.
 */
export const WeatherMain = ({ weather }: WeatherMainProps) => {
  function formatTime(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="weather-main-card">
      <div className="weather-content">
        <div className="weather-details">
          <div className="temperature-section">
            <div className="temperature-left">
              <div className="temperature-display">
                <span className="temperature">
                  {Math.round(weather.main.temp - 273.15)}
                </span>
                <span className="degree-symbol">°C</span>
              </div>

              <p className="weather-description">
                {weather.weather[0].description}
              </p>
            </div>

            <div>
              <WeatherIcon
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
