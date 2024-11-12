import region from '../data/region'
import { Link } from 'react-router-dom'
import Map from '../components/Map'
import { useState } from 'react'


// Looks through the regions data and uses the region id as a key, with a link to all hikes in that region
export default function DisplayAllRegions() {
  const [search, setSearch] = useState('')

  const filteredRegions = region.filter(region => region.name.toLowerCase()
  .includes(search.toLowerCase()))
  
  return (
    <div className="allRegionsContainer">
      <h1 className="allRegionsTitle">Select a region</h1>
      <Map />
      <input 
      type="text"
      placeholder="Search region.."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="allRegionsInput"
      />
      <div className="allRegionsDisplay">
    <ul>
        {filteredRegions.map((region) => (
          <li key={region.id} className="mb-4">
            <Link to={`/tracks/region/${region.id}`}>
              <h2 className="allRegionsName">{region.name}</h2>
              <img src={`/images/${region.image}`} 
                alt={`${region.name} hiking trail`}
                className="allregionsPhoto"
              />
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}
