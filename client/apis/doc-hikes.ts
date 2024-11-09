import request from 'superagent'
import { TracksByRegion } from '../../models/trackDetails'
import { Huts } from '../../models/huts'

export async function getHikes(region: string): Promise<TracksByRegion[]> {

  const response = await request.get(`/api/v1/tracks/region/${region}`) 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  return await response.body
}

export async function loadHuts(): Promise<Huts[]> {
  const response = await fetch('../data/data.json')

  if (!response) {
    throw new Error('Failed to load huts data')
  }
  const hutsData = await response.text()
  const data = JSON.parse(hutsData)
  console.log(data.huts)
  return data.huts
}

