import "./Navigation.scss";

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="logo-wrapper">
          <img
            src="/logo_nav.svg"
            alt="Weatherflow"
            width="144"
            height="48"
            className="logo-image"
          />

          <div className="logo-rain">
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
