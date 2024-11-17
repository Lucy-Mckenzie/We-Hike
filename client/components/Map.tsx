import greatWalks from '../data/greatWalks'
import { GreatWalk }from '../../models/tracks'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"


export default function Map() {

 return (
  <MapContainer
    className="flex flex-col rounded-md overflow-hidden h-[550px] w-full"
    center={[-39.2806, 176.9120]}
    zoom={8}
    aria-label="Map displaying the Great Walks of New Zealand"
  >
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    />
    <LayersControl position="topright">
    {greatWalks.map((walk: GreatWalk) => (
      <Marker key={walk.name} position={walk.location as [number, number]} title={`marker for ${walk.name}`}>
        <Popup>
          <b>{walk.name}</b><br />
          Region: {walk.region}<br />
          Description: {walk.description}<br />
          Distance: {walk.distance} km
        </Popup>
      </Marker>
    ))}
    </LayersControl>
  </MapContainer>
 )
}