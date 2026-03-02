import { useState } from "react";
import "./LoginRegistro.scss";

export default function Login() {
  const [registrado, setRegistrado] = useState(false);

  const toggleForm = () => {
    setRegistrado((prev) => !prev);
  };

  return (

      <div className="login principal">
        <div
          className={`login container ${registrado ? "active" : ""}`}
          id="container"
        >
          <div className="panel panel-izquierdo">
            <h2 id="titulo">{registrado ? "Bienvenido" : "Crea tu cuenta"}</h2>
            <p id="texto-panel">
              {registrado
                ? "Ingresa a tu cuenta"
                : "Regístrate para ver más información de nuestros eventos"}
            </p>
            <button id="registro" onClick={toggleForm}>
              {registrado ? "Login" : "Registro"}
            </button>
          </div>

          <div className="panel panel-derecho">
            <form className="form login">
              <h2>LOGIN</h2>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Contraseña" required />
              <button type="submit">Iniciar Sesión</button>
            </form>

            <form className="form registro">
              <h2>REGISTRO</h2>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Contraseña" required />
              <button type="submit">Registro</button>
            </form>
          </div>
        </div>
      </div>
  );
}
