# Next.js Starter Template

A modern, feature-rich starter template for Next.js projects using the App Router with TypeScript, Tailwind CSS, and a curated collection of UI libraries. Perfect for building static websites and web applications without database dependencies.

## Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS 4** for modern styling
- **HeroUI** component library with dark/light theme support
- **Shadcn/ui** drawer component integration
- **Lucide React** icons
- **Framer Motion** for smooth animations
- **Theme switching** with next-themes
- **ESLint** configuration for code quality
- **Turbopack** for faster development builds

## Project Structure

```bash
src/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Home page component
├── components/
│   └── ui/
│       └── drawer.tsx    # Shadcn/ui drawer component
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── providers/
    └── initial.tsx       # App providers (Theme, HeroUI, Toast)
```

## Tech Stack

### Core Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[HeroUI](https://www.heroui.com/)** - Modern React component library
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable components (drawer component included)
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

### Animation & Theming

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library (auto-installed by HeroUI)
- **[next-themes](https://www.npmjs.com/package/next-themes)** - Theme switching support

### Additional Libraries

- **[Vaul](https://vaul.dev/)** - Drawer component primitive
- **[class-variance-authority](https://cva.style/docs)** - Component variant utility
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Tailwind class merging

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone or download this template**

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## UI Libraries Usage

### HeroUI Components

HeroUI is the primary component library. It includes:

- Pre-built components (Button, Card, Input, etc.)
- Built-in dark/light theme support
- Automatic Framer Motion integration
- Toast notifications

```tsx
import { Button, Card } from "@heroui/react";

export default function Example() {
  return (
    <Card>
      <Button color="primary" variant="solid">
        Click me
      </Button>
    </Card>
  );
}
```

### Shadcn/ui Components

This template includes the drawer component from Shadcn/ui. You can add more components as needed:

```tsx
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
```

### Icons with Lucide React

```tsx
import { ArrowRight, Home, Settings } from "lucide-react";

export default function IconExample() {
  return (
    <div>
      <Home size={24} />
      <ArrowRight className="ml-2" />
    </div>
  );
}
```

## Theme Support

The template includes complete dark/light theme support:

- **System theme detection** - Automatically matches user's system preference
- **Manual theme switching** - Programmatic theme control
- **HeroUI integration** - All components support theming
- **Tailwind dark mode** - Dark variant classes available

```tsx
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## Animations with Framer Motion

Framer Motion is automatically installed as a dependency of HeroUI, but you can also use it directly for custom animations:

```tsx
import { motion } from "framer-motion";

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Animated content
    </motion.div>
  );
}
```

**Note**: Framer Motion is included as a dependency of HeroUI, so you don't need to install it separately unless you want to ensure you have the latest version for custom animations.

## Customization

### Adding New UI Components

1. **For Shadcn/ui components:**
   - Visit [ui.shadcn.com](https://ui.shadcn.com/)
   - Copy the component code to `src/components/ui/`
   - Update imports as needed

2. **For HeroUI components:**
   - All components are available from `@heroui/react`
   - Check [HeroUI documentation](https://www.heroui.com/) for usage

### Styling

- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Use Tailwind classes or CSS modules
- **Theme customization**: Modify the theme configuration in providers

### Utility Functions

The `cn` utility function in `src/lib/utils.ts` combines `clsx` and `tailwind-merge` for conditional class names:

```tsx
import { cn } from "@/lib/utils";

export default function Component({ className, isActive }) {
  return (
    <div className={cn(
      "base-classes",
      isActive && "active-classes",
      className
    )}>
      Content
    </div>
  );
}
```

## Dependencies Overview

### Production Dependencies

- `@heroui/react` - Component library with theming
- `@radix-ui/react-dialog` - Accessible dialog primitives
- `next` - React framework
- `react` & `react-dom` - React library
- `framer-motion` - Animation library (HeroUI dependency)
- `next-themes` - Theme switching
- `lucide-react` - Icon library
- `tailwind-merge` - Tailwind class merging
- `clsx` - Conditional classes
- `class-variance-authority` - Component variants
- `vaul` - Drawer component primitive

### Development Dependencies

- `typescript` - Type checking
- `tailwindcss` - CSS framework
- `eslint` & `eslint-config-next` - Code linting
- `@types/*` - TypeScript definitions

## Contributing

This is a starter template. Feel free to:

- Fork and customize for your needs
- Add new components and features
- Share improvements with the community

## License

This project is open source and available under the [MIT License](LICENSE).

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [HeroUI Documentation](https://www.heroui.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/icons)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---
