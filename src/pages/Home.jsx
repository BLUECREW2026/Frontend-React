import HeroSection from '../components/HeroSection';
import SectionEstadisticas from '../components/SectionEstadisticas';
import SectionONG from '../components/SectionONG';
import GrupoDeCardEvento from '../components/GrupoDeCardEvento';


function Home({ datos }) {
  return (

    <>
      <HeroSection />
      <SectionEstadisticas />
      <GrupoDeCardEvento datos={datos} />
      <SectionONG />
    </>
  );
}

export default Home;
