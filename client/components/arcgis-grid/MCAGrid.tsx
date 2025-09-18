import Button from '../grid/Button'
import { Link } from 'react-router-dom'

const MCAGrid = () => {
  return (
    <div className='card bg-base-100 max-h-[400px] w-80 shadow-md rounded-md space-y-2 transition-transform hover:scale-105 duration-300 flex flex-col'>
      <figure className='p-2'>
        <img
          src='/images/arcgis/MCA_suit1.jpg'
          alt='Multicriteria Suitability 1'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
        Multicriteria analysis
        </h2>
        <p>
       
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
