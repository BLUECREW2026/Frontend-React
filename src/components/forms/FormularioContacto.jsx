export default function FormularioContacto() {
    return (
        <form className="needs-validation" noValidate>
            <div className="row">
                <div className="col-md-6 mb-3">
                    {/* Corregimos for a htmlFor */}
                    <label htmlFor="nombre" className="form-label fw-semibold">Nombre</label>
                    <input type="text" className="form-control bg-light" id="nombre" placeholder="Tu nombre" required />
                    <div className="invalid-feedback">Por favor, escribe tu nombre.</div>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="apellidos" className="form-label fw-semibold">Apellidos</label>
                    <input type="text" className="form-control bg-light" id="apellidos" placeholder="Tus apellidos" required />
                    <div className="invalid-feedback">Por favor, escribe tus apellidos.</div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Dirección de correo electrónico</label>
                <input type="email" className="form-control bg-light" id="email" placeholder="nombre@ejemplo.com" required />
                <div className="invalid-feedback">Introduce un correo electrónico válido.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="direccion" className="form-label fw-semibold">Dirección (Opcional)</label>
                <input type="text" className="form-control bg-light" id="direccion" placeholder="Calle, Ciudad, Código Postal" />
            </div>

            <div className="mb-4">
                <label htmlFor="mensaje" className="form-label fw-semibold">Tu consulta</label>
                <textarea className="form-control bg-light" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
                <div className="invalid-feedback">El mensaje no puede estar vacío.</div>
            </div>

            {/* Cambiado col-12 por w-100 que es la utilidad correcta de Bootstrap para anchos al 100% */}
            <button type="submit" className="btn btn-secondary w-100 fw-bold py-2">
                Enviar mensaje
            </button>
        </form>
    );
} 