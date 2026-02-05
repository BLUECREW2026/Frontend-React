import Logo from "../assets/logo/bluecrew-logo-complete.svg";
import LogoDos from "../assets/logo/bluecrew-logo-complete-white.svg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top">
        <div className="container-fluid">

          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menuLateral"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand ms-2" href="#">
            <img src={Logo} height="40" />
          </a>

          <div className="d-none d-md-flex ms-auto">
            <ul className="navbar-nav fw-bold align-items-center">
              <li className="nav-item"><a className="nav-link text-secondary" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link text-secondary" href="#">Noticias</a></li>
              <li className="nav-item"><a className="nav-link text-secondary" href="#">Sobre Nosotros</a></li>
              <li className="nav-item"><a className="nav-link text-secondary" href="#">Eventos</a></li>
              <li className="nav-item ms-3">
                <a className="btn accent-button fw-bold px-4" href="#">Únete</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div className="offcanvas offcanvas-start bg-secondary d-md-none" id="menuLateral">
        <div className="offcanvas-header">
          <img src={LogoDos} height="40" />
          <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <ul className="nav flex-column fs-5 gap-3">
            <li><a className="nav-link text-white" href="#">Inicio</a></li>
            <li><a className="nav-link text-white" href="#">Noticias</a></li>
            <li><a className="nav-link text-white" href="#">Sobre Nosotros</a></li>
            <li><a className="nav-link text-white" href="#">Eventos</a></li>
          </ul>

          <a className="btn accent-button fw-bold w-100 mt-4" href="#">Únete</a>
        </div>
      </div>
    </>
  );
}
