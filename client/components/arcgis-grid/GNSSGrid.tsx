import Button from '../grid/Button'
import { Link } from 'react-router-dom'

const GNSSGrid = () => {
  return (
    <div className='card bg-base-100 max-h-[400px] w-80 shadow-md rounded-md transition-transform hover:scale-105 duration-300 flex flex-col'>
      <figure className='p-2 rounded-md w-full'>
        <img
          src='/images/arcgis/gnss_grid.png'
          alt='Routeburn Trail'
          className='w-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
          GNSS Report
        </h2>
        <p>
          GNSS Accuracy Comparison: Garmin 65s vs Trimble RTK DA2 Bedford Park, Adelaide 
        </p>
        <div className='card-actions'>
          <Link
            to='/GNSS'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GNSSGrid
