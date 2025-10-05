import Button from '../grid/Button'
import { Link } from 'react-router-dom'

const CampsitesMalbourghGrid = () => {
  return (
    <div className='card bg-base-100 max-h-[400px] w-80 shadow-md rounded-md transition-transform hover:scale-105 duration-300 flex flex-col'>
      <figure className='p-2 rounded-md w-full'>
        <img
          src='/images/arcgis/vector_grid.png'
          alt='Campsites Marlborough'
          className='w-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
          Vector Analysis
        </h2>
        <p>
          Mapping the invasive Nassella Tussock and its proximity to campsites in the Marlborough, NZ.
        </p>
        <div className='card-actions'>
          <Link
            to='/campsitesMalbourgh'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CampsitesMalbourghGrid
