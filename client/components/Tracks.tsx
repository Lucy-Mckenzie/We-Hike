import { getTracksByRegion } from '../apis/doc-hikes.ts'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

// displays tracks based on the region param, useQuery retrieves all the data, the data is mapped over, displays the track names
// links to the tracks region and assetId to display more info in track details
export default function DisplayTracks() {
  const { region } = useParams()

const {data: tracks, error, isPending } = useQuery({
  queryKey: ['tracks', region],
  queryFn: () =>  getTracksByRegion(region as string) 
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
    <div className="tracksRegionDisplayContainer">
      <h1 className="tracksRegion">Tracks in {region}</h1>
      <div className="tracksRegionDisplay">
      <ul>
        {tracks.map((track) => (
          <li key={track.assetId}>
            <Link to={`/tracks/region/${region}/${track.assetId}/detail`}>
              {track.name}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

// https://api.doc.govt.nz/v1/tracks/region/NZ-HKB
// https://api.doc.govt.nz/v1/tracks/region/DOC-CNI
