import Map from './Map'
import Greatwalks from './GreatWalks'

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[900px] flex-col items-start px-5 py-10 text-left">
      <h1 className="font-lato mb-5 text-left text-4xl font-light">
        The great walks of New Zealand, mapped
      </h1>
      <Map />
      <Greatwalks />
    </div>
  )
}
