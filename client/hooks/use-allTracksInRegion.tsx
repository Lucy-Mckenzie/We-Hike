/**
 * @file Retreives all tracks in a specifc region.
 * 
 * Using the useQuery hook we can efficiently get the tracks using the DOC API.
 * To avoid the data always rendering stale we use staleTime to refresh every week.
 */
import { getTracksByRegion } from '../apis/doc-hikes.ts'
import {useQuery} from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export default function useAllReviews() {
  const { region } = useParams()
  return useQuery({
    queryKey: ['tracks', region],
    queryFn: () =>  getTracksByRegion(region as string),
    staleTime: 1000 * 60 * 60 * 7
  })
} 
