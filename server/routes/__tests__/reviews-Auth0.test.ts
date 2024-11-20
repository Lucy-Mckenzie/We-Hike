import { describe, it, expect, afterAll, vi, beforeAll } from 'vitest'
import request from 'supertest'
import * as db from '../../db/db'
import server from '../../server'
import { StatusCodes } from 'http-status-codes'
import checkJwt, { JwtRequest } from '../../auth0.ts'
import { Response, NextFunction } from 'express'

vi.mock('../../db/db')
vi.mock('../../auth0.ts')

const mockUser = {
 id: 'auth0|123',
}

const reviews = [
    {
      id: 2,
      assetId: "b213ff1c-a694-46c6-9727-789520c97359",
      hikeName: "Akeake Historic Reserve Track",
      rating: 5,
      comment: "Spectacular views along the coast, perfect for an easy day out!",
      author: "Sarah", 
      addedByUser: 'auth0|123',
    },
    {
      id: 3,
      assetId: "b213ff1c-a694-46c6-9727-789520c97359",
      hikeName: "Akeake Historic Reserve Track",
      rating: 4,
      comment: "Well-maintained track, but a bit crowded on weekends.",
      author: "Tom",
      addedByUser: 'auth0|456',
    },
  ]

beforeAll(() => {
  vi.mocked(checkJwt).mockImplementation(
    async (req: JwtRequest, res: Response, next: NextFunction) => {
      console.log(req.body)
      req.auth = {
        sub: mockUser.id,
      }
      next()
    },
  )
})

afterAll(() => {
  vi.restoreAllMocks()
})

describe('Gets all reviews', () => {
  it('Should show all reviews', async () => {
    vi.mocked(db.getAllReviews).mockResolvedValue(reviews)
    const res = await request(server).get('/api/v1/reviews')
    expect(res.status).toBe(StatusCodes.OK)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "addedByUser": "auth0|123",
          "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
          "author": "Sarah",
          "comment": "Spectacular views along the coast, perfect for an easy day out!",
          "hikeName": "Akeake Historic Reserve Track",
          "id": 2,
          "rating": 5,
        },
        {
          "addedByUser": "auth0|456",
          "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
          "author": "Tom",
          "comment": "Well-maintained track, but a bit crowded on weekends.",
          "hikeName": "Akeake Historic Reserve Track",
          "id": 3,
          "rating": 4,
        },
      ]
    `)
  })
})

describe('gets review by id', () => {
  it('gets the correct review', async () => {
    vi.mocked(db.getReviewById).mockResolvedValue([reviews[0]])
    const res = await request(server).get('/api/v1/reviews/2')
    expect(res.status).toBe(StatusCodes.OK)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "addedByUser": "auth0|123",
          "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
          "author": "Sarah",
          "comment": "Spectacular views along the coast, perfect for an easy day out!",
          "hikeName": "Akeake Historic Reserve Track",
          "id": 2,
          "rating": 5,
        },
      ]
    `)
  })

  it('PATCH updates data by id', async () => {

  const updatedComment =
  'Track is maintained in summer, be careful of the slippery track when it rains. A bit crowded on weekends.'

  const updatedReview = {
    id: 2,
    assetId: 'b213ff1c-a694-46c6-9727-789520c97359',
    hikeName: 'Akeake Historic Reserve Track',
    rating: 5,
    comment: updatedComment,
    author: 'Sarah',
    addedByUser: 'auth0|123',
  }

    vi.mocked(db.getReviewById).mockResolvedValue(reviews)
    vi.mocked(db.updateReviewById).mockResolvedValue(updatedReview as any)

    const patchRes = await request(server)
    .patch('/api/v1/reviews/2')
    .set('Authorization', 'Bearer mock-token')
    .send({ comment: updatedComment })

    expect(patchRes.statusCode).toBe(200)
    expect(patchRes.body).toEqual(updatedReview)
    
  })
})
