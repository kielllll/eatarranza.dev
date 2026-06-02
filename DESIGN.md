# Design System - Personal Website

## Color System

### Background Colors

- **Primary Background**: Dark Neutral Base (`#1a1f24`) - slightly warmer than pure black
- **Secondary Background**: Dark Neutral Lighter (`#242b32`) - for cards/sections
- **Gradient Background**: Subtle radial gradient from center

  ```css
  background: radial-gradient(circle at center, #1a1f24 0%, #111518 100%);
  ```

### Text Colors

- **Primary Text**: White (`#ffffff`) - for headings and important content
- **Secondary Text**: Light Gray (`#e5e7eb`) - for body text
- **Tertiary Text**: Medium Gray (`#9ca3af`) - for captions and labels
- **Disabled Text**: Dark Gray (`#6b7280`) - for disabled states

### Accent Colors

- **Primary Accent**: Cyan (`#00d4ff`) - enhanced from original portfolio
- **Secondary Accent**: Purple (`#a855f7`) - for contrast and premium feel
- **Gradient Accent**: Subtle cyan-to-purple gradient

  ```css
  background: linear-gradient(135deg, #00d4ff 0%, #a855f7 100%);
  ```

### Status & Semantic Colors

- **Success**: Green (`#10b981`) - for positive indicators
- **Warning**: Amber (`#f59e0b`) - for attention
- **Error**: Red (`#ef4444`) - for errors
- **Info**: Blue (`#3b82f6`) - for information

### Color Usage Rules

- **Buttons**: Primary cyan, secondary purple outlines
- **Links**: Cyan with subtle underline
- **Cards**: Dark neutral backgrounds with subtle borders
- **Gradients**: Used sparingly on hero section and key CTAs only

## Typography

### Font Families

- **Primary Font**: Roboto Variable - for all text (headings, body, UI elements)
- **Monospace Font**: Fira Code - for code snippets, technical terms (optional)

### Type Scale

- **Hero Title**: 3rem (48px) - Roboto Variable Bold
- **Section Title**: 2.25rem (36px) - Roboto Variable Semibold
- **Subsection Title**: 1.75rem (28px) - Roboto Variable Semibold
- **Body Large**: 1.125rem (18px) - Roboto Variable Medium
- **Body Base**: 1rem (16px) - Roboto Variable Regular
- **Body Small**: 0.875rem (14px) - Roboto Variable Regular
- **Caption**: 0.75rem (12px) - Roboto Variable Medium

### Letter-spacing

- **Headings**: +0.01em (improved readability)
- **Body Text**: +0.01em (improved readability)
- **ALL CAPS**: +0.1em (for labels, tags)

### Line Heights

- **Headings**: 1.3 (readable, balanced)
- **Body Text**: 1.6 (readable, spacious)
- **Captions**: 1.4 (compact but clear)

## Spacing System

### Base Unit

- **Base Spacing**: 6px (upgraded from 4px for premium feel)

### Spacing Scale

- **xs**: 6px (0.375rem)
- **sm**: 12px (0.75rem)
- **md**: 24px (1.5rem)
- **lg**: 32px (2rem)
- **xl**: 48px (3rem)
- **2xl**: 64px (4rem)
- **3xl**: 96px (6rem)

### Section Spacing

- **Section Top/Bottom**: 96px (6rem) - generous vertical rhythm
- **Component Gap**: 32px (2rem) - between cards, items
- **Element Gap**: 24px (1.5rem) - between related elements

### Component Padding

- **Button Padding**: 12px 24px (md)
- **Card Padding**: 32px (lg)
- **Section Padding**: 48px (xl)
- **Input Padding**: 12px 16px (sm-md)

## Component Library

### Buttons

**Primary Button**

- Background: Cyan (`#00d4ff`)
- Text: Dark (`#111827`) for contrast
- Padding: 12px 24px
- Border-radius: 8px
- Font: Roboto Semibold 1rem
- Hover: Lighter cyan (`#00e0ff`) with subtle lift
- Focus: 2px ring cyan offset-2

**Secondary Button**

- Background: Transparent
- Border: 2px solid purple (`#a855f7`)
- Text: Purple
- Padding: 12px 24px
- Border-radius: 8px
- Hover: Purple background with white text
- Focus: 2px ring purple offset-2

**Gradient Button**

- Background: Cyan-to-purple gradient
- Text: White
- Padding: 12px 24px
- Border-radius: 8px
- Hover: Subtle scale (1.02) with shadow
- Focus: 2px ring purple offset-2

### Cards

**Feature Card**

- Background: Transparent
- Layout: Icon + title + description
- Icon: 48x48px, cyan accent
- Spacing: 24px between elements

**Project Card**

- Background: Dark neutral (`#242b32`)
- Padding: 32px
- Border-radius: 12px
- Border: 1px solid rgba(255,255,255,0.1)
- Shadow: Subtle glow on hover
- Layout: Icon + title + description + CTA
- Max-width: 280px

### Forms

**Input Fields**

- Background: Dark neutral (`#242b32`)
- Border: 1px solid rgba(255,255,255,0.2)
- Padding: 12px 16px
- Border-radius: 6px
- Font: Roboto Regular 1rem
- Text: White
- Placeholder: Light gray (`#9ca3af`)
- Focus: Border cyan, 2px ring cyan offset-1
- Error: Border red, helper text red

**Labels**

- Font: Roboto Medium 0.875rem
- Color: Light gray (`#e5e7eb`)
- Margin-bottom: 6px (xs)
- Required indicator: Red asterisk

**Submit Button**

- Full-width primary button
- Height: 48px
- Font: Roboto Semibold 1rem

### Navigation

**Desktop Header**

- Background: Dark neutral with subtle gradient
- Padding: 16px 48px
- Layout: Logo (left) + Links (center) + CTA (right)
- Links: Spaced 32px apart, subtle underline on hover

**Mobile Header**

- Logo (left) + Menu button (right)
- Mobile menu: Slide-down overlay
- Menu items: 48px height, full-width


### Contact Section

**Contact Info**

- Email: Link with mailto:
- Social links: Icon buttons, 40px size
- Location: Text display (optional)
- Availability status: Green dot + text (optional)

## Layout Patterns

### Grid System

**Single-Column Grid**

- All devices: Single column layout
- Gutters: 24px spacing between elements
- Max-width: 480px for consistency

**Container Widths**

- All devices: max-width 480px
- Mobile: padding 24px
- Tablet: padding 32px
- Desktop: padding 48px

### Section Structures

**Hero Section**

- Layout: Centered or split (text left, visual right)
- Content: Headline + Subheadline + Primary CTA + Secondary CTA
- Spacing: 96px top/bottom
- Background: Subtle radial gradient

**About Section**

- Layout: Feature cards or split layout
- Content: Key information + supporting points
- Icons: Consistent style, cyan accent
- Spacing: 64px top/bottom

**Projects Section**

- Layout: Grid of project cards
- Section title: Centered
- Cards: 2-3 per row, equal height
- Spacing: 64px top/bottom

**Contact Section**

- Layout: Centered or split (info left, contact right)
- Info: Contact details + social links
- Spacing: 96px top/bottom

### Responsive Behavior

**Breakpoints**

- Mobile: < 640px (default)
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Mobile Adaptations**

- Stack all grids to 1 column
- Reduce padding: 24px instead of 48px
- Simplify navigation: hamburger menu
- Adjust font sizes: scale down by 10-15%

**Tablet Adaptations**

- 2-column grids where possible
- Medium padding: 32px
- Horizontal navigation if space permits

## Interactive States

### Hover Effects

**Buttons**

- Primary: Lighter color + 2px lift
- Secondary: Background fill + text color flip
- Gradient: Scale 1.02 + shadow
- Duration: 200ms ease-out

**Cards**

- Subtle translateY (-4px)
- Shadow intensity increase
- Border color change (cyan)
- Duration: 250ms ease-out

**Links**

- Underline expand from center
- Color brightness increase
- Duration: 150ms ease-out

### Focus States

**Form Elements**

- Border: Cyan (`#00d4ff`)
- Ring: 2px cyan with offset-1
- Outline: None
- Duration: 150ms ease-out

**Buttons**

- Ring: 2px offset-2, matching button color
- Duration: 150ms ease-out

### Active States

**Buttons**

- Scale 0.98 (press effect)
- Duration: 100ms ease-in

**Links**

- Underline full width
- Color saturation increase

### Loading States

**Buttons**

- Show spinner (16px)
- Disable button
- Reduce opacity to 0.7
- Spinner: Cyan, clockwise rotation

**Forms**

- Show loading overlay
- Skeleton loaders for cards
- Gray placeholders with shimmer effect

## Iconography & Brand Elements

### Icon Library

**Social Icons**

- GitHub: 40x40px
- LinkedIn: 40x40px
- Twitter: 40x40px
- Email: 40x40px
- Style: Fill, hover cyan

**UI Icons**

- Menu: Hamburger, 32x32px
- Close: X, 24x24px
- Arrow: Right chevron, 16x16px
- Check: Success indicator, 24x24px

### Logo Guidelines

**Placeholder Specifications**

- Size: 200x200px (square 1:1)
- Style: Minimal, geometric
- Color: Cyan + Purple gradient
- Usage: Header, favicon, social media
- Spacing: 16px clearance minimum
- Background: Works on both dark and light

**Logo Placement**

- Header: Left-aligned, 40px height
- Footer: Centered, 32px height
- Favicon: 32x32px



## Animation Guidelines

### Transition Speeds

**Fast Interactions**

- Hover effects: 150-200ms
- Focus states: 150ms
- Button clicks: 100ms

**Medium Animations**

- Card lifts: 250ms
- Page transitions: 300ms
- Menu slides: 300ms

**Slow Animations**

- Hero fade-in: 500ms
- Section reveals: 600ms
- Complex interactions: 800ms

### Easing Functions

**Professional Curves**

- Ease-out: `cubic-bezier(0.215, 0.61, 0.355, 1)` - natural exits
- Ease-in-out: `cubic-bezier(0.645, 0.045, 0.355, 1)` - smooth transitions
- Custom ease: `cubic-bezier(0.4, 0, 0.2, 1)` - premium feel

### Animation Types

**Fade Animations**

- Opacity: 0 → 1
- Duration: 300ms
- Easing: ease-out
- Use: Page reveals, content loading

**Slide Animations**

- Direction: Up/Down/Left/Right
- Distance: 20-30px
- Duration: 300ms
- Easing: ease-out
- Use: Menus, modals, cards

**Scale Animations**

- Scale: 1 → 1.02 (hover) or 1 → 0.98 (active)
- Duration: 200ms
- Easing: ease-out
- Use: Buttons, cards

**Animations to Avoid**

- Bouncing effects (unprofessional)
- Excessive rotations
- Rainbow color changes
- Jittery movements
- Overly complex sequences

## CSS Utility Classes

### Spacing Utilities

```css
.padding-xs {
  padding: 6px;
}
.padding-sm {
  padding: 12px;
}
.padding-md {
  padding: 24px;
}
.padding-lg {
  padding: 32px;
}
.padding-xl {
  padding: 48px;
}
.padding-2xl {
  padding: 64px;
}

.gap-xs {
  gap: 6px;
}
.gap-sm {
  gap: 12px;
}
.gap-md {
  gap: 24px;
}
.gap-lg {
  gap: 32px;
}
.gap-xl {
  gap: 48px;
}
```

### Typography Utilities

```css
.font-primary {
  font-family: "Roboto Variable", sans-serif;
}
.font-mono {
  font-family: "Fira Code", monospace;
}

.text-hero {
  font-size: 3rem;
  font-weight: 700;
}
.text-section {
  font-size: 2.25rem;
  font-weight: 600;
}
.text-body-lg {
  font-size: 1.125rem;
  font-weight: 500;
}
.text-body {
  font-size: 1rem;
  font-weight: 400;
}
.text-body-sm {
  font-size: 0.875rem;
  font-weight: 400;
}
.text-caption {
  font-size: 0.75rem;
  font-weight: 500;
}
```

### Color Utilities

```css
.bg-dark {
  background-color: #1a1f24;
}
.bg-dark-lighter {
  background-color: #242b32;
}
.bg-gradient {
  background: radial-gradient(circle at center, #1a1f24 0%, #111518 100%);
}

.text-primary {
  color: #ffffff;
}
.text-secondary {
  color: #e5e7eb;
}
.text-tertiary {
  color: #9ca3af;
}
.text-accent {
  color: #00d4ff;
}
```

### Border Utilities

```css
.border-subtle {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.border-accent {
  border-color: #00d4ff;
}
.border-radius-sm {
  border-radius: 6px;
}
.border-radius-md {
  border-radius: 8px;
}
.border-radius-lg {
  border-radius: 12px;
}
```

## Responsive Design Specs

### Mobile (< 640px)

- Container: max-width 480px, padding 24px
- Grid: 1 column
- Font sizes: -10%
- Navigation: Hamburger menu
- Cards: Full width

### Tablet (640px - 1024px)

- Container: max-width 480px, padding 32px
- Grid: 1 column
- Font sizes: Base size
- Navigation: Horizontal if space permits
- Cards: Full width

### Desktop (> 1024px)

- Container: max-width 480px, padding 48px
- Grid: 1 column
- Font sizes: Base size
- Navigation: Full horizontal
- Cards: Full width

## Accessibility Guidelines

### Color Contrast

- Minimum contrast ratio: 4.5:1 (WCAG AA)
- Preferred contrast ratio: 7:1 (WCAG AAA)
- Test all color combinations
- Ensure text is readable on all backgrounds

### Keyboard Navigation

- All interactive elements: Focusable
- Focus indicators: Visible (2px ring)
- Tab order: Logical
- Skip links: Available

### Screen Readers

- Alt text: All images
- ARIA labels: Interactive elements
- Semantic HTML: Proper heading hierarchy
- Link text: Descriptive

### Motion Preferences

- Respect `prefers-reduced-motion`
- Provide alternative for animations
- No auto-playing videos
- Control over audio elements

## Performance Guidelines

### Image Optimization

- Format: WebP with fallbacks
- Size: Compressed, appropriate dimensions
- Loading: Lazy loading for below-fold
- Responsive: srcset for multiple sizes

### CSS Optimization

- Critical CSS: Inline above-fold
- Unused CSS: Remove in production
- Minification: Enabled
- PurgeCSS: Remove unused styles

### Font Loading

- Font-display: Swap
- Subset: Character subsets only
- Preload: Critical fonts
- Fallback: System fonts available

## Implementation Notes

### Order of Operations

1. Set up color variables and CSS custom properties
2. Define typography scale and font loading
3. Create spacing system and utility classes
4. Build component library
5. Implement responsive layouts
6. Add animations and interactions
7. Test accessibility and performance
8. Document usage examples

### Testing Checklist

- [ ] All color combinations meet contrast ratios
- [ ] Responsive layouts work at all breakpoints
- [ ] Interactive elements have proper focus states
- [ ] Animations respect motion preferences
- [ ] Forms are accessible via keyboard
- [ ] Images have appropriate alt text
- [ ] Performance metrics meet targets
- [ ] Cross-browser compatibility verified

### Maintenance Guidelines

- Update design tokens when brand evolves
- Test new components against existing patterns
- Document any deviations from design system
- Keep component library synchronized
- Review accessibility compliance regularly

## CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bg-primary: #1a1f24;
  --color-bg-secondary: #242b32;
  --color-text-primary: #ffffff;
  --color-text-secondary: #e5e7eb;
  --color-text-tertiary: #9ca3af;
  --color-accent-primary: #00d4ff;
  --color-accent-secondary: #a855f7;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;

  /* Typography */
  --font-primary: "Roboto Variable", sans-serif;
  --font-mono: "Fira Code", monospace;

  /* Spacing */
  --space-xs: 6px;
  --space-sm: 12px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --transition-medium: 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --transition-slow: 500ms cubic-bezier(0.215, 0.61, 0.355, 1);

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 20px rgba(0, 212, 255, 0.3);
}
```

---

**This design system provides a premium, polished foundation for your personal portfolio while maintaining the dark, professional aesthetic with subtle gradients that enhances rather than distracts from your content.**

