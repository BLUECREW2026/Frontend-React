import HeroSection from '../components/HeroSection';
import SectionEstadisticas from '../components/SectionEstadisticas';
import SectionONG from '../components/SectionONG';
import GrupoDeCardEvento from '../components/GrupoDeCardEvento';


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
