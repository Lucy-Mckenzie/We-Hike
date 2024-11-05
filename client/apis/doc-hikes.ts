// import request from 'superagent'
import { Tracks } from '../../models/tracks'

export async function getHikes(): Promise<Tracks[] | undefined> {
  try {
    const response = await fetch('/api/hikes') // Calls the backend API

    if (!response.ok) {
      throw new Error('Failed to fetch hikes')
    }
    return await response.json()
  } catch (error) {
    console.error('The tracks data could not be accessed at this time', error)
  }
}