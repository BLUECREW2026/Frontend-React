
//import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Navbar() {
    return(
       <div>
        <nav className="navbar navbar-expand-md bg-white shadow-sm fixed-top">
            <div className="container-fluid">


                <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <a className="navbar-brand ms-2" href="#">
                    <img src="/assets/img/logo/bluecrew-logo-complete.svg" height="40"
                    />
                </a>


                <div className="d-none d-md-flex ms-auto">
                    <ul className="navbar-nav fw-bold align-items-center ">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Noticias
                            </a>
                        </li>
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
        <a className="navbar-brand ms-2" href="#">
          <img src="assets/img/logo/bluecrew-logo-complete-white.svg" height="40"/>
        </a>

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

      <div className="d-flex justify-content-center gap-3">
        <a href="#" className="text-primary fs-1 mb-3"><i className="bi bi-facebook"></i></a>
        <a href="#" className="text-primary fs-1"><i className="bi bi-instagram"></i></a>
        <a href="#" className="text-info fs-1"><i className="bi bi-twitter-x"></i></a>
      </div>
        </div>
         </div>
    );
}

 