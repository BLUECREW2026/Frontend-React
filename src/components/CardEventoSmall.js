export default function CardEvento({ imagen, titulo }) {
    return (
        <div className="col p-3">
            <article class="card rounded-4 p-3 bg-white shadow">
                <div class="ratio ratio-4x3">
                    <img className="card-img-top rounded-4 object-fit-cover border border-primary border-2"
                        src={imagen}
                        alt={titulo} />
                </div>
            </article>
        </div>
    );
} 