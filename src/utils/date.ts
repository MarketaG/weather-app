export function formatTime(timestamp: number, timezoneOffsetSeconds: number) {
  const date = new Date((timestamp + timezoneOffsetSeconds) * 1000);

  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
}

export const formatDate = (
  date: string | Date,
  options?: Intl.DateTimeFormatOptions
) => {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(navigator.language, options).format(d);
};
