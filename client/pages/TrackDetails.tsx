import { getTrackById } from '../apis/doc-hikes.ts'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function TracksByName() {

const { assetId } = useParams()

const { data: tracks, error, isPending } = useQuery({
  queryKey: ['trackDetails', assetId],
  queryFn: () => getTrackById(assetId as string)
})

console.log('tracks:', tracks)

if (!assetId) {
  return <p>Hike or region is undefined</p>
}

if (error) {
  console.error('Error fetching data:', error)
  return <p>Sorry couldnt find this hike</p>
}

if (isPending) {
  return <p>Loading...</p>
}


return (
    <div className="flex flex-col items-center max-w-[900px] m-auto">
      <h1 className="text-4xl text-center my-5 font-normal font-lato">{tracks.name}</h1>
      <div>
    <img src={tracks.introductionThumbnail} className="flex items-center justify h-auto" alt={`${tracks.name} thumbnail`} />
    <p>Region: {tracks.region.join(", ")}</p>
    <p>Introduction: {tracks.introduction}</p>

    <p>Permitted Activities: {tracks.permittedActivities.join(", ")}</p>
    <p>Distance: {tracks.distance}</p>
    <p>Walk Duration: {tracks.walkDuration}</p>
    <p>Walk Duration Category: {tracks.walkDurationCategory.join(", ")}</p>
    <p>Walk Track Category: {tracks.walkTrackCategory.join(", ")}</p>
    
    <p>Wheelchairs and Buggies: {tracks.wheelchairsAndBuggies ? "Yes" : "No"}</p>
    <p>MTB Duration: {tracks.mtbDuration ? tracks.mtbDuration : "N/A"}</p>
    <p>Kayaking Duration: {tracks.kayakingDuration ? tracks.kayakingDuration : "N/A"}</p>
    
    <p>Dogs Allowed: {tracks.dogsAllowed}</p>
    <p>Location: {tracks.locationString}</p>
    </div>
  </div>
)

}