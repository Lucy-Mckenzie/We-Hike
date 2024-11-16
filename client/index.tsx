import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import router from './router.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
    domain=" dev-yahbj15jebs5tx1v.us.auth0.com"
    clientId="pUMApsDOc6ZmGdvFp32GhDCWQNLKbCmX"
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
