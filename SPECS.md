# Nuvsol AI Canvas — Technical Specifications & Design System

## 1. System Architecture Overview

The application is structured as a modern **Next.js 14+ (App Router)** single-page interactive experience with modular component composition.

```
+-------------------------------------------------------------+
|                      RootLayout (app/layout.tsx)            |
| - HTML Head, Fonts (Space Grotesk, Inter), Meta, Viewport   |
| - Canvas Theme CSS Variables & Saturated Color Fields       |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|                     HomePage (app/page.tsx)                 |
| - Horizontal Journey Engine (Desktop) / Vertical (Mobile)   |
| - Wheel Event Interceptor with Inner Overflow Detection    |
| - Keyboard Navigation (ArrowLeft / ArrowRight)             |
| - URL Hash Synchronizer (#vision, #ai, #portfolio, ...)    |
| - IntersectionObserver Scroll Spy                           |
| - Modal State Controller (Product Dialog)                  |
+-------------------------------------------------------------+
      |                |                   |                |
+-----------+    +---------------+   +------------+   +-------------+
| Header    |    | SectionPanels |   | Footer     |   | ProductModal|
| (Top Nav) |    | (0 to 5)      |   | (Controls) |   | (Accessible)|
+-----------+    +---------------+   +------------+   +-------------+
```

---

## 2. Color System & Surface Styling

| Token Name | HEX Code | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Brand Blue** | `#1256d1` / `#1764db` | `--blue` | Primary buttons, active markers, accents |
| **Brand Ink** | `#102945` | `--ink` | Headings, card titles, primary dark text |
| **Brand Mut** | `#2f4c68` / `#526c84` | `--mut` | Secondary text, subtitles, meta labels |
| **Brand Accent (Warm)**| `#ffd28d` / `#ff9d3b` | `--lime` | Highlighted words, signal nodes, sparks |
| **Border Line** | `#b6cce4` / `#dce5f4` | `--line` | Dividers, card borders, subtle frames |
| **Background Dark** | `#082d88` to `#153d92` | — | Deep gradient canvas for vision & AI panels |

### Gradients & Dimensional Surfaces
- **Vision Panel**: `radial-gradient(ellipse at 95% 4%, #b74c17 0, transparent 46%), linear-gradient(125deg, #082d88, #114cb7 62%, #153d92)`
- **AI Panel**: `radial-gradient(ellipse at 98% 92%, #bb5018, transparent 55%), linear-gradient(130deg, #063079, #1253bc)`
- **Portfolio Panel**: `linear-gradient(125deg, #0d3a94, #115ac3 65%, #0a3290)`
- **Case Studies Panel**: `radial-gradient(ellipse at 95% 10%, #a54810, transparent 62%), linear-gradient(135deg, #73320e, #9d3d0b)`
- **Methodology Panel**: `linear-gradient(135deg, #0b2f7e, #0a4aaa 70%, #173e89)`
- **Contact Panel**: `radial-gradient(ellipse at 3% 100%, #073682, transparent 60%), linear-gradient(125deg, #71320e, #a33d08)`

---

## 3. Responsive Typography & Fluid Scaling

To ensure text scales gracefully without breaking layouts on tablets and phones, fluid sizing is implemented via CSS `clamp()`:

- **Hero Heading (H1)**: `font-size: clamp(44px, 5.5vw, 88px);`
  - Mobile: ~44px to 54px
  - Tablet: ~55px to 68px
  - Desktop: Up to 88px
- **Panel Headings (H2)**: `font-size: clamp(38px, 4.2vw, 65px);`
- **Sub-headings (H3)**: `font-size: clamp(22px, 2.5vw, 32px);`
- **Body Text**: `font-size: 15px to 17px; line-height: 1.6;`

---

## 4. Multi-Device Layout Strategy

### Desktop Viewport (> 1024px)
- **Container**: `display: flex; overflow-x: auto; scroll-snap-type: x mandatory; height: calc(100dvh - 155px);`
- **Scroll Behavior**: Mouse wheel scrolls horizontally between panels.
- **Smart Overflow**: If the current panel has vertical overflow, mouse wheel allows reading inside the panel before jumping to the next slide.
- **3D Tilt Interaction**: Cards tilt in real-time based on cursor position (`TiltCard`).

### Tablet Viewport (768px – 1024px)
- **Grid Layouts**:
  - Hero: 2-column layout with optimized spacing (`0.9fr 1.1fr`)
  - Case Studies: 220px tab sidebar with 1fr details view
  - Methodology: 2-column step cards
- **Touch Navigation**: Smooth horizontal scroll snapping with touch drag/swipe.
- **Heights**: Panels adjust to accommodate lower landscape heights (`max-height: 760px`) without clipping.

### Mobile Viewport (< 768px)
- **Container**: Switches to vertical scroll (`display: block; overflow: visible; height: auto;`).
- **Header**: Sticky at top (`position: sticky; top: 0; z-index: 50;`) with hamburger drawer menu.
- **Footer**: Sticky at bottom (`position: sticky; bottom: 0; z-index: 50;`) with compact section indicator and previous/next buttons.
- **Network Diagram**: Shifts from absolute SVG node map into an accessible 2-column responsive grid with center core node.

---

## 5. Interactive Components Specification

### A. NetworkCanvas (`components/NetworkCanvas.tsx`)
- **Center Node**: Pulsing core with 2 orbiting dashed rings and glowing dot.
- **SVG Paths**: 6 cubic bezier wires connecting signal nodes to the core node.
- **Animation**: `<animateMotion>` carries glowing beads continuously along each wire.
- **Automated Tracer**: Clicking "Trace the intelligence" cycles through nodes 1–6 with timing intervals, pulsing the nodes and core.
- **Accessibility**: ARIA labels, live regions (`aria-live="polite"`), and respects `prefers-reduced-motion`.

### B. TiltCard (`components/TiltCard.tsx`)
- Reusable wrapper for 3D card physics.
- Calculates pointer coordinates relative to card bounds.
- Sets CSS variables `--tilt-x`, `--tilt-y`, `--shine-x`, and `--shine-y`.
- Smoothly resets to 0deg on pointer leave.
- Automatically disabled on touch screens and when `prefers-reduced-motion` is active.

### C. ProductModal (`components/ProductModal.tsx`)
- Native HTML `<dialog>` with `.showModal()`.
- Supports backdrop click outside dialog to close.
- Listens to `Escape` key.
- Renders product capabilities, pilot status, notes, and external/mailto links.

---

## 6. Data Extensibility

All content is centralized in `data/siteData.ts`:
- **`PRODUCTS`**: Add or modify products, their mini-app preview rows, capabilities, and pilot links.
- **`CASE_STUDIES`**: Add or modify case study challenge, approach, and validation stages.
- **`AI_PATTERNS`**: Add or modify AI solution design patterns and conceptual token streams.
- **`SIGNAL_NODES`**: Modify intelligence canvas nodes and details.
- **`METHOD_STEPS`**: Modify methodology steps.
