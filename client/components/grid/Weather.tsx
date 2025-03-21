import Button from './Button'
import { Link } from 'react-router-dom'

const Weather = () => {
  return (
    <div className='card bg-base-100 max-h-[400px] w-80 shadow-md rounded-md space-y-2 transition-transform hover:scale-105 duration-300 flex flex-col'>
      <figure className='p-2 h-40'>
        <img
          src='/images/weather-example.png'
          alt='An example of the weather map'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
        Weather Conditions
        </h2>
        <p>
        Open sourced data on current weather conditions, worldwide.
        </p>
        <div className='card-actions'>
          <Link
            to='/weather'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Weather
