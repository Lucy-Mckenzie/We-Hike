/**
 * @file Retreives all Alerts.
 * 
 * Using the useQuery hook we can efficiently get the Alerts from the Department of Conservation API.
 * To avoid the data always rendering stale imediately we use staleTime to refresh every day, the avoid constant calls to the API.
 */
import { getAlerts } from '../apis/doc-alerts'
import {useQuery} from '@tanstack/react-query'

export default function useAllAlerts() {
  return useQuery({
    queryKey: ['alerts'],
    queryFn: () => getAlerts(),
    staleTime: 1000 * 60 * 60 * 24
  })
}
