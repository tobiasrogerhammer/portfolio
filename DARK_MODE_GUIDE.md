# 🌙 Enhanced Dark Mode System

This document outlines the new and improved dark mode implementation for Tobias Hammer's portfolio, featuring smooth transitions, better contrast, and enhanced user experience.

## 🚀 **Key Features**

### **1. Three-Theme System**

- **Light Mode**: Clean, bright interface with brand colors
- **Dark Mode**: Warm, high-contrast dark interface
- **System Mode**: Automatically follows user's OS preference

### **2. Smooth Transitions**

- **300ms cubic-bezier transitions** for all color changes
- **No flash of unstyled content** (FOUC) on page load
- **Hydration-safe** implementation with `suppressHydrationWarning`

### **3. Enhanced Color Palette**

- **Improved contrast ratios** for better accessibility
- **Warm dark tones** instead of harsh blacks
- **Brand color adaptation** for both light and dark modes

## 🎨 **Color System**

### **CSS Custom Properties**

```css
:root {
  /* Light mode colors */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;

  /* Brand colors */
  --brand-primary: 217 91% 30%; /* #124D95 */
  --brand-primary-light: 217 91% 95%; /* #E9F5FF */
  --brand-secondary: 0 100% 70%; /* #FF6B6B */
  --brand-accent: 174 100% 41%; /* #2BBBAD */
}

.dark {
  /* Dark mode colors - improved contrast and warmth */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --border: 217.2 32.6% 17.5%;

  /* Brand colors for dark mode */
  --brand-primary: 217 91% 60%; /* Lighter blue */
  --brand-primary-light: 217 91% 10%; /* Darker blue background */
  --brand-secondary: 0 100% 70%; /* Keep vibrant red */
  --brand-accent: 174 100% 50%; /* Brighter teal */
}
```

### **Utility Classes**

```css
.bg-brand-primary {
  background-color: hsl(var(--brand-primary));
}
.text-brand-primary {
  color: hsl(var(--brand-primary));
}
.border-brand-primary {
  border-color: hsl(var(--brand-primary));
}
.bg-brand-primary-light {
  background-color: hsl(var(--brand-primary-light));
}
.text-brand-secondary {
  color: hsl(var(--brand-secondary));
}
.text-brand-accent {
  color: hsl(var(--brand-accent));
}
```

## 🔧 **Implementation**

### **1. Theme Context (`/src/contexts/ThemeContext.tsx`)**

```tsx
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      setActualTheme(systemTheme);
    } else {
      root.classList.add(theme);
      setActualTheme(theme);
    }

    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
```

### **2. Theme Toggle Component (`/src/components/theme-toggle.tsx`)**

**Desktop Toggle:**

- Cycles through: Light → Dark → System → Light
- Shows appropriate icon (Sun/Moon/Monitor)
- Smooth hover animations

**Mobile Toggle:**

- Full-width button with label
- Shows current theme status
- Integrated into mobile navigation

### **3. Layout Integration (`/src/app/layout.tsx`)**

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## 🎯 **Component Updates**

### **Navigation**

- Added theme toggle to desktop and mobile navigation
- Updated button styling to use CSS variables
- Smooth transitions for all interactive elements

### **Hero Section**

- Background elements use CSS variables with opacity
- Social links have improved hover states
- All text colors use semantic color tokens

### **About Section**

- Background gradients adapt to theme
- Skill cards maintain brand colors
- Improved contrast for readability

## ✨ **Enhanced Features**

### **1. Smooth Transitions**

```css
* {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
```

### **2. Custom Scrollbar**

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--foreground));
}
```

### **3. Selection Colors**

```css
::selection {
  background-color: hsl(var(--brand-primary) / 0.3);
  color: hsl(var(--foreground));
}
```

### **4. Focus Styles**

```css
:focus-visible {
  outline: 2px solid hsl(var(--brand-primary));
  outline-offset: 2px;
}
```

## 🔄 **Theme Persistence**

- **LocalStorage**: Theme preference saved as `portfolio-theme`
- **System Detection**: Automatically detects OS preference changes
- **Hydration Safe**: Prevents FOUC with proper SSR handling

## 📱 **Responsive Design**

- **Mobile-first**: All dark mode styles work across all screen sizes
- **Touch-friendly**: Theme toggle optimized for mobile interaction
- **Performance**: Minimal JavaScript for theme switching

## 🎨 **Design Principles**

### **Accessibility**

- **WCAG AA compliant** contrast ratios
- **Focus indicators** for keyboard navigation
- **Semantic color tokens** for screen readers

### **User Experience**

- **Instant feedback** on theme changes
- **Smooth animations** (300ms duration)
- **Consistent behavior** across all components

### **Performance**

- **CSS-only transitions** for smooth performance
- **Minimal JavaScript** for theme logic
- **Optimized color calculations** using HSL

## 🚀 **Usage**

### **Adding Dark Mode to New Components**

1. **Use semantic color tokens:**

   ```tsx
   <div className="bg-background text-foreground">
     <p className="text-muted-foreground">Subtitle</p>
   </div>
   ```

2. **Use brand colors:**

   ```tsx
   <button className="bg-brand-primary text-white hover:bg-brand-primary/90">
     Click me
   </button>
   ```

3. **Add dark mode variants:**
   ```tsx
   <div className="bg-white dark:bg-card border border-gray-200 dark:border-border">
     Content
   </div>
   ```

### **Testing Dark Mode**

1. **Manual Testing:**

   - Toggle between all three themes
   - Check all components in both modes
   - Verify smooth transitions

2. **Accessibility Testing:**
   - Use browser dev tools to check contrast ratios
   - Test with screen readers
   - Verify keyboard navigation

## 🔮 **Future Enhancements**

- **Theme-specific animations** (different easing for light/dark)
- **Custom theme creation** (user-defined color schemes)
- **Theme-aware images** (different images for light/dark)
- **Reduced motion support** (respect user preferences)

---

This enhanced dark mode system provides a modern, accessible, and performant theme switching experience that enhances the overall user experience of the portfolio.
