import type { ForecastItem } from "../types/weather";

export function groupForecastByDay(list: ForecastItem[]) {
  return list.reduce<Record<string, ForecastItem[]>>((acc, item) => {
    const date = item.dt_txt.slice(0, 10); // YYYY-MM-DD

    if (!acc[date]) acc[date] = [];
    acc[date].push(item);

    return acc;
  }, {});
}
