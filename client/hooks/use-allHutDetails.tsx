/**
 * @file Retreives all Hut Details.
 * 
 * Using the useQuery hook we can efficiently get the Hut Details from the Department of Conservation API.
 * To avoid the data always rendering stale imediately we use staleTime to refresh every week, the avoid constant calls to the API.
 */
import { getHutDetails } from '../apis/doc-huts'
import {useQuery} from '@tanstack/react-query'

export default function useHutDetails(assetId: string) {
  return useQuery({
    queryKey: ['huts', assetId],
    queryFn: () => getHutDetails(assetId),
    staleTime: 1000 * 60 * 60 * 24 * 7
  })
} 
