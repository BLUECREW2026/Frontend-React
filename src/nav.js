
// este es el nav //
//import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Navbar() {
    return(
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
    );
}

 