import data from '../data/data.json'
import { Link } from "react-router-dom"
import MapHuts from '../components/MapHuts'
// import { Huts } from '../../models/huts'

// maps through the data base and displays regions with links
export default function DisplayRegions() {

  return (
    <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
      <h1 className="text-4xl text-left mb-5 font-light">Hiking Huts</h1>
      <MapHuts />
      <ul className="hutRegion">

        {data.huts.map((hut, indx) => (
          <li key={indx}>
          <Link to={`/huts/${hut.region}`}>{hut.region}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}