import { WeatherIcon } from "./ui/WeatherIcon";
import "./ForecastSidebar.scss";

type DailyForecastItem = {
  date: string; // YYYY-MM-DD
  avgTemp: number;
  icon: string;
  description: string;
};

type ForecastSidebarProps = {
  days: DailyForecastItem[];
  selectedDay: string | null;
  onDaySelect: (date: string) => void;
};

/**
 * FORECAST SIDEBAR
 * Sidebar component displaying a 5-day weather forecast list.
 */
export const ForecastSidebar = ({
  days,
  selectedDay,
  onDaySelect,
}: ForecastSidebarProps) => {
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(navigator.language, {
      weekday: "long",
    }).format(new Date(date));

  return (
    <section className="forecast-sidebar-card">
      <ul className="forecast-list">
        {days.map((day) => (
          <li key={day.date} className="forecast-list-item">
            <button
              type="button"
              className={`forecast-item ${
                selectedDay === day.date ? "active" : ""
              }`}
              onClick={() => onDaySelect(day.date)}
            >
              <WeatherIcon condition={day.description} iconCode={day.icon} />

              <span className="forecast-info">
                <span className="forecast-day capitalize">
                  {formatDate(day.date)}
                </span>
                <span className="forecast-description">{day.description}</span>
              </span>

              <span className="forecast-temp">{Math.round(day.avgTemp)}°C</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
