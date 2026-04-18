import { 
  createRouter, 
  createRoute, 
  createRootRoute, 
  RouterProvider, 
  Outlet,
  ScrollRestoration
} from '@tanstack/react-router'
import { Toaster } from '@blinkdotnew/ui'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Features } from './pages/Features'
import { Solutions } from './pages/Solutions'
import { Contact } from './pages/Contact'
import { RequestDemo } from './pages/RequestDemo'

// Root Route
const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <Toaster position="top-right" />
    </div>
  ),
})

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const featuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/features',
  component: Features,
})

const solutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions',
  component: Solutions,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const demoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/request-demo',
  component: RequestDemo,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  featuresRoute,
  solutionsRoute,
  contactRoute,
  demoRoute
])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <RouterProvider router={router} />
}
