import greatWalks from '../data/greatWalks'
import { GreatWalk }from '../../models/tracks'
import {
  FeatureGroup,
  LayersControl,
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import proj4 from 'proj4' 
import polylineCol from '../data/data_1.json'

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

const mapLayers = {
  'Street Map': `https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,
  'Topographic Map': `https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,
  'National Geographic Style': `https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}`
}

export default function Map() {

  const nztm = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +datum=WGS84 +units=m +no_defs' 
  const wgs84 = 'EPSG:4326' 
  
  const convertedPos = polylineCol.polylineCol.map((walk) => ({
    name: walk.name,
    polyline: walk.polyline.map(([x, y]) => proj4(nztm, wgs84, [x, y]))
  }))
  
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
        <LayersControl position='topright'>
          <LayersControl.Overlay checked name='Hiking Tracks'>
            <FeatureGroup>
              {Object.entries(mapLayers).map(([name, url]) => (
                <LayersControl.Overlay key={name} name={name}>
                  <TileLayer url={url} attribution='&copy; ArcGisLine' />
                </LayersControl.Overlay>
              ))}
            </FeatureGroup>
            <FeatureGroup>
              {convertedPos.map((track, index) => (
                <Polyline key={index} positions={track.polyline.map(([lon, lat]) => [lat, lon])} color='#f1642e'>
                  <Tooltip sticky>{track.name}</Tooltip>
                </Polyline>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name='Great Walks'>
            <FeatureGroup>
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
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  )
}
