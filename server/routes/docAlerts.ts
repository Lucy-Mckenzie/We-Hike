import express from 'express'
import request from 'superagent'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()
const DOC_API_URL = 'https://api.doc.govt.nz/v2/alerts'
const apiKey = process.env.DOC_API_KEY

if (!apiKey) {
  throw new Error('API key is missing. Please set the DOC_API_KEY environment variable.')
}

router.get('/', async (req, res) => {
  try {
    const response = await request
      .get(`${DOC_API_URL}`)
      .set('accept', 'application/json')
      .set('x-api-key', apiKey)
    if (response) {
      res.json(response)
    } else {
      res.status(404).json({ error: 'Hut alerts not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch hut alerts from DOC API - Server response:", error.message)
    }
    res.status(500).json({ error: 'Failed to fetch hut alerts from DOC API - Server response'})
  }
})

export default router
