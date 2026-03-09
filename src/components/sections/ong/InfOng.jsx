import "./Ong.scss";

export default function InfOng() {
  const importarTodo = (r) => r.keys().map(r);
  const logos = importarTodo(
    require.context("../../../assets/ong", false, /\.(png|jpe?g|svg)$/),
  );

  return (
    <div>
      <section className="container py-5 my-4 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="fw-bold mb-4 text-secondary">
              Únete a blue Crew
            </h2>

            <p className="lead text-secondary lh-base mb-0">
              ¿Eres una ONG medioambiental, una fundación o una entidad
              solidaria? Alíate con BlueCrew. Sabemos que el trabajo de campo
              requiere muchísimo esfuerzo y que encontrar manos dispuestas a
              ayudar es a menudo uno de los mayores retos. Por eso, queremos ser
              el altavoz de tu causa y conectarte directamente con una comunidad
              de voluntarios apasionados, comprometidos y listos para pasar a la
              acción. Al sumar tu organización a nuestra plataforma, no solo
              ganarás visibilidad, sino que podrás gestionar tus propias
              iniciativas, lanzar convocatorias y multiplicar el alcance de cada
              evento que organices. Tú pones la misión y la experiencia;
              nosotros te ayudamos a reunir a la mejor tripulación. Da el paso,
              únete a nuestra red y construyamos juntos un futuro mucho más
              azul.
            </p>
          </div>
        </div>
      </section>
      <div className="colaboradores-section bg-dark py-5 position-relative">
        <div className="container-fluid text-center overflow-hidden">
          <h3 className="text-white mb-5 fw-normal">COLABORAMOS CON:</h3>

          <div className="slider-logos">
            <div className="slide-track">
              {logos.map((logo, index) => (
                <div className="slide" key={`logo-original-${index}`}>
                  <img src={logo} alt={`Colaborador ${index}`} />
                </div>
              ))}

              {logos.map((logo, index) => (
                <div className="slide" key={`logo-duplicado-${index}`}>
                  <img src={logo} alt={`Colaborador ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
