import Button from '../grid/Button'
import { Link } from 'react-router-dom'

const CampsitesMalbourghGrid = () => {
  return (
    <div className='card bg-base-100 max-h-[400px] w-80 shadow-md rounded-md space-y-2 transition-transform hover:scale-105 duration-300 flex flex-col'>
      <figure className='p-2'>
        <img
          src='/images/arcgis/Layout.jpg'
          alt='Campsites Marlborough'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
       Vector Analysis
        </h2>
        <p>
        Mapping the invasive Nassella Tussock and its proximity to campsites in the Marlborough region, South Island, New Zealand
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
