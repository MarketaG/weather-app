import { useEffect, useState } from "react";
import type { City } from "../types/weather";

let cachedCities: City[] | null = null;

export function useCitySearch(query: string) {
  const [results, setResults] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }

    let cancelled = false;

    async function loadAndFilter() {
      setLoading(true);

      if (!cachedCities) {
        const module = await import("../data/cities.json");
        cachedCities = module.default as City[];
      }

      const filtered = cachedCities
        .filter(
          (city) =>
            city.name.toLowerCase().includes(q) ||
            city.country.toLowerCase().includes(q)
        )
        .slice(0, 15);

      if (!cancelled) {
        setResults(filtered);
        setLoading(false);
      }
    }

    loadAndFilter();

    return () => {
      cancelled = true;
    };
  }, [query]);

  return { results, loading };
}
