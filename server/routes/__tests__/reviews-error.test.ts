import { describe, it, expect, vi } from 'vitest'
import { StatusCodes } from 'http-status-codes'

import server from '../../server.ts'
import * as db from '../../db/db.ts'
import request from 'supertest'

vi.mock('../../db/db.ts')

describe('getting all the reviews', () => {
  it('shows errors when the database fails', async () => {
    vi.mocked(db.getAllReviews).mockImplementation(async () => {
      throw new Error('Database error')
    })

    const res = await request(server).get('/api/v1/reviews')

    expect(res.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(db.getAllReviews).toHaveBeenCalled()
  })
})

describe('getting a review by id', () => {
  it('shows errors when the database fails', async () => {
    vi.mocked(db.getReviewById).mockImplementation(async () => {
      throw new Error('Database error')
    })

    const res = await request(server).get('/api/v1/reviews/1')

    expect(res.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(db.getReviewById).toHaveBeenCalled()
  })
})

describe('adding a review', () => {
  it('shows errors when the database fails', async () => {
    vi.mocked(db.addReview).mockImplementation(async () => {
      throw new Error('Database error')
    })

    const res = await request(server)
      .post('/api/v1/reviews')
      .send({ name: 'Sarah', comment: 'Beautiful hike, watch out for mosquitoes', hikeName: 'Routeburn'})

    expect(res.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(db.addReview).toHaveBeenCalled()
  })
})

describe('deleting a movie', () => {
  it('shows errors when the database fails', async () => {
    vi.mocked(db.deleteReview).mockImplementation(async () => {
      throw new Error('Database error')
    })

    const res = await request(server).delete('/api/v1/reviews/1')

    expect(res.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(db.deleteReview).toHaveBeenCalled()
  })
})


