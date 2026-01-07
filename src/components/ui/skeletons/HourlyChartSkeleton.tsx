import "./HourlyChartSkeleton.scss";

export const HourlyChartSkeleton = () => {
  return (
    <div className="hourly-chart__inner skeleton">
      <div className="hourly-chart-skeleton">
        {/* fake notice */}
        <div className="skeleton-notice" />

        {/* chart area */}
        <div className="skeleton-chart">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-point" />
          ))}
        </div>
      </div>
    </div>
  );
};
