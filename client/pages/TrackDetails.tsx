import LoadingSpinner from '../components/LoadingSpinner.tsx'
import useAllTrackDetails from '../hooks/use-allTrackDetails.tsx'

export default function TracksByName() {

  const { data: tracks, error, isPending } = useAllTrackDetails()


  if (error) return <p>Sorry couldn&apos;t find this hike</p>
  if (isPending) return <LoadingSpinner />

  return (
    <div className='flex flex-col items-center max-w-[900px] m-auto min-h-screen'>
      <h1 className='text-4xl text-center my-5 font-normal font-lato'>{tracks.name}</h1>
      <div>
        <img src={tracks.introductionThumbnail} className='flex items-center justify h-auto' alt={`${tracks.name} thumbnail`} />
        <p>Region: {tracks.region.join(', ')}</p>
        <p>Introduction: {tracks.introduction}</p>

        <p>Permitted Activities: {tracks.permittedActivities.join(', ')}</p>
        <p>Distance: {tracks.distance}</p>
        <p>Walk Duration: {tracks.walkDuration}</p>
        <p>Walk Duration Category: {tracks.walkDurationCategory.join(', ')}</p>
        <p>Walk Track Category: {tracks.walkTrackCategory.join(', ')}</p>
    
        <p>Wheelchairs and Buggies: {tracks.wheelchairsAndBuggies ? 'Yes' : 'No'}</p>
        <p>MTB Duration: {tracks.mtbDuration ? tracks.mtbDuration : 'N/A'}</p>
        <p>Kayaking Duration: {tracks.kayakingDuration ? tracks.kayakingDuration : 'N/A'}</p>
    
        <p>Dogs Allowed: {tracks.dogsAllowed}</p>
        <p>Location: {tracks.locationString}</p>
      </div>
    </div>
  )

}
