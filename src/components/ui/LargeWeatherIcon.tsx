import "./LargeWeatherIcon.scss";

type LargeWeatherIconProps = {
  condition: string;
  iconCode?: string;
};

export function LargeWeatherIcon({
  condition,
  iconCode,
}: LargeWeatherIconProps) {
  return (
    <div className="largeweather-icon" role="img" aria-label={condition}>
      {iconCode && (
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
          alt={condition}
        />
      )}
    </div>
  );
}
