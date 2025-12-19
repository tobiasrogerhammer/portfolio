# Portfolio Font Hierarchy System

## Typography Scale

### Primary Headings (H1)

- **Hero Name**: `text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight`
- **Use**: Main page titles, hero sections
- **Weight**: font-black (900)
- **Tracking**: tracking-tight

### Secondary Headings (H2)

- **Section Titles**: `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight`
- **Hero Subtitle**: `text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide`
- **Use**: Section headers, page subtitles
- **Weight**: font-bold (700) or font-light (300)
- **Tracking**: tracking-tight or tracking-wide

### Tertiary Headings (H3)

- **Subsection Titles**: `text-2xl sm:text-3xl font-semibold tracking-tight`
- **Use**: Card titles, subsection headers
- **Weight**: font-semibold (600)
- **Tracking**: tracking-tight

### Quaternary Headings (H4)

- **Card Headers**: `text-base sm:text-lg font-semibold tracking-tight`
- **Use**: Small section headers, card titles
- **Weight**: font-semibold (600)
- **Tracking**: tracking-tight

### Body Text

- **Primary Body**: `text-lg sm:text-xl font-normal leading-relaxed`
- **Secondary Body**: `text-base sm:text-lg font-normal leading-relaxed`
- **Use**: Main content, descriptions
- **Weight**: font-normal (400)
- **Leading**: leading-relaxed

### Small Text

- **Captions**: `text-sm sm:text-base font-medium tracking-wide uppercase`
- **Use**: Labels, captions, small descriptions
- **Weight**: font-medium (500)
- **Tracking**: tracking-wide uppercase

### Navigation

- **Logo**: `text-lg sm:text-xl font-bold tracking-tight`
- **Nav Links**: `text-base font-medium`
- **Use**: Navigation elements
- **Weight**: font-bold (700) for logo, font-medium (500) for links

## Color Hierarchy

### Primary Text

- **Headings**: `#124D95` (Brand Blue)
- **Dark Mode Headings**: `text-white`

### Secondary Text

- **Body Text**: `text-gray-700 dark:text-gray-300`
- **Light Mode**: `text-gray-700`
- **Dark Mode**: `text-gray-300`

### Accent Text

- **Captions**: `#124D95` (Brand Blue)
- **Links**: `text-primary`

## Responsive Breakpoints

### Mobile (default)

- **H1**: `text-4xl` (36px)
- **H2**: `text-3xl` (30px)
- **H3**: `text-2xl` (24px)
- **H4**: `text-base` (16px)
- **Body**: `text-lg` (18px)
- **Small**: `text-sm` (14px)

### Small (sm: 640px+)

- **H1**: `text-6xl` (60px)
- **H2**: `text-4xl` (36px)
- **H3**: `text-3xl` (30px)
- **H4**: `text-lg` (18px)
- **Body**: `text-xl` (20px)
- **Small**: `text-base` (16px)

### Large (lg: 1024px+)

- **H1**: `text-8xl` (96px)
- **H2**: `text-5xl` (48px)
- **H3**: `text-3xl` (30px)
- **H4**: `text-lg` (18px)
- **Body**: `text-xl` (20px)
- **Small**: `text-base` (16px)

## Implementation Guidelines

### Font Weights

- **font-black (900)**: Hero titles only
- **font-bold (700)**: Main headings, logo
- **font-semibold (600)**: Subheadings, card titles
- **font-medium (500)**: Navigation, captions
- **font-light (300)**: Hero subtitles
- **font-normal (400)**: Body text

### Letter Spacing

- **tracking-tight**: All headings
- **tracking-wide**: Hero subtitles, captions
- **Default**: Body text

### Line Height

- **leading-relaxed**: All body text
- **Default**: Headings

## Usage Examples

```jsx
// Hero Title
<h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-tight">

// Section Title
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">

// Subsection Title
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">

// Card Title
<h4 className="text-base sm:text-lg font-semibold tracking-tight">

// Body Text
<p className="text-lg sm:text-xl font-normal leading-relaxed">

// Caption
<span className="text-sm sm:text-base font-medium tracking-wide uppercase">
```

This hierarchy creates a clear visual structure that guides users through your content while maintaining consistency across all components.
