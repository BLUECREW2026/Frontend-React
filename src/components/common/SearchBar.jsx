export default function SearchBar({
    query,
    onChange,
    onClear,
    placeholder = '¿A qué evento quieres ir?',
}) {
    const handleInput = (e) => onChange(e.target.value);
    const handleClear = () => onClear?.();
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="input-group">
                        <input
                            type="text"
                            value={query}
                            onChange={handleInput}
                            className="form-control bg-white" placeholder={placeholder}
                            aria-label="Barra de búsqueda de productos"
                            aria-describedby="search-label"
                        />
                        {query && (
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={handleClear}
                                title="Limpiar búsqueda">Limpiar</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 