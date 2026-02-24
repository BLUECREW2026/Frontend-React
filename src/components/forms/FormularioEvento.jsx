export default function Formulario_Evento() {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-lg-8 col-md-10">
        <div className="card contact-card bg-light p-5 border-0 shadow">
          <div className="card-body">
            <h2 className="text-secondary fw-bolder mb-4 text-center">
              Crear Evento
            </h2>
            <form className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="tituloEvento" className="form-label">
                  Título del evento:
                </label>
                <input
                  type="text"
                  className="form-control bg-white"
                  id="tituloEvento"
                  placeholder="Nombre del evento"
                  required
                />
                <div className="invalid-feedback">
                  Escribe el título del evento.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="imagenEvento" className="form-label">
                  Imagen:
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="imagenEvento"
                  name="imagenEvento"
                  accept="image/*"
                  required
                />
                <div className="invalid-feedback">
                  Selecciona una imagen para el evento.
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="descripcionEvento" className="form-label">
                  Descripción del evento:
                </label>
                <textarea
                  className="form-control bg-white"
                  id="descripcionEvento"
                  rows={5}
                  placeholder="Describe el evento aquí..."
                  required
                ></textarea>
                <div className="invalid-feedback">
                  Escribe la descripción del evento.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="categoriaEvento" className="form-label">
                  Categoría:
                </label>
                <select
                  id="categoriaEvento"
                  className="form-select"
                  aria-label="Selecciona una categoría"
                  required
                >
                  <option value="" selected disabled>
                    Selecciona una categoría
                  </option>
                  <option value="playa">Playa</option>
                  <option value="rio">Río</option>
                  <option value="costa">Costa</option>
                </select>
                <div className="invalid-feedback">
                  Selecciona la categoría del evento.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="requisitosEvento" className="form-label">
                  Requisitos:
                </label>
                <input
                  type="text"
                  className="form-control bg-white"
                  id="requisitosEvento"
                  placeholder="Ejemplo: Traer guantes de protección, bolsa de basura o contenedor..."
                  required
                />
                <div className="invalid-feedback">
                  Indica los requisitos del evento.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="fechaEvento" className="form-label">
                  Fecha:
                </label>
                <input
                  type="date"
                  className="form-control bg-white"
                  id="fechaEvento"
                  required
                />
                <div className="invalid-feedback">
                  Selecciona la fecha del evento.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Ubicación:</label>
                <div style={{ width: "100%", height: "300px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d-3.703790284593128!3d40.4167759793631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288a1234567%3A0xabcdef123456789!2sMadrid%2C%20España!5e0!3m2!1ses!2sus!4v1700000000000!5m2!1ses!2sus"
                    style={{ width: "100%", height: "100%", border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación"
                  ></iframe>
                </div>
              </div>

              <button type="submit" className="btn btn-secondary col-12">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
