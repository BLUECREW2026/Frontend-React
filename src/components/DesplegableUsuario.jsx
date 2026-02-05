import "../assets/icons/bootstrap-icons.css";
import "./DesplegableUsuario.scss";

export default function DesplegableUsuario({ onLogout }) {
  return (
    <div className="dropdown d-flex align-items-center">
      <button
        className="btn p-0 border-0 d-flex align-items-center shadow-none"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-person-circle text-secondary user-icon-btn"></i>
      </button>

      <ul
        className="dropdown-menu dropdown-menu-end shadow border-0 bg-white user-dropdown-menu"
        aria-labelledby="userMenu"
      >
        <li>
          <a
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary"
            href="#"
          >
            <i className="bi bi-person"></i> Mi Cuenta
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary"
            href="#"
          >
            <i className="bi bi-calendar-event"></i> Mis Eventos
          </a>
        </li>
        <li>
          <hr className="dropdown-divider border-secondary" />
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-danger"
            onClick={onLogout}
          >
            <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
}
