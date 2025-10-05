import Button from '../grid/Button'
import { Link } from 'react-router-dom'

const MCAGrid = () => {
  return (
    <div className='card bg-base-100 max-h-[400px] w-80 shadow-md rounded-md transition-transform hover:scale-105 duration-300 flex flex-col'>
      <figure className='p-2 rounded-md w-full'>
        <img
          src='/images/arcgis/mca_grid.png'
          alt='Multicriteria Suitability 1'
          className='w-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
          Multicriteria analysis
        </h2>
        <p>
          Analysis for the most suitable site that will provide hospital care for the largest population density in Fleurieu Peninsula.
        </p>
        <div className='card-actions'>
          <Link
            to='/MCA'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MCAGrid
