import GrupoDeCardEvento from "../components/cards/GrupoDeCardEvento";
import SearchBar from "../components/common/SearchBar";
import Calendario from "../components/common/Calendario";
import { useState, useEffect } from "react";
import clienteAxios from "../config/axios"
import { formatearFechaHora } from "../utilities/formatearFechaHora"

export default function Eventos() {

    const [datos, setDatos] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await clienteAxios.get('/eventos/activos');
                const eventosFormateados = response.data.map(item => {
                    const { fecha, hora } = formatearFechaHora(item[4]);

                    return {
                        id: item[0],
                        titulo: item[1],
                        imagen: item[2],
                        descripcionEvento: item[3],
                        fechaDisplay: fecha,
                        horaDisplay: hora,
                        categoria: item[5],
                        descripcionCategoria: item[6],
                        material: item[7],
                        ubicacion: item[8],
                        participantes: item[9]
                    };
                });

                setDatos(eventosFormateados);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        obtenerDatos();
    }, []);


    const [query, setQuery] = useState("");

    const [rangoFechas, setRangoFechas] = useState({
        start: new Date(),
        end: null
    });

    const filteredEvents = datos.filter((e) => {
        const text = query.toLowerCase();
        const fechaEvento = new Date(e.fecha);

        const cumpleTexto = e.titulo.toLowerCase().includes(text);

        const cumpleFecha = rangoFechas.start && rangoFechas.end
            ? (fechaEvento >= rangoFechas.start && fechaEvento <= rangoFechas.end)
            : true;

        return cumpleTexto && cumpleFecha;
    });
    return (
        <div className="container mt-4">
            <div className="row g-3 align-items-center justify-content-center">
                <div className="col-auto">
                    <Calendario value={rangoFechas} setValue={setRangoFechas} />
                </div>

                <div className="col-md-6 col-lg-4">
                    <SearchBar
                        query={query}
                        onChange={setQuery}
                        onClear={() => setQuery("")}
                    />
                </div>
            </div>
            <GrupoDeCardEvento datos={filteredEvents} />
        </div>
    );
}