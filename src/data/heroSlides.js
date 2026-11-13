// NEXAAGEN Corporate Hero Carousel Data
// 4 Premium slides matching the uploaded high-resolution assets

import slide1Image from '../assets/hero/hero-slide-1.jpg';
import slide2Image from '../assets/hero/hero-slide-2.jpg';
import slide3Image from '../assets/hero/hero-slide-3.jpg';
import slide4Image from '../assets/hero/hero-slide-4.jpg';

export const heroSlides = [
  {
    id: 'smart-manufacturing',
    number: '01',
    badge: 'Smart Manufacturing',
    title: 'Next-Generation Industrial Automation & Smart Facilities',
    description: 'Empowering high-volume production facilities with AI-guided robotics, automated assembly line maintenance, and 99.98% statutory mechanical uptime across complex industrial plants.',
    primaryCta: {
      text: 'Explore Manufacturing Solutions',
      url: '/sectors/manufacturing',
    },
    secondaryLink: {
      text: 'View industrial case studies',
      url: '/services/hard-fm-engineering',
    },
    image: slide1Image,
    imageAlt: 'NEXAAGEN Advanced Smart Manufacturing & Industrial Robotics Automation',
  },
  {
    id: 'robotics-telemetry',
    number: '02',
    badge: 'Robotics & Telemetry',
    title: 'Autonomous Robotics & Real-Time Facility Intelligence',
    description: 'Transforming estate operations through automated robotic cleaning fleets, IoT sensor grids, and closed-loop predictive maintenance workflows managed in a single pane of glass.',
    primaryCta: {
      text: 'Discover NEXA-Pulse™ Platform',
      url: '/technology',
    },
    secondaryLink: {
      text: 'Explore automated robotics',
      url: '/technology',
    },
    image: slide2Image,
    imageAlt: 'NEXAAGEN Autonomous Robotic Assembly & Real-Time Telemetry Diagnostics',
  },
  {
    id: 'net-zero-infrastructure',
    number: '03',
    badge: 'Net Zero Infrastructure',
    title: 'Decarbonised Industrial Estates & Sustainable Operations',
    description: 'Integrating on-site renewable energy, intelligent microgrid management, and circular resource recovery to accelerate your enterprise transition to Net Zero 2035 with certified carbon audits.',
    primaryCta: {
      text: 'Explore Net Zero Roadmap',
      url: '/esg',
    },
    secondaryLink: {
      text: 'Download sustainability framework',
      url: '/esg',
    },
    image: slide3Image,
    imageAlt: 'NEXAAGEN Sustainable Industrial Eco-Park with Solar & Wind Energy',
  },
  {
    id: 'life-sciences-engineering',
    number: '04',
    badge: 'Healthcare & Life Sciences',
    title: 'Validated Cleanroom Hygiene & Life Sciences Engineering',
    description: 'Delivering sterile biosafety environments, ISO-compliant medical gas distribution, and continuous statutory compliance for advanced research laboratories and pharmaceutical manufacturing.',
    primaryCta: {
      text: 'Explore Life Sciences Solutions',
      url: '/sectors/healthcare',
    },
    secondaryLink: {
      text: 'View clinical hygiene standards',
      url: '/sectors/healthcare',
    },
    image: slide4Image,
    imageAlt: 'NEXAAGEN Precision Cleanroom Engineering & Laboratory Diagnostics',
  },
];

export default heroSlides;

