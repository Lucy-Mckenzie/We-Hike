import express from 'express'
import * as db from '../db/db'
import checkJwt, { JwtRequest } from '../auth0'

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
router.post('/', checkJwt, async (req: JwtRequest, res) => {
 
    const review = req.body as Review
    const auth0Id = req.auth?.sub  // Auth0 user ID from the JWT

  if (!review) {
    console.error('Bad Request - no review or id')
    return res.status(400).send('Bad request')
  }

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

 try {
  const newId = await db.addReview({...review, userId: auth0Id});
  const reviewId = newId[0]
  res.status(201).json({...review, id: reviewId})

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// PATCH api/v1/reviews/:id
router.patch('/:id', checkJwt, async (req: JwtRequest, res) => {
  
    const id = Number(req.params.id)
    const auth0Id = req.auth?.sub
    const { comment } = req.body as Review

    if (!comment) {
      console.error('Bad Request - no review or id')
      return res.status(400).send('Bad request')
    }
  
    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }

   try {   
    await db.userCanEdit(auth0Id, id)
    const updatedReview = await db.updateReviewById(id, comment) 
    res.status(200).json({ review: updatedReview })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// DELETE api/v1/reviews/:id
router.delete('/:id', checkJwt, async (req: JwtRequest, res) => {
  try {  
    const { id } = req.params 
    const auth0Id = req.auth?.sub 
  
    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }

    const review = await db.getReviewById(Number(id))

    if (!review) {
      return res.status(404).send('Review not found')
    }

    await db.deleteReview(Number(id))
    res.sendStatus(200)

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})