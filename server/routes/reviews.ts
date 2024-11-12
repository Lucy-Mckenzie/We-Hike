import express from 'express'
import * as db from '../db/db'

import { Review } from '../../models/review'

const router = express.Router()
export default router

// GET api/v1/reviews/
router.get('/', async (req, res) => {
  try {
    const reviews = await db.getAllReviews()
    res.json(reviews)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})


// GET api/v1/reviews/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await db.getReviewById(Number(id)) 
    res.json(result)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// POST api/v1/reviews/
router.post('/', async (req, res) => {
  try {
    const review = req.body as Review
    const id = await db.addReviewByName(review)
    res.json({ ...review, id: id[0] })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// PATCH api/v1/reviews/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updatedReview = req.body as Review
    await db.updateReviewById(Number(id), updatedReview) 
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// DELETE api/v1/reviews/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deleteReview(Number(id))
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})