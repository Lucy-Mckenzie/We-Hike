import Button from './Button'

const Qgis = () => {
  return (
    <div className='card bg-base-100 max-h-[400px] w-80 shadow-md rounded-md space-y-2 transition-transform hover:scale-105 duration-300 flex flex-col'>
      <figure className='p-2 h-40'>
        <img
          src='/images/qgis-example.png'
          alt='suncoast patios blinds'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
          QGIS (Geographic Information Services)
        </h2>
        <p>
          A documentaion of my QGIS studies.
        </p>
        <div className='card-actions'>
          <a
            href='/qgis'>
            <Button />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Qgis
