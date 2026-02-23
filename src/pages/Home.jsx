import HeroSection from '../components/HeroSection';
import SectionEstadisticas from '../components/SectionEstadisticas';
import SectionONG from '../components/SectionONG';
import GrupoDeCardEvento from '../components/GrupoDeCardEvento';
import { eventos } from '../data/Eventos';


function Home() {
  return (
    <div className="flex-grow-1">
      <HeroSection />
      <SectionEstadisticas />
      <GrupoDeCardEvento datos={eventos} />
      <SectionONG />
    </div>
  );
}

export default Home;
