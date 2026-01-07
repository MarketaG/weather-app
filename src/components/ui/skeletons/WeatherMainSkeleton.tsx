import "./WeatherMainSkeleton.scss";

export const WeatherMainSkeleton = () => {
  return (
    <div className="weather-main-card skeleton">
      <div className="weather-content">
        <div className="weather-details">
          <div className="temperature-section">
            <div className="temperature-left">
              <div className="temperature-display">
                <div className="skeleton-box skeleton-temp" />
                <div className="skeleton-box skeleton-degree" />
              </div>

              <div className="skeleton-box skeleton-text" />
            </div>

            <div className="skeleton-icon" />
          </div>

          <div className="weather-stats">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="stat-item" key={i}>
                <div className="skeleton-icon-sm" />
                <div className="skeleton-box skeleton-label" />
                <div className="skeleton-box skeleton-value" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
