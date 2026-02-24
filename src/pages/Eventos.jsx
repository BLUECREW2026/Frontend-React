import GrupoDeCardEvento from "../components/cards/GrupoDeCardEvento";

export default function Eventos({ datos }) {
    return (
        <>
            <GrupoDeCardEvento datos={datos}></GrupoDeCardEvento>
        </>
    );
}