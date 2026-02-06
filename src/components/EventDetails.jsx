import eventImage from '../assets/img/cards/card-image-2.webp';

export default function EventDetails() {
    return (
        <section className="p-5 bg-light w-75 mx-auto shadow my-5 rounded-4">
            <div className="container">

                {/* 1. ENCABEZADO (Título) */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h1 className="fw-bold text-primary display-5 mb-3 text-uppercase">
                            Limpieza de Playa Postiguet
                        </h1>
                    </div>
                </div>

                {/* 2. IMAGEN PRINCIPAL */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-10">
                        <img
                            src={eventImage}
                            alt="Imagen del evento"
                            className="w-100 rounded-4 shadow-sm object-fit-cover border border-primary border-3"
                            style={{ height: '400px' }}
                        />
                    </div>
                </div>

                {/* 3. INFORMACIÓN DEL EVENTO */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 lh-lg fs-5 text-secondary">
                        
                        {/* Descripción */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Descripción</h4>
                            <p>
                                Únete a nosotros para una jornada intensiva de limpieza en la playa del Postiguet. 
                                El objetivo es retirar microplásticos de la orilla y residuos más grandes de las zonas de rocas. 
                                Proporcionaremos todo el material necesario (guantes, bolsas y pinzas). Es una oportunidad 
                                perfecta para ayudar al ecosistema local de Alicante.
                            </p>
                        </div>

                        {/* Categoría */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Categoría</h4>
                            <p>Limpieza de playas, Vida Marina, Voluntariado local</p>
                        </div>

                        {/* Requisitos (Lista) */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Requisitos</h4>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Ser mayor de 16 años (o venir acompañado).</li>
                                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Llevar ropa cómoda y calzado deportivo.</li>
                                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Traer botella de agua reutilizable (evitemos plásticos).</li>
                            </ul>
                        </div>

                        {/* Fecha y Hora */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Fecha y Hora</h4>
                            <p className="fw-bold text-secondary">
                                <i className="bi bi-calendar-event me-2"></i> Sábado, 25 de Octubre de 2026 <br />
                                <i className="bi bi-clock me-2"></i> 09:30 AM - 13:30 PM
                            </p>
                        </div>

                        {/* Ubicación */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Ubicación</h4>
                            <p>Playa del Postiguet, Alicante (Punto de encuentro: Junto a la estación del TRAM).</p>
                        </div>

                        {/* 4. MAPA (Google Maps Embed - Alicante) */}
                        <div className="mb-5">
                            {/* 'ratio' hace que el iframe sea responsive y mantenga la proporción */}
                            <div className="ratio ratio-16x9 rounded-4 overflow-hidden border border-2 border-primary shadow-sm">
                                <iframe 
                                    src="https://maps.google.com/maps?q=Playa%20del%20Postiguet%20Alicante&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                    title="Mapa Ubicación Evento"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* 5. BOTÓN DE ACCIÓN (Inscribirse) */}
                        <div className="text-center mt-4">
                            <button className="btn btn-primary btn-lg text-white fw-bold px-5 py-3 round-3 shadow">
                                Inscribirse al Evento
                            </button>
                            <p className="text-muted small mt-2">
                                * Plazas limitadas (15/30 ocupadas)
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};