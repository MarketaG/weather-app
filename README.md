# Weather App

A simple application to display the weather.

### Live URLs

- **Production:** https://weatherflowapp.netlify.app/

---

## Tech Stack

- React
- TypeScript
- Vite
- Sass

---

## Features

- Display of current weather
- Light / Dark theme
- Responsive layout

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MarketaG/weather-app.git
cd weather-app
npm install
```

---

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

---

## Running the Project (Development)

```bash
npm run dev
```
