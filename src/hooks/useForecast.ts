import { useEffect, useState } from "react";
import { fetchForecast } from "../api/weather";
import type { ForecastResponse } from "../types/weather";

type UseForecastResult = {
  forecast: ForecastResponse | null;
  loading: boolean;
  error: string | null;
};

export function useForecast(city: string): UseForecastResult {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    let isMounted = true;

    const fetchData = async () => {
      try {
        if (isMounted) {
          setLoading(true);
          setError(null);
        }

        const data = await fetchForecast(city);

        if (isMounted) {
          setForecast(data);
        }
      } catch (err: unknown) {
        if (!isMounted) return;

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load forecast");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [city]);

  return { forecast, loading, error };
}
