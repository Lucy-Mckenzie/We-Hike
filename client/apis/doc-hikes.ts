import request from 'superagent'
import { AllTracks } from '../../models/tracks'

export async function getHikes(): Promise<AllTracks[]> {

  const response = await request.get('/api/v1/tracks') 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  return await response.body
}