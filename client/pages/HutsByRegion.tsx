import MapHuts from '../components/MapHuts'
import data from '../data/data.json'
import { Link } from 'react-router-dom'
import HutAlerts from '../components/HutAlerts'

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

export default function DisplayRegions() {
  
  const filteredRegions = [...new Set(data.huts.map(hut => hut.region))]

  return (
    <>
     <Link to='/' className='pl-4 underline'>Back to home</Link>
    <div className='flex flex-col items-center px-5 py-10 text-left mx-auto max-w-[900px]'>
      <h1 className='text-4xl text-center mb-5 font-normal'>All Doc huts in New Zealand</h1>
      <MapHuts />
      <div className='flex flex-col items-center max-w-[900px] m-auto pb-6'>
        <HutAlerts />
      <h1 className='text-4xl text-left mb-5 font-light font-lato m-5'>Check out the huts in your Region</h1>
      <ul>
     {filteredRegions.map((region) => {
      return (
        <li key={region} className='bg-grey-300 border border-grey transition-transform duration-200 hover:scale-105 px-4 m-1'>
          <Link to={`/huts/${encodeURIComponent(region as string)}`} onClick={scrollToTop}>
            {region}
          </Link>
        </li>
      )
     })}
     </ul>
     </div>
    </div>
    </>
  )
}