import { describe, it, expect, beforeAll, beforeEach, afterAll, vi } from 'vitest'
import request from 'supertest'
import * as db from '../../db/db'
import server from '../../server'
import { StatusCodes } from 'http-status-codes'

vi.mock('../../db/db')

const mockReview = [
  {
    id: 2,
    assetId: "b213ff1c-a694-46c6-9727-789520c97359",
    hikeName: "Akeake Historic Reserve Track",
    rating: 5,
    comment: "Spectacular views along the coast, perfect for an easy day out!",
    author: "Sarah"
  }
]

afterAll(() => {
  vi.restoreAllMocks()
})


describe('gets review by id', () => {
  it('gets the correct review', async () => {
    vi.mocked(db.getReviewById).mockResolvedValue(mockReview)
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
})

describe('Updates review by id', () => {
  it('PATCH updates data by id', async () => {

    const updatedComment = "Well-maintained track, be careful of the slippery track when it rains. A bit crowded on weekends."

    const updatedReview = {
      ...mockReview[0],
      comment: updatedComment
    }

    vi.mocked(db.updateReviewById).mockResolvedValue(updatedReview)
    vi.mocked(db.getReviewById).mockResolvedValue(updatedReview)

    const patchRes = await request(server)
    .patch('/api/v1/reviews/2')
    .send({ comment: updatedComment })

    expect(patchRes.statusCode).toBe(StatusCodes.OK)
    const getRes = await request(server).get('/api/v1/reviews/2')


    expect(getRes.body).toStrictEqual(updatedReview)
  })
})
