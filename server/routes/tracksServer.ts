import express from 'express'
import request from 'superagent'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()
const DOC_API_URL = 'https://api.doc.govt.nz/v1/tracks'
const apiKey = process.env.DOC_API_KEY

if (!apiKey) {
  throw new Error('API key is missing. Please set the DOC_API_KEY environment variable.');
}


router.get('/region/:region', async (req, res) => {
  const region = req.params.region

  try {
    const response = await request
      .get(`${DOC_API_URL}/region/${region}`)
      .set('accept', 'application/json')
      .set('x-api-key', apiKey)

      console.log(response.body)

      if (response.body) {
        res.json(response.body)
      } else {
        res.status(404).json({ error: 'Region not found' });
      }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hikes from DOC API' })
  }
})

router.get('/:assetId/detail', async (req, res) => {
  const assetId = req.params.assetId

  try {
    const response = await request
      .get(`${DOC_API_URL}/${assetId}/detail`)
      .set('accept', 'application/json')
      .set('x-api-key', apiKey)

      console.log(response.body)

      if (response.body) {
        res.json(response.body)
      } else {
        res.status(404).json({ error: 'Track detail not found' });
      }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hikes from DOC API' })
  }
})

// router.get('/region/:region/:assetId/detail', async (req, res) => {
//   const { region, assetId } = req.params
//   console.log("assetId:", assetId)
//   console.log("region:", region)

//   try {
//     const response = await request
//       .get(`${DOC_API_URL}/region/${region}/${assetId}/detail`)
//       .set('accept', 'application/json')
//       .set('x-api-key', apiKey)

//     console.log(response.body)
      
//     if (response.body) {
//       res.json(response.body)
//     } else {
//       res.status(400).json({ error: `Track not found in region ${region}` })
//     }
//    } catch (error) {
//     console.error("sorry couldnt fetch", error.message)
//     res.status(500).json({ error: 'Failed to fetch track details from DOC API' })
//   }
// })

export default router

