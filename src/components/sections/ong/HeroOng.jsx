import { Link } from "react-router-dom";
import videoHero from "../../../assets/img/ong/hero-ong.mp4";


export default function HeroOng() {
  return (
    <section className="hero-section hero-nosotros d-flex align-items-center justify-content-center text-center text-white">
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
            <h1 className="texto-animadodisplay-3 fw-bold mb-3 hero-title">
              ¿Eres una ONG? Súmate y comparte tu causa con el mundo
            </h1>
            <Link
                to="/contacto"
                className="accent-button btn btn-primary btn-lg px-5 py-2 fw-semibold border-0"
              >
                Contacta con Nosotros
              </Link>
          </div>
</div>
        
         
        
      </div>
    </section>
  );
}
