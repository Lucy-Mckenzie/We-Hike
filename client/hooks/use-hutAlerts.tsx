import { getHutsAlerts } from '../apis/doc-alerts'
import {useQuery} from '@tanstack/react-query'

export default function useAllHutAlerts() {
  return useQuery({
    queryKey: ['hutalerts'],
    queryFn: () => getHutsAlerts()
  })
}
