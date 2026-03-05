import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegistro.scss";
import videoFondo from "../../assets/login/video-fondo.mp4";

export default function Login() {
  const [registrado, setRegistrado] = useState(false);

  // Estados para el LOGIN
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  // Estados para el REGISTRO
  const [nombreRegistro, setNombreRegistro] = useState("");
  const [emailRegistro, setEmailRegistro] = useState("");
  const [passwordRegistro, setPasswordRegistro] = useState("");

  const toggleForm = () => setRegistrado((prev) => !prev);

  // --- FUNCIÓN DE LOGIN (Se mantiene igual, solo usa los estados correctos) ---
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailLogin, password: passwordLogin }),
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        alert("¡Éxito! Bienvenido " + data.user);
      } else {
        alert("Error en login: " + data.message);
      }
    } catch (error) {
      console.error("Error completo:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  // --- NUEVA FUNCIÓN DE REGISTRO ---
  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombreRegistro,
          apellido: "Apellido temporal", // Obligatorio según tu backend
          email: emailRegistro,
          password_hash: passwordRegistro, // El backend espera este nombre exacto
          foto: "default.webp", // Obligatorio según tu backend
          crearEvento: false,
          activo: true,
          eventosCompletados: 0
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
        // Opcional: Cambiamos la vista al formulario de login automáticamente
        toggleForm(); 
      } else {
        alert("Error al registrar: " + (data.error || "Revisa los datos"));
      }
    } catch (error) {
      console.error("Error completo:", error);
      alert("No se pudo conectar con el servidor para el registro");
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
        <div className={`login container ${registrado ? "active" : ""}`} id="container">
          <div className="panel panel-izquierdo">
            <h2>{registrado ? "Bienvenido" : "Crea tu cuenta"}</h2>
            <button onClick={toggleForm}>{registrado ? "Login" : "Registro"}</button>
          </div>

          <div className="panel panel-derecho">
            {/* FORMULARIO DE LOGIN */}
            <form className="form login" onSubmit={handleLogin}>
              <h2>LOGIN</h2>
              <input
                type="email"
                placeholder="Email"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
                required
              />
              <button type="submit">Iniciar Sesión</button>
            </form>

            {/* FORMULARIO DE REGISTRO */}
            <form className="form registro" onSubmit={handleRegistro}>
              <h2>REGISTRO</h2>
              <input 
                type="text" 
                placeholder="Nombre" 
                value={nombreRegistro}
                onChange={(e) => setNombreRegistro(e.target.value)}
                required 
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={emailRegistro}
                onChange={(e) => setEmailRegistro(e.target.value)}
                required 
              />
              <input 
                type="password" 
                placeholder="Contraseña" 
                value={passwordRegistro}
                onChange={(e) => setPasswordRegistro(e.target.value)}
                required 
              />
              <button type="submit">Registro</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// este es el que funciona
