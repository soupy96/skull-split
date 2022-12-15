import { Outlet } from 'react-router-dom';

import NavBar from './navbar/NavBar';
import StickySocials from './sticky-socials/StickySocials';
import Footer from './footer/Footer';

function Layout() {
  return (
    <div>
      <NavBar />
      <StickySocials />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
