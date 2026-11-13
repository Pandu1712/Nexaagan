import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import Sectors from './pages/Sectors';
import SectorDetail from './pages/SectorDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Technology from './pages/Technology';
import ESG from './pages/ESG';
import AboutUs from './pages/AboutUs';
import NewsMedia from './pages/NewsMedia';
import NewsDetail from './pages/NewsDetail';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="w-full min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-brand-orange selection:text-white">
        {/* Navigation Bar */}
        <Navbar showTopBar={true} />

        {/* Main Content Viewport */}
        <main className="w-full flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/sectors/:sectorId" element={<SectorDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/esg" element={<ESG />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/news" element={<NewsMedia />} />
            <Route path="/news/:newsId" element={<NewsDetail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Back To Top Button */}
        <BackToTop />
      </div>
    </Router>
  );
}
