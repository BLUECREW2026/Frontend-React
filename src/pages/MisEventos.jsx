import GrupoDeCardEventoSmall from '../components/GrupoDeCardEventoSmall';

export default function MisEventos({ datos }) {
    return (
        <>
            <div>
                <div className='text-center'>
                    <p className='text-secondary h2'>CALIFICADOS</p>
                </div>
                <GrupoDeCardEventoSmall datos={datos} />
                <div className='text-center'>
                    <p className='text-secondary h2'>PENDIENTES DE CALIFICAR</p>
                </div>
                <GrupoDeCardEventoSmall datos={datos} />
            </div>
        </>
    );
}
