import region from '../data/region'
import { Link } from 'react-router-dom'
import  MapHikes  from '../components/MapHikes'

export default function DisplayAllRegions() {
  return (
    <>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>Hikes</li>
        </ul>
      </div>
      <div className='m-auto text-center flex flex-col items-center'>
        <h1 className='text-xl sm:text-2xl lg:text-4xl text-center mb-5 font-normal'>
          All Doc hikes in New Zealand
        </h1>
        <MapHikes />
        <h1 className='text-xl sm:text-2xl lg:text-4xl text-center my-5 font-light font-lato'>
          Where do you want to go?
        </h1>
        <div>
          <ul>
            {region.map((region) => (
              <li className='bd-grey-100 border border-grey-300 rounded-lg p-4 mb-4 shadow-md text-center transition-transform duration-200 hover:scale-105 max-w-[800px]' 
                key={region.id} >
                <Link to={`/tracks/region/${region.id}`}>
                  <h2 className='text-2xl text-center mb-5 font-normal font-lato'>{region.name}</h2>
                  <img src={`/images/regions/${region.image}`} 
                    alt={`${region.name} hiking trail`}
                    className='max-w-full h-full rounded-md object-cover'
                  />
                </Link>
              </li>
          
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
