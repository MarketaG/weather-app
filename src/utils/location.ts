import type { City } from "../types/weather";

let cachedCities: City[] | null = null;

// function for lazy-loading JSON cities
export async function loadCities(): Promise<City[]> {
  if (!cachedCities) {
    const module = await import("../data/cities.json"); // dynamic import
    cachedCities = module.default as City[];
  }
  return cachedCities;
}

// finds the nearest city by latitude/longitude
export async function findNearestCity(
  lat: number,
  lon: number
): Promise<City | null> {
  const cities = await loadCities();

  if (!cities.length) return null;

  let nearest: City | null = null;
  let minDistance = Infinity;

  for (const city of cities) {
    const cityLat = city.coord.lat;
    const cityLon = city.coord.lon;

    const distance = haversineDistance(lat, lon, cityLat, cityLon);

    if (distance < minDistance) {
      minDistance = distance;
      nearest = city;
    }
  }

  return nearest;
}

function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const toRad = (x: number) => (x * Math.PI) / 180;

  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
