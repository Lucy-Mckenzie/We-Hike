import { getHikesByName } from '../apis/doc-hikes.ts'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

// displays all info about the tracks, based on region and assetId, useQuery retrieves all data
// maps through the data and displays info of the track that matches the assetId
export default function TracksByName() {

const { region, assetId } = useParams()

const { data: tracks, error, isPending } = useQuery({
  queryKey: ['trackDetails', region, assetId],
  queryFn: () => {
    if (assetId && region) {
      return getHikesByName(region, assetId)
    }
    return [] 
  },
})

console.log('tracks:', tracks)

if (!assetId || !region) {
  <p>Hike or region is undefined</p>
  return null
}

if (error) {
  console.error('Error fetching data:', error)
  return <p>Sorry couldnt find this hike</p>
}

if (isPending) {
  return <p>Loading...</p>
}

const data = tracks.find((track) => track.assetId === assetId)


if (!data) {
  return <p>Track not found</p>
}

return (
  <div>
    <h1>Track details</h1>
    <ul>
      <li key={data.assetId}>
        <p>Name: {data.name}</p>
        <p>Introduction: {data.introduction}</p>
        <p>Distance: {data.distance}</p>
        <p>Dogs Allowed: {data.dogsAllowed}</p>
      </li>
    </ul>
  </div>
)

}