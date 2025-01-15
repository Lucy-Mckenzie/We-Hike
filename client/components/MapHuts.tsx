import data from '../data/data.json'
import proj4 from 'proj4'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

export default function MapHuts() {

   const nztm = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +datum=WGS84 +units=m +no_defs' 
   const wgs84 = 'EPSG:4326'

 return (
  <MapContainer
  className='flex flex-col w-full h-[50vh] md:h-[70vh] lg:h-[500px] max-w-7xl rounded-md overflow-hidden z-0'
  center={[-39.2806, 176.9120]}
  zoom={8}
  aria-label='Map displaying the huts of New Zealand'
>
  <TileLayer
    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  />
  {data.huts.map((hut) => {
    const { assetId, name, status, region, y, x } = hut
  
  const [longitude, latitude] = proj4(nztm, wgs84, [x, y])

  return (
    <Marker 
      key={assetId}
      position={[latitude, longitude] as [number, number]}
      title={`marker for ${name}`}
      icon={markerIcon}
      >
      <Popup>
      <p>{name}</p><br />
      <p>{region}</p><br />
      <p>{status}</p>
      </Popup>
    </Marker>
  )
  })}
</MapContainer>
 )
}