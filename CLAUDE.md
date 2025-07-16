# CLAUDE.md - Luumi Media Website

## Project Overview
This is the landing page for Luumi Media, a premium digital agency specializing in message-led growth systems. The website serves as the primary conversion touchpoint for the agency, built with modern web technologies.

## Technical Stack
- **Framework:** Astro (latest stable version)
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Package Manager:** npm
- **Main Project:** Located in `lummi-website/` directory

## Project Structure
```
lummi-website/
├── src/
│   └── pages/
│       └── index.astro          # Main landing page
├── public/
│   └── favicon.svg
├── package.json
├── tsconfig.json
└── astro.config.mjs
```

## Key Features & Sections
The website includes these main sections:
1. **Hero Section** - Premium messaging with clear value proposition
2. **Solutions Snapshot** - 5 key deliverables focus
3. **Services Grid** - 5 service offerings in responsive layout
4. **Why Choose Us** - Value propositions and differentiators
5. **Process Timeline** - 4-step client journey
6. **Client Types** - Target audience descriptions
7. **CTA Section** - Conversion-focused call-to-action

## Development Guidelines
- Follow minimal, sophisticated design principles
- Maintain typography-first approach
- Use subtle animations and micro-interactions
- Ensure premium feel throughout
- Target Lighthouse score of 95+
- Mobile-first responsive design

## Performance Targets
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Bundle Size: < 200KB initial JS
- Core Web Vitals: All "Good" range

## Common Commands
- `cd lummi-website && npm install` - Install dependencies
- `cd lummi-website && npm run dev` - Start development server
- `cd lummi-website && npm run build` - Build for production
- `cd lummi-website && npm run preview` - Preview production build

## Testing & Quality
- Cross-browser testing required
- Mobile responsiveness testing
- SEO optimization with semantic HTML
- WCAG 2.1 AA accessibility compliance
- Performance optimization with image compression

## Claude Code Hooks
This project includes Claude Code hooks for enhanced development workflow:
- **PreToolUse**: Security validation and command logging
- **PostToolUse**: Result validation and transcript logging
- **Notification**: Custom notifications with TTS
- **Stop**: Completion messages and validation
- **SubagentStop**: Subagent completion notifications

## Brand Guidelines
- **Primary Color:** #0A0A0A (near black)
- **Secondary:** #FAFAFA (off-white)
- **Accent:** #0066FF (electric blue for CTAs)
- **Typography:** Inter font family
- **Approach:** Clean, minimal, premium positioning

## Content Focus
- Message-led growth systems
- High-value client positioning
- Conversion optimization
- Professional service delivery
- Strategic consulting approach

## Deployment
- Target: Vercel/Netlify
- Domain: TBD
- SSL: Required
- CDN: Automatic via platform