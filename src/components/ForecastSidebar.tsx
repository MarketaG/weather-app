import { WeatherIcon } from "./ui/WeatherIcon";
import "./ForecastSidebar.scss";
import type { Weather } from "../types/weather";

type ForecastSidebarProps = {
  forecasts: Weather[];
  selectedDay: number;
  onDaySelect: (id: number) => void;
};

/**
 * FORECAST SIDEBAR
 * Sidebar component displaying a 5-day weather forecast list.
 */
export const ForecastSidebar = ({
  forecasts,
  selectedDay,
  onDaySelect,
}: ForecastSidebarProps) => {
  const formatDate = (date: number | Date = new Date()) => {
    const d = typeof date === "number" ? new Date(date * 1000) : date;

    return new Intl.DateTimeFormat(navigator.language, {
      weekday: "long",
    }).format(d);
  };

  return (
    <section className="forecast-sidebar-card">
      <ul className="forecast-list">
        {forecasts.map((forecast) => (
          <li key={forecast.dt} className="forecast-list-item">
            <button
              className={`forecast-item ${
                selectedDay === forecast.dt ? "active" : ""
              }`}
              onClick={() => onDaySelect(forecast.dt)}
              type="button"
            >
              <span className="forecast-icon">
                <WeatherIcon
                  condition={forecast.weather[0].main}
                  iconCode={forecast.weather[0].icon}
                  width={60}
                  height={60}
                />
              </span>

              <span className="forecast-info">
                <span className="forecast-day capitalize">
                  {formatDate(forecast.dt)}
                </span>
                <span className="forecast-description">
                  {forecast.weather[0].description}
                </span>
              </span>

              <span className="forecast-temp">
                {Math.round(forecast.main.temp - 273.15)}°C
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
