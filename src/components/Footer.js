import Logo from "../assets/logo/bluecrew-logo-complete-white.svg";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white mt-auto">
            <div className="container">
                <div className="row gy-4 py-5">
                    {/* COLUMNA 1: Logo e Identidad */}
                    <div className="col-md-3 d-flex align-items-center mb-4 mb-md-0">
                        <a
                            href="/"
                            className="text-decoration-none d-flex align-items-center text-white gap-2"
                        >
                            <img src={Logo} alt="BlueCrew Logo" height="38" />
                        </a>
                    </div>

                    {/* COLUMNA 2: Navegación Principal */}
                    <div className="col-md-3 d-flex flex-column gap-3">
                        <a href="/" className="text-white text-decoration-none fw-semibold">
                            Inicio
                        </a>
                        <a
                            href="/noticias"
                            className="text-white text-decoration-none fw-semibold"
                        >
                            Noticias
                        </a>
                        <a
                            href="/sobre-nosotros"
                            className="text-white text-decoration-none fw-semibold"
                        >
                            Sobre Nosotros
                        </a>
                        <a
                            href="/eventos"
                            className="text-white text-decoration-none fw-semibold"
                        >
                            Eventos
                        </a>
                    </div>

                    {/* COLUMNA 3: Legales */}
                    <div className="col-md-3 d-flex flex-column gap-3">
                        <a
                            href="/privacidad"
                            className="text-white text-decoration-none fw-semibold"
                        >
                            Política de privacidad
                        </a>
                        <a
                            href="/cookies"
                            className="text-white text-decoration-none fw-semibold"
                        >
                            Política de cookies
                        </a>
                        <a
                            href="/aviso-legal"
                            className="text-white text-decoration-none fw-semibold"
                        >
                            Aviso legal
                        </a>
                        <a
                            href="/contacto"
                            className="text-white text-decoration-none fw-semibold"
                        >
                            Contacto
                        </a>
                    </div>

                    {/* COLUMNA 4: Contacto e Info */}
                    <div className="col-md-3 d-flex flex-column gap-2">
                        <h5 className="fw-bold mb-2">Contacto</h5>

                        <a
                            href="mailto:bluecrew@gmail.com"
                            className="text-white text-decoration-none"
                        >
                            bluecrew@gmail.com
                        </a>

                        <span className="mb-1">España</span>
                    </div>
                </div>
            </div>
            {/* BARRA DE COPYRIGHT (Fondo oscurecido) */}
            <div className="copyright text-center p-3">
                <span className="small">
                    &copy; {new Date().getFullYear()} BlueCrew. Todos los derechos
                    reservados.
                </span>
            </div>
        </footer>
    );
}
