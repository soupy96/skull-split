import { Helmet } from 'react-helmet';

import HeroSection from '../components/page-components/home-components/hero-section/HeroSection';
import GameInfo from '../components/page-components/home-components/game-info/GameInfo';
import InfoCards from '../components/page-components/home-components/info-cards/InfoCards';
import Updates from '../components/page-components/home-components/updates/Updates';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Skull Split | Home</title>
      </Helmet>
      <HeroSection />
      <GameInfo />
      <InfoCards />
      <Updates />
    </div>
  );
}

export default Home;
