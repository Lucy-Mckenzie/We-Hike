//@vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach, beforeAll } from 'vitest'
import { screen,  waitFor, within } from '@testing-library/react'
import { renderRoute } from './setup.test'
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'


vi.mock('@auth0/auth0-react')
const ACCESS_TOKEN = 'mock-access-token'

const reviews = [
  {
    id: 2,
    assetId: "b213ff1c-a694-46c6-9727-789520c97359",
    hikeName: "Akeake Historic Reserve Track",
    rating: 5,
    comment: "Spectacular views along the coast, perfect for an easy day out!",
    author: "Sarah"
  },
  {
    id: 3,
    assetId: "b213ff1c-a694-46c6-9727-789520c97359",
    hikeName: "Akeake Historic Reserve Track",
    rating: 4,
    comment: "Well-maintained track, but a bit crowded on weekends.",
    author: "Tom"
  },
]

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


describe("<ReviewForm />", () => {
  it('should render a loading indicator', async () => {
    const scope = nock('http://localhost')
    .get('/api/v1/reviews')
    .reply(200)

  renderRoute('/reviews')

  const loading = await waitFor(() => screen.getByText(/loading/i))

  expect(loading).toBeVisible()
  expect(scope.isDone()).toBe(true)
  })

  it('Should render some reviews', async () => {
    const scope = nock('http://localhost')
    .get('/api/v1/reviews')
    .reply(200, reviews)

    renderRoute('<ReviewForm />')

    const button = await screen.findByText('Leave a Review')
    expect(button).toBeInTheDocument()

    expect(scope.isDone()).toBe(true)
  })
  it.todo('Should render an error message when there is an error')
})

// describe('When the log in button is clicked', () => {
//   it('redirects the user to the Auth0 Universal Login page', async () => {
 
//   })
//   })

