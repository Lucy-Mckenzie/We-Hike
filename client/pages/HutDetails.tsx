import { getHutDetails } from '../apis/doc-huts.ts'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function HutsByDetail() {

const { assetId } = useParams()

const { data: huts, error, isPending } = useQuery({
  queryKey: ['hutDetails', assetId],
  queryFn: () => getHutDetails(assetId as string)
})

if (error) return <p>Sorry couldnt find this hike</p>
if (isPending) return <p>Loading...</p>

return (
    <div className="flex flex-col items-center max-w-[900px] m-auto">
      <h1 className="text-4xl text-center my-5 font-normal font-lato">{huts.name}</h1>
      <div>
    <img src={huts.introductionThumbnail} className="flex items-center justify h-auto" alt={`${huts.name} thumbnail`} />
    <p>Region: {huts.region}</p>
    <p>Location: {huts.locationString}</p>
    <p>Introduction: {huts.introduction}</p>
    <p>Status: {huts.status}</p>

    <p>Number of bunks: {huts.numberOfBunks}</p>
    <p>facilities: {huts.facilities}</p>
    <p>Bookable: {huts.bookable}</p>
    <p>Hut Category: {huts.hutCategory}</p>
    <p>Proximity To road end: {huts.proximityToRoadEnd}</p>
    </div>
  </div>
)

}