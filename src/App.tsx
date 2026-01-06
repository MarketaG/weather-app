import { useState } from "react";
import { useForecast } from "./hooks/useForecast";
import { groupForecastByDay } from "./utils/forecast";
import {
  getDominantWeather,
  getDailyAverageTemp,
  getAverageHumidity,
  getAverageWind,
} from "./utils/weather";

import { Navigation } from "./components/Navigation";
import { SectionHeader } from "./components/SectionHeader";
import { WeatherMain } from "./components/WeatherMain";
import { ForecastSidebar } from "./components/ForecastSidebar";
import { HourlyChart } from "./components/HourlyChart";
import { Footer } from "./components/Footer";

import { DEFAULT_CITY } from "../src/data/mockData";
import type { City, DailyForecast } from "./types/weather";

/**
 * APP
 */
function App() {
  const storedCity = localStorage.getItem("lastCity");
  const storedRecent = localStorage.getItem("recentCities");

  const [currentCity, setCurrentCity] = useState<City>(
    storedCity ? JSON.parse(storedCity) : DEFAULT_CITY
  );
  const [recentCities, setRecentCities] = useState<City[]>(
    storedRecent ? JSON.parse(storedRecent) : []
  );
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const { forecast, loading: isForecastLoading } = useForecast(
    currentCity.name
  );

  const groupedByDay = forecast ? groupForecastByDay(forecast.list) : {};

  const availableDays = Object.keys(groupedByDay).sort().slice(0, 5);

  const forecastDays: DailyForecast[] = availableDays.map((date) => {
    const items = groupedByDay[date];

    return {
      date,
      avgTemp: getDailyAverageTemp(items),
      humidity: getAverageHumidity(items),
      wind: getAverageWind(items),
      ...getDominantWeather(items),
    };
  });

  const activeDay =
    selectedDay && availableDays.includes(selectedDay)
      ? selectedDay
      : availableDays[0];

  const activeSidebarDay =
    forecastDays.find((d) => d.date === activeDay) ?? null;

  const dailySummary =
    activeSidebarDay && forecast?.city
      ? {
          ...activeSidebarDay,
          sunrise: forecast.city.sunrise,
          sunset: forecast.city.sunset,
          timezone: forecast.city.timezone,
        }
      : null;

  const hourlyDayData = activeDay ? groupedByDay[activeDay] ?? [] : [];

  // handlers
  const handleCityChange = (city: City) => {
    setCurrentCity(city);
    setSelectedDay(null);
    localStorage.setItem("lastCity", JSON.stringify(city));

    // Update of the last two selected cities
    setRecentCities((prev) => {
      const newList = [city, ...prev.filter((c) => c.id !== city.id)].slice(
        0,
        2
      );
      localStorage.setItem("recentCities", JSON.stringify(newList));
      return newList;
    });
  };

  const handleDaySelect = (date: string) => {
    setSelectedDay(date);
  };

  return (
    <div className="app">
      <header className="header">
        <Navigation />
      </header>

      <main className="main">
        <section className="section-header">
          <SectionHeader
            currentCity={currentCity}
            selectedDay={activeDay ?? null}
            onCityChange={handleCityChange}
            recentCities={recentCities}
          />
        </section>

        <div className="content-container">
          <div className="main-grid">
            <section className="weather-main">
              <WeatherMain
                day={dailySummary}
                city={forecast?.city}
                loading={isForecastLoading}
              />
            </section>

            <aside className="forecast-sidebar">
              <ForecastSidebar
                days={forecastDays}
                selectedDay={activeDay ?? null}
                onDaySelect={handleDaySelect}
              />
            </aside>

            <section className="hourly-chart">
              {hourlyDayData.length > 0 && (
                <HourlyChart dayData={hourlyDayData} />
              )}
            </section>
          </div>
        </div>
      </main>

      <div className="footer-trigger" />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
