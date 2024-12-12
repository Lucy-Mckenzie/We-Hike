import { useParams } from 'react-router-dom'
import data from '../data/greatWalks'

export default function GreatWalksDetails() {
  const { name } = useParams()
 
  if (!name) return <p>Sorry couldnt find the hike.</p>

  const hike = data.find((h) => h.name === decodeURIComponent(name))

  if (!hike) return <p>Hike is undefined.</p>

  return (
    <div className="flex flex-col items-center max-w-[900px] m-auto pb-6">
      <h1 className="text-2xl text-left mb-5 font-lato m-5">Details about <span className="font-semibold">{name}</span> Great walk</h1>
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src={`/images/greatWalks/${hike.image}`}
      alt={`${hike.name} hiking trail`}
      className="w-full h-[500px] object-cover"
    />
      <div className="p-6">
      <p className="text-lg font-lato text-gray-700">
        <span className="font-semibold">Located in:</span> {hike.region}
      </p>
      <p className="pt-2 text-lg font-bold text-gray-800">
        {hike.distance} Kms
      </p>
      <p className="pt-2 text-md text-gray-600">
        <span className="font-semibold">Dog access:</span> {hike.dogaccess}
      </p>
      <p className="pt-4 text-md leading-relaxed text-gray-700">
        {hike.descriptionL}
      </p>
    </div>
      </div>
      </div>
  )
}
