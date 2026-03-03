// import { useState } from "react";
// import "./LoginRegistro.scss";

// export default function Login() {
//   const [registrado, setRegistrado] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   const toggleForm = () => {
//     setRegistrado((prev) => !prev);


//     const handleLogin = async (e) => {
//     e.preventDefault(); // Evita que la página se recargue

//     try {
//       const response = await fetch("http://localhost:8080/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//         credentials: "include", // Obligatorio para sesiones
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("¡Éxito! Bienvenido " + data.user);
//         // Aquí rediriges: window.location.href = "/home";
//       } else {
//         alert("Error: " + data.message); // Aquí mostrará "Usuario o contraseña incorrectos"
//       }
//     } catch (error) {
//       alert("No se pudo conectar con el servidor");
//     }
//   };
    
//   };

  

//   return (

//   //     <div className="login principal">
//   //       <div
//   //         className={`login container ${registrado ? "active" : ""}`}
//   //         id="container"
//   //       >
//   //         <div className="panel panel-izquierdo">
//   //           <h2 id="titulo">{registrado ? "Bienvenido" : "Crea tu cuenta"}</h2>
//   //           <p id="texto-panel">
//   //             {registrado
//   //               ? "Ingresa a tu cuenta"
//   //               : "Regístrate para ver más información de nuestros eventos"}
//   //           </p>
//   //           <button id="registro" onClick={toggleForm}>
//   //             {registrado ? "Login" : "Registro"}
//   //           </button>
//   //         </div>

//   //         <div className="panel panel-derecho">
//   //           <form className="form login">
//   //             <h2>LOGIN</h2>
//   //             <input type="email" placeholder="Email" required />
//   //             <input type="password" placeholder="Contraseña" required />
//   //             <button type="submit">Iniciar Sesión</button>
//   //           </form>

//   //           <form className="form registro">
//   //             <h2>REGISTRO</h2>
//   //             <input type="text" placeholder="Nombre" required />
//   //             <input type="email" placeholder="Email" required />
//   //             <input type="password" placeholder="Contraseña" required />
//   //             <button type="submit">Registro</button>
//   //           </form>
//   //         </div>
//   //       </div>
//   //     </div>
//   // );



  
// }


import { useState } from "react";
import "./LoginRegistro.scss";

export default function Login() {
  const [registrado, setRegistrado] = useState(false);
  
  // 1. Estados para capturar los datos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => setRegistrado((prev) => !prev);

  // 2. Función para enviar los datos
  const handleLogin = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Obligatorio para sesiones
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Éxito! Bienvenido " + data.user);
        // Aquí rediriges: window.location.href = "/home";
      } else {
        alert("Error: " + data.message); // Aquí mostrará "Usuario o contraseña incorrectos"
      }
    } catch (error) {
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="login principal">
      <div className={`login container ${registrado ? "active" : ""}`} id="container">
        <div className="panel panel-izquierdo">
          <h2>{registrado ? "Bienvenido" : "Crea tu cuenta"}</h2>
          <button onClick={toggleForm}>{registrado ? "Login" : "Registro"}</button>
        </div>

        <div className="panel panel-derecho">
          {/* 3. Vincular onSubmit e Inputs */}
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

          {/* Formulario de registro (Hacer lo mismo con sus propios estados) */}
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