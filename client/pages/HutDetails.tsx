import LoadingSpinner from '../components/LoadingSpinner'
import useHutDetails from '../hooks/use-allHutDetails'
import { Link, useParams } from 'react-router-dom'

export default function HutDetail() {

  const { assetId } = useParams()
  const { data: huts, error, isPending } = useHutDetails(assetId as string)

  if (error) return <p>Sorry couldnt find this hut</p>
  if (isPending) return <LoadingSpinner />

  return (
    <>
      <Link to='/huts' className='pl-4 underline'>Back to huts</Link>
      <div className='flex flex-col items-center max-w-[900px] m-auto min-h-screen'>
        <h1 className='text-4xl text-center my-5 font-normal font-lato'>{huts.name}</h1>
        <div>
          <img src={huts.introductionThumbnail} className='flex items-center justify h-auto' alt={`${huts.name} thumbnail`} />
          <p className='pt-2'><strong>Region: </strong>{huts.region}</p>
          <p><strong>Location: </strong>{huts.locationString}</p>
          <p><strong>Introduction: </strong>{huts.introduction}</p>
          <p><strong>Status: </strong>{huts.status}</p>

          <p><strong>Number of bunks: </strong>{huts.numberOfBunks}</p>
          <p><strong>facilities: </strong>{huts.facilities}</p>
          <p><strong>Bookable: </strong>{huts.bookable ? 'Yes' : 'No'}</p>
          <p><strong>Hut Category: </strong>{huts.hutCategory}</p>
          <p><strong>Proximity To road end: </strong>{huts.proximityToRoadEnd}</p>
        </div>
      </div>
    </>
  )
}
