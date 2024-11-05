import express from 'express'
import request from 'superagent'

const router = express.Router()
const DOC_API_URL = 'https://api.doc.govt.nz/v1/tracks'
const apiKey = process.env.DOC_API_KEY

router.get('/api/hikes', async (req, res) => {
  try {
    const docResponse = await request
      .get(DOC_API_URL)
      .set('Authorization', `Bearer ${apiKey}`)

    res.json(docResponse.body)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hikes from DOC API' })
  }
})

export default router
