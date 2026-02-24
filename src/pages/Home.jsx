import HeroSection from '../components/sections/HeroSection';
import SectionEstadisticas from '../components/sections/SectionEstadisticas';
import SectionONG from '../components/sections/SectionONG';
import GrupoDeCardEvento from '../components/sections/GrupoDeCardEvento';


function Home({ datos }) {
  return (
    <div className="flex-grow-1">
      <HeroSection />
      <SectionEstadisticas />
      <GrupoDeCardEvento datos={datos} />
      <SectionONG />
    </div>
  );
}

export default Home;
