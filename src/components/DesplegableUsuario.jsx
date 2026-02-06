import "../assets/icons/bootstrap-icons.css";
import "./DesplegableUsuario.scss";
import { Link } from "react-router-dom";

export default function DesplegableUsuario({ onLogout }) {
  return (
    <div className="dropdown d-flex align-items-center">
      <button
        className="btn p-0 border-0 d-flex align-items-center shadow-none dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-person-circle text-secondary user-icon-btn"></i>
      </button>

      <ul className="dropdown-menu dropdown-menu-end shadow border-0 bg-white user-dropdown-menu">
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary"
            to="/perfil"
          >
            <i className="bi bi-person"></i> Mi Cuenta
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary"
            to="/mis-eventos"
          >
            <i className="bi bi-calendar-event"></i> Mis Eventos
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider border-secondary" />
        </li>
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-danger"
            to="/" onClick={onLogout}
          >
            <i className="bi bi-calendar-event"></i> Cerrar
            Sesión
          </Link>
        </li>
      </ul>
    </div>
  );
}
