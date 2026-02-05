import HeroSection from '../components/HeroSection';
import SectionEstadisticas from '../components/SectionEstadisticas';
import SectionONG from '../components/SectionONG';
import GrupoDeCardEvento from '../components/GrupoDeCardEvento';
import { eventos } from '../data/Eventos';


function Home() {
  return (

    <>
      <HeroSection />
      <SectionEstadisticas />
      <GrupoDeCardEvento datos={eventos} />
      <SectionONG />
    </>
  );
}

export default Home;
