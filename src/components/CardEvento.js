export default function CardEvento({ imagen, titulo, descripcion }) {
    return (
        <div className="col p-3">
            <article className="card rounded-4 p-3 bg-white shadow">
                <div className="ratio ratio-4x3">
                    <img className="card-img-top rounded-4 object-fit-cover border border-primary border-2"
                        src={imagen}
                        alt={titulo} />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{titulo}</h3>
                    <p className="card-text">{descripcion}</p>
                    <div className="text-center">
                        <button className="btn btn-primary text-light fw-bold">Inscribirse</button>
                    </div>
                </div>
            </article>
        </div>
    );
}