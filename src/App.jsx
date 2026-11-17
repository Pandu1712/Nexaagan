import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import StickyWhatsApp from './components/common/StickyWhatsApp';
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
import SpacesAndPlaces from './pages/SpacesAndPlaces';
import QHSE from './pages/QHSE';
import Environmental from './pages/Environmental';
import Governance from './pages/Governance';
import ModernSlaveryAct from './pages/ModernSlaveryAct';
import DiversityInclusion from './pages/DiversityInclusion';
import Apprenticeships from './pages/Apprenticeships';
import CodeOfConduct from './pages/CodeOfConduct';
import Social from './pages/Social';
import Policies from './pages/Policies';
import Foundation from './pages/Foundation';
import PeopleIntoWork from './pages/PeopleIntoWork';
import VisionMission from './pages/VisionMission';
import OurColleagues from './pages/OurColleagues';
import LeadershipTeams from './pages/LeadershipTeams';
import TrueValues from './pages/TrueValues';
import AwardsRecognition from './pages/AwardsRecognition';
import Careers from './pages/Careers';
import IndiaOfficeLocations from './pages/IndiaOfficeLocations';
import GlobalLocations from './pages/GlobalLocations';
import HistoryHeritage from './pages/HistoryHeritage';
import OurBrands from './pages/OurBrands';
import Accreditations from './pages/Accreditations';
import CaseStudies from './pages/CaseStudies';
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
            <Route path="/about/esg" element={<ESG />} />
            <Route path="/about-ocs/esg" element={<ESG />} />
            <Route path="/qhse" element={<QHSE />} />
            <Route path="/esg/qhse" element={<QHSE />} />
            <Route path="/environmental" element={<Environmental />} />
            <Route path="/esg/environmental" element={<Environmental />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/esg/governance" element={<Governance />} />
            <Route path="/modern-slavery-act" element={<ModernSlaveryAct />} />
            <Route path="/modern-slavery-statement" element={<ModernSlaveryAct />} />
            <Route path="/esg/modern-slavery" element={<ModernSlaveryAct />} />
            <Route path="/esg/modern-slavery-act" element={<ModernSlaveryAct />} />
            <Route path="/diversity-equality-and-inclusion" element={<DiversityInclusion />} />
            <Route path="/esg/diversity-equality-and-inclusion" element={<DiversityInclusion />} />
            <Route path="/diversity-equity-and-inclusion" element={<DiversityInclusion />} />
            <Route path="/esg/diversity-equity-and-inclusion" element={<DiversityInclusion />} />
            <Route path="/about/diversity-equality-and-inclusion" element={<DiversityInclusion />} />
            <Route path="/about/diversity-equity-and-inclusion" element={<DiversityInclusion />} />
            <Route path="/about-ocs/diversity-equality-and-inclusion" element={<DiversityInclusion />} />
            <Route path="/about-ocs/diversity-equity-and-inclusion" element={<DiversityInclusion />} />
            <Route path="/dei" element={<DiversityInclusion />} />
            <Route path="/apprenticeships-funded-learning" element={<Apprenticeships />} />
            <Route path="/esg/apprenticeships-funded-learning" element={<Apprenticeships />} />
            <Route path="/about-ocs/apprenticeships-funded-learning" element={<Apprenticeships />} />
            <Route path="/apprenticeships" element={<Apprenticeships />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/esg/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/global-code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/social" element={<Social />} />
            <Route path="/esg/social" element={<Social />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/ocs-policies" element={<Policies />} />
            <Route path="/esg/policies" element={<Policies />} />
            <Route path="/policy-download-centre" element={<Policies />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/about/foundation" element={<Foundation />} />
            <Route path="/about/ocs-foundation" element={<Foundation />} />
            <Route path="/about-ocs/foundation" element={<Foundation />} />
            <Route path="/about-ocs/ocs-foundation" element={<Foundation />} />
            <Route path="/in/ocs-foundation" element={<Foundation />} />
            <Route path="/esg/foundation" element={<Foundation />} />
            <Route path="/ocs-foundation" element={<Foundation />} />
            <Route path="/nexaagan-foundation" element={<Foundation />} />
            <Route path="/nexaagen-foundation" element={<Foundation />} />
            <Route path="/people-into-work" element={<PeopleIntoWork />} />
            <Route path="/esg/people-into-work" element={<PeopleIntoWork />} />
            <Route path="/about-ocs/people-into-work" element={<PeopleIntoWork />} />
            <Route path="/about/people-into-work" element={<PeopleIntoWork />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/esg/vision-mission" element={<VisionMission />} />
            <Route path="/about-ocs/vision-mission" element={<VisionMission />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/vision-and-mission" element={<VisionMission />} />
            <Route path="/our-colleagues" element={<OurColleagues />} />
            <Route path="/our-frontline-colleagues" element={<OurColleagues />} />
            <Route path="/about/our-colleagues" element={<OurColleagues />} />
            <Route path="/about/our-frontline-colleagues" element={<OurColleagues />} />
            <Route path="/about-ocs/our-frontline-colleagues" element={<OurColleagues />} />
            <Route path="/leadership-teams" element={<LeadershipTeams />} />
            <Route path="/leadership" element={<LeadershipTeams />} />
            <Route path="/about/leadership-teams" element={<LeadershipTeams />} />
            <Route path="/about-ocs/leadership-teams" element={<LeadershipTeams />} />
            <Route path="/about/leadership" element={<LeadershipTeams />} />
            <Route path="/true-values" element={<TrueValues />} />
            <Route path="/values" element={<TrueValues />} />
            <Route path="/about/true-values" element={<TrueValues />} />
            <Route path="/about-ocs/true-values" element={<TrueValues />} />
            <Route path="/about/values" element={<TrueValues />} />
            <Route path="/awards-recognition" element={<AwardsRecognition />} />
            <Route path="/awards" element={<AwardsRecognition />} />
            <Route path="/service-awards" element={<AwardsRecognition />} />
            <Route path="/about/awards-recognition" element={<AwardsRecognition />} />
            <Route path="/about-ocs/service-awards" element={<AwardsRecognition />} />
            <Route path="/about/service-awards" element={<AwardsRecognition />} />
            <Route path="/about/awards" element={<AwardsRecognition />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/about-ocs/careers" element={<Careers />} />
            <Route path="/jobs" element={<Careers />} />
            <Route path="/india-office-locations" element={<IndiaOfficeLocations />} />
            <Route path="/office-locations" element={<IndiaOfficeLocations />} />
            <Route path="/about/india-office-locations" element={<IndiaOfficeLocations />} />
            <Route path="/about-ocs/office-locations" element={<IndiaOfficeLocations />} />
            <Route path="/about/office-locations" element={<IndiaOfficeLocations />} />
            <Route path="/global-locations" element={<GlobalLocations />} />
            <Route path="/locations" element={<GlobalLocations />} />
            <Route path="/about/global-locations" element={<GlobalLocations />} />
            <Route path="/about/locations" element={<GlobalLocations />} />
            <Route path="/about-ocs/locations" element={<GlobalLocations />} />
            <Route path="/about-ocs/global-locations" element={<GlobalLocations />} />
            <Route path="/in/locations" element={<GlobalLocations />} />
            <Route path="/history-and-heritage" element={<HistoryHeritage />} />
            <Route path="/history-heritage" element={<HistoryHeritage />} />
            <Route path="/history" element={<HistoryHeritage />} />
            <Route path="/about/history-and-heritage" element={<HistoryHeritage />} />
            <Route path="/about-ocs/history-and-heritage" element={<HistoryHeritage />} />
            <Route path="/about/history" element={<HistoryHeritage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/our-brands" element={<OurBrands />} />
            <Route path="/brands" element={<OurBrands />} />
            <Route path="/about/our-brands" element={<OurBrands />} />
            <Route path="/about-ocs/our-brands" element={<OurBrands />} />
            <Route path="/about/brands" element={<OurBrands />} />
            <Route path="/accreditations" element={<Accreditations />} />
            <Route path="/about/accreditations" element={<Accreditations />} />
            <Route path="/about-ocs/accreditations" element={<Accreditations />} />
            <Route path="/accreditations-and-certification" element={<Accreditations />} />
            <Route path="/about/accreditations-and-certification" element={<Accreditations />} />
            <Route path="/about-ocs/accreditations-and-certification" element={<Accreditations />} />
            <Route path="/news" element={<NewsMedia />} />
            <Route path="/news-media" element={<NewsMedia />} />
            <Route path="/in/news-media" element={<NewsMedia />} />
            <Route path="/about/news" element={<NewsMedia />} />
            <Route path="/about/news-media" element={<NewsMedia />} />
            <Route path="/news/:newsId" element={<NewsDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/customer-stories" element={<CaseStudies />} />
            <Route path="/in/customer-stories" element={<CaseStudies />} />
            <Route path="/news/case-studies" element={<CaseStudies />} />
            <Route path="/news/customer-stories" element={<CaseStudies />} />
            <Route path="/news-media/case-studies" element={<CaseStudies />} />
            <Route path="/news-media/customer-stories" element={<CaseStudies />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/the-ocs-a-z-of-spaces-and-places" element={<SpacesAndPlaces />} />
            <Route path="/a-z-of-spaces-and-places" element={<SpacesAndPlaces />} />
            <Route path="/spaces-and-places" element={<SpacesAndPlaces />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Sticky WhatsApp Button */}
        <StickyWhatsApp />

        {/* Floating Back To Top Button */}
        <BackToTop />
      </div>
    </Router>
  );
}
