import data from '../data/data.json'
import { Huts } from '../../models/huts'
import proj4 from 'proj4'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export default function MapHuts() {

   const nztm = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +datum=WGS84 +units=m +no_defs'  // NZTM definition
   const wgs84 = 'EPSG:4326' // WGS84 (Latitude and Longitude)

 return (
  <MapContainer
  className="flex flex-col rounded-md overflow-hidden h-[550px] w-full"
  center={[-39.2806, 176.9120]}
  zoom={8}
  aria-label="Map displaying the huts of New Zealand"
>
  <TileLayer
    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  />
  {data.huts.map((hut: Huts) => {
    const { name, status, region, y, x } = hut
   // Performes the conversion of coordinates from one spatial reference system (NZTM in this case) to another (WGS84, which uses latitude and longitude).
  const [longitude, latitude] = proj4(nztm, wgs84, [x, y])

  return (
    <Marker 
      key={name}
      position={[latitude, longitude] as [number, number]}
      title={`marker for ${name}`}>
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