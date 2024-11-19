import { render, screen, waitFor } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Home from '../components/Home'
import { useAuth0 } from "@auth0/auth0-react"

vi.mock("@auth0/auth0-react", () => ({
  useAuth0: vi.fn(),
}))

const mockUseAuth0 = useAuth0 as vi.MockedFunction<typeof useAuth0>

beforeEach(() => {
  mockUseAuth0.mockReturnValue({
    isAuthenticated: false, 
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
    user: null,
  })
})

afterEach(() => {
  vi.clearAllMocks()
})

describe("The Application Component in logged-out state", () => {
  it('renders a log in button', () => {
    render(<Home />)
    const loginElement = screen.getByText('Log In')
    expect(loginElement).toBeInTheDocument()
  })
})

describe('When the log in button is clicked', () => {
  it('redirects the user to the Auth0 Universal Login page', async () => {
   const { loginWithRedirect } = useAuth0()

   render(<Home />)
   const loginElement = screen.getByText("Log In")
   loginElement.click()

  // Expect that if we click the "Log In" button, the loginWithRedirect function gets called
   await waitFor(() => expect(loginWithRedirect).toHaveBeenCalledTimes(1))
  })
  })

