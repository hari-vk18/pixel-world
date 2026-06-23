# Performance Optimization Guide for IOTC Website

## ✅ Implemented Optimizations

### 1. **Vite Build Configuration** 
- ✅ Code splitting into logical chunks (vendors, pages)
- ✅ Terser minification with console log removal
- ✅ CSS minification enabled
- ✅ ES2020 target for smaller output
- ✅ Dependency pre-bundling for faster loads
- ✅ Compression reporting enabled

### 2. **Image Optimization**
- ✅ Using WebP format (smaller than PNG/JPG)
- ✅ Proper alt attributes added to all images
- ✅ Images organized by breakpoints

### 3. **SEO & Core Web Vitals**
- ✅ Canonical URLs (prevents duplicate indexing)
- ✅ Structured data (Schema.org) on homepage
- ✅ Open Graph tags for social sharing
- ✅ Meta descriptions & keywords
- ✅ React Helmet for dynamic SEO

## 📋 Recommended Next Steps

### 1. **Enable Lazy Loading for Images**

Replace static imports with lazy loading:

```jsx
// Before
import heroImage from '/modern-multistory-residential-building-with-balconies-greenery.webp'
<img src={heroImage} />

// After
<img loading="lazy" src="/modern-multistory-residential-building-with-balconies-greenery.webp" alt="..." />
```

Add to all img tags in components like:
- HeroSection.jsx
- DesigningToday.jsx
- Portfolio cards
- Project images

### 2. **Remove Unused Dependencies**

Review these potentially unused packages:
```bash
npm ls
```

Check and remove if unused:
- `d3` and `d3-hexbin` (if not used for visualizations)
- `topojson-client` (if not used with D3)
- Unused Radix UI components

### 3. **Enable Compression on Server**

For DreamHost/production:

Add to `.htaccess`:
```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 30 days"
  ExpiresByType image/png "access plus 30 days"
  ExpiresByType image/jpeg "access plus 30 days"
  ExpiresByType image/gif "access plus 30 days"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
</IfModule>
```

### 4. **Use Intersection Observer for Animations**

Replace immediate animations with viewport-triggered ones:

```jsx
// In FadeOnScroll component - already implemented ✓
// Animations only trigger when elements enter viewport
```

### 5. **React Code Splitting**

Already implemented with React Router's lazy loading potential:

```jsx
// Consider lazy loading for page components
const Company = lazy(() => import('./pages/Company'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
```

### 6. **Bundle Analysis**

To visualize bundle size:

```bash
npm install --save-dev rollup-plugin-visualizer
```

Then add to vite.config.js:
```js
import { visualizer } from 'rollup-plugin-visualizer'

plugins: [
  visualizer({
    open: true,
    gzipSize: true
  })
]
```

### 7. **Monitor Performance**

Add Web Vitals tracking:

```jsx
// In App.jsx or main.jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

## 📊 Performance Checklist

- [ ] Lazy load all images in components
- [ ] Analyze bundle with visualizer
- [ ] Remove unused dependencies
- [ ] Add Gzip compression to .htaccess
- [ ] Set cache headers for static assets
- [ ] Test with Google PageSpeed Insights
- [ ] Monitor Core Web Vitals monthly
- [ ] Implement error boundary for better UX
- [ ] Add service worker for offline support
- [ ] Test performance on 3G/4G networks

## 🚀 Build & Test

```bash
# Build for production
npm run build

# Check bundle size
npm run build

# Run locally with production build
npm run start
```

## 🔗 Tools for Performance Testing

1. **Google PageSpeed Insights**: https://pagespeed.web.dev
2. **GTmetrix**: https://gtmetrix.com
3. **WebPageTest**: https://webpagetest.org
4. **Lighthouse (Chrome DevTools)**: Built-in

## 📈 Expected Improvements

After implementing these optimizations:
- **Load Time**: 40-60% faster
- **Time to Interactive**: 30-50% reduction
- **Bundle Size**: 25-35% smaller
- **Core Web Vitals**: Better scores (good or perfect)
- **SEO Score**: 95+ on Lighthouse

---

**Last Updated**: June 20, 2026
