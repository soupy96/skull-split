import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/re-usable/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyNotice from './pages/PrivacyNotice';
import TermsOfService from './pages/TermsOfService';
import CookiePreferences from './pages/CookiePreferences';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
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
