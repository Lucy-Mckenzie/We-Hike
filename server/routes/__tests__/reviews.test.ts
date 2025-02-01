import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'
import connection from '../../db/connection.ts'
import server from '../../server.ts'


beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

// GET all reviews
describe('gets all the reviews', () => {
  it('responds with all the reviews data', async () => {
    const res = await request(server)
      .get('/api/v1/reviews')
      .query({ withReviews: 'true' })

    expect(res.body).toHaveLength(8)
    expect(res.body[0]).toStrictEqual({
      "id": 1,
      "userId": null,
      "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
      "hikeName": "Akeake Historic Reserve Track",
      "rating": 5,
      "comment": "Spectacular views along the coast, perfect for an easy day out!",
      "author": "Sarah"
    },
    )

    expect(res.body[1]).toStrictEqual({
      "id": 2,
      "userId": null,
      "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
      "hikeName": "Akeake Historic Reserve Track",
      "rating": 4,
      "comment": "Well-maintained track, but a bit crowded on weekends.",
      "author": "Tom"
    })
  })
  it.todo('Responds with review by id')
})




