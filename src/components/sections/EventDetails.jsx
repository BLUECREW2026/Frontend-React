import { useLocation, useParams } from 'react-router-dom';
import { eventos } from "../../data/Eventos";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import geoIcon from "../../assets/icons/geo-alt-fill.svg";

// --- COMPONENTES AUXILIARES ---

// Mueve la cámara del mapa cuando las coordenadas cambian
function ChangeView({ center }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, 15, { animate: true });
        }
    }, [center, map]);
    return null;
}

const customIcon = new Icon({
    iconUrl: geoIcon,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});

// --- COMPONENTE PRINCIPAL ---

export default function EventDetails() {
    const { id } = useParams();
    const location = useLocation();

    // Intentamos obtener el evento del estado de la navegación o del archivo de datos
    const evento = location.state?.evento || eventos.find(e => e.id === parseInt(id)) || eventos[parseInt(id)];

    // Estado para las coordenadas (por defecto Madrid si no hay nada)
    const [position, setPosition] = useState([
        evento?.lat || 40.4167,
        evento?.lng || -3.7037
    ]);

    // Lógica para convertir Dirección de Texto -> Coordenadas (Geocoding)
    useEffect(() => {
        const buscarCoordenadas = async () => {
            // Si el evento tiene texto pero NO tiene lat/lng, buscamos
            if (evento?.ubicacion && (!evento.lat || !evento.lng)) {
                try {
                    const provider = new OpenStreetMapProvider();
                    const results = await provider.search({ query: evento.ubicacion });

                    if (results && results.length > 0) {
                        setPosition([results[0].y, results[0].x]);
                    }
                } catch (error) {
                    console.error("Error al buscar la dirección en el mapa:", error);
                }
            } else if (evento?.lat && evento?.lng) {
                // Si ya trae coordenadas, las usamos directamente
                setPosition([evento.lat, evento.lng]);
            }
        };

        buscarCoordenadas();
    }, [evento]);

    if (!evento) {
        return (
            <div className="container text-center my-5">
                <p className="fs-4 text-secondary">Evento no encontrado...</p>
            </div>
        );
    }

    return (
        <section className="p-5 bg-light w-75 mx-auto shadow my-5 rounded-4">
            <div className="container">

                {/* 1. ENCABEZADO */}
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
                            alt={evento.titulo}
                            className="w-100 rounded-4 shadow-sm object-fit-cover border border-primary border-3"
                            style={{ height: '400px' }}
                        />
                    </div>
                </div>

                {/* 3. INFORMACIÓN DETALLADA */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 lh-lg fs-5 text-secondary">

                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Descripción</h4>
                            <p>{evento.descripcion}</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Categoría</h4>
                            <p className="badge bg-primary fs-6">{evento.categoria}</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Requisitos</h4>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Ser mayor de 16 años (o venir acompañado).</li>
                                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Llevar ropa cómoda y calzado deportivo.</li>
                                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Traer botella de agua reutilizable.</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Fecha y Hora</h4>
                            <p className="fw-bold text-secondary">
                                <i className="bi bi-calendar-event me-2"></i> {evento.fecha} <br />
                                <i className="bi bi-clock me-2"></i> {evento.hora || "10:00 AM"}
                            </p>
                        </div>

                        {/* 4. MAPA */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-3">Ubicación en el mapa</h4>
                            <div className="map-container-wrapper shadow-sm border border-2 border-primary rounded-3 overflow-hidden" style={{ height: '400px' }}>
                                <MapContainer
                                    center={position}
                                    zoom={15}
                                    scrollWheelZoom={false}
                                    style={{ height: '100%', width: '100%' }}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <ChangeView center={position} />
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

                        {/* 5. BOTÓN DE INSCRIPCIÓN */}
                        <div className="text-center mt-4">
                            <button className="btn btn-primary btn-lg text-white fw-bold px-5 py-3 rounded-3 shadow">
                                Inscribirse al Evento
                            </button>
                            <p className="text-muted small mt-2">
                                * Plazas limitadas (Consultar disponibilidad)
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}