import request from 'superagent'
import { Alerts, Huts, HutsDetail } from '../../models/huts'

export async function getHuts(): Promise<Huts[]> {
  const response = await request.get(`/api/v2/huts`) 
  if (!response) {
    console.error('The huts data could not be accessed at this time')
  }
  return response.body 
}
  
export async function getHutsAlerts(): Promise<Alerts[]> {
  const response = await request.get(`/api/v2/huts/alerts`) 
  console.log(response)
  if (!response) {
    console.error('The huts data could not be accessed at this time')
  }
  return response.body 
}

export async function getHutAlertsById( assetId: string): Promise<Alerts> {
  const response = await request.get(`/api/v2/huts/${assetId}/alerts`) 
  if (!response) {
    console.error('The huts data could not be accessed at this time')
  }
  return response.body 
}

export async function getHutDetails(assetId: string): Promise<HutsDetail> {
  const response = await request.get(`/api/v2/huts/${assetId}/detail`) 
  if (!response) {
    console.error('The huts data could not be accessed at this time')
  }
  return response.body 
}

export async function loadHuts(): Promise<Huts[]> {
  const response = await fetch('../data/data.json')
  if (!response) {
    console.error('Failed to load huts data')
  }

  const hutsData = await response.json()
  const data = JSON.parse(hutsData)
  return data.huts
}