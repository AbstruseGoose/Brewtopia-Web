# Brewtopia - Mobile Craft Coffee

A modern, performance-focused website for Brewtopia, a mobile craft coffee trailer operating in East Tennessee.

## About the Business

Brewtopia is a locally owned coffee trailer operated by a husband-and-wife team since September 2025. We serve rotating seasonal menus at events, pop-ups, and community locations throughout East Tennessee.

## Design Philosophy

### Dark Modern Theme
- **Base:** Black and charcoal backgrounds (#0a0a0a, #1a1a1a)
- **Accents:** Warm copper and cream tones (#d4a574, #e8dcc7)
- **Typography:** Inter font family for clean, modern readability
- **Aesthetic:** Black-glass, premium but approachable, modern food truck meets craft coffee

### Mobile-First Approach
The site is built mobile-first with a fully responsive layout that works seamlessly across all devices.

### Performance Optimized
- Static HTML/CSS/JS only - no frameworks
- Minimal JavaScript for essential interactions
- Optimized for fast loading
- GitHub Pages ready

## Key Features

### Sections
1. **Hero** - Clear, direct messaging with CTAs
2. **About** - Authentic ownership story and business values
3. **Menu** - Current seasonal menu (Fall 2025) with download option
4. **Find Us** - Mobile trailer locations and event booking info
5. **Events** - Future-ready section for upcoming appearances
6. **Contact** - Social links and email contact

### Technical Stack
- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern layout with CSS Grid and Flexbox
- **Vanilla JavaScript** - Minimal, performant interactions
- **No dependencies** - No frameworks or libraries needed

## File Structure

```
Brewtopia-Web/
├── index.html                  # Main HTML structure
├── styles.css                  # Dark theme styling
├── script.js                   # Minimal JavaScript
├── Coffee Brewtopia logo.png   # Business logo
├── Fall Menu 2025 Brewtopia... # Current menu
└── README.md                   # This file
```

## Getting Started

### View Locally
1. Open `index.html` directly in a browser, or
2. Use a local server for best results:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# VS Code Live Server
Use the Live Server extension
```

Then navigate to `http://localhost:8000`

## Customization Guide

### Updating Content

**Menu**: Replace the menu image file and update the filename in index.html

**Locations/Schedule**: Edit the "Find Us" section in index.html

**Events**: Populate the events section when ready

**Contact Info**: Update email and social links in the Contact section

### Styling Changes

All styles are in `styles.css` with CSS custom properties (variables) at the top for easy theme adjustments:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --accent-copper: #d4a574;      /* Accent color */
    /* ... more variables */
}
```

### Adding Features

The JavaScript in `script.js` is intentionally minimal. Add new interactions as needed, keeping performance in mind.

## Deployment

### GitHub Pages
1. Push repository to GitHub
2. Go to Settings → Pages
3. Select main branch and root folder
4. Your site will be live at `https://yourusername.github.io/Brewtopia-Web`

### Netlify
1. Connect GitHub repository
2. Build command: (none needed - static site)
3. Publish directory: `/`
4. Deploy

### Vercel
1. Import repository
2. Framework preset: Other
3. Deploy

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (dark theme)
- Reduced motion support for users who prefer it

## Performance

- No external dependencies
- Minimal JavaScript
- Optimized images
- Clean, efficient CSS
- Fast load times

## License

© 2026 Brewtopia. All rights reserved.

---

**Brewtopia** • Mobile Craft Coffee • East Tennessee  
Locally owned since September 2025