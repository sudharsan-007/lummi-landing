# Product Requirements Document (PRD)
## Luumi Media Website

**Version:** 1.0  
**Date:** July 2025  
**Status:** Draft

---

## 1. Executive Summary

### Project Overview
Development of a high-performance, minimal, and modern website for Luumi Media using Astro and shadcn/ui components. The website will serve as the primary digital touchpoint for the agency, showcasing their message-led growth systems approach and converting visitors into qualified leads.

### Key Objectives
- Create a premium, polished web presence that reflects high-value positioning
- Implement a conversion-focused design with clear user pathways
- Build a performant, SEO-optimized site using modern web technologies
- Establish a scalable component system for future iterations

---

## 2. Technical Requirements

### Core Technology Stack
- **Framework:** Astro (latest stable version)
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **TypeScript:** For type safety
- **Package Manager:** pnpm (recommended) or npm
- **Deployment:** Vercel/Netlify (recommended)

### Performance Requirements
- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint (FCP):** < 1.5s
- **Time to Interactive (TTI):** < 3.5s
- **Core Web Vitals:** All metrics in "Good" range
- **Bundle Size:** < 200KB (initial JS)

### Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

---

## 3. Design Specifications

### Design Principles
1. **Minimal but Sophisticated:** Clean layouts with purposeful white space
2. **Typography-First:** Strong typographic hierarchy as primary design element
3. **Subtle Animations:** Micro-interactions that enhance without distraction
4. **Premium Feel:** Design choices that communicate high value and expertise

### Color System
```css
/* Primary Palette */
--primary: #0A0A0A;        /* Near black for text */
--primary-accent: #1A1A1A; /* Slightly lighter black */
--secondary: #FAFAFA;      /* Off-white background */
--accent: #0066FF;         /* Electric blue for CTAs */

/* Neutral Scale */
--gray-50: #FAFAFA;
--gray-100: #F4F4F5;
--gray-200: #E4E4E7;
--gray-300: #D4D4D8;
--gray-400: #A1A1AA;
--gray-500: #71717A;
--gray-600: #52525B;
--gray-700: #3F3F46;
--gray-800: #27272A;
--gray-900: #18181B;

/* Semantic Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
```

### Typography System
```css
/* Font Stack */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Cabinet Grotesk', 'Inter', sans-serif; /* Optional premium font */

/* Type Scale */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### Spacing System
- Use Tailwind's default spacing scale
- Consistent 8px grid system
- Section padding: 80px (desktop), 40px (mobile)
- Container max-width: 1280px

---

## 4. Component Architecture

### Core Components (shadcn/ui)
- **Button:** Primary, Secondary, Ghost, Outline variants
- **Card:** For service offerings and testimonials
- **Navigation:** Sticky header with smooth scroll
- **Form:** Contact form with validation
- **Toast:** Notifications for form submissions
- **Accordion:** For FAQ sections (if needed)
- **Dialog:** For modal interactions

### Custom Components
```typescript
// Component Structure
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Section.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── Solutions.astro
│   │   ├── Services.astro
│   │   ├── WhyChooseUs.astro
│   │   ├── Process.astro
│   │   ├── ClientTypes.astro
│   │   └── CTA.astro
│   ├── ui/
│   │   ├── ServiceCard.tsx
│   │   ├── ProcessStep.tsx
│   │   ├── FeatureList.tsx
│   │   └── ContactForm.tsx
│   └── common/
│       ├── SEO.astro
│       └── Analytics.astro
```

---

## 5. Page Structure

### Homepage Sections
1. **Header/Navigation**
   - Sticky on scroll
   - Logo + 4-5 nav items
   - CTA button (Book a Call)

2. **Hero Section**
   - Large display headline
   - Supporting subheadline
   - Primary CTA button
   - Subtle background pattern/gradient

3. **Solutions Snapshot**
   - Section intro text
   - 5 key deliverables in list format
   - Emphasis on outcomes

4. **Services Grid**
   - 5 service cards in responsive grid
   - Icon/emoji + title + description
   - Hover effects for interactivity

5. **Why Choose Us**
   - 5 value propositions
   - Check icons with descriptions
   - Summary statement

6. **Process Timeline**
   - 4-step visual process
   - Connected timeline design
   - Brief descriptions

7. **Client Types**
   - 3 ideal client descriptions
   - Philosophy statement

8. **CTA Section**
   - Strong closing headline
   - Final CTA button
   - Background accent color

9. **Footer**
   - Company info
   - Service links
   - Contact details
   - Social links

---

## 6. User Flows

### Primary User Flow
1. Land on homepage → Read hero message
2. Scroll to understand services → Build interest
3. Review process and credibility → Build trust
4. Click CTA → Book strategy call

### Secondary Flows
- Direct navigation to specific service
- Contact form submission
- Social proof exploration

---

## 7. SEO & Performance

### SEO Requirements
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags optimization
- Schema.org markup for LocalBusiness
- XML sitemap generation
- Robots.txt configuration

### Performance Optimization
- Image optimization (WebP format)
- Lazy loading for below-fold content
- Minimal JavaScript bundle
- CSS purging for unused styles
- Preload critical fonts
- Enable compression

---

## 8. Interactions & Animations

### Micro-interactions
```css
/* Hover States */
- Buttons: Scale 1.02 + shadow
- Cards: Lift effect (translateY + shadow)
- Links: Color transition + underline

/* Scroll Animations */
- Fade in on scroll (intersection observer)
- Stagger animations for lists
- Parallax for hero background (subtle)

/* Page Transitions */
- Smooth scroll for anchor links
- Route transitions (if multi-page)
```

### Animation Principles
- Duration: 200-300ms for micro-interactions
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Respect prefers-reduced-motion

---

## 9. Responsive Design

### Breakpoints
```css
- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px - 1279px
- Large: 1280px+
```

### Mobile Considerations
- Touch-friendly tap targets (min 44x44px)
- Simplified navigation (hamburger menu)
- Stacked layouts for cards/grids
- Reduced font sizes (maintaining readability)
- Optimized images for mobile bandwidth

---

## 10. Development Phases

### Phase 1: Foundation (Week 1)
- [ ] Setup Astro project with TypeScript
- [ ] Install and configure shadcn/ui
- [ ] Implement design tokens
- [ ] Create base layout components

### Phase 2: Core Components (Week 2)
- [ ] Build reusable UI components
- [ ] Implement responsive grid system
- [ ] Create section components
- [ ] Add animations/interactions

### Phase 3: Content Integration (Week 3)
- [ ] Integrate all content
- [ ] Implement contact form
- [ ] Add SEO optimizations
- [ ] Setup analytics

### Phase 4: Polish & Launch (Week 4)
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Deployment setup
- [ ] Launch preparation

---

## 11. Success Metrics

### Technical Metrics
- Page load time < 2 seconds
- Lighthouse score 95+
- Zero accessibility errors
- Mobile-friendly test pass

### Business Metrics
- Contact form conversion rate > 5%
- Average session duration > 2 minutes
- Bounce rate < 50%
- Strategy call bookings increase by 30%

---

## 12. Future Considerations

### Phase 2 Features
- Blog/Resource section
- Case studies with detailed pages
- Client portal login
- Live chat integration
- A/B testing framework

### Scalability
- Component library documentation
- CMS integration (Sanity/Contentful)
- Multi-language support
- Advanced analytics dashboard

---

## Appendix

### Resources
- [Astro Documentation](https://astro.build)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- Brand assets (to be provided)

### Accessibility Checklist
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Color contrast ratios
- [ ] Focus indicators
- [ ] Alt text for images
- [ ] ARIA labels where needed

### Quality Assurance
- [ ] Cross-browser testing
- [ ] Responsive design testing
- [ ] Form validation testing
- [ ] 404 page handling
- [ ] SEO audit
- [ ] Performance testing
- [ ] Security headers