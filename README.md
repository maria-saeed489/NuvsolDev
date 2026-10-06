# Nuvsol AI Canvas — Next.js Production Web Application

A fully responsive, modular, high-performance Next.js 14+ implementation of the **Nuvsol AI Canvas** ("Intelligence in Motion"). 

This project converts the original single-file showcase into clean, reusable React components with TypeScript, Tailwind CSS, App Router, responsive fluid typography (`clamp()`), horizontal snap engine for desktop, adaptive touch layout for tablets, and vertical flow for mobile devices.

---

## 🌟 Key Highlights

1. **100% Faithful Visual Design & Motion**
   - Exact color palettes, glowing radial and linear gradients, specular light sheens (`.tilt-card`), animated pulse beads along SVG circuit paths (`<animateMotion>`), and orbiting rings.
   - Saturated color fields with subtle animated drift and glowing core node.
   - High-fidelity typography with fluid responsiveness across phones, tablets, laptops, and ultra-wide screens.

2. **Responsive Screen & Tablet Adaptation**
   - **Large Desktops & Laptops (> 1024px)**: Immersive horizontal canvas with scroll-snapping, mouse wheel page flipping (with inner panel scroll detection), and arrow key navigation.
   - **Tablets (768px – 1024px)**: Adaptive grid columns (2-column layouts for case studies & methodology), fluid clamp typography, touch swipe support, and no layout cutoffs.
   - **Mobile Phones (< 768px)**: Seamless vertical scroll journey with sticky top header, accessible mobile drawer navigation, sticky bottom journey controller, and responsive tap targets.

3. **Modular & Reusable Architecture**
   - Clean separation of concerns: Data layer (`data/siteData.ts`), Types (`types/index.ts`), Reusable UI components (`components/`), and Section panels (`components/sections/`).
   - Reusable `TiltCard` with 3D perspective mouse physics and dynamic specular highlight.
   - Reusable `NetworkCanvas` with 6 interactive signal nodes and automated "Trace the intelligence" guided tour.
   - Accessible `ProductModal` with keyboard (Esc), focus trapping, backdrop blur, and outside click dismissal.

---

## 📁 Project Structure

```
D:/New folder/
├── app/
│   ├── globals.css              # Custom styling, animations, gradients, responsive breakpoints
│   ├── layout.tsx               # Next.js App Router root layout & metadata
│   └── page.tsx                 # Canvas controller, horizontal engine, keyboard & wheel events
├── components/
│   ├── Header.tsx               # Brand logo, section links, active state, mobile menu
│   ├── Footer.tsx               # Section counter (01/06), progress dots, prev/next controls
│   ├── NetworkCanvas.tsx        # Interactive SVG wiring, signal nodes, automated trace tour
│   ├── ProductModal.tsx         # Accessible dialog modal for product details & CTAs
│   ├── TiltCard.tsx             # Reusable 3D tilt component with specular sheen
│   └── sections/
│       ├── VisionSection.tsx    # Slide 0: Vision & Hero + Network Canvas
│       ├── AiCoreSection.tsx    # Slide 1: AI at the core + 4 pattern tabs & visual engine
│       ├── PortfolioSection.tsx # Slide 2: Products (InsuraFlow, Podiums, 2Bs)
│       ├── CaseStudiesSection.tsx # Slide 3: Case studies with interactive tab switcher
│       ├── MethodSection.tsx    # Slide 4: How we build + 6 methodology steps + founder badge
│       └── ContactSection.tsx   # Slide 5: Let's talk + CTA + 3D contact card
├── data/
│   └── siteData.ts              # Strongly-typed data for all copy, products, cases, and patterns
├── types/
│   └── index.ts                 # TypeScript interfaces for products, case studies, signals, etc.
├── next.config.mjs              # Next.js build configuration
├── tailwind.config.ts           # Tailwind configuration with brand theme extensions
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript strict configuration
├── package.json                 # Project dependencies & scripts
├── SPECS.md                     # Complete technical specifications & design system
└── README.md                    # Setup and usage guide
```

---

## 🚀 Getting Started in VS Code

### 1. Prerequisites
- **Node.js**: v18.17.0 or newer (v20+ recommended)
- **npm** or **pnpm** or **yarn**

### 2. Installation
Open the folder in VS Code or open a terminal inside this directory (`D:\New folder`):
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## ⌨️ Interactive Controls

- **Mouse Wheel / Trackpad**: Scroll down to advance to the next slide, scroll up to go back. If a slide has long content, it automatically lets you scroll inside the panel first before advancing.
- **Arrow Keys**: Press `→` or `←` to navigate through slides.
- **Top Navigation**: Click any section ("Vision", "AI at the core", "Products", "Case studies", "How we build", "Let's talk") to smoothly jump to it.
- **Bottom Bar**:
  - Click on any of the 6 progress dots to jump directly to any section.
  - Use the "Previous" and "Next" buttons.
- **Trace the Intelligence**: On the Vision slide, click "Trace the intelligence" to watch an automated pulse tour through the 6 AI signal nodes.
- **Product Exploration**: Click "Explore product" on any product card to launch an interactive modal with full specs and links.
