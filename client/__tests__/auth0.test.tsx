//@vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach, beforeAll, vitest } from 'vitest'
import { screen,  waitFor, waitForElementToBeRemoved, within } from '@testing-library/react'
import { renderRoute } from './setup.test'
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'
import { before } from 'node:test'

vi.mock('@auth0/auth0-react')
const ACCESS_TOKEN = 'mock-access-token'

beforeAll(() => {
  nock.disableNetConnect()

  vi.spyOn(console, 'error').mockImplementation(() => {})
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'bear@example.com', nickname: 'bear' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

afterEach(() => {
  vi.clearAllMocks()
})


describe("<Home />", () => {
  it('renders a log in button', () => {

  })
})

describe('When the log in button is clicked', () => {
  it('redirects the user to the Auth0 Universal Login page', async () => {
 
  })
  })

