import "./WeatherIcon.scss";

type WeatherIconProps = {
  condition: string;
  iconCode?: string;
  width?: number;
  height?: number;
};

export function WeatherIcon({ condition, iconCode }: WeatherIconProps) {
  const safeIcon = iconCode?.slice(0, 2) + "d";

  return (
    <div className="weather-icon" role="img" aria-label={condition}>
      {iconCode && (
        <img
          src={`https://openweathermap.org/img/wn/${safeIcon}@2x.png`}
          alt={condition}
        />
      )}
    </div>
  );
}
