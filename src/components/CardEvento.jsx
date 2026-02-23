export default function CardEvento({ imagen, titulo, descripcion }) {
    return (
        <div className="col p-3 d-flex">
            <article className="card rounded-4 p-3 bg-white shadow h-100 d-flex flex-column">
                <div className="ratio ratio-4x3">
                    <img
                        className="card-img-top rounded-4 object-fit-cover border border-primary border-2"
                        src={imagen}
                        alt={titulo}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5">{titulo}</h3>
                    <p className="card-text text-secondary mb-4" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {descripcion}
                    </p>
                    <div className="mt-auto text-center">
                        <button className="btn btn-primary text-light fw-bold w-100">
                            Inscribirse
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}