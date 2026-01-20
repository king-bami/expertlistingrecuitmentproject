# Expert Listing - Admin Dashboard Assessment

A high-fidelity, pixel-perfect admin dashboard built for the Expert Listing Frontend Engineer assessment. This project transforms a Figma design into a fully interactive, production-ready React application with advanced animations and power-user features.

##  Live Demo
**[https://expertlistingrecuitmentproject.vercel.app/](https://expertlistingrecuitmentproject.vercel.app/)**

##  Key Features

- **Pixel-Perfect Figma Conversion**: Meticulous attention to detail in typography, spacing, and layout density.
- **Premium Animation Suite (GSAP)**:
  - **Magnetic Interactions**: Header icons that "attract" to the cursor for a tactile feel.
  - **Scroll Reveals**: Section animations triggered as they enter the viewport.
  - **Numerical Count-ups**: Animated financial and listing data on load.
- **Command Center (Ctrl+K)**: An interactive command palette for lightning-fast navigation and tool access.
- **Adaptive Responsiveness**:
  - Reordered content on mobile (Charts first).
  - Adaptive overlays (Popovers on Desktop, Modals on Mobile).
  - Horizontal chart scrolling on small screens to preserve data clarity.
- **Glassmorphism UI**: Dynamic sticky header with backdrop-blur and scale-on-scroll effects.
- **Defensive UI Engineering**: Dynamic font scaling for numerical data to prevent layout breaks.

##  Tech Stack

- **Core**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock), Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Build Tool**: Vite

## Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bakare-omogbolahan/expertlistingrecuitmentproject.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Design Notes

- **Typography**: Optimized for readability using "Space Grotesk" from Google Fonts.
- **Performance**: GSAP used for heavy animations to ensure 60FPS fluid motion.
- **State Management**: React `useState` and `useEffect` hooks for local state and lifecycle management.

---

**Developed by Bakare Omogbolahan**
*January 2025*