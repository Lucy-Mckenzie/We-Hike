import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import { router } from './router.tsx'
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
    domain="manaia2024-lucy.au.auth0.com"
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://tracks/api',
    }}
    >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
    </Auth0Provider>,
  )
})
