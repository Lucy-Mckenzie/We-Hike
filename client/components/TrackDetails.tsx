import { getHikesByName } from '../apis/doc-hikes.ts'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

// displays all info about the tracks, based on region and assetId, useQuery retrieves all data
// maps through the data and displays info of the track that matches the assetId
export default function TracksByName() {

const { region, assetId } = useParams()

console.log("region:", region)
console.log("assetId:", assetId)

const { data: tracks, error, isPending } = useQuery({
  queryKey: ['trackDetails', assetId],
  queryFn: () => getHikesByName(assetId as string)
})

console.log('tracks:', tracks)

if (!assetId ) {
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

// const data = tracks.find((track) => track.assetId === assetId)


// if (!data) {
//   return <p>Track not found</p>
// }

return (
  <div>
    <h1>Track details</h1>
    <ul>
      <li>
        <p>Name: {tracks.name}</p>
        <p>Introduction: {tracks.introduction}</p>
        <p>Distance: {tracks.distance}</p>
        <p>Dogs Allowed: {tracks.dogsAllowed}</p>
      </li>
    </ul>
  </div>
)

}