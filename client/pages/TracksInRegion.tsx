import { getTracksByRegion } from '../apis/doc-hikes.ts'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function DisplayTracks() {
  const { region } = useParams()

  const {data: tracks, error, isPending } = useQuery({
    queryKey: ['tracks', region],
    queryFn: () =>  getTracksByRegion(region as string) 
  })

  if (error) return <p>Sorry couldnt find this hike</p>
  if (isPending) return <p>The hikes are loading!...</p>
 
  return (
    <>
      <Link to='/tracks/region' className='pl-4 underline'>Back to Hikes</Link>
      <div className='flex flex-col items-center max-w-[900px] m-auto pb-6'>
        <h1 className='text-4xl text-left mb-5 font-light font-lato m-5'>Hikes in {region}</h1>
        <ul>
          {tracks.map((track) => (
            <li key={track.assetId} className='bg-grey-300 border border-grey transition-transform duration-200 hover:scale-105 px-4 m-1'>
              <Link to={`/tracks/region/${track.region}/${track.assetId}/detail`}>
                {track.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
