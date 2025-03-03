import EarthQuakes from "../components/q-gis/EarthQuakes"

const QGIS = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
      <div className='lg:px-5 lg:py-10 py-5 text-center w-full lg:max-w-7xl'>
        <h1 className='font-lato text-center text-xl sm:text-2xl lg:text-4xl pr-8 mb-10'>
          A documentation of my QGIS studies
        </h1>
        <EarthQuakes />
      </div>
    </div>
  )
}

export default QGIS
