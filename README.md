# Infinity Travels - Travel Exploration Platform

A modern, responsive travel website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Explore destinations, book flights, read travel blogs, and create unforgettable memories.

## Features

- **Flight Booking System** - Search and book flights with dynamic detail pages
- **Travel Blog** - Read travel tips, guides, and stories from around the world
- **Flight Megamenu** - Quick access to First Class, Business Class, and International flights
- **Mobile Navigation Drawer** - Smooth right-to-left drawer navigation for mobile devices
- **Responsive Design** - Mobile-first approach with full responsiveness
- **Dark Mode** - Theme switching with localStorage persistence
- **PWA Support** - Install as app, offline support via service worker
- **Smooth Animations** - Framer Motion animations throughout
- **Dynamic Routing** - Flight and blog detail pages with dynamic routes
- **Semantic Design System** - Navy and Orange color scheme with light/dark variants
- **Accessibility** - WCAG AA compliant with semantic HTML
- **Performance** - Optimized images, lazy loading, code splitting
- **Testing** - Jest and React Testing Library setup

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS variables
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with scroll-to-top
│   ├── page.tsx                # Home page with flight search
│   ├── globals.css             # Global styles & design tokens
│   ├── flights/
│   │   ├── page.tsx            # Flight listing
│   │   └── [id]/
│   │       └── page.tsx        # Flight detail
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [id]/
│   │       └── page.tsx        # Blog detail
│   ├── hotels/
│   │   └── page.tsx            # Hotels page
│   ├── cruises/
│   │   └── page.tsx            # Cruises page
│   ├── packages/
│   │   └── page.tsx            # Packages page
│   ├── destinations/
│   │   ├── page.tsx            # Destinations listing
│   │   └── [id]/
│   │       └── page.tsx        # Destination detail
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── header.tsx              # Navigation with flight megamenu
│   ├── footer.tsx              # Footer with logo
│   ├── preloader.tsx           # Loading animation with logo
│   ├── theme-provider.tsx      # Dark mode provider
│   ├── pwa-install-prompt.tsx  # PWA install prompt with logo
│   ├── service-worker-register.tsx
│   ├── flight-megamenu.tsx     # Flight megamenu component
│   ├── testimonials.tsx        # Testimonials section
│   ├── scroll-to-top.tsx       # Scroll to top button
│   └── mega-menu.tsx           # Mega menu navigation
├── lib/
│   └── constants.ts            # App constants & flight data
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── sw.js                   # Service worker
│   └── [images]                # Destination & blog images
├── __tests__/                  # Test files
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest setup
├── .eslintrc.json              # ESLint config
├── .prettierrc                 # Prettier config
└── tsconfig.json               # TypeScript config
\`\`\`

## Pages & Routes

### Main Pages
- **Home** (`/`) - Hero with flight search, destinations carousel, trending escapes
- **Flights** (`/flights`) - Flight listing with search and filtering
- **Flight Detail** (`/flights/[id]`) - Complete flight information and booking
- **Blog** (`/blog`) - Travel blog articles and stories
- **Blog Detail** (`/blog/[id]`) - Full article with author and metadata
- **Hotels** (`/hotels`) - Hotel booking (ready for content)
- **Cruises** (`/cruises`) - Cruise packages (ready for content)
- **Packages** (`/packages`) - Travel packages (ready for content)
- **Destinations** (`/destinations`) - All destinations listing
- **Destination Detail** (`/destinations/[id]`) - Destination information
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form

## Design System

### Color Palette

- **Primary**: Dark Navy (#001F3F) - Main brand color
- **Secondary**: Bright Orange (#FF6B35) - Accent color
- **Neutrals**: White, grays, and dark variants
- **Semantic tokens**: background, foreground, card, muted, etc.

### Typography

- **Font**: System fonts (optimized for performance)
- **Weights**: 400, 500, 600, 700, 800
- **Line Height**: 1.4-1.6 for body text

## Navigation Features

### Desktop Navigation
- Sticky header with logo
- Flight megamenu with 4 categories:
  - First Class Flights
  - Business Class Flights
  - International Flights from US
  - International Flights to US
- Quick links to all main pages
- Login and contact buttons

### Mobile Navigation
- Hamburger menu button
- Smooth drawer navigation (right to left)
- Close icon for easy dismissal
- Flight submenu with all categories
- Touch-friendly spacing

## Getting Started

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to see the app.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Testing

\`\`\`bash
# Run tests
npm test

# Watch mode
npm run test:watch
\`\`\`

### Code Quality

\`\`\`bash
# Lint code
npm run lint

# Format code
npm run format
\`\`\`

## PWA Features

- **Installable**: Add to home screen on mobile devices
- **Offline Support**: Service worker caches essential assets
- **App Manifest**: Configured with icons, shortcuts, and metadata
- **Install Prompt**: Custom UI with Infinity Travels logo
- **App Shortcuts**: Quick access to Flights, Destinations, Blog, and Contact

## Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance (WCAG AA)
- Mobile drawer with proper focus management

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind for minimal bundle
- Service worker caching strategy
- Preloading critical resources
- Smooth animations with Framer Motion

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel

\`\`\`bash
# Push to GitHub
git push origin main

# Vercel automatically deploys on push
\`\`\`

### Environment Variables

No environment variables required for basic functionality.

## Key Components

### Header Component
- Responsive navigation with Flight megamenu
- Mobile drawer navigation (right to left)
- Infinity Travels logo
- Login and contact buttons

### Flight Megamenu
- 4 flight categories with icons
- Hover animations on desktop
- Expandable on mobile
- Quick navigation to flight types

### Home Page
- Hero section with flight search form
- Trip type selection (Round Trip / One Way)
- Global vacation hotspots carousel
- Trending escapes section
- Specially picked deals
- Testimonials section
- Call-to-action sections

### Flight Pages
- Flight listing with cards
- Flight details with amenities
- Aircraft information
- Booking sidebar
- Related flights

### Blog Pages
- Blog listing with categories
- Featured articles
- Blog detail with full content
- Author and date information
- Read time estimates

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue on GitHub or contact support@infinitytravels.com.

---

Built with ❤️ using Next.js, Framer Motion, and Vercel
