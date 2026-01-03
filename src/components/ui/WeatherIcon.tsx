import { CloudIcon } from "../../assets/icons";

type WeatherIconProps = {
  condition: string;
  iconCode?: string;
};

export function WeatherIcon({ condition, iconCode }: WeatherIconProps) {
  return (
    <span role="img" aria-label={condition}>
      {iconCode ? (
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
          alt={condition}
          width={240}
          height={240}
        />
      ) : (
        <CloudIcon className="weather-icon-inner" />
      )}
    </span>
  );
}
