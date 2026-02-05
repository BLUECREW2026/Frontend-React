import "../assets/icons/bootstrap-icons.css";
import "./CalificarEvento.scss";
import cardImage from "../assets/img/cards/card-image-1.webp";
import { useState } from "react";

export default function CalificarEvento() {
  const [rating, setRating] = useState(0);

  return (
    <div className="calificar-container d-flex flex-column align-items-center custom-gradient p-4 gap-3 text-light">
      <h2 className="fw-bold">Limpieza de la Playa de San Juan</h2>
      
      <img 
        src={cardImage}
        className="evento-img img-fluid rounded shadow" 
        alt="Evento" 
      />
      
      <h3 className="fw-bold">¿Cómo calificarías este evento?</h3>

      <div className="d-flex align-items-center gap-3">
        <div className="star-rating d-flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <i
              key={num}
              className={`bi bi-star-fill star-icon ${num <= rating ? "active" : ""}`}
              onClick={() => setRating(num)}
            ></i>
          ))}
        </div>
        
        <button 
          className="btn btn-sm btn-light text-secondary fw-bold" 
          onClick={() => setRating(0)}
        >
          Reset
        </button>
      </div>

      <div className="form-wrapper w-100">
        <label htmlFor="descripcionEvento" className="form-label">
          Descripción del evento:
        </label>
        <textarea
          className="form-control"
          id="descripcionEvento"
          rows={5}
          placeholder="Describe tu experiencia aquí..."
          required
        ></textarea>
      </div>
    </div>
  );
}