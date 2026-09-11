import { Link } from "react-router-dom";
import "./Home.css";
import hero_truck from "../assets/truck1.jpg";

function Home() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section border">
        {/* Background overlay */}
        <div className="hero-overlay border"></div>

        <div className="container hero-content border">
          <div className="row border">
            <div className="col-lg-7">
              <div className="hero-badges">
                <div className="hero-badge">
                  <i className="bi bi-truck"></i>
                  Road Freight
                </div>

                <div className="hero-badge">
                  <i className="bi bi-airplane"></i>
                  Air Freight
                </div>

                <div className="hero-badge">
                  <i className="bi bi-ship"></i>
                  Sea Freight
                </div>

                <div className="hero-badge">
                  <i className="bi bi-building"></i>
                  Contract Logistics
                </div>
              </div>
              <h1 className="hero-title">
                Reliable Container Transport.
                <span> Built Around Your Business!</span>
              </h1>

              <p className="hero-description">
                VJ Transit provides dependable container transport and freight
                solutions designed to keep your business moving.
              </p>

              <div className="hero-buttons">
                <Link to="/quote" className="hero-btn-primary">
                  Get a Quote
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/services" className="hero-btn-secondary">
                  Explore Services
                </Link>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <i className="bi bi-check-circle-fill"></i>
                  Reliable Service
                </div>

                <div className="trust-item">
                  <i className="bi bi-check-circle-fill"></i>
                  Professional Drivers
                </div>

                <div className="trust-item">
                  <i className="bi bi-check-circle-fill"></i>
                  Flexible Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
