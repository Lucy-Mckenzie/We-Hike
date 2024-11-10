import region from '../data/region'
import { Link } from 'react-router-dom'

// Looks through the regions data and uses the region id as a key, with a link to all hikes in that region
export default function DisplayAllRegions() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Select a region</h1>
      <ul>
        {region.map((region) => (
          <li key={region.id}>
            <Link
              to={`/tracks/region/${region.id}`}>
              {region.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
