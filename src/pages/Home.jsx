import { Link } from "react-router-dom";
import "./Home.css";
import hero_truck from "../assets/truck1.jpg";

function Home() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section ">
        {/* Background overlay */}
        <div className="hero-overlay "></div>

        <div className="container hero-content ">
          <div className="row ">
            <div className="col-lg-7 ">
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
                  <i className="bi bi-shield-fill-check"></i>
                  Reliable Service
                </div>

                <div className="trust-item">
                  <i className="bi bi-shield-fill-check"></i>
                  Professional Drivers
                </div>

                <div className="trust-item">
                  <i className="bi bi-shield-fill-check"></i>
                  Flexible Solutions
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-5 d-flex align-items-center">
              <div className="hero-badges ">
                <div className="hero-badge">
                  <div className="badge-icon">
                    <i className="bi bi-truck"></i>
                  </div>
                  <div>
                    <h6>Road Freight</h6>
                    <p>Reliable road transport</p>
                  </div>
                </div>

                <div className="hero-badge">
                  <div className="badge-icon">
                    <i className="bi bi-airplane"></i>
                  </div>
                  <div>
                    <h6>Air Freight</h6>
                    <p>Fast global delivery</p>
                  </div>
                </div>

                <div className="hero-badge">
                  <div className="badge-icon">
                    <i className="bi bi-ship"></i>
                  </div>
                  <div>
                    <h6>Sea Freight</h6>
                    <p>Global ocean transport</p>
                  </div>
                </div>

                <div className="hero-badge">
                  <div className="badge-icon">
                    <i className="bi bi-building"></i>
                  </div>
                  <div>
                    <h6>Contract Logistics</h6>
                    <p>Flexible logistics support</p>
                  </div>
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
