import { useParams } from 'react-router-dom'
import data from '../data/greatWalks'

export default function GreatWalksDetails() {
  const { name } = useParams()
 
  if (!name) return <p>Sorry couldnt find the hike.</p>

  const hike = data.find((h) => h.name === decodeURIComponent(name))

  if (!hike) return <p>Hike is undefined.</p>

  return (
    <div className="flex flex-col items-center max-w-[900px] m-auto pb-6">
      <h1 className="text-2xl text-left mb-5 font-light font-lato m-5">Details about {name} Great walk</h1>
      <div>
          <img src={`/images/greatWalks/${hike.image}`} alt={`${hike.name} hiking trail`}
          className="max-w-full h-full rounded-md object-cover"></img>
          <p className="">{hike.region}</p>
          <p>{hike.description}</p>
          <p>{hike.distance}</p>
      </div>
      </div>
  )
}
