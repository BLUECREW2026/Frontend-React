import { useLocation, useParams } from 'react-router-dom';
import { IMAGES_BASE_URL } from "../../config/axios";
import { useState, useEffect } from "react";
import { eventos } from "../../data/Eventos";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./EventDetails.scss";
import geoIcon from "../../assets/icons/geo-alt-fill.svg";
import { Icon } from "leaflet";
import clienteAxios from "../../config/axios"

export default function EventDetails() {

    const { id } = useParams();
    const location = useLocation();

    const evento = location.state?.evento || eventos[parseInt(id)];

    const obtenerImagen = (nombreImagen) => {
        if (!nombreImagen) return "/img/cards/card-image-2.webp";
        if (nombreImagen.startsWith('http')) return nombreImagen;
        return `${IMAGES_BASE_URL}${nombreImagen}`;
    };

    const customIcon = new Icon({
        iconUrl: geoIcon,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
    });

    const position = [evento.lat || 40.4167, evento.lng || -3.7037];


    const [datos, setDatos] = useState()

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await clienteAxios.get('/eventos/' + evento.id + '/inscripciones/cantidad');
                setDatos(response.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setDatos(0);
            }
        };

        obtenerDatos();
    }, [evento.id]);


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
                            src={obtenerImagen(evento.imagen)}
                            alt="Imagen del evento"
                            className="w-100 rounded-4 shadow-sm object-fit-cover border border-primary border-3"
                            style={{ height: '400px' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = "/img/cards/card-image-2.webp"; }}
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
                                {evento.descripcionEvento}
                            </p>
                        </div>

                        {/* Categoría */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Categoría: {evento.categoria}</h4>
                            <p>{evento.descripcionCategoria}</p>
                        </div>

                        {/* Requisitos (Lista) */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Requisitos</h4>
                            <p className='text-primary'>
                                {evento.material}
                            </p>
                        </div>

                        {/* Fecha y Hora */}
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary mb-2">Fecha y Hora</h4>
                            <p className="fw-bold text-secondary">
                                <i className="bi bi-calendar-event me-2"></i> {evento.fechaDisplay} <br />
                                <i className="bi bi-clock me-2"></i> {evento.horaDisplay}
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
                                * Plazas limitadas ({datos}/{evento.participantes} ocupadas)
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};