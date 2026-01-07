# Weather Flow App

The application provides weather forecast data based on user input or current location.
Data is retrieved from the OpenWeather API and processed for multiple presentation layers.

### Live URLs

- **Production:** https://weatherflowapp.netlify.app/

---

## Tech Stack

- React
- TypeScript
- Vite
- SCSS
- OpenWeather API

---

## Application Structure & Layout

## Navigation

The application is structured around a main layout with persistent navigation and content areas.
Navigation enables access to search and forecast views without page reloads.

---

## Search & Header Section

The header section functions as a multi-source search interface.

### Features

- **Text-based city search**
  - Fetches weather data by city name.
- **Geolocation search**
  - Retrieves weather data based on the user’s current location.
- **Search history**
  - Displays the last two searched locations.
- **Trending searches**
  - Provides predefined popular locations.

Search actions trigger data fetching and update all dependent components.

---

## MainWeather Section

The MainWeather section displays detailed weather information for the selected day.

### Displayed data

- Average temperature
- Wind speed
- Humidity
- Sunrise and sunset times
- Primary weather condition (icon and description)

The displayed day is controlled by user interaction with the forecast sidebar.

---

## Hourly Forecast Chart

The HourlyChart component visualizes hourly weather data for the selected day.

### Characteristics

- Displays temperature progression by hour
- Updates dynamically when a different day is selected
- Uses skeleton loaders during data loading

---

## ForecastSidebar

The ForecastSidebar provides a five-day forecast overview.

### Each item includes

- Day name
- Weather icon
- Weather description
- Average daily temperature

### Behavior

- Allows day selection
- Updates MainWeather and HourlyChart
- Highlights the active day

---

## Data Processing

- Forecast data is received in 3-hour intervals from OpenWeather
- For each day:
  - Temperature, wind speed, and humidity are averaged
  - The most frequent weather icon and description are selected
- Aggregated data is reused across components

---

## UX & State Management

- Skeleton loaders prevent layout shifts during loading
- Light and dark theme is managed via React Context API
- Shared state is used for selected day and search input

---

## Browser Support

The application was tested primarily in **Google Chrome (latest version)**.

Other modern browsers based on Chromium (e.g. Edge) or Firefox are expected to work correctly, but have not been explicitly tested.

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MarketaG/weather-app.git
cd weather-app
npm install
```

## Environment Variables

This project uses environment variables for configuration.

An example configuration is provided in the `.env.example` file, which defines the required variables:

- `VITE_OPENWEATHER_API_KEY` – your OpenWeather API key
- `VITE_OPENWEATHER_FORECAST_URL` – base URL for the OpenWeather forecast API

To obtain an API key, you need to register at **OpenWeather**:
https://openweathermap.org/

_Variables prefixed with `VITE_` are bundled into the client by Vite,
so the API key is public by design and must be restricted by domain.\_

_Production setup lives in a separate branch._

## Running the Project (Development)

```bash
npm run dev
```
