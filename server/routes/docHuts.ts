import express from 'express'
import request from 'superagent'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()
const DOC_API_URL = 'https://api.doc.govt.nz/v2/huts'
const apiKey = process.env.DOC_API_KEY

if (!apiKey) {
  throw new Error('API key is missing. Please set the DOC_API_KEY environment variable.');
}

router.get('/', async (req, res) => {
  try {
    const response = await request
      .get(`${DOC_API_URL}`)
      .set('accept', 'application/json')
      .set('x-api-key', apiKey)

      if (response.body) {
        res.json(response.body)
      } else {
        res.status(404).json({ error: 'Huts not found' });
      }
  } catch (error) {
    if (error instanceof Error) {
    console.error("Failed to fetch huts from DOC API:", error.message)
    }
    res.status(500).json({ error: 'Failed to fetch huts from DOC API'})
  }
})

router.get('/', async (req, res) => {
  try {
    const response = await request
      .get(`${DOC_API_URL}/:id/details`)
      .set('accept', 'application/json')
      .set('x-api-key', apiKey)

      if (response.body) {
        res.json(response.body)
      } else {
        res.status(404).json({ error: 'Huts not found' });
      }
  } catch (error) {
    if (error instanceof Error) {
    console.error("Failed to fetch huts from DOC API:", error.message)
    }
    res.status(500).json({ error: 'Failed to fetch huts from DOC API'})
  }
})

router.get('/alerts', async (req, res) => {
  try {
    const response = await request
      .get(`${DOC_API_URL}/alerts`)
      .set('accept', 'application/json')
      .set('x-api-key', apiKey)

      if (response.body) {
        res.json(response.body)
      } else {
        res.status(404).json({ error: 'Hut alerts not found' });
      }
  } catch (error) {
    if (error instanceof Error) {
    console.error("Failed to fetch hut alerts from DOC API:", error.message)
    }
    res.status(500).json({ error: 'Failed to fetch hut alerts from DOC API'})
  }
})

router.get('/:id/alerts', async (req, res) => {
  try {
    const response = await request
      .get(`${DOC_API_URL}/:id/alerts`)
      .set('accept', 'application/json')
      .set('x-api-key', apiKey)

      if (response.body) {
        res.json(response.body)
      } else {
        res.status(404).json({ error: 'Hut alerts not found' });
      }
  } catch (error) {
    if (error instanceof Error) {
    console.error("Failed to fetch hut alerts from DOC API:", error.message)
    }
    res.status(500).json({ error: 'Failed to fetch hut alerts from DOC API'})
  }
})

export default router