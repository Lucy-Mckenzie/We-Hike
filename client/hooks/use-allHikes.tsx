import { getTracks } from '../apis/doc-hikes.ts'
import {useQuery} from '@tanstack/react-query'

export default function useAllHikes() {
  return useQuery({
    queryKey: ['tracks'],
    queryFn: () => getTracks()
  })
} 
