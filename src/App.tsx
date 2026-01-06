import { useState } from "react";
import { useForecast } from "./hooks/useForecast";
import { groupForecastByDay } from "./utils/forecast";
import {
  getDominantWeather,
  getDailyAverageTemp,
  getAverageHumidity,
} from "./utils/weather";

import { Navigation } from "./components/Navigation";
import { SectionHeader } from "./components/SectionHeader";
import { WeatherMain } from "./components/WeatherMain";
// import { ForecastSidebar } from "./components/ForecastSidebar";
// import { HourlyChart } from "./components/HourlyChart";
import { Footer } from "./components/Footer";

import { DEFAULT_CITY } from "../src/data/mockData";
import type { City } from "./types/weather";

/**
 * APP
 */
function App() {
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const { forecast, loading: isForecastLoading } = useForecast(
    currentCity.name
  );

  const groupedByDay = forecast ? groupForecastByDay(forecast.list) : {};
  const availableDays = Object.keys(groupedByDay);

  const activeDay =
    selectedDay && groupedByDay[selectedDay] ? selectedDay : availableDays[0];

  const dayItems = activeDay ? groupedByDay[activeDay] : [];

  //
  const dailySummary =
    dayItems.length && forecast?.city
      ? {
          avgTemp: getDailyAverageTemp(dayItems),
          ...getDominantWeather(dayItems),
          humidity: getAverageHumidity(dayItems),

          sunrise: forecast.city.sunrise,
          sunset: forecast.city.sunset,
          timezone: forecast.city.timezone,
        }
      : null;

  const handleCityChange = (city: City) => {
    setCurrentCity(city);
    setSelectedDay(null);
  };

  // const handleDaySelect = (date: string) => {
  //   setSelectedDay(date);
  // };

  console.log("forecast", forecast?.list);

  return (
    <>
      <div className="app">
        <header className="header">
          <Navigation />
        </header>

        <main className="main">
          <section className="section-header">
            <SectionHeader
              currentCity={currentCity}
              onCityChange={handleCityChange}
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
                {/* <ForecastSidebar
                  forecasts={mockWeather}
                  selectedDay={selectedDay}
                  onDaySelect={handleDaySelect}
                /> */}
              </aside>
              <section className="hourly-chart">
                {/* <HourlyChart dayData={dayData} /> */}
              </section>
            </div>
          </div>
        </main>

        <div className="footer-trigger"></div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
