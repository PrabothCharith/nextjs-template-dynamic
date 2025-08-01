# Next.js Dynamic Web Application Template

A modern, full-stack starter template for building dynamic web applications with Next.js. This template includes everything you need to create data-driven applications with authentication, database integration, and state management - all built with modern technologies and best practices.

## Features

### Core Framework & Development
- **Next.js 15** with App Router and TypeScript
- **React 19** with full server/client components support
- **Turbopack** for lightning-fast development builds
- **ESLint** configuration for code quality
- **TypeScript** for type safety throughout the application

### Database & Backend
- **Prisma ORM** for type-safe database operations
- **PostgreSQL** database support (with Prisma Cloud)
- **Database migrations** and seeding
- **API Routes** with Next.js App Router
- **Server-side data fetching** and caching

### State Management & Data Fetching
- **TanStack Query (React Query)** for server state management
- **React Query DevTools** for debugging
- **Optimistic updates** and background refetching
- **Infinite queries** and pagination support

### UI & Styling
- **Tailwind CSS 4** for modern, utility-first styling
- **HeroUI** component library with full theme support
- **Shadcn/ui** components integration
- **Dark/Light theme** switching with next-themes
- **Framer Motion** for smooth animations and transitions
- **Lucide React** for beautiful, consistent icons

### Developer Experience
- **Hot reloading** with Turbopack
- **Type-safe database queries** with Prisma
- **Automatic type generation** from database schema
- **Built-in development tools** and debugging
- **Production-ready** build configuration

## Project Structure

```bash
src/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Home page component
│   └── api/
│       └── example/
│           └── route.ts  # Example API endpoint with Prisma
├── components/
│   └── ui/
│       └── drawer.tsx    # Shadcn/ui drawer component
├── lib/
│   ├── prisma.ts         # Prisma client singleton
│   └── utils.ts          # Utility functions (cn helper)
└── providers/
    └── initial.tsx       # App providers (Theme, HeroUI, TanStack Query)

prisma/
├── schema.prisma         # Database schema definition
└── seed.ts              # Database seeding script

.env                     # Environment variables (DATABASE_URL)
```

## Tech Stack

### Core Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with server/client components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience

### Database & ORM

- **[Prisma](https://www.prisma.io/)** - Next-generation ORM for Node.js and TypeScript
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)** - Type-safe database client

### State Management

- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization for React
- **[React Query DevTools](https://tanstack.com/query/latest/docs/react/devtools)** - Debugging and development tools

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[HeroUI](https://www.heroui.com/)** - Modern React component library
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable components (drawer component included)
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

### Animation & Theming

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[next-themes](https://www.npmjs.com/package/next-themes)** - Theme switching support

### Additional Libraries

- **[Vaul](https://vaul.dev/)** - Drawer component primitive
- **[class-variance-authority](https://cva.style/docs)** - Component variant utility
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Tailwind class merging

## Getting Started

### Prerequisites

- **Node.js 18+** (LTS recommended)
- **npm**, **yarn**, or **pnpm** package manager
- **PostgreSQL database** (local installation or cloud service)

### Installation & Setup

#### 1. Clone or Download the Template

```bash
# Clone the repository
git clone https://github.com/your-username/nextjs-template.git
cd nextjs-template

# Or download and extract the template files
```

#### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

#### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
# Create environment file
touch .env
```

Add your database connection string to `.env`:

```env
# Database Connection
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# For Prisma Cloud (recommended for development)
# DATABASE_URL="prisma+postgres://your-connection-string"
```

**Database URL Examples:**

- **Local PostgreSQL:** `postgresql://postgres:password@localhost:5432/myapp`
- **Railway:** `postgresql://postgres:password@containers-us-west-1.railway.app:7954/railway`
- **Supabase:** `postgresql://postgres:password@db.project.supabase.co:5432/postgres`
- **Prisma Cloud:** `prisma+postgres://accelerate.prisma-data.net/?api_key=your-api-key`

#### 4. Database Setup

##### Option A: Using Prisma Cloud (Recommended for beginners)

1. Visit [Prisma Cloud](https://console.prisma.io/) and create a free account
2. Create a new database project
3. Copy the connection string to your `.env` file
4. Run the migration:

```bash
npx prisma migrate dev --name init
```

##### Option B: Local PostgreSQL

1. Install PostgreSQL on your system
2. Create a new database:

```sql
CREATE DATABASE your_app_name;
```

3. Update the `DATABASE_URL` in `.env` with your local connection details
4. Run the migration:

```bash
npx prisma migrate dev --name init
```

#### 5. Generate Prisma Client

```bash
npx prisma generate
```

#### 6. Seed the Database (Optional)

```bash
npm run seed
# or
npx prisma db seed
```

#### 7. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

#### 8. Open Your Application

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Verify Setup

Your application should now be running with:

- Database connected and migrated
- Sample data seeded (if you ran the seed command)
- API endpoints working (`/api/example`)
- UI components and theming functional
- TanStack Query configured for data fetching

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create and apply new migration
- `npx prisma generate` - Generate Prisma Client
- `npx prisma db seed` - Seed the database with sample data
- `npx prisma db push` - Push schema changes to database (development)

## Development Guide

### Database Operations

#### Creating Models

Define your data models in `prisma/schema.prisma`:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### Running Migrations

After modifying your schema:

```bash
# Create and apply migration
npx prisma migrate dev --name add_user_model

# Reset database (development only)
npx prisma migrate reset
```

#### Database Seeding

Update `prisma/seed.ts` to populate your database:

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create sample users
  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice Johnson',
      posts: {
        create: [
          {
            title: 'Hello World',
            content: 'This is my first post!',
            published: true,
          },
        ],
      },
    },
  });

  console.log({ user1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### API Development

#### Creating API Routes

Create type-safe API endpoints in `src/app/api/`:

```typescript
// src/app/api/users/route.ts
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();
    
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
```

#### Dynamic Routes

```typescript
// src/app/api/users/[id]/route.ts
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        posts: true,
      },
    });
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
```

## Frontend Development

### Data Fetching with TanStack Query

#### Basic Query Hook

```typescript
// hooks/useUsers.ts
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  email: string;
  name: string;
  posts: Post[];
}

export function useUsers() {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    },
  });
}
```

#### Using Queries in Components

```tsx
// components/UserList.tsx
'use client';
import { useUsers } from '@/hooks/useUsers';
import { Card, Spinner, Button } from '@heroui/react';

export function UserList() {
  const { data: users, isLoading, error, refetch } = useUsers();

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="p-4">
        <p className="text-red-500">Error loading users</p>
        <Button onClick={() => refetch()} className="mt-2">
          Retry
        </Button>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {users?.map((user) => (
        <Card key={user.id} className="p-4">
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm">{user.posts.length} posts</p>
        </Card>
      ))}
    </div>
  );
}
```

#### Mutations

```typescript
// hooks/useCreateUser.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CreateUserData {
  email: string;
  name: string;
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: CreateUserData) => {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
```

### HeroUI Components

HeroUI provides a comprehensive set of pre-built components with built-in theming:

```tsx
import { 
  Button, 
  Card, 
  Input, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody,
  useDisclosure 
} from "@heroui/react";

export function UserForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createUser = useCreateUser();

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    
    try {
      await createUser.mutateAsync({ email, name });
      onClose();
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Add User
      </Button>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Create New User</ModalHeader>
          <ModalBody>
            <form action={handleSubmit} className="space-y-4">
              <Input
                name="name"
                label="Name"
                placeholder="Enter user name"
                required
              />
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Enter email address"
                required
              />
              <Button 
                type="submit" 
                color="primary" 
                className="w-full"
                isLoading={createUser.isPending}
              >
                Create User
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
```

### Shadcn/ui Components

The template includes the drawer component. Add more components as needed:

```tsx
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader,
  DrawerTitle 
} from "@/components/ui/drawer";

export function UserDrawer({ children }: { children: React.ReactNode }) {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>User Details</DrawerTitle>
        </DrawerHeader>
        {/* Drawer content */}
      </DrawerContent>
    </Drawer>
  );
}
```

### Icons with Lucide React

```tsx
import { 
  User, 
  Mail, 
  Plus, 
  Edit, 
  Trash2, 
  RefreshCw 
} from "lucide-react";

export function UserActions() {
  return (
    <div className="flex gap-2">
      <Button isIconOnly variant="ghost">
        <Edit size={16} />
      </Button>
      <Button isIconOnly variant="ghost" color="danger">
        <Trash2 size={16} />
      </Button>
      <Button isIconOnly variant="ghost">
        <RefreshCw size={16} />
      </Button>
    </div>
  );
}
```
```

## Theme Support

The template includes comprehensive dark/light theme support with automatic system detection:

```tsx
'use client';
import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      isIconOnly
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
```

**Theme Features:**
- **System theme detection** - Automatically matches user's system preference
- **Manual theme switching** - Programmatic theme control
- **HeroUI integration** - All components support theming
- **Tailwind dark mode** - Dark variant classes available
- **Persistent theme** - Theme preference saved in localStorage

## Animations with Framer Motion

Framer Motion is included for smooth animations:

```tsx
'use client';
import { motion } from "framer-motion";

export function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg bg-white dark:bg-gray-800"
    >
      {children}
    </motion.div>
  );
}

// List animations
export function AnimatedList({ items }: { items: any[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {/* Item content */}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

## Deployment

### Environment Variables

For production deployment, set the following environment variables:

```env
# Database
DATABASE_URL="your-production-database-url"

# Optional: Analytics, Authentication, etc.
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://yourdomain.com"
```

### Build Commands

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Platform-Specific Deployment

#### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

#### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

#### Railway

1. Connect your GitHub repository
2. Add environment variables
3. Railway automatically detects Next.js

#### Self-hosted

```bash
# Build and start with PM2
npm run build
pm2 start npm --name "nextjs-app" -- start
```

## Customization

### Adding New Database Models

1. **Update Prisma Schema:**

```prisma
// prisma/schema.prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Decimal
  category    Category @relation(fields: [categoryId], references: [id])
  categoryId  Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Category {
  id       Int       @id @default(autoincrement())
  name     String    @unique
  products Product[]
}
```

2. **Create and Apply Migration:**

```bash
npx prisma migrate dev --name add_product_category
```

3. **Generate Types:**

```bash
npx prisma generate
```

### Adding New UI Components

#### For Shadcn/ui components:

```bash
# Add a new component (example: button)
npx shadcn-ui@latest add button
```

#### For custom components:

```tsx
// components/ProductCard.tsx
import { Card, CardBody, Button, Chip } from "@heroui/react";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    category: { name: string };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full">
      <CardBody className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <Chip size="sm" variant="flat">
            {product.category.name}
          </Chip>
        </div>
        <p className="text-2xl font-bold text-primary mb-4">
          ${product.price}
        </p>
        <Button 
          color="primary" 
          startContent={<ShoppingCart size={16} />}
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
}
```

### Custom Styling

#### Global Styles

Edit `src/app/globals.css` for global styles:

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  .card-hover {
    @apply transition-all duration-200 hover:scale-105 hover:shadow-lg;
  }
}
```

#### Component Styles

Use the `cn` utility function for conditional classes:

```tsx
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export function CustomButton({ 
  variant = "primary", 
  size = "md", 
  className,
  children 
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "rounded-lg font-medium transition-colors",
        // Variant styles
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300",
        // Size styles
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-6 py-3 text-lg",
        // Custom className override
        className
      )}
    >
      {children}
    </button>
  );
}
```
```

## Dependencies Overview

### Production Dependencies

- `@heroui/react` - Component library with theming
- `@prisma/client` - Type-safe database client
- `@tanstack/react-query` - Server state management
- `@radix-ui/react-dialog` - Accessible dialog primitives
- `next` - React framework with App Router
- `react` & `react-dom` - React library
- `framer-motion` - Animation library
- `next-themes` - Theme switching
- `lucide-react` - Icon library
- `tailwind-merge` - Tailwind class merging
- `clsx` - Conditional classes
- `class-variance-authority` - Component variants
- `vaul` - Drawer component primitive

### Development Dependencies

- `typescript` - Type checking
- `tailwindcss` - CSS framework
- `prisma` - Database toolkit and ORM
- `eslint` & `eslint-config-next` - Code linting
- `@tanstack/eslint-plugin-query` - React Query linting
- `@tanstack/react-query-devtools` - Development tools
- `tsx` - TypeScript execution environment
- `@types/*` - TypeScript definitions

## Troubleshooting

### Common Issues

#### Database Connection Issues

```bash
# Check if your database is running
npx prisma db pull

# Reset migrations (development only)
npx prisma migrate reset

# Check connection string format
echo $DATABASE_URL
```

#### TypeScript Errors

```bash
# Regenerate Prisma Client
npx prisma generate

# Check TypeScript configuration
npx tsc --noEmit
```

#### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Performance Tips

1. **Use React Query for data fetching** - Automatic caching and background updates
2. **Implement pagination** - Use `useInfiniteQuery` for large datasets
3. **Optimize database queries** - Use Prisma's `include` and `select` strategically
4. **Enable Next.js caching** - Use appropriate cache headers for API routes
5. **Use Turbopack** - Already configured for faster development builds

## Contributing

This template is designed to be a starting point for your projects. Feel free to:

- **Fork and customize** for your specific needs
- **Add new components** and features
- **Share improvements** with the community
- **Report issues** and suggest enhancements

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support & Community

- **Documentation**: Each technology has comprehensive documentation linked below
- **GitHub Issues**: Report bugs and request features
- **Discussions**: Share ideas and get help from the community

## Useful Resources

### Framework & Core
- [Next.js Documentation](https://nextjs.org/docs) - React framework
- [React Documentation](https://react.dev/learn) - UI library
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Type safety

### Database & Backend
- [Prisma Documentation](https://www.prisma.io/docs) - Database ORM
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Database

### State Management
- [TanStack Query Documentation](https://tanstack.com/query/latest) - Server state
- [React Query DevTools](https://tanstack.com/query/latest/docs/react/devtools) - Debugging

### UI & Styling
- [HeroUI Documentation](https://www.heroui.com/docs) - Component library
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling
- [Shadcn/ui Documentation](https://ui.shadcn.com/) - Additional components
- [Lucide Icons](https://lucide.dev/icons) - Icon library

### Animation & Theming
- [Framer Motion Documentation](https://www.framer.com/motion/) - Animations
- [next-themes Documentation](https://github.com/pacocoursey/next-themes) - Theme switching

### Deployment
- [Vercel Documentation](https://vercel.com/docs) - Deployment platform
- [Railway Documentation](https://docs.railway.app/) - Full-stack platform
- [Netlify Documentation](https://docs.netlify.com/) - Static site hosting

---
