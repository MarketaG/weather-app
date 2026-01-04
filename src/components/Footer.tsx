import "./Footer.scss";

export function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <span className="footer-item">
          &copy; {new Date().getFullYear()} – Designed and developed by
          <a
            href="https://marketagracova.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Markéta Grácová
          </a>
        </span>
      </div>
    </div>
  );
}
