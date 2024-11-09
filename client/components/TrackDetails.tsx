import { getHikesByName } from '../apis/doc-hikes.ts'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function TracksByName() {

const { assetId, region } = useParams()

const { data: tracks, error, isPending } = useQuery({
  queryKey: ['trackDetails', assetId, region],
  queryFn: () => {
    if (region && assetId) {
      return getHikesByName(region, assetId)
    }
    return [] 
  },
})

if (!assetId || !region ) {
  return undefined
}

if (error) {
  return <p>Sorry couldnt find this hike</p>
}

if (isPending) {
  return <p>Loading...</p>
}
return (
  <div>
    <h1>Track details</h1>
    <ul>
      {tracks.map((track) => (
        <li key={track.name}>
           <p>
              <Link to={`/tracks/region/${region}/${assetId}/details`}>{track.name}</Link> 
            </p>
          <p>Name: {track.name}</p>
          <p>Introduction: {track.introduction}</p>
          <p>Distance: {track.distance}</p>
          <p>Wheelchairs and Buggies Access: {track.wheelchairsAndBuggies}</p>
          <p>Dogs Allowed: {track.dogsAllowed}</p>
        </li>
      ))}
    </ul>
  </div>
);
}