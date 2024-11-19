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

describe('Gets review by id', () => {
  it('serves existing data', async () => {
    const res = await request(server).get('/api/v1/reviews/1')

    expect(res.body).toStrictEqual({
      "id": 1,
      "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
      "hikeName": "Akeake Historic Reserve Track",
      "rating": 5,
      "comment": "Spectacular views along the coast, perfect for an easy day out!",
      "author": "Sarah"
    })
  })

  it('PATCH updates data', async () => {
    // ACT
    const patchRes = await request(server).patch('/api/v1/reviews/1').send({
     "comment": "Spectacular views along the coast, perfect for an easy day out - with friends!"
    })

    // ASSERT
    expect(patchRes.statusCode).toBe(204)
    const getRes = await request(server).get('/api/v1/reviews/1')
    expect(getRes.body).toStrictEqual({
      "id": 1,
      "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
      "hikeName": "Akeake Historic Reserve Track",
      "rating": 5,
      "comment": "Spectacular views along the coast, perfect for an easy day out!",
      "author": "Sarah"
    })
  })
})
