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

describe('It gets the tracks data', () => {
  it.skip('Responds with all the data from tracks', async () => {
    const res = await request(server)
    .get('/api/v1/tracks')

    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true) 
    expect(res.body.length).toBeGreaterThan(0)
  }, 10000)


  it('Responds with the tracks by id data', async () => {
    const res = await request(server)
    .get('/api/v1/tracks/b213ff1c-a694-46c6-9727-789520c97359/detail')

    expect(res.body).toMatchInlineSnapshot(`
      {
        "assetId": "b213ff1c-a694-46c6-9727-789520c97359",
        "distance": "1.4 km",
        "dogsAllowed": "No dogs. Other pets on conservation land rules.",
        "introduction": "The track starts from Opito Bay and splits into a series of short, easy walks - visit a small beach in the Te Puna Inlet and a pa site on Tareha Point.",
        "introductionThumbnail": "https://www.doc.govt.nz/thumbs/large/link/8fcb37b5b6ae4360b41be229babbe10a.aspx",
        "kayakingDuration": null,
        "lat": -35.192237,
        "line": [
          [
            [
              174.046036,
              -35.192958,
            ],
            [
              174.045417,
              -35.193371,
            ],
            [
              174.044859,
              -35.193476,
            ],
            [
              174.044143,
              -35.194043,
            ],
            [
              174.043628,
              -35.194084,
            ],
          ],
          [
            [
              174.046036,
              -35.192958,
            ],
            [
              174.048953,
              -35.192711,
            ],
          ],
          [
            [
              174.043552,
              -35.192715,
            ],
            [
              174.044045,
              -35.19271,
            ],
            [
              174.044359,
              -35.192445,
            ],
            [
              174.044822,
              -35.192557,
            ],
            [
              174.044906,
              -35.192348,
            ],
          ],
          [
            [
              174.044906,
              -35.192348,
            ],
            [
              174.046036,
              -35.192958,
            ],
          ],
          [
            [
              174.044906,
              -35.192348,
            ],
            [
              174.045267,
              -35.192237,
            ],
            [
              174.045688,
              -35.1918,
            ],
            [
              174.045962,
              -35.19177,
            ],
          ],
          [
            [
              174.044906,
              -35.192348,
            ],
            [
              174.044508,
              -35.191443,
            ],
            [
              174.044613,
              -35.191135,
            ],
            [
              174.044982,
              -35.190897,
            ],
            [
              174.043541,
              -35.190714,
            ],
            [
              174.042941,
              -35.190484,
            ],
          ],
        ],
        "locationArray": [
          "Akeake Historic Reserve",
        ],
        "locationString": "Located in Akeake Historic Reserve",
        "lon": 174.045267,
        "mtbDuration": null,
        "mtbDurationCategory": [],
        "mtbTrackCategory": [],
        "name": "Akeake Historic Reserve Track",
        "permittedActivities": [
          "Walking and tramping",
        ],
        "region": [
          "Northland",
        ],
        "staticLink": "https://www.doc.govt.nz/link/b213ff1ca69446c69727789520c97359.aspx",
        "walkDuration": "15-30 min one way",
        "walkDurationCategory": [
          "Under 1 hour",
        ],
        "walkTrackCategory": [
          "Easy",
        ],
        "wheelchairsAndBuggies": null,
      }
    `)
  })
})