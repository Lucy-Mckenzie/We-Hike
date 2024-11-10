import { getHikesByName } from '../apis/doc-hikes.ts'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

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

const data = tracks.filter((code) => code.assetId === assetId)

return (
  <div>
    <h1>Track details</h1>
    <ul>
      {data.map((track) => (
        <li key={track.name}>
           <p>
              <Link to={`/tracks/${track.assetId}/details`}>{track.name}</Link> 
            </p>
          <p>Name: {track.name}</p>
          <p>Introduction: {track.introduction}</p>
          <p>Distance: {track.distance}</p>
          <p>Dogs Allowed: {track.dogsAllowed}</p>
        </li>
      ))}
    </ul>
  </div>
);
}