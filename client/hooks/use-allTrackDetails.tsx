/**
 * @file Retreives track details for a specifc track.
 * 
 * Using the useQuery hook we can efficiently get the track details from the DOC API.
 * To avoid the data always rendering stale we use staleTime to refresh every week as the data changes rarely.
 */
import { getTrackById } from '../apis/doc-hikes.ts'
import {useQuery} from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export default function useAllTrackDetails() {
  const { assetId } = useParams()
  return useQuery({
    queryKey: ['trackDetails', assetId],
    queryFn: () => getTrackById(assetId as string),
    staleTime: 1000 * 60 * 60 * 7
  })
} 
