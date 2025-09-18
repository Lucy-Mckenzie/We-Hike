
const CampsitesMalbourgh = () => {
  return (
    <div className='flex flex-col justify-center my-20'>
      <div className='flex space-x-4'>
        <img 
          src='/images/arcgis/Layout.jpg'
          alt='Campsites in the Malbourough region of New Zealand'
          className='w-6/12 rounded-md shadow-md border border-gray-500 z-10'
        />
        <div className='text-left'>
          <h1 className='text-lg font-semibold'>
            Mapping the invasive Nassella Tussock and its proximity to campsites in the Marlborough region, South Island, New Zealand
          </h1>
          <h2 className='mb-5 text-sm'>
            This project was completed as part of Workshop 1, Semester 2 at Flinders University: <em>Vector Analysis in Conservation Management</em>. Using vector overlay in ArcGIS, campgrounds and Nassella Tussock weed presence were mapped to assess areas of overlap. A 6 km buffer radius was applied around each campground to estimate potential exposure to the invasive weed. 
          </h2>
          <h2 className='mb-5 text-sm'>
            The aim of this study was to better understand the role of campgrounds in the spread of Nassella Tussock and identify which locations pose the greatest risk for further invasion. 
          </h2>
          <ul className='list-disc p-4 space-y-2'>
            <li>
              The NZGD 2000 New Zealand Transverse Mercator projection was used to ensure coordinate accuracy. 
            </li>
            <li>
              The focus of this exercise was to develop foundational skills in ArcGIS, including symbology, buffer creation, and layer management. 
            </li>
            <li>
              A key challenge involved deciding which map layers to prioritise for clarity. Through experimentation, it was determined that campground names were most important, followed by the tussock distribution, and then the campground buffer zones.  
            </li>
            <li>
              The chart below illustrates the total area of Nassella Tussock within 6 km of each campground in Marlborough. 
            </li>
          </ul>
        </div>
      </div>
      <div className='pt-5'>
        <h1 className='text-left'>
          Figure 1. Total area (hectares) of Nassella Tussock within 10 km of each campground. 
        </h1>
        <img 
          src='/images/arcgis/NassellaTChart.jpg'
          alt='Bar chart of the Campsites in the Malbourough region of New Zealand'
          className='w-full rounded-md shadow-md border border-gray-500 z-10'
        />
      </div>
    </div>
    
  )
}

export default CampsitesMalbourgh
