import somos from "../../assets/img/sobreNosotros/nosotros.jpg";

export default function QuienesSomos() {
  return (
    <section className="container my-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <img
            src={somos}
            alt="Equipo BlueCrew"
            className="img-fluid rounded-4 shadow w-100"
            style={{ objectFit: "cover", maxHeight: "420px" }}
          />
        </div>

        
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">¿Quiénes Somos?</h2>

          <p className="text-muted fs-5">
            BlueCrew es una iniciativa comprometida con la protección de los
            océanos, mares y ríos, creada para conectar a personas que desean
            ayudar con organizaciones medioambientales que trabajan por la
            preservación de los ecosistemas acuáticos.
          </p>

          <p className="text-muted fs-5">
            Inspirada en el Objetivo de Desarrollo Sostenible 14 (Vida
            Submarina), nuestra plataforma facilita la participación ciudadana
            en acciones como limpiezas de playas, rescate de fauna marina y
            actividades de concienciación ambiental.
          </p>

          <p className="text-muted fs-5">
            Más que una herramienta digital, BlueCrew busca construir una
            comunidad activa y comprometida con el cuidado de nuestras aguas y
            la generación de un impacto positivo en el planeta.
          </p>
        </div>

      </div>

      <div className="row align-items-center g-5">
        

        
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">¿Quiénes Somos?</h2>

          <p className="text-muted fs-5">
            BlueCrew es una iniciativa comprometida con la protección de los
            océanos, mares y ríos, creada para conectar a personas que desean
            ayudar con organizaciones medioambientales que trabajan por la
            preservación de los ecosistemas acuáticos.
          </p>

          <p className="text-muted fs-5">
            Inspirada en el Objetivo de Desarrollo Sostenible 14 (Vida
            Submarina), nuestra plataforma facilita la participación ciudadana
            en acciones como limpiezas de playas, rescate de fauna marina y
            actividades de concienciación ambiental.
          </p>

          <p className="text-muted fs-5">
            Más que una herramienta digital, BlueCrew busca construir una
            comunidad activa y comprometida con el cuidado de nuestras aguas y
            la generación de un impacto positivo en el planeta.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src={somos}
            alt="Equipo BlueCrew"
            className="img-fluid rounded-4 shadow w-100"
            style={{ objectFit: "cover", maxHeight: "420px" }}
          />
        </div>

      </div>
    </section>
  );
}