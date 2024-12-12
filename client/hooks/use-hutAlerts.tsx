import { getHutsAlerts } from '../apis/doc-huts'
import {useQuery} from '@tanstack/react-query'

export default function useAllHutAlerts() {
  return useQuery({
  queryKey: ['hutalerts'],
  queryFn: () => getHutsAlerts()
})
} 