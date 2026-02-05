import { eventos } from '../data/Eventos'
import GrupoDeCardEventoSmall from '../components/GrupoDeCardEventoSmall';

export default function MisEventos() {
    return (
        <>
            <div>
                <div className='text-center'>
                    <p className='text-secondary h2'>CALIFICADOS</p>
                </div>
                <GrupoDeCardEventoSmall datos={eventos} />
                <div className='text-center'>
                    <p className='text-secondary h2'>PENDIENTES DE CALIFICAR</p>
                </div>
                <GrupoDeCardEventoSmall datos={eventos} />
            </div>
        </>
    );
}
