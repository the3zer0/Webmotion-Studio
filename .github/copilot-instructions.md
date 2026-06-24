<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Webmotion Studio - Project Instructions

## Project Overview
This is a fully functional, modern agency website built with Next.js for Webmotion Studio - a graphics design, video editing, and web development agency.

## Tech Stack
- Next.js 14 with React 18
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

## Project Structure
- `/src/app/` - Next.js app router with main layout and page
- `/src/components/` - Reusable React components (Navigation, Hero, Services, Portfolio, Studio, Contact, Footer)
- `/src/globals.css` - Global styles and Tailwind imports
- `tailwind.config.ts` - Tailwind configuration with custom colors
- `tsconfig.json` - TypeScript configuration

## Color Scheme
- Primary: #FF6B35 (Orange)
- Accent: #F7B801 (Gold)
- Secondary: #004E89 (Deep Blue)
- Dark: #1A1A1A (Background)
- Light: #F5F5F5 (Text)

## Key Features
1. Hero section with gradient animations
2. Services showcase with 4 core services
3. Portfolio gallery with 6 sample projects
4. About/Studio section with company stats
5. Contact form with validation
6. Responsive footer with social links
7. Smooth scroll navigation

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### 3. Customization Checklist
- [ ] Update company email and phone in Contact.tsx
- [ ] Add WhatsApp and social media links
- [ ] Replace portfolio projects with actual work
- [ ] Update testimonials/stats in Studio.tsx
- [ ] Add favicon to public/ folder
- [ ] Update meta tags in layout.tsx
- [ ] Replace placeholder images with real images

### 4. Build for Production
```bash
npm run build
npm start
```

### 5. Deploy
Recommended: Deploy to Vercel for automatic builds and best performance
```bash
npm install -g vercel
vercel
```

## Component Details

### Navigation.tsx
- Fixed navigation with scroll detection
- Mobile menu toggle
- Smooth scroll to sections
- "Get Started" CTA button

### Hero.tsx
- Animated gradient text
- Background animations
- Play/Demo video button
- Scroll indicator

### Services.tsx
- 4-column grid (responsive)
- Interactive cards with hover effects
- Icons from lucide-react
- Service numbers and descriptions

### Portfolio.tsx
- 3-column grid (responsive)
- 6 sample projects
- Hover overlay with CTA
- Tag system for categorization

### Studio.tsx
- Statistics section
- Company values (4 items)
- Team information
- About company description

### Contact.tsx
- Fully functional contact form
- Form validation
- Multiple contact methods
- Social media links

### Footer.tsx
- Company info
- Navigation links
- Social links
- Scroll to top button
- Copyright information

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Important Notes

1. All contact information is set to placeholders - update before launch
2. Portfolio projects use sample data - replace with real projects
3. Images are using placeholder gradients - add real images for better results
4. Form submission currently logs to console - integrate with backend/email service
5. Social links are placeholder URLs - update with real social profiles

## Performance Tips

1. Use Next.js Image component for images
2. Lazy load portfolio images
3. Consider Code splitting for large components
4. Use Vercel Analytics for monitoring

## Future Enhancements

- Add blog section
- Integrate CMS (Sanity, Strapi, etc.)
- Add API routes for form submission
- Email notification system
- Analytics integration
- SEO optimization
- Dark/Light theme toggle

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- Vercel Deployment: https://vercel.com/docs
