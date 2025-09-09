# BeautySoft Landing Page

A production-ready landing page for BeautySoft, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 💅 **Tailwind CSS** for styling
- 🎨 **Framer Motion** for animations
- 📝 **React Hook Form** with Zod validation
- 📊 **Analytics** integration (GA4, Meta Pixel, Vercel)
- 🎯 **Lead capture** with API endpoint
- 📱 **Responsive design** for all devices
- ♿ **Accessibility** WCAG 2.1 AA compliant
- 🔍 **SEO optimized** with meta tags and structured data

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   cp env.example .env.local
   ```

   Then edit `.env.local` with your actual values.

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/lead/          # Lead capture API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation
│   └── ...                # Other sections
├── content/               # Content and copy
│   └── site.ts            # Site content and data
└── lib/                   # Utilities
    └── utils.ts           # Helper functions
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env.local` file with:

```bash
# Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789

# Email Service
RESEND_API_KEY=re_xxxxxxxxxx
```

## Performance

- ✅ Lighthouse Score: 95+ Performance, Accessibility, SEO
- ✅ Core Web Vitals optimized
- ✅ Image optimization with Next/Image
- ✅ Font optimization with next/font

## Analytics Events

The landing page tracks these events:

- `hero_cta_clicked` - CTA buttons in hero
- `lead_submitted` - Email form submissions
- `pricing_tier_selected` - Pricing plan clicks
- `faq_opened` - FAQ item expansions
- `scroll_section_view` - Section visibility

## Content Management

All copy and content is centralized in `src/content/site.ts` for easy updates.

## License

© 2024 BeautySoft. All rights reserved.
