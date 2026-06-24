# Webmotion Studio - Agency Website

A modern, fully functional website for Webmotion Studio, built with Next.js, React, and Tailwind CSS. Features stunning animations, responsive design, and all essential sections for a creative agency.

## 🎨 Features

- **Modern Hero Section** - Eye-catching landing with animated background and CTA buttons
- **Services Showcase** - Four core services with interactive cards and hover effects
- **Portfolio Gallery** - Featured work across graphics design, video editing, and web development
- **About/Studio Section** - Company stats, values, and team information
- **Contact Form** - Fully functional contact form with validation
- **Footer** - Complete navigation and social links
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Dark Theme** - Modern dark UI with vibrant accent colors (Orange, Gold, Deep Blue)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd webmotion-studio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 📁 Project Structure

```
webmotion-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Main page component
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Navigation.tsx      # Top navigation bar
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Services.tsx       # Services showcase
│   │   ├── Portfolio.tsx      # Portfolio grid
│   │   ├── Studio.tsx         # About/studio section
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer section
├── public/                    # Static assets
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.ts             # Next.js configuration
```

## 🎯 Customization Guide

### Update Agency Information

Edit the relevant sections in each component:

1. **Company Name & Logo** - Edit `Navigation.tsx` and `Footer.tsx`
2. **Services** - Modify the `services` array in `Services.tsx`
3. **Portfolio Projects** - Update `portfolioProjects` array in `Portfolio.tsx`
4. **Contact Information** - Replace placeholder email and phone in `Contact.tsx`
5. **Colors** - Modify the color scheme in `tailwind.config.ts`

### Contact Information to Update Later

The following placeholders should be replaced with your actual information:

```
- Email: contact@webmotion.studio
- Phone: +1 (234) 567-8900
- Social Media Links: LinkedIn, Instagram, Twitter, YouTube
- Portfolio Projects: Add your actual case studies
```

## 🎨 Color Scheme

The website uses a vibrant color palette:

- **Primary**: `#FF6B35` (Bold Orange)
- **Accent**: `#F7B801` (Golden Yellow)
- **Secondary**: `#004E89` (Deep Blue)
- **Dark**: `#1A1A1A` (Near Black)
- **Light**: `#F5F5F5` (Off White)

To change colors, edit `tailwind.config.ts`.

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel (Recommended):

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or deploy manually:
```bash
npm install -g vercel
vercel
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with server-side rendering
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## 🔧 Environment Variables

Currently, no environment variables are required for basic functionality.

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For questions or issues, contact: support@webmotion.studio

## 🚀 Next Steps

1. Install dependencies: `npm install`
2. Update contact information and social links
3. Replace portfolio projects with your work
4. Add your actual images to portfolio sections
5. Deploy to production
6. Set up analytics and SEO

Enjoy your new agency website! 🎉
