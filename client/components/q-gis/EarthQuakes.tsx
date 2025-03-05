

const EarthQuakes = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='text-left'>
        <h1 className='text-lg font-semibold'>
          A study of the Largest Earthquakes from 2000-2025
        </h1>
        <h2 className='mb-5'>
          This is part 1 of the QGIS Development course, where we learn the ins and outs of how to load, visualise data, add labels and more. 
        </h2>
      </div>
      <img 
        src='/images/qgis/earthquakes.png'
        alt='earthquakes data displayed'
        className='w-12/12 rounded-md shadow-md border border-gray-500 z-10'
      />
    </div>
  )
}

export default EarthQuakes
