import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegistro.scss";
import videoFondo from "../../assets/login/video-fondo.mp4";

export default function Login() {
  const [registrado, setRegistrado] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => setRegistrado((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error completo:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="login-page-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-fondo"
        src={videoFondo}
      />

      <div className="login principal">
        <div
          className={`login container ${registrado ? "active" : ""}`}
          id="container"
        >
          <div className="panel panel-izquierdo">
            <h2>{registrado ? "Bienvenido" : "Crea tu cuenta"}</h2>
            <button onClick={toggleForm}>
              {registrado ? "Login" : "Registro"}
            </button>
          </div>

          <div className="panel panel-derecho">
            <form className="form login" onSubmit={handleLogin}>
              <h2>LOGIN</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
    </div>
  );
}

// este es el que funciona
