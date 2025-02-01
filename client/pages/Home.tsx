import Map from '../components/Map'
import Greatwalks from '../components/GreatWalks'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
      <div className='lg:px-5 lg:py-10 py-5 text-center w-full lg:max-w-7xl'>
        <h1 className='font-lato lg:mb-5 mb-2 text-center text-xl sm:text-2xl lg:text-4xl pr-8'>
        The great walks of New Zealand, mapped
        </h1>
        <Map />
        <Greatwalks />
      </div>
    </div>
  )
}
