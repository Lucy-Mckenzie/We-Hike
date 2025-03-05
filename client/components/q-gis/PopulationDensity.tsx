
const PopulationDensity = () => {
  return (
    <div className='flex flex-col justify-center my-20'>
      <div className='flex space-x-4'>
        <img 
          src='/images/qgis/population-density.png'
          alt='New York Population Density 2010'
          className='w-6/12 rounded-md shadow-md border border-gray-500 z-10'
        />
        <div className='text-left'>
          <h1 className='text-lg font-semibold'>
            A study of the Largest Earthquakes from 2000-2025
          </h1>
          <h2 className='mb-5 text-sm'>
            This is part 2 of the QGIS Development course, learning basic data processing and visualisation techniques. 
            Creating a table join and using a graduated symbology to create a choropleth map.
          </h2>
          <ul className='list-disc p-4 space-y-2'>
            <li>
              Understanding how to combine data from different tables based on a common attribute.
            </li>
            <li>
              Learning techniques to standardise data for accurate comparison and analysis.
            </li>
            <li>
              Designing maps where areas are shaded based on data values, displaying visual data analysis.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PopulationDensity
