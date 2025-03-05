import Greatwalks from './grid/Greatwalks'
import Qgis from './grid/Qgis'
import Weather from './grid/Weather'
import Map from './Map'

const Grid = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='flex flex-row flex-wrap lg:gap-x-8 justify-center py-10'>
        <Greatwalks />
        <Qgis />
        <Weather />
      </div>
      <Map />
    </div>
  )
}

export default Grid
