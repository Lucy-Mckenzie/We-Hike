import { getHutDetails } from '../apis/doc-huts'
import {useQuery} from '@tanstack/react-query'

export default function useHutDetails(assetId: string) {
  return useQuery({
  queryKey: ['huts', assetId],
  queryFn: () => getHutDetails(assetId)
})
} 