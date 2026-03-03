import { useLocation, useParams } from 'react-router-dom';
import { eventos } from "../../data/Eventos";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import geoIcon from "../../assets/icons/geo-alt-fill.svg";
import { Icon } from "leaflet";

export default function EventDetails() {

    const { id } = useParams();
    const location = useLocation();

    const evento = location.state?.evento || eventos[parseInt(id)];

    const customIcon = new Icon({
        iconUrl: geoIcon,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
    });

    const position = [evento.lat || 40.4167, evento.lng || -3.7037];
    if (!evento) return <p>Evento no encontrado...</p>;
    return (
        <section className="p-5 bg-light w-75 mx-auto shadow my-5 rounded-4">
            <div className="container">

                {/* 1. ENCABEZADO (Título) */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h1 className="fw-bold text-primary display-5 mb-3 text-uppercase">
                            {evento.titulo}
                        </h1>
                    </div>
                </div>

                {/* 2. IMAGEN PRINCIPAL */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-10">
                        <img
                            src={evento.imagen}
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
                                {evento.descripcion}
                            </p>
                        </div>

                        {/* Categoría */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Categoría</h4>
                            <p>{evento.categoria}</p>
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
                                <i className="bi bi-calendar-event me-2"></i> {evento.fecha} <br />
                                <i className="bi bi-clock me-2"></i> {evento.hora}
                            </p>
                        </div>

                        {/* Ubicación */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Ubicación</h4>
                            <p>{evento.ubicacion}</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-3">Ubicación en el mapa</h4>
                            <div className="map-container-wrapper shadow-sm border border-2 border-primary">
                                <MapContainer
                                    center={position}
                                    zoom={15}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position} icon={customIcon}>
                                        <Popup>
                                            <div className="text-center">
                                                <strong>{evento.titulo}</strong><br />
                                                {evento.ubicacion}
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                            <p className="mt-2 text-muted small italic">
                                <i className="bi bi-geo-alt-fill me-1"></i>
                                {evento.ubicacion}
                            </p>
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