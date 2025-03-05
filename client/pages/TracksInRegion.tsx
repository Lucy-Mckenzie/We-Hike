import { useParams, Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import useAllTracksInRegion from '../hooks/use-allTracksInRegion.tsx'

export default function DisplayTracks() {
  const { region } = useParams()

  const {data: tracks, error, isPending } = useAllTracksInRegion()

  if (error) return <p>Sorry couldn&apos;t find this hike</p>
  if (isPending) return <LoadingSpinner />
 
  const sortedTracks = [...tracks].sort((a, b) => a.name.localeCompare(b.name))
  return (
    <>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/tracks/region'>Hikes</Link></li>
          <li>Hikes  in {region}</li>
        </ul>
      </div>
      <div className='flex flex-col items-center max-w-[900px] m-auto pb-6'>
        <h1 className='text-4xl text-left mb-5 m-5'>
          Hikes in {region}
        </h1>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
          {sortedTracks.map((track) => (
            <li
              key={track.assetId}
            >
              <Link
                to={`/tracks/region/${track.region}/${track.assetId}/detail`}
                className='flex justify-center hover:bg-[#727e5a] duration-300 hover:text-white transition relative bg-[#727e5a]/20 rounded-lg shadow-md flex-col p-5 items-baseline text-center h-[70px]'
              >
                {track.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
