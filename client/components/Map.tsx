import greatWalks from '../data/greatWalks'
import { GreatWalk }from '../../models/tracks'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

export default function Map() {

  return (
    <div className='w-full h-[50vh] md:h-[70vh] lg:h-[500px] max-w-7xl rounded-md overflow-hidden z-0'>
      <MapContainer
        className='w-full h-full'
        center={[-39.2806, 176.9120]}
        zoom={8}
        aria-label='Map displaying the Great Walks of New Zealand'
      >
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        />
        {greatWalks.map((walk: GreatWalk) => (
          <Marker key={walk.name} position={walk.location as [number, number]} title={`marker for ${walk.name}`} icon={markerIcon}>
            <Popup>
              <b>{walk.name}</b><br />
              Region: {walk.region}<br />
              Description: {walk.descriptionS}<br />
              Distance: {walk.distance} km
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}