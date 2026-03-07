import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegistro.scss";
import videoFondo from "../../assets/login/video-fondo.mp4";
import { Link } from "react-router-dom"; 
import { Home } from "lucide-react";
export default function Login() {
  const [registrado, setRegistrado] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [regNombre, setRegNombre] = useState("");
  const [regApellido, setRegApellido] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

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
  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: regNombre,
          apellido: regApellido,
          email: regEmail,
          password_hash: regPassword,
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");

        localStorage.setItem("isLogged", "true");
        localStorage.setItem("user", JSON.stringify(data.usuario || data.user)); // Ajustado por si acaso
        navigate("/");
      } else {
        alert("Error: " + (data.error || data.message || "Error al registrar"));
      }
    } catch (error) {
      console.error("Error completo:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
  
      
      <div className="login-page-wrapper">
      <Link to="/" className="boton-volver-inicio">
        <Home size={24} />
        <span>Inicio</span>
      </Link>
         
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

              <form className="form registro pt-4" onSubmit={handleRegistro}>
                <h2>REGISTRO</h2>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={regNombre}
                  onChange={(e) => setRegNombre(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={regApellido}
                  onChange={(e) => setRegApellido(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
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
