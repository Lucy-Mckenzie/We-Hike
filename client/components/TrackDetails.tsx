import { getTrackById } from '../apis/doc-hikes.ts'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

// displays all info about the tracks, based on region and assetId, useQuery retrieves all data
// displays info of the track that matches the assetId
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
    <div className="trackDetailsContainer">
      <h1 className="trackDetailsTitle">Track details for {tracks.name}</h1>
      <div className="trackDetails">
    <img src={tracks.introductionThumbnail} alt={`${tracks.name} thumbnail`} />
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