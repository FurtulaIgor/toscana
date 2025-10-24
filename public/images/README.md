# Alto Coffee - Media Assets

## Folder Structure

### `/images/hero/`
- Hero background images
- Main banner visuals

### `/images/about/`
- About section images
- Team photos
- Coffee preparation images

### `/images/gallery/`
- Coffee shop ambiance
- Product photography
- Interior design shots
- Coffee art and preparation

### `/images/locations/`
- Individual location photos
- Exterior and interior shots
- Location-specific imagery

## Image Guidelines

- **Format**: Use WebP for better compression, with JPG fallbacks
- **Sizes**: 
  - Hero images: 1920x1080px minimum
  - Gallery images: 800x600px
  - Location images: 600x400px
  - About section: 800x600px
- **Optimization**: Compress images for web use
- **Naming**: Use descriptive names (e.g., `hero-coffee-beans.webp`, `gallery-latte-art-01.jpg`)

## Usage

Images are referenced from the `/public` folder using relative paths:
```jsx
<img src="/images/gallery/coffee-shop-interior.jpg" alt="Description" />
```