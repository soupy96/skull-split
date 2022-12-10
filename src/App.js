import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/re-usable/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyNotice from './pages/Legal/PrivacyNotice';
import TermsOfService from './pages/Legal/TermsOfService';
import CookiePreferences from './pages/Legal/CookiePreferences';
import NoPage from './pages/NoPage';
import GoToTop from './components/re-usable/GoToTop';

function App() {
  return (
    // TODO: load in content on webpage while the user scrolls
    // TODO: make sure the GoToTop functionality works proper
    <BrowserRouter>
      <GoToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='privacy-notice' element={<PrivacyNotice />} />
          <Route path='terms-of-service' element={<TermsOfService />} />
          <Route path='cookie-preferences' element={<CookiePreferences />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
