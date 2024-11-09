import { getHikes } from '../apis/doc-hikes.ts'
// import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
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
        {tracks.map((tracks) => (
          <li key={tracks.assetId}>
            {tracks.name} 
          </li>
        ))}
      </ul>
    </div>
  )
}



 // const {data, error, isPending } = useQuery({queryKey: ['tracks'], queryFn: getHikes})
  // console.log('Query Data:', data)

  // if (error) {
  //   return <p>Something went wrong: {error.message}</p>
  // }

  // if (isPending) {
  //   return <>Loading...</>
  // }

  // if (!data) {
  //   return 
  // }

