import { describe, it, expect, afterAll, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/db'
import server from '../../server'
import { StatusCodes } from 'http-status-codes'

vi.mock('../../db/db')


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
          "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
          "author": "Sarah",
          "comment": "Spectacular views along the coast, perfect for an easy day out!",
          "hikeName": "Akeake Historic Reserve Track",
          "id": 2,
          "rating": 5,
        },
        {
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

  // it('PATCH updates data by id', async () => {
  //   vi.mocked(db.updateReviewById).mockResolvedValue(reviews[0])
  //   const patchRes = await request(server)
  //   .patch('/api/v1/reviews/2')
  //   .send({ comment: "Well-maintained track, be careful of the slippery track when it rains. A bit crowded on weekends." })

  
  //   const getRes = await request(server).get('/api/v1/reviews/2')
  //   expect(patchRes.statusCode).toBe(StatusCodes.OK)

  //   expect(getRes.body).toStrictEqual()
  // })
})
