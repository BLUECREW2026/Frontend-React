

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoHero from "../../assets/hero/video-hero.mp4";

export default function HeroSection () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedStatus = localStorage.getItem("isLogged");
    setIsLoggedIn(loggedStatus === "true");
  }, []);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="container">
         <video
                autoPlay
                loop
                muted
                playsInline
                className="video-fondo"
                src={videoHero}
              />
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-3 fw-bold mb-3 hero-title">
              Protege el mar. Únete a BlueCrew
            </h1>

            <h2 className="fs-4 mb-4 fw-bold text-light">
              Encuentra y organiza voluntariados marinos en tu zona.<br />
              Juntos por el <span className="ods">ODS 14.</span>
            </h2>
            <button className="accent-button btn btn-primary btn-lg px-5 py-2 fw-semibold border-0">
              Únete a Nosotros
            </button>

            {isLoggedIn ? (
              <Link
                to="/eventos"
                className="accent-button btn btn-primary btn-lg px-5 py-2 fw-semibold border-0"
              >
                Encontrar Eventos
              </Link>
            ) : (
              <Link
                to="/login"
                className="accent-button btn btn-primary btn-lg px-5 py-2 fw-semibold border-0"
              >
                Únete a Nosotros
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};