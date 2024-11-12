import data from '../data/data.json'
import { Link } from "react-router-dom"
import MapHuts from '../components/MapHuts'

// maps through the data base and displays regions with links
export default function DisplayRegions() {

  return (
    <div>
      <h1>Hiking Huts</h1>
      <MapHuts />
      <ul className="hutRegion">
        {data.huts.map((hut, index) => (
          <li key={index}>
          <Link to={`/huts/${hut.region}`}>{hut.region}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}