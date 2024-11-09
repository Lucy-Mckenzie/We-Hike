import express from 'express'
import request from 'superagent'

const router = express.Router()
const DOC_API_URL = 'https://api.doc.govt.nz/v1/tracks'
const apiKey = process.env.DOC_API_KEY

router.get('/api/v1/tracks', async (req, res) => {
  try {
    const response = await request
      .get(DOC_API_URL)
      .set('Authorization', `Bearer ${apiKey}`)
      console.log(apiKey) 
      console.log(response.body)
    res.json(response.body)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hikes from DOC API' })
  }
})

export default router
