type WeatherIconProps = {
  condition: string;
  iconCode?: string;
  width?: number;
  height?: number;
};

export function WeatherIcon({
  condition,
  iconCode,
  width = 240,
  height = 240,
}: WeatherIconProps) {
  return (
    <span role="img" aria-label={condition}>
      {iconCode && (
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
          alt={condition}
          width={width}
          height={height}
        />
      )}
    </span>
  );
}
