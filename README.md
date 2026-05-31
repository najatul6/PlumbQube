# PlumbQube

A modern plumbing service landing page built with React and Vite. PlumbQube features an animated marketing site, service catalog, booking flow, contact map, and reusable component-driven layout.

## Key Features

- Responsive React + Vite frontend
- Tailwind CSS + DaisyUI styling
- Animated page transitions with Framer Motion
- React Router v7 navigation for Home, Services, About, Contact, and Request Service
- Multi-step booking form using React Hook Form
- Interactive Leaflet map on the contact page
- Reusable components for Navbar, Footer, service cards, testimonials, and emergency CTA

## Built With

- React 19
- Vite
- Tailwind CSS 4
- DaisyUI
- React Router
- Framer Motion
- React Hook Form
- React Leaflet + Leaflet
- React Icons

## Project Structure

- `src/main.jsx` - App entry point and `RouterProvider`
- `src/routes/Router.jsx` - Route definitions and app routing
- `src/layouts/MainLayout.jsx` - Shared layout with `Navbar`, animated `Outlet`, and `Footer`
- `src/pages/` - Page views for `Home`, `Services`, `About`, `Contact`, and fallback routes
- `src/components/` - Reusable UI blocks, booking form components, tiles, cards, and layout helpers
- `src/utils/animation.js` - Motion variants used across pages

## Pages

- `/` - Home landing page with hero, services, testimonials, and CTA
- `/services` - Services catalog and pricing cards
- `/about` - Company story, values, and team overview
- `/contact` - Contact form with a Leaflet map and location details
- `/request-service` - Multi-step plumbing booking form
- `/dashboard` - Dashboard route placeholder

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the URL shown in your terminal, typically `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Notes

- `src/App.jsx` still contains template example code and is not used by the router-based app.
- The app uses a floating `CallButton` and animated route transitions via `MainLayout`.
- Leaflet icons are loaded dynamically in `src/pages/Contact.jsx`.

## License

This project is currently private and configured for local development.
