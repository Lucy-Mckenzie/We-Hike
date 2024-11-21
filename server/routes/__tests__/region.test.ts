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

describe('It responds with all the data', async () => {
  it('Gets region by region ID', async () => {
    const res = await request(server)
    .get('/api/v1/tracks/region/DOC-CNI')

    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true) 
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body[0]).toMatchInlineSnapshot(`
      {
        "assetId": "5a3f05c0-d358-4e6f-81b8-773d11017135",
        "line": [
          [
            [
              1873278.2093,
              5720875.8562,
            ],
            [
              1873292.4609,
              5720857.4967,
            ],
            [
              1873365.5178,
              5720870.8556,
            ],
            [
              1873548.5176,
              5720987.595,
            ],
          ],
          [
            [
              1873152.205,
              5720877.2611,
            ],
            [
              1873199.7824,
              5720883,
            ],
            [
              1873217.88,
              5720855.8537,
            ],
            [
              1873278.2093,
              5720875.8562,
            ],
          ],
          [
            [
              1873287.5482,
              5720976.5252,
            ],
            [
              1873278.2093,
              5720875.8562,
            ],
          ],
        ],
        "name": "Aratiatia Rapids Lookout Walk",
        "region": [
          "Central North Island",
        ],
        "x": 1873278.2093,
        "y": 5720875.8562,
      }
    `)
  }, 10000)
  
})