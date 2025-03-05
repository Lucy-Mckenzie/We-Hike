import { Link } from 'react-router-dom'
import WeatherMap from '../components/MapWeather'

const Weather = () => {
  return (
    <>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>Weather</li>
        </ul>
      </div>
      <div className='relative flex flex-col justify-center items-center mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] grid-rows-[repeat(auto-fit,minmax(10px,1fr))] gap-0 opacity-10">
          {Array.from({ length: 10000 }).map((_, i) => (
            <div key={i} className="border border-gray-300"></div>
          ))}
        </div>
        <div className='lg:px-5 lg:py-10 py-5 text-center w-full lg:max-w-7xl'>
          <h1 className='font-lato mb-2 text-center text-xl sm:text-2xl lg:text-4xl pr-8'>
            A collection of Meteorological Data
          </h1>
          <div className="flex justify-end items-baseline">
            <p className='mb-2 font-semibold'>
              View real-time weather layers from OpenWeatherMap
            </p>
            <img
              src='/images/arrow.svg'
              alt='arrow'
              className='w-16 h-12 mr-5' />
          </div>
          <WeatherMap />
        </div>
      </div>
    </>
  )
}
 

export default Weather
