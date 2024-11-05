import request from 'superagent'
import { Tracks } from '../../models/tracks'

const API_URL = 'https://api.doc.govt.nz/v1/tracks'
const apiKey = process.env.REACT_APP_DOC_API_KEY

export async function getHikes(): Promise<Tracks[] | undefined> {
  try {
    const response = await request
    .get(API_URL)
    .set('Authorization', `Bearer ${apiKey}`)

    return response.body
  } catch (error) {
    console.error('The tracks data could not be accessed at this time', error)
  }
}