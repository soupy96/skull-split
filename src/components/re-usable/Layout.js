import { Outlet } from 'react-router-dom';

import Footer from '../footer/Footer';
import NavBar from '../header/NavBar';
import StickySocials from '../sticky-socials/StickySocials';

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
