import request from 'superagent'
import { Review } from '../../models/review'

export async function fetchAllReviews() {
  const result = await request.get(`/api/v1/reviews/`)
  console.log(result.body)
  return result.body as Review[]
}

export async function fetchReviewById(id: number) {
  const result = await request.get(`/api/v1/reviews/${id}`)
  console.log(result.body)
  return result.body as Review
}

export async function addReview(review: Review, token: string) {
  const result = await request
  .post(`/api/v1/reviews/`)
  .set('Authorization', `Bearer ${token}`) 
  .send(review)
  console.log(result.body)
  return result.body as Review
}

export async function updateReviewById(id: number, review: Review, token: string) {
  const result = await request.patch(`/api/v1/reviews/${id}`)
  .set('Authorization', `Bearer ${token}`) 
  .send(review)
  console.log(result.statusCode)
  return result
}

export async function deleteReviewById(id: number, token: string) {
  const result = await request.delete(`/api/v1/reviews/${id}`)
  .set('Authorization', `Bearer ${token}`) 
  return result
}