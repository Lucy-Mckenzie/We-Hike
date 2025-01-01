import Map from '../components/Map'
import Greatwalks from '../components/GreatWalks'

export default function Home() {
  return (
    <div className='flex max-w-[900px] flex-col justify-center items-center mx-auto'>
    <div className='lg:px-5 lg:py-10 py-5 lg:text-left text-center items-center'>
      <h1 className='font-lato lg:mb-5 mb-2 lg:text-left lg:text-4xl text-center text-1xl pr-8'>
        The great walks of New Zealand, mapped
      </h1>
      <Map />
      <Greatwalks />
    </div>
    </div>
  )
}
