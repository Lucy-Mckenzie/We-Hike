import Map from '../components/Map'
import Greatwalks from './GreatWalks'

export default function Home() {

 return (
  <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
  <h1  className="text-4xl text-left mb-5 font-light font-lato">The great walks of New Zealand, mapped</h1>
  <Map />
  <Greatwalks />
  </div>
 )
}