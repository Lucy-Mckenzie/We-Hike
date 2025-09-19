
const GNSS = () => {
  return (
    <div className='flex flex-col justify-center my-20'>
      <div className='flex space-x-4'>
        <img 
          src='/images/arcgis/gnss.png'
          alt='Gnss layout'
          className='w-6/12 rounded-md shadow-md border border-gray-500 z-10'
        />
        <div className='text-left'>
          <h1 className='text-lg font-semibold'>
            {/* A study of the introducted Nasella Tussock and its proximity to campsites in the Malbourgh region of the South island of New Zealand.  */}
          </h1>
          <h2 className='mb-5 text-sm'>
            {/* This is workshop 1, semester 2 at Flinders University - Vector analysis in conservation management. Using vector overlay, we layer the camp sites, and weed presence of the Nassella Tussock
            of top of each other to see how large an area of weeds are in a radius of 10km to the camp grounds.  */}
          </h2>
          <h2 className='mb-5 text-sm'>
            {/* The goal is to prevent the spread of the invasive weed, and by understanding which campgrounds make the most impacts in the spread.  */}
          </h2>
          <ul className='list-disc p-4 space-y-2'>
            <li>
              {/* Using the NZGD 2000 New Zealand Transverse Mectator which allows us to get the most accurate coordinates. */}
            </li>
            <li>
              {/* The sole focus of this project was to understand the basics of ArcGIS, symobology, buffer layers to create the 10km radius around the campgrounds */}
            </li>
            <li>
              {/* A problem that occured when creating the final map was understanding which layers took trump in priority. Is it more important to have the main city names, the buffer layer, or the tussock on the top layer. 
              I worked out through this process that the most important feature was to be able to see the names of the campgrounds, then tussock, then the campground buffer.   */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GNSS
