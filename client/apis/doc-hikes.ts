import request from 'superagent'
import { TracksByRegion, TrackDetails } from '../../models/trackDetails'
import { Huts } from '../../models/huts'

export async function getTracks(): Promise<TrackDetails[]> {

  const response = await request.get(`/api/v1/tracks`) 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  console.log('API response:', response.body)
  return response.body 
}

export async function getTrack(): Promise<TrackDetails> {

const response = await request.get(`/api/v1/tracks`) 

if (!response) {
console.error('The tracks data could not be accessed at this time')
}
console.log('API response:', response.body)
return response.body 
}


export async function getTrackById( assetId: string): Promise<TrackDetails> {

  const response = await request.get(`/api/v1/tracks/${assetId}/detail`) 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  console.log('API response:', response.body)
  return response.body
}


export async function getTracksByRegion(region: string): Promise<TracksByRegion[]> {

  const response = await request.get(`/api/v1/tracks/region/${region}`) 

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


