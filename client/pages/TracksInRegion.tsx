import { useParams, Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import useAllTracksInRegion from '../hooks/use-allTracksInRegion.tsx'
import { useState } from 'react'

export default function DisplayTracks() {
  const { region } = useParams()
  const [loadTracks, setLoadTracks] = useState(6)
  const {data: tracks, error, isPending } = useAllTracksInRegion()

  if (error) return <p>Sorry couldn&apos;t find this hike</p>
  if (isPending) return <LoadingSpinner />
 
  const sortedTracks = [...tracks].sort((a, b) => a.name.localeCompare(b.name))
  const displayTracks = sortedTracks.slice(0, loadTracks)
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
          {displayTracks.map((track) => (
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
        {loadTracks < sortedTracks.length && (
          <button
            onClick={() => setLoadTracks((prev) => prev + 6)}
            className='mt-4 px-4 py-2 bg-[#727e5a] text-white rounded-lg shadow-md hover:bg-[#5c6a4c] transition duration-300'
          >
            Load More
          </button>
        )}
      </div>
    </>
  )
}
