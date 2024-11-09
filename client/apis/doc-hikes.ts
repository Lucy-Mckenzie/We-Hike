import request from 'superagent'
import { AllTracks } from '../../models/tracks'


export async function getHikes(): Promise<AllTracks[]> {

  const response = await request.get('/api/v1/tracks') 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  return await response.body
}

export async function loadHuts() {
  const response = await fetch('../data/data.json')

  if (!response) {
    throw new Error('Failed to load huts data')
  }
  const data = await response.json()
  console.log(data.huts)
  return data.huts
}

