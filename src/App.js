import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import GameInfo from './components/GameInfo';
import InfoCards from './components/InfoCards';
import StickySocials from './components/StickySocials';
import Updates from './components/Updates';

// import classes from './App.module.css';

function App() {
  return (
    <div>
      <NavBar />
      <StickySocials />
      <HeroSection />
      <GameInfo />
      <InfoCards />
      <Updates />
    </div>
  );
}

export default App;
