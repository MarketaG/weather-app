import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { SectionHeader } from "./components/SectionHeader";
import { WeatherMain } from "./components/WeatherMain";
import { DEFAULT_CITY, mockWeather } from "../src/data/mockData";
import type { City } from "./types/weather";

/**
 * APP
 */
function App() {
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);

  const handleCityChange = (city: City) => {
    setCurrentCity(city);
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
                <WeatherMain weather={mockWeather()} />
              </section>
              <aside className="forecast-sidebar">Forecast Sidebar</aside>
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
