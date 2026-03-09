import { useNavigate } from 'react-router-dom';

export default function CardEvento({ evento, ruta }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${ruta}/${evento.id}`, {
            state: { eventoSeleccionado: evento }
        });
    }
    return (
        <div className="col p-3" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <article className="card rounded-4 p-3 bg-white shadow">
                <div className="ratio ratio-4x3">
                    <img className="card-img-top rounded-4 object-fit-cover border border-primary border-2"
                        src={evento.imagen}
                        alt={evento.titulo} />
                </div>
                <div className="card-body">
                    <h3 className="card-title h5  mt-2 text-truncate" title={evento.titulo}>
                        {evento.titulo}
                    </h3>
                </div>
            </article>
        </div>
    );
}