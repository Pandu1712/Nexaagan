import React from 'react';
import { newsData } from '../data/newsData';
import HeroCarousel from '../components/sections/HeroCarousel';
import SectorServicesGrid from '../components/sections/SectorServicesGrid';
import HistoryVisionMetrics from '../components/sections/HistoryVisionMetrics';
import ESGCommitmentCard from '../components/sections/ESGCommitmentCard';
import NewsCarousel from '../components/sections/NewsCarousel';
import ConnectTeamBanner from '../components/sections/ConnectTeamBanner';
import IndustryAccreditations from '../components/sections/IndustryAccreditations';
import ContactForm from '../components/sections/ContactForm';

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1">
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. SECTOR SPECIFIC SERVICES (OCS Reference: Large Rounded Container with 8 Sector Cards) */}
      <SectorServicesGrid />

      {/* 3. HISTORY, COLLEAGUES, CUSTOMERS AND VISION (OCS Reference: 4 Metric Cards + Dotted Matrix) */}
      <HistoryVisionMetrics />

      {/* 4. NEXAAGEN ESG COMMITMENT (OCS Reference: Large Rounded Container with Solar Image + 3 Pillars) */}
      <ESGCommitmentCard />

      {/* 5. NEXAAGEN INSIGHTS AND UPDATES (OCS Reference: Photo Slider with Progress Bar & Navigation) */}
      <NewsCarousel news={newsData} />

      {/* 6. CONNECT WITH YOUR NEXAAGEN TEAM (OCS Reference: Rounded Navy Banner with Dotted Wave Watermark) */}
      <ConnectTeamBanner />

      {/* 7. INDUSTRY ACCREDITATIONS (OCS Reference: Quality Control & Compliance Grid) */}
      <IndustryAccreditations />

      {/* 8. CONTACT FORM SECTION */}
      <ContactForm />
    </div>
  );
}
