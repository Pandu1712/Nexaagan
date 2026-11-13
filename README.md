# NEXAAGEN — Premium Corporate Enterprise Website

A complete, enterprise-level corporate website for **NEXAAGEN**, built with **React.js**, **Vite**, **Tailwind CSS**, and **JavaScript (JSX)**.

The design language follows high-end international corporate facilities management aesthetics inspired by enterprise leaders (clean white backgrounds, dark navy typography, vibrant orange-to-red gradient CTAs, large rounded image cards, and horizontal tab navigation).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The site will be live at `http://localhost:3000` (or the port Vite displays).

3. **Build for Production:**
   ```bash
   npm run build
   ```
   Generates a static, deployment-ready bundle in the `dist/` directory.

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture

```
Nexaagrn/
├── public/
│   └── favicon.svg               # NEXAAGEN brandmark SVG
├── src/
│   ├── assets/                   # Static assets & brand files
│   ├── components/
│   │   ├── common/
│   │   │   ├── ScrollToTop.jsx   # Auto-scrolls to top on route change
│   │   │   └── SectionTitle.jsx  # Reusable enterprise section headings
│   │   ├── layout/
│   │   │   ├── TopBar.jsx        # Configurable top contact & portal bar
│   │   │   ├── Navbar.jsx        # Sticky header with mega dropdowns & mobile drawer
│   │   │   ├── Footer.jsx        # 5-column corporate footer with certs & legal
│   │   │   ├── Breadcrumbs.jsx   # Dynamic breadcrumb navigation
│   │   │   ├── BackToTop.jsx     # Smooth floating back-to-top button
│   │   │   └── SearchModal.jsx   # Live search across sectors, services, & news
│   │   └── sections/
│   │       ├── SolutionsTabs.jsx # Horizontal tabbed services with alternating layouts
│   │       ├── ESGBrief.jsx      # Environmental, Social, Governance 2-column showcase
│   │       ├── CaseStudiesCarousel.jsx # Controlled case studies carousel
│   │       ├── NewsCarousel.jsx  # Featured article + stacked news cards
│   │       └── ContactForm.jsx   # Validated 2-column contact & consultation form
│   ├── data/
│   │   ├── companyData.js        # Leadership, stats, certifications, values
│   │   ├── sectorsData.js        # 8 full sector profiles with solutions & KPIs
│   │   ├── servicesData.js       # 8 enterprise service verticals & features
│   │   ├── techData.js           # NEXA-Pulse™ IoT platform & 4 technology pillars
│   │   ├── esgData.js            # Net Zero 2035 roadmap, commitments & reports
│   │   ├── caseStudiesData.js    # Quantified client success studies
│   │   ├── newsData.js           # Press releases & whitepaper articles
│   │   └── legalData.js          # Privacy Policy and Terms & Conditions
│   ├── pages/
│   │   ├── Home.jsx              # 10-section enterprise homepage
│   │   ├── Sectors.jsx           # Sectors directory
│   │   ├── SectorDetail.jsx      # Dynamic 7-section sector detail template
│   │   ├── Services.jsx          # Services directory
│   │   ├── ServiceDetail.jsx     # Dynamic service detail template
│   │   ├── Technology.jsx        # Smart building telemetry & IoT
│   │   ├── ESG.jsx               # Sustainability & Net Zero 2035
│   │   ├── AboutUs.jsx           # Leadership, vision & accreditations
│   │   ├── NewsMedia.jsx         # Press, news & filterable whitepapers
│   │   ├── NewsDetail.jsx        # Full editorial article view
│   │   ├── ContactUs.jsx         # Global hubs & consultation form
│   │   ├── PrivacyPolicy.jsx     # Corporate privacy policy
│   │   ├── TermsConditions.jsx   # Corporate terms & conditions
│   │   └── NotFound.jsx          # Custom 404 page
│   ├── styles/
│   │   └── index.css             # Tailwind layers, custom buttons, scrollbars
│   ├── App.jsx                   # React Router DOM configuration
│   └── main.jsx                  # React application entry point
├── tailwind.config.js            # Brand color variables & design tokens
├── vite.config.js                # Vite build configuration
└── package.json                  # Dependencies & scripts
```

---

## 🎨 Brand Customization Guide

All brand styling, colors, and content are centralized for easy replacement:

- **Brand Colors:** In `tailwind.config.js` under `colors.brand`, modify `navy`, `orange`, `charcoal`, and `accent`.
- **Company Info & Leadership:** Update `src/data/companyData.js`.
- **Sectors & Services:** Add or edit items directly in `src/data/sectorsData.js` and `src/data/servicesData.js`.
- **Consultation Form:** In `src/components/sections/ContactForm.jsx`, change or extend validation rules and integrate an endpoint (such as Formspree, Resend, or your own backend API) when ready.

