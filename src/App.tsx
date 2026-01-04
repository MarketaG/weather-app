import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { SectionHeader } from "./components/SectionHeader";
import { WeatherMain } from "./components/WeatherMain";
import { ForecastSidebar } from "./components/ForecastSidebar";
import { HourlyChart } from "./components/HourlyChart";
import { Footer } from "./components/Footer";
import { DEFAULT_CITY, mockWeather, hourlyByDay } from "../src/data/mockData";
import type { City } from "./types/weather";

/**
 * APP
 */
function App() {
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);
  const [selectedDay, setSelectedDay] = useState(mockWeather[0].dt); // TODO

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
              <section className="hourly-chart">
                <HourlyChart data={hourlyByDay} />
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
