import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { SectionHeader } from "./components/SectionHeader";
import { ForecastSidebar } from "./components/ForecastSidebar";
import { WeatherMain } from "./components/WeatherMain";
import { DEFAULT_CITY, mockWeather } from "../src/data/mockData";
import type { City } from "./types/weather";

/**
 * APP
 */
function App() {
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);
  const [selectedDay, setSelectedDay] = useState(1); // TODO

  const handleCityChange = (city: City) => {
    setCurrentCity(city);
  };

  const handleDaySelect = (id: number) => {
    setSelectedDay(id);
  };

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
                <WeatherMain weather={mockWeather[0]} />
              </section>
              <aside className="forecast-sidebar">
                <ForecastSidebar
                  forecasts={mockWeather}
                  selectedDay={selectedDay}
                  onDaySelect={handleDaySelect}
                />
              </aside>
              <section className="hourly-chart">Hourly Chart</section>
            </div>
          </div>
        </main>

        <div className="footer-trigger"></div>
        <footer className="footer">Footer content</footer>
      </div>
    </>
  );
}

export default App;
