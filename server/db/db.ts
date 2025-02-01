import connection from './connection.js'
import { Review } from '../../models/review.js'

export async function getAllReviews(): Promise<Review[]>  {
  const review = await connection('reviews')
  return review as Review[]
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
    .returning('*')
  return result as number[]
}

export async function updateReviewById(id: number, comment: string) {
  const result = await connection('reviews')
    .where('id', id)
    .update({ comment })
    .first()
  return result 
}

export async function deleteReview(id: number) {
  await connection('reviews').where('id', id).delete()
}

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