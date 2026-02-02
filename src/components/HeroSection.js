export default function HeroSection () {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-3 fw-bold mb-3 hero-title">
              Protege el mar. Únete a BlueCrew
            </h1>

            <h2 className="fs-4 mb-4 fw-bold text-light">
              Encuentra y organiza voluntariados marinos en tu zona.<br />
              Juntos por el <span className="ods">ODS 14.</span>
            </h2>

            {/* Este botón podría ser un Link de React Router más adelante */}
            <button className="accent-button btn btn-primary btn-lg px-5 py-2 fw-semibold border-0">
              Únete a Nosotros
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};