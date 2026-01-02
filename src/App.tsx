import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <Navigation />
        </header>

        <main className="main">
          <section className="section-header">Section Header</section>

          <div className="main-grid">
            <section className="weather-main">Weather Main</section>
            <aside className="forecast-sidebar">Forecast Sidebar</aside>
            <section className="hourly-chart">Hourly Chart</section>
          </div>
        </main>

        <div className="footer-trigger"></div>
        <footer className="footer">Footer content</footer>
      </div>
    </>
  );
}

export default App;
