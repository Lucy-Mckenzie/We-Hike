import request from 'superagent'
import { TracksByRegion, TrackDetails } from '../../models/trackDetails'
import { Huts } from '../../models/huts'

export async function getHikes(region: string): Promise<TracksByRegion[]> {
  try {
  const response = await request.get(`/api/v1/tracks/region/${region}`) 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  return await response.body
} catch (error) {
  console.error("track details could not be found")
  return []
}
}

export async function loadHuts(): Promise<Huts[]> {
  try {
  const response = await fetch('../data/data.json')

  if (!response) {
    console.error('Failed to load huts data')
    return []
  }
  const hutsData = await response.json()
  const data = JSON.parse(hutsData)
  console.log(data.huts)
  return data.huts

} catch (error) {
  console.error("sorry huts data could not be found")
  return []
}
}

export async function getHikesByName(region: string, assetId: string): Promise<TrackDetails[]> {
  try {
  const response = await request.get(`/api/v1/tracks/region/${region}/${assetId}/detail`) 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  console.log('API response:', response.body)
  return response.body
} catch (error) {
  console.error("track details could not be assesed")
  return []
}
}
