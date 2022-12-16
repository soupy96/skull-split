import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/re-usable/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyNotice = React.lazy(() => import('./pages/Legal/PrivacyNotice'));
const TermsOfService = React.lazy(() => import('./pages/Legal/TermsOfService'));
const CookiePreferences = React.lazy(() =>
  import('./pages/Legal/CookiePreferences')
);
const NoPage = React.lazy(() => import('./pages/NoPage'));

function App() {
  return (
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
  );
}

export default App;
