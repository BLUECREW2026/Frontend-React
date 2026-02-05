import { useState } from "react";
import "./LoginRegistro.scss";

export default function Login() {

  
  const [registrado,setRegistrado] = useState(false);
  return (
    <div className="login principal">
      <div className="login container" id="container">
        <div className="panel panel-izquierdo">
          <h2 id="titulo">Crea tu cuenta</h2>
          <p id="texto-panel">
            Registrate para ver mas informacion de nuestros eventos
          </p>
          <button id="registro" /*onClick={setRegistrado(prev => !prev )}*/>
            Registro
          </button>
        </div>
        <div className="panel panel-derecho">
          <form className="form login">
            <h2>LOGIN</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Iniciar Seccion</button>
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
