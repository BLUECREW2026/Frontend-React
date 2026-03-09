import { useState, useEffect } from "react";
import profilePhoto from "../../assets/img/profile/profile-placeholder.webp";
import mios from "../../assets/img/profile/cards/mios.jpg";
import FormularioDatosUsuario from "../forms/FormularioDatosUsuario";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [cargando, setCargando] = useState(true);

  const [userData, setUserData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    localidad: "",
    bio: "",
    eventosCompletados: 0,
  });

  useEffect(() => {
    const obtenerDatosDelUsuario = async () => {
      try {
        const userId = localStorage.getItem("usuarioId") || 1;

        const response = await fetch(
          `http://localhost:8080/api/usuarios/${userId}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (response.ok) {
          const datosReales = await response.json();

          setUserData({
            nombre: datosReales.nombre || "",
            apellidos: datosReales.apellido || "",
            email: datosReales.email || "",
            localidad: "sin ubicacion",
            bio: datosReales.biografia || "Sin biografia ",
            eventosCompletados: datosReales.eventosCompletados || 0,
          });
        } else {
          console.error("Error: El servidor respondió pero no con OK.");
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatosDelUsuario();
  }, []);

  if (cargando) {
    return (
      <div className="container p-5 mt-5 mb-5 text-center">
        <h4 className="text-secondary">Cargando tu perfil real...</h4>
      </div>
    );
  }

  return (
    <section className="container p-5 mt-5 mb-5">
      <div className="card shadow rounded-4 p-4 p-md-5 bg-white border-0">
        {modoEdicion ? (
          <div>
            <h4 className="mb-4 text-primary fw-bold">Editar Perfil</h4>
            <FormularioDatosUsuario
              datosActuales={userData}
              onCancelar={() => setModoEdicion(false)}
              onGuardar={(datosNuevos) => {
                setUserData(datosNuevos);
                setModoEdicion(false);
              }}
            />
          </div>
        ) : (
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <img
                src={profilePhoto}
                alt="Foto de perfil"
                className="rounded-circle border border-3 border-white shadow-sm"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>

            <div className="col-md-8">
              <div className="d-flex flex-column justify-content-center gap-1 ms-4">
                <div className="d-flex align-items-baseline">
                  <p className="text-secondary fw-bolder me-2">Nombre:</p>
                  <span>{userData.nombre}</span>
                </div>
                <div className="d-flex align-items-baseline">
                  <p className="text-secondary fw-bolder me-2">Apellidos:</p>
                  <span>{userData.apellidos}</span>
                </div>
                <div className="d-flex align-items-baseline">
                  <p className="text-secondary fw-bolder me-2">
                    Correo Electrónico:
                  </p>
                  <span>{userData.email}</span>
                </div>
                <div className="d-flex align-items-baseline">
                  <p className="text-secondary fw-bolder me-2">Localidad: </p>
                  <span>{userData.localidad}</span>
                </div>
              </div>
            </div>

            <div className="col-11 ms-4 mt-4">
              <div className="mb-4">
                <h5 className="text-uppercase mb-3 text-secondary fw-bold">
                  Biografía
                </h5>
                <p className="text-secondary lh-base">{userData.bio}</p>
              </div>
              <div>
                <button
                  onClick={() => setModoEdicion(true)}
                  className="btn btn-primary text-white fw-bold rounded-3 shadow-sm p-3"
                >
                  Modificar Datos Personales
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex flex-row justify-content-around mt-5 flex-wrap gap-4">
        <div
          className="card shadow-sm rounded-4 border-0 p-3 bg-white"
          style={{ width: "16rem" }}
        >
          <h3 className="card-title h6 fw-bold text-dark mb-3 mt-2">
            Mis Eventos
          </h3>
          <div className="ratio ratio-4x3 mb-3">
            <img
              className="rounded-4 object-fit-cover"
              src={mios}
              alt="mis eventos"
            />
          </div>
          <div className="mt-auto text-center">
            <Link 
              to="/mis-eventos" 
              className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2"
            >
              Ver eventos
            </Link>
          </div>
        </div>

        <div
          className="card shadow-sm rounded-4 border-0 p-3 bg-white"
          style={{ width: "16rem" }}
        >
          <h3 className="card-title h6 fw-bold text-dark mb-3 mt-2">
            Crear Evento
          </h3>
          <div className="ratio ratio-4x3 mb-3">
            <img
              className="rounded-4 object-fit-cover"
              src={mios}
              alt="crear evento"
            />
          </div>
          <div className="mt-auto text-center">
            {userData.eventosCompletados >= 5 ? (
            <Link 
              to="/eventos/crear" 
              className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2"
            >
              Crear Evento
            </Link>): (
              <Link 
              to="/eventos/crear" 
              className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2 disabled"
            >
              Crear Evento
            </Link>
            )}
          </div>
        </div>

        <div
          className="card shadow-sm rounded-4 border-0 p-3 bg-white"
          style={{ width: "16rem" }}
        >
          <h3 className="card-title h6 fw-bold text-dark mb-3 mt-2">
            Participaciones
          </h3>
          <div className="ratio ratio-4x3 mb-3">
            <img
              className="rounded-4 object-fit-cover"
              src={mios}
              alt="participaciones"
            />
          </div>
          <div className="mt-auto text-center">
            <Link 
              to="/participaciones" 
              className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2"
            >
              historico
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
