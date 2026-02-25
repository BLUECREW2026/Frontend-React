import HeroSection from '../components/sections/HeroSection';
import SectionEstadisticas from '../components/sections/SectionEstadisticas';
import SectionONG from '../components/sections/SectionONG';
import GrupoDeCardEvento from '../components/cards/GrupoDeCardEvento';


function Home({ datos }) {
  return (
    <div className="flex-grow-1">
      <HeroSection />
      <SectionEstadisticas />
      <GrupoDeCardEvento datos={datos.slice(0, 4)} />
      <SectionONG />
    </div>
  );
}

export default Home;
