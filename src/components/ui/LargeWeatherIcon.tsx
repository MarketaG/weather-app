import "./LargeWeatherIcon.scss";

type LargeWeatherIconProps = {
  condition: string;
  iconCode?: string;
};

export function LargeWeatherIcon({
  condition,
  iconCode,
}: LargeWeatherIconProps) {
  const safeIcon = iconCode?.slice(0, 2) + "d";

  return (
    <div className="largeweather-icon" role="img" aria-label={condition}>
      {iconCode && (
        <img
          src={`https://openweathermap.org/img/wn/${safeIcon}@4x.png`}
          alt={condition}
          fetchPriority="high"
        />
      )}
    </div>
  );
}
