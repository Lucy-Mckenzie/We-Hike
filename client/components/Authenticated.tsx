import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  children: React.ReactNode
}

const useIsAuthenticated = () => {
  // call the useAuth0 hook, destructure and return isAuthenticated
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

export function IfAuthenticated(props: Props) {
  const { children } = props
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated(props: Props) {
  const { children } = props
  return !useIsAuthenticated() ? <>{children}</> : null
}
