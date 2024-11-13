import region from '../data/region'
import { Link } from 'react-router-dom'



// Looks through the regions data and uses the region id as a key, with a link to all hikes in that region
export default function DisplayAllRegions() {
  
  return (
    <div className="allRegionsContainer">
      <h1 className="allRegionsTitle">Where do you want to go?</h1>
      <div className="allRegionsDisplay">
    <ul>
      
        {region.map((region) => (
          <li key={region.id} className="mb-4">
            <Link to={`/tracks/region/${region.id}`}>
              <h2 className="allRegionsName">{region.name}</h2>
              <img src={`/images/regions/${region.image}`} 
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
