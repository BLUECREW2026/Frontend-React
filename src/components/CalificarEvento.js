import "../assets/icons/bootstrap-icons.css";

export default function CalificarEvento() {
  return (
    <div className="d-flex flex-column align-items-center bg-secondary p-4 gap-3 text-light">
      <h2 className="fw-bold">Título del Evento</h2>
        <img src="nombre-de-tu-imagen.jpg" alt="Descripción de la imagen" width="500" height="300"></img>      
      <h3 className="fw-bold">¿Cómo calificarías este evento?</h3>

      <div className="d-flex align-items-center gap-3">
        <div className="d-flex gap-2">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <button className="btn btn-sm btn-light text-secondary">Reset</button>
      </div>

      <div className="w-100" style={{ maxWidth: "500px" }}>
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
          Desscribe tu experiencia.
        </div>
      </div>
    </div>
  );
}
