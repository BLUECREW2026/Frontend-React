import { eventos } from '../data/Eventos'
import GrupoDeCardEventoSmall from '../components/GrupoDeCardEventoSmall';

export default function MisEventos() {
    return (
        <div className='flex-grow-1 mt-5'>
            <div className='text-center'>
                <p className='text-secondary h2'>CALIFICADOS</p>
            </div>
            <GrupoDeCardEventoSmall datos={eventos} />
            <div className='text-center'>
                <p className='text-secondary h2'>PENDIENTES DE CALIFICAR</p>
            </div>
            <GrupoDeCardEventoSmall datos={eventos} />
        </div>
    );
}
