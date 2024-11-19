import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
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
  it('responds with all the data', async () => {
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
})

// GET review by id
describe('get review by id', () => {
  it('gets the correct review', async () => {
    const res = await request(server).get('/api/v1/reviews/2')
    expect(res.status).toBe(StatusCodes.OK)
    expect(res.body).toStrictEqual({
      "id": 2,
      "userId": null,
      "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
      "hikeName": "Akeake Historic Reserve Track",
      "rating": 4,
      "comment": "Well-maintained track, but a bit crowded on weekends.",
      "author": "Tom"
    })
  })
})





// describe('Gets review by id', () => {
//   it('serves existing data', async () => {
//     const res = await request(server).get('/api/v1/reviews/1')

//     expect(res.body).toStrictEqual({
//       "id": 1,
//       "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
//       "hikeName": "Akeake Historic Reserve Track",
//       "rating": 5,
//       "comment": "Spectacular views along the coast, perfect for an easy day out!",
//       "author": "Sarah"
//     })
//   })

//   it('PATCH updates data', async () => {
//     // ACT
//     const patchRes = await request(server).patch('/api/v1/reviews/1').send({
//     comment: "Spectacular views along the coast, perfect for an easy day out - with friends!"
//     })

//     // ASSERT
//     expect(patchRes.statusCode).toBe(StatusCodes.OK)
//     const getRes = await request(server).get('/api/v1/reviews/1')
//     expect(getRes.body).toStrictEqual({
//       "id": 1,
//       "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
//       "hikeName": "Akeake Historic Reserve Track",
//       "rating": 5,
//       "comment": "Spectacular views along the coast, perfect for an easy day out - with friends!",
//       "author": "Sarah"
//     })
//   })
// })
