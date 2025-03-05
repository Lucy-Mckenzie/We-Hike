import EarthQuakes from "../components/q-gis/EarthQuakes"
import PopulationDensity from "../components/q-gis/PopulationDensity"

const QGIS = () => {
  return (
    <div className='relative flex flex-col justify-center items-center mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] grid-rows-[repeat(auto-fit,minmax(10px,1fr))] gap-0 opacity-10">
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i} className="border border-gray-300"></div>
        ))}
      </div>
      <div className='lg:px-5 lg:py-10 py-5 text-center w-full lg:max-w-7xl'>
        <h1 className='font-lato text-center text-xl sm:text-2xl lg:text-4xl pr-8 mb-10'>
          A documentation of my QGIS studies
        </h1>
        <EarthQuakes />
        <PopulationDensity />
      </div>
    </div>
  )
}

export default QGIS
