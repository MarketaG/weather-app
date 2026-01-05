import "./WeatherIcon.scss";

type WeatherIconProps = {
  condition: string;
  iconCode?: string;
  width?: number;
  height?: number;
};

export function WeatherIcon({ condition, iconCode }: WeatherIconProps) {
  return (
    <div className="weather-icon" role="img" aria-label={condition}>
      {iconCode && (
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt={condition}
        />
      )}
    </div>
  );
}
