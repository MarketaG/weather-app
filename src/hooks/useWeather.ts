import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/weather";
import type { Weather } from "../types/weather";

export function useCurrentWeather(city: string) {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchCurrentWeather(city);
        if (isMounted) setWeather(data);
      } catch (err: unknown) {
        if (!isMounted) return;

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [city]);

  return { weather, loading, error };
}
