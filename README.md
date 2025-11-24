# Quinsar Restaurant Website

A professional, modern restaurant website built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

✅ **High-Impact Homepage** - Video hero section with call-to-action buttons  
✅ **Multiple Menu Sections** - Food, Breakfast, Drinks, and Chef's Recommendations  
✅ **High-Quality Gallery** - Organized image gallery with category filters  
✅ **About Page** - Brand story, values, and what makes the restaurant special  
✅ **Contact & Location** - Contact form, Google Maps, WhatsApp, phone buttons  
✅ **Google Reviews** - Customer testimonials section  
✅ **Fast & Optimized** - Image optimization, responsive design, SEO-ready  
✅ **Video Integration** - Promotional video on homepage and about page  
✅ **Professional Design** - Modern UI with consistent branding

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Update Contact Information

Update the following files with your actual restaurant information:

1. **Contact Page** (`src/app/contact/page.tsx`):

   - Phone number
   - WhatsApp number
   - Email address
   - Physical address
   - Opening hours

2. **Footer** (`src/components/Footer.tsx`):

   - Contact information
   - Social media links
   - Opening hours

3. **Google Maps Embed** (`src/app/contact/page.tsx`):
   - Replace the Google Maps embed URL with your restaurant's location
   - Get your embed code from [Google Maps](https://www.google.com/maps)

### Update Google Reviews

Edit `src/components/GoogleReviews.tsx` to:

- Add your actual Google Reviews link
- Update review data with real customer reviews
- Adjust the average rating and review count

### Customize Content

1. **Menu Items** (`src/app/menu/page.tsx`):

   - Update menu items, descriptions, and prices
   - Add/remove menu sections as needed

2. **About Page** (`src/app/about/page.tsx`):

   - Customize the restaurant story
   - Update values and special features

3. **Homepage** (`src/app/page.tsx`):
   - Update featured images
   - Customize call-to-action text

### SEO Configuration

Update metadata in:

- `src/app/layout.tsx` - Main site metadata
- Individual page files - Page-specific metadata

### Images and Video

- Place images in `public/images/` directory
- Video should be named `video.mp4` in `public/images/`
- Optimize images before adding (recommended: WebP format)

## Project Structure

```
quinsar/
├── public/
│   └── images/          # Restaurant images and video
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── gallery/     # Gallery page
│   │   ├── menu/        # Menu page
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Homepage
│   ├── components/      # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Footer.tsx   # Footer component
│   │   └── GoogleReviews.tsx
│   └── lib/             # Utility functions
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - UI components
- **lucide-react** - Icons

## Customization Tips

1. **Colors**: Edit `src/app/globals.css` to change the color scheme
2. **Fonts**: Update fonts in `src/app/layout.tsx`
3. **Components**: All components are in `src/components/` for easy customization
4. **Images**: Use Next.js Image component for automatic optimization

## Support

For issues or questions, please refer to the Next.js documentation or create an issue in the repository.

## License

This project is private and proprietary.
# quinsar
