import request from 'superagent'
import { Alerts } from '../../models/huts'

export async function getAlerts() {
  const response = await request.get(`/api/v2/alerts`) 
  if (!response) {
    console.error('The huts data could not be accessed at this time')
  }
  return response.body 
}

export async function getAlertsById( id: string): Promise<Alerts> {
  const response = await request.get(`/api/v2/${id}/alerts`) 
  if (!response) {
    console.error('The huts data could not be accessed at this time')
  }
  return response.body 
}

