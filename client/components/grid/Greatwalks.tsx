import Button from './Button'
import { Link } from 'react-router-dom'

const Greatwalks = () => {
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
        Great Walks
        </h2>
        <p>
        New Zealand has 11 Great Walks, which are multi-day hiking trails. 
        </p>
        <div className='card-actions'>
          <Link
            to='/greatwalks'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Greatwalks
