import "../assets/icons/bootstrap-icons.css";
export default function DesplegableUsuario() {
  return (
    <div className="dropdown" style={{ margin: "100px" }}>
      <button
        className="btn p-0 border-0 d-flex align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-person-circle fs-1 text-secondary"></i>
      </button>
      <ul className="dropdown-menu show shadow text-center">
        <li>
          <a className="dropdown-item text-secondary" href="#">
            Mi Cuenta
          </a>
        </li>
        <li>
          <a className="dropdown-item text-secondary" href="#">
            Mis Eventos
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item text-danger">Cerrar Sesión</button>
        </li>
      </ul>
    </div>
  );
}
