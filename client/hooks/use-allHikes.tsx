/**
 * @file Retreives all Hikes.
 * 
 * Using the useQuery hook we can efficiently get the hikes from the Department of Conservation API.
 * To avoid the data always rendering stale imediately we use staleTime to refresh every week, as the hikes don't change often.
 */
import { getTracks } from '../apis/doc-hikes.ts'
import {useQuery} from '@tanstack/react-query'

export default function useAllHikes() {
  return useQuery({
    queryKey: ['tracks'],
    queryFn: () => getTracks(),
    staleTime: 1000 * 60 * 60 * 24 * 7
  })
} 
