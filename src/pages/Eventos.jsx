import GrupoDeCardEvento from "../components/cards/GrupoDeCardEvento";
import SearchBar from "../components/common/SearchBar";
import { useState } from "react";

export default function Eventos({ datos }) {
    const [query, setQuery] = useState("");

    const filteredEvents = datos.filter((e) => {
        const text = query.toLowerCase();
        return (
            e.titulo.toLowerCase().includes(text)
        );
    });
    return (
        <>
            <SearchBar
                query={query}
                onChange={setQuery}
                onClear={() => setQuery("")} />
            <GrupoDeCardEvento datos={filteredEvents} />
        </>
    );
}