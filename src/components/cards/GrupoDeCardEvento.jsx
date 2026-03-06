import CardEvento from "./CardEvento";

export default function GrupoDeCardEvento({ datos }) {
    return (
        <section className="container mb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
                {datos && datos.map((evento, index) => (
                    <CardEvento
                        key={index}
                        id={index}
                        evento={evento}
                    />
                ))}
            </div>
        </section>
    );
}