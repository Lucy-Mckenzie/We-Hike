/**
 * @file Retreives all reviews.
 * 
 * Using the useQuery hook we can efficiently get the reviews from the backend server.
 * To avoid the data always rendering stale we use staleTime to refresh every 60 minutes.
 */
import { fetchAllReviews } from '../apis/reviews'
import {useQuery} from '@tanstack/react-query'

export default function useAllReviews() {
  return useQuery({
    queryKey: ['review'],
    queryFn: () => fetchAllReviews(),
    staleTime: 1000 * 60 * 60 
  })
} 
