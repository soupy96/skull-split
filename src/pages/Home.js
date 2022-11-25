import HeroSection from './../components/hero-section/HeroSection';
import GameInfo from './../components/game-info/GameInfo';
import InfoCards from './../components/info-cards/InfoCards';
import Updates from './../components/updates/Updates';

function Home() {
  return (
    <div>
      <HeroSection />
      <GameInfo />
      <InfoCards />
      <Updates />
    </div>
  );
}

export default Home;
