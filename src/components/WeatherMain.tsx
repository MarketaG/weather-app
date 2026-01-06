import { LargeWeatherIcon } from "./ui/LargeWeatherIcon";
import {
  WindyIcon,
  HumidityIcon,
  SunriseIcon,
  SunsetIcon,
} from "../assets/icons";
import { formatTime } from "../utils/date";
import "./WeatherMain.scss";

type DailySummary = {
  avgTemp: number;
  icon: string;
  description: string;
  humidity: number;
  wind: number;
  sunrise?: number;
  sunset?: number;
  timezone?: number;
};

type WeatherMainProps = {
  day: DailySummary | null;
  city?: { name: string };
  loading: boolean;
};

/**
 * WEATHER MAIN
 * Main section displaying daily weather summary.
 */
export const WeatherMain = ({ day, loading }: WeatherMainProps) => {
  if (loading) {
    return <div className="weather-main-card">Loading...</div>; // TODO
  }

  if (!day) {
    return null;
  }

  return (
    <div className="weather-main-card">
      <div className="weather-content">
        <div className="weather-details">
          <div className="temperature-section">
            <div className="temperature-left">
              <div className="temperature-display">
                <div className="temperature">{Math.round(day.avgTemp)}</div>
                <span className="degree-symbol">°C</span>
              </div>

              <p className="weather-description">{day.description}</p>
            </div>

            <LargeWeatherIcon condition={day.description} iconCode={day.icon} />
          </div>

          <div className="weather-stats">
            <div className="stat-item">
              <WindyIcon className="stat-icon" />
              <span className="stat-label">Wind</span>
              <span className="stat-value">{day.wind} km/h</span>
            </div>

            <div className="stat-item">
              <HumidityIcon className="stat-icon" />
              <span className="stat-label">Humidity</span>
              <span className="stat-value">{day.humidity}%</span>
            </div>

            {day.sunrise && (
              <div className="stat-item">
                <SunriseIcon className="stat-icon" />
                <span className="stat-label">Sunrise</span>
                <span className="stat-value">
                  {day.sunrise && day.timezone !== undefined
                    ? formatTime(day.sunrise, day.timezone)
                    : "-"}
                </span>
              </div>
            )}

            {day.sunset && (
              <div className="stat-item">
                <SunsetIcon className="stat-icon" />
                <span className="stat-label">Sunset</span>
                <span className="stat-value">
                  {day.sunset && day.timezone !== undefined
                    ? formatTime(day.sunset, day.timezone)
                    : "-"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
