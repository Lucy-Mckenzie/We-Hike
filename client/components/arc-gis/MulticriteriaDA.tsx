
const MCA = () => {
  return (
    <div className='flex flex-col justify-center my-20'>
      <div className='flex flex-col text-left items-center'>
        <h1 className='text-lg font-semibold justify-center w-4/6'>
          Multi criteria analysis for potential hospital in the Fleurieu Peninsula, Australia
        </h1>
        <h2 className='mb-5 text-sm w-4/6'>
        This project focused on performing an analysis based on a predetermined set of criteria, of where the most suitable location for a new hopital in the Fleurieu Peninsula, South Australia. 
        </h2>
        <h2 className='mb-5 text-sm w-4/6'>
          
        </h2>
      </div>
      <figure className='flex justify-center pb-4'>
        <img 
          src='/images/arcgis/mca_suit1.jpg'
          alt='Multicriteria analysis 1'
          className='w-10/12 rounded-md shadow-md border border-gray-500 z-10'
        />
      </figure>
      <div className='flex flex-col text-left items-center'>
        <h1 className='text-lg font-semibold justify-center w-4/6'>
          Flow chart of the process
        </h1>
        <h2 className='mb-2 text-sm w-4/6'>
          With constrained criteria and preferential layers, we can make an accurate analysis based on these factors. 
        </h2>
        <ul>
          <li>

          </li>
        </ul>
      </div>
      <div className=''>
        <figure className='flex justify-center'>
          <img 
            src='/images/arcgis/flow_chart.png'
            alt='flow chart'
            className='w-10/12 rounded-md shadow-md border border-gray-500 z-10'
          />
        </figure>
      </div>
    </div>
  )
}

export default MCA
