import { eventos } from '../data/Eventos'
import GrupoDeCardEventoSmall from '../components/GrupoDeCardEventoSmall';

export default function MisEventos() {
    return (
        <>
            <div>
                <div>
                    <p>CALIFICADOS</p>
                </div>
                <GrupoDeCardEventoSmall datos={eventos} />
                <div>
                    <p>PENDIENTES DE CALIFICAR</p>
                </div>
                <GrupoDeCardEventoSmall datos={eventos} />
            </div>
        </>
    );
}
