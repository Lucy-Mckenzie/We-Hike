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

export async function addReview(review: Review) {
  const result = await request.post(`/api/v1/reviews/`).send(review)
  console.log(result.body)
  return result.body as Review
}

export async function updateReviewById(id: number, review: Review) {
  const result = await request.patch(`/api/v1/reviews/${id}`).send(review)
  console.log(result.statusCode)
  return
}

export async function deleteReviewById(id: number) {
  const result = await request.delete(`/api/v1/reviews/${id}`)
  console.log(result.statusCode)
  return
}