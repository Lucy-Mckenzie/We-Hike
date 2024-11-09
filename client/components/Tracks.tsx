import { getHikes } from '../apis/doc-hikes.ts'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TracksByRegion } from '../../models/trackDetails.ts'

export default function DisplayTracks() {
  const { region } = useParams()
  const [tracks, setTracks] = useState<TracksByRegion[]>([])

  useEffect(() => {
    async function fetchTracks() {
      if (region) {
        const data = await getHikes(region)
        setTracks(data)
      }
    }
    fetchTracks()
  }, [region])
 
  return (
    <div>
      <h1>Tracks in {region}</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.assetId}>
            <Link to={`/tracks/region/${region}/${track.name}`}>
              {track.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


