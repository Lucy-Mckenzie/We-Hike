import region from '../data/region'
import { Link } from 'react-router-dom'

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