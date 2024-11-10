import { getHikes } from '../apis/doc-hikes.ts'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function DisplayTracks() {
  const { region } = useParams()

const {data: tracks, error, isPending } = useQuery({
  queryKey: ['tracks', region],
  queryFn: () => {
    if (region) {
      return getHikes(region)
    }
    return []
  } 
})

if (!region) {
  return undefined
}

if (error) {
  console.error('Error fetching data:', error)
  return <p>Sorry couldnt find this hike</p>
}

if (isPending) {
  return <p>Loading...</p>
}
 
  return (
    <div>
      <h1>Tracks in {region}</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.assetId}>
            <Link to={`/tracks/region/${track.region}/${track.assetId}/detail`}>
              {track.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


