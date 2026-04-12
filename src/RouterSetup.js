import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Compliance from './pages/Compliance';
import Dispatch from './pages/Dispatch';
import FleetManagement from './pages/FleetManagement';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

const RouterSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services/compliance" element={<Compliance />} />
          <Route path="services/dispatch" element={<Dispatch />} />
          <Route path="services/fleet-management" element={<FleetManagement />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSetup;
