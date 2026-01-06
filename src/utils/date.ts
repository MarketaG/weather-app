export function formatTime(timestamp: number, timezoneOffsetSeconds: number) {
  const date = new Date((timestamp + timezoneOffsetSeconds) * 1000);

  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
}
