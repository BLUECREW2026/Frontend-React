export default function FormularioDatosUsuario() {
    return (
        <div class="row justify-content-center mb-5">
            <div class="col-lg-8 col-md-10">
                <div class="card contact-card bg-light p-5 border-0">
                    <div class="card-body">
                        <h2 class="text-secondary fw-bolder mb-4 text-center">Datos de Usuario</h2>
                        <form class="needs-validation" novalidate>
                            <div class="row">


                                <div class="col-md-6 mb-3">
                                    <label for="nombre" class="form-label">Nombre:</label>
                                    <input type="text" class="form-control bg-white" id="nombre" placeholder="Nombre" required />
                                    <div class="invalid-feedback">Por favor, escribe tu nombre.</div>
                                </div>


                                <div class="col-md-6 mb-3">
                                    <label for="apellidos" class="form-label">Apellidos</label>
                                    <input type="text" class="form-control bg-white" id="apellidos" placeholder="Apellidos"
                                        required />
                                    <div class="invalid-feedback">Por favor, escribe tus apellidos.</div>
                                </div>
                            </div>


                            <div class="mb-3">
                                <label for="email" class="form-label">Dirección de correo electrónico</label>
                                <input type="email" class="form-control bg-white" id="email" placeholder="Correo"
                                    required />
                                <div class="invalid-feedback">Introduce un correo electrónico válido.</div>
                            </div>


                            <div class="mb-3">
                                <label for="direccion" class="form-label">Dirección (Opcional)</label>
                                <input type="text" class="form-control bg-white" id="direccion"
                                    placeholder="Dirección" />
                            </div>


                            <div class="mb-4">
                                <label for="mensaje" class="form-label">Biografía</label>
                                <textarea class="form-control bg-white" id="mensaje" rows="5" placeholder="Escribe tu consulta aquí..."
                                    required></textarea>
                                <div class="invalid-feedback">El mensaje no puede estar vacío.</div>
                            </div>


                            <button type="submit" class="btn btn-secondary col-12">Modificar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}