# Shared Header & Footer Implementation Guide

## Overview
All pages now use a centralized header and footer system. This means you only maintain one copy of these components, and all pages automatically use the same design.

## Files Created

### 1. **header.html** (Root directory)
Contains the shared navigation bar with:
- SPE logo and branding
- Navigation links to all sections
- Register button
- Mobile menu toggle

### 2. **footer.html** (Root directory)
Contains the shared footer with:
- Sponsorship contact information
- Social media links
- Quick links
- Copyright notice

### 3. **assests/js/shared.js** (JavaScript)
Automatically:
- Loads header.html and injects it into pages
- Loads footer.html and injects it into pages
- Applies all styling and animations
- Works for both root pages and detail pages (automatically detects path)

### 4. **detailpage/template.html** (Example template)
A complete template showing how to set up new detail pages

## How to Use

### For Detail Pages (in detailpage/ folder):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... your head content ... -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Tailwind config here -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <style>
        /* Your animations and styles */
    </style>
</head>

<body class="bg-gradient-to-br from-dark-bg via-slate-900 to-slate-800 text-text-light">
    <!-- Shared Header will be injected here -->
    <div id="shared-header"></div>

    <!-- YOUR PAGE CONTENT GOES HERE -->
    <section class="py-24 px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
    </section>

    <!-- Shared Footer will be injected here -->
    <div id="shared-footer"></div>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../assests/js/shared.js"></script>

    <script>
        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    </script>
</body>
</html>
```

## Key Points

1. **Automatic Path Detection**: The shared.js script automatically detects if you're on a detail page or root page and loads files from the correct location

2. **For Root Pages**: Use `./assests/js/shared.js`
3. **For Detail Pages** (in detailpage/): Use `../assests/js/shared.js`

4. **Header Links**: 
   - All navigation links use `/` paths (absolute) so they work from any page
   - The header automatically includes the Register button

5. **Styling**: 
   - All Tailwind config must be in the `<head>` of each page
   - Custom animations (@keyframes) should be in a `<style>` tag
   - The shared.js injects nav styling automatically

6. **CDN Scripts**: Each page should include:
   - Tailwind CSS CDN
   - Font Awesome (for icons)
   - Google Fonts
   - AOS (for animations)
   - jQuery (if needed)

## Updating Header/Footer

To update the header or footer across ALL pages:

1. Edit **header.html** (for navigation changes)
2. Edit **footer.html** (for contact info, social links, etc.)
3. Changes automatically apply to all pages on next page load

## Example: Adding a New Detail Page

1. Copy **detailpage/template.html** to **detailpage/yourpage.html**
2. Replace the content inside the `<section>` tag
3. Update the `<title>` tag
4. That's it! The header and footer will automatically load

No need to:
- Duplicate header code
- Duplicate footer code
- Update multiple files
- Worry about broken links

## Troubleshooting

- **Header/Footer not appearing**: Check browser console for fetch errors
- **Links not working**: Ensure paths use `/` (absolute) format
- **Styling not applied**: Make sure Tailwind config is in `<head>` before calling shared.js
- **Mobile menu not working**: Include the Font Awesome icon library

## Migration Checklist

If updating existing detail pages:

- [ ] Add `<div id="shared-header"></div>` after `<body>` tag
- [ ] Remove old header code
- [ ] Add `<div id="shared-footer"></div>` before `</body>` tag
- [ ] Remove old footer code
- [ ] Add `<script src="../assests/js/shared.js"></script>` before other scripts
- [ ] Update all relative links to use `/` paths where applicable
- [ ] Test on mobile and desktop
