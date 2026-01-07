import "./ForecastSidebarSkeleton.scss";

export const ForecastSidebarSkeleton = () => {
  return (
    <section className="forecast-sidebar-card skeleton">
      <ul className="forecast-list">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="forecast-list-item">
            <div className="forecast-item skeleton-item">
              <div className="skeleton-icon" />

              <div className="forecast-info">
                <div className="skeleton-day" />
                <div className="skeleton-desc" />
              </div>

              <div className="skeleton-temp" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
