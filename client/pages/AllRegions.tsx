import region from '../data/region'
import { Link } from 'react-router-dom'



// Looks through the regions data and uses the region id as a key, with a link to all hikes in that region
export default function DisplayAllRegions() {
  
  return (
    <div className="max-w-[900px] m-auto text-center">
      <h1 className="text-4xl text-center my-5 font-normal font-lato">Where do you want to go?</h1>
      <div className="flex flex-col items-center">
    <ul>
      
        {region.map((region) => (
          <li className="bd-grey-100 border border-grey-300 rounded-lg p-4 mb-4 shadow-md text-center transition-transform duration-200 hover:scale-105 max-w-[800px]" 
          key={region.id} >
            <Link to={`/tracks/region/${region.id}`}>
              <h2 className="text-2xl text-center mb-5 font-normal font-lato">{region.name}</h2>
              <img src={`/images/regions/${region.image}`} 
                alt={`${region.name} hiking trail`}
                className="max-w-full h-full rounded-md object-cover"
              />
            </Link>
          </li>
          
        ))}
      </ul>
      </div>
    </div>
  )
}
