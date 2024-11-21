import connection from './connection.js'
import { Review } from '../../models/review.js'


// Read all
export async function getAllReviews(): Promise<Review[]>  {
  const review = await connection('reviews')
  return review as Review[]
}

// Read One
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
export async function addReview(review: Review) {
  const result = await connection('reviews')
  .insert({
    userId: review.userId,
    id: review.id,
    hikeName: review.hikeName,
    rating: review.rating,
    comment: review.comment,
    author: review.author
  })
 
  return result as number[]
}

// Update
export async function updateReviewById(id: number, comment: string) {
  const result = await connection('reviews')
  .where('id', id)
  .update({ comment })
  .first()
 
  console.log(result)
  return result 
}

// Delete 
export async function deleteReview(id: number) {
 await connection('reviews').where('id', id).delete()
}

// user can edit
export async function userCanEdit(auth0Id: string, id: number) {
  const review = await connection('reviews')
    .where('id', id)
    .first()
  if (!review) {
    throw new Error('Review not found')
  }

  if (review.userId !== auth0Id) {
    throw new Error('Unauthorized')
  }
  return true
}