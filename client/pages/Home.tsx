import Map from '../components/Map'
import Greatwalks from '../components/GreatWalks'

export default function Home() {
  return (
    <div className="flex max-w-[900px] flex-col justify-center items-center mx-auto">
        <img src="/images/roys.jpg" alt="roys peak" className="h-auto w-auto items-center justify-center rounded-sm"></img>
    <div className="px-5 py-10 text-left items-center">
      <h1 className="font-lato mb-5 text-left text-4xl font-light">
        The great walks of New Zealand, mapped
      </h1>
      <Map />
      <Greatwalks />
    </div>
    </div>
  )
}
