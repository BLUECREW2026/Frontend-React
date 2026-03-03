import Logo from "../../../assets/logo/bluecrew-logo-complete.svg"
import LogoBlanco from "../../../assets/logo/bluecrew-logo-complete-white.svg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DesplegableUsuario from "./DesplegableUsuario";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {

  const [isLogged, setIsLogged] = useState(false);
  const toggleLogin = () => setIsLogged(!isLogged);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid">

          <Link className="navbar-brand ms-2" to="/">
            <img src={Logo} height="40" alt="BlueCrew Logo" />
          </Link>

          <button
            className="navbar-toggler d-md-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menuLateral"
          >
            <i className="bi bi-list fs-2 text-secondary"></i>
            {/*<span className="navbar-toggler-icon"></span>*/}
          </button>

          <div className="d-none d-md-flex ms-auto">
            <ul className="navbar-nav fw-bold align-items-center gap-4">
              <li className="nav-item"><NavLink className="nav-link text-secondary" to="/">Inicio</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-secondary" to="/noticias">Noticias</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-secondary" to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-secondary" to="/eventos">Eventos</NavLink></li>

              <li className="nav-item ms-3">
                {/* {isLogged ? (
                  <DesplegableUsuario onLogout={toggleLogin} />
                ) : (
                  <button className="btn accent-button fw-bold px-4" onClick={toggleLogin}>
                    Únete
                  </button>
                )} */}

                <NavLink to="/login">
                <button className="btn accent-button fw-bold px-4"> 
                    Únete
                  </button>
                  </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Menú lateral para móviles (Offcanvas) */}
      <div className="offcanvas offcanvas-end bg-secondary d-md-none" id="menuLateral">
        <div className="offcanvas-header">
          <img src={LogoBlanco} height="40" alt="BlueCrew Logo Blanco" />
          <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <ul className="nav flex-column fs-5 gap-3">
            <li><NavLink className="nav-link text-white" to="/">Inicio</NavLink></li>
            <li><NavLink className="nav-link text-white" to="/noticias">Noticias</NavLink></li>
            <li><NavLink className="nav-link text-white" to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
            <li><NavLink className="nav-link text-white" to="/eventos">Eventos</NavLink></li>

            <li className="nav-item">
              {isLogged ? (
                <>
                  <a
                    className="nav-link text-white d-flex justify-content-between align-items-center"
                    href="#menuUsuario"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                  >
                    Usuario
                    <i className="bi bi-chevron-down small"></i>
                  </a>

                  <div className="collapse" id="menuUsuario">
                    <ul className="nav flex-column ms-3 fs-6 gap-2 mt-2">
                      <li><Link className="nav-link text-white-50" to="/perfil" data-bs-dismiss="offcanvas">Mi Cuenta</Link></li>
                      <li><Link className="nav-link text-white-50" to="mis-eventos" data-bs-dismiss="offcanvas">Mis Eventos</Link></li>
                      <li><Link className="nav-link text-danger" to="/" onClick={toggleLogin} data-bs-dismiss="offcanvas">Cerrar Sesión</Link></li>
                    </ul>
                  </div>
                </>
              ) : (
                <Link className="btn accent-button fw-bold w-100 mt-4" to="/login" onClick={toggleLogin}>Únete</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
