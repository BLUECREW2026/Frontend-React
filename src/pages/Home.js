import HeroSection from '../components/HeroSection';
import Section_Estadisticas from '../components/SectionEstadisticas';
import Section_ONG from '../components/SectionONG';
import { eventos } from '../data/Eventos';
import Card_Evento from '../components/Card_Evento';

function Home() {
  return (

    <>
    <HeroSection/>
    <Section_Estadisticas/>

    {eventos.map((evento, index) => (
      <Card_Evento
        key={index}
        imagen={evento.imagen}
        titulo={evento.titulo}
        descripcion={evento.descripcion}
      />
    ))}
    <Section_ONG/>
    </>
  );
}

export default Home;
