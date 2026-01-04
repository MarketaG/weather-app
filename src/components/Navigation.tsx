import { GitHubIcon } from "../assets/icons/GitHubIcon";
import "./Navigation.scss";

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-content">
        {/* LEFT */}
        <div className="nav-left">
          <div className="logo-wrapper">
            <img
              src="/logo_nav.svg"
              alt="Weatherflow"
              width={144}
              height={48}
              className="logo-image"
              fetchPriority="high"
            />

            <div className="logo-rain">
              <span className="drop"></span>
              <span className="drop"></span>
              <span className="drop"></span>
            </div>
          </div>

          <span className="version">v{__APP_VERSION__}</span>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <a
            href="https://github.com/MarketaG/weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github"
            aria-label="GitHub repository"
          >
            <GitHubIcon className="icons-sm" />
            <span className="nav-github-text">Documentation</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
