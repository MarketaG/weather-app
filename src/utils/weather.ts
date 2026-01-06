import type { ForecastItem } from "../types/weather";

export function getDominantWeather(items: ForecastItem[]) {
  if (items.length === 0) {
    return {
      icon: "01d",
      description: "unknown",
    };
  }

  // 1- icon occurrences
  const iconCount = new Map<string, number>();

  for (const item of items) {
    const icon = item.weather[0].icon;
    iconCount.set(icon, (iconCount.get(icon) ?? 0) + 1);
  }

  // 2- we determine the maximum frequency
  const maxCount = Math.max(...iconCount.values());

  // 3- candidates (icons with the same frequency)
  const candidates = [...iconCount.entries()]
    .filter(([, count]) => count === maxCount)
    .map(([icon]) => icon);

  // 4- if there is only one > done
  if (candidates.length === 1) {
    const item = items.find((i) => i.weather[0].icon === candidates[0])!;
    return {
      icon: item.weather[0].icon,
      description: item.weather[0].description,
    };
  }

  // 5- tie-breaker: pick icon closest to 12:00
  const targetHour = 12;

  const bestItem = items
    .filter((i) => candidates.includes(i.weather[0].icon))
    .reduce((best, current) => {
      const bestHour = new Date(best.dt_txt).getHours();
      const currentHour = new Date(current.dt_txt).getHours();

      return Math.abs(currentHour - targetHour) <
        Math.abs(bestHour - targetHour)
        ? current
        : best;
    });

  return {
    icon: bestItem.weather[0].icon,
    description: bestItem.weather[0].description,
  };
}

export function getDailyAverageTemp(items: ForecastItem[]) {
  const sum = items.reduce((acc, i) => acc + i.main.temp, 0);
  return Math.round(sum / items.length);
}

export function getAverageHumidity(items: ForecastItem[]) {
  const sum = items.reduce((acc, i) => acc + i.main.humidity, 0);
  return Math.round(sum / items.length);
}

export function getAverageWind(items: ForecastItem[]) {
  const sum = items.reduce((acc, i) => acc + i.wind.speed, 0);
  return Math.round(sum / items.length);
}
