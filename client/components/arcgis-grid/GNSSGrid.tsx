import Button from '../grid/Button'
import { Link } from 'react-router-dom'

const GNSSGrid = () => {
  return (
    <div className='card bg-base-100 max-h-[400px] w-80 shadow-md rounded-md space-y-2 transition-transform hover:scale-105 duration-300 flex flex-col'>
      <figure className='p-2'>
        <img
          src='/images/home.jpg'
          alt='Routeburn Trail'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
        GNSS Report
        </h2>
        <p>
        GNSS Accuracy Comparison: Garmin 65s vs DA2 (Bedford Park, Adelaide) 
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
