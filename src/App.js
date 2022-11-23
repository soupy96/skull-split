import NavBar from './components/header/NavBar';
import HeroSection from './components/hero-section/HeroSection';
import GameInfo from './components/game-info/GameInfo';
import InfoCards from './components/info-cards/InfoCards';
import StickySocials from './components/sticky-socials/StickySocials';
import Updates from './components/updates/Updates';
import Footer from './components/footer/Footer';

// TODO: move all css modules to styled components and make resuable styled components in a StyledComponent.js

function App() {
  return (
    <div>
      <NavBar />
      <StickySocials />
      <HeroSection />
      <GameInfo />
      <InfoCards />
      <Updates />
      <Footer />
    </div>
  );
}

export default App;
