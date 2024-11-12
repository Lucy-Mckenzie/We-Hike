import connection from './connection.js'
import { AllTracks } from '../../models/tracks.js'
import { Review } from '../../models/review.js'


// Read all
export async function getAllTracks(): Promise<AllTracks[]>  {
  const tracks = await connection('allTracks')
  return tracks as AllTracks[]
}

export async function getAllReviews(): Promise<Review[]>  {
  const review = await connection('reviews')
  return review as Review[]
}

// Read one
export async function getTrackById(name: string): Promise<AllTracks[]>  {
  const tracks = await connection('allTracks')
  .where('name', name)
  .select(
    'assetId',
    'region',
    'name'
  )
  .first()
  return tracks 
}

export async function getReviewById(id: number): Promise<Review[]>  {
  const review = await connection('reviews')
  .where("id", id)
  .select(
    'id',
    'assetId',
    'hikeName',
    'rating',
    'comment',
    'author'
  )
  .first()
  return review 
}

// Create
export async function addReviewByName( review: Review) {
  const result = await connection('reviews')
  .insert({
    id: review.id,
    hikeName: review.hikeName,
    rating: review.rating,
    comment: review.comment,
    author: review.author
  })
 
  return result as number[]
}

// Update
export async function updateReviewById(id: number, review: Review) {
  const result = await connection('reviews')
  .update({
    hikeName: review.hikeName,
    rating: review.rating,
    comment: review.comment,
    author: review.author
  })
 
  return result as number
}

// Delete 
export async function deleteReview(id: number) {
  const result = await connection('reviews').where('id', id).delete()
  return result as number
}