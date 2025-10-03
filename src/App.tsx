import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster
          richColors
          closeButton
          position="top-right"
          toastOptions={{
            classNames: {
              toast: '!gap-2',
              actionButton: '!p-3',
            },
          }}
        />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
