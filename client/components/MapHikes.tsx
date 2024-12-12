import { TrackDetails } from '../../models/trackDetails'
import useAllHikes from '../hooks/use-allHikes.tsx'
import proj4 from 'proj4' 
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet'

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
})

export default function MapHikes() {


  const { data: tracks, error, isPending } = useAllHikes()

  const nztm = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +datum=WGS84 +units=m +no_defs' 
  const wgs84 = 'EPSG:4326' 


  if (isPending)  return <>Loading...</>
  if (error) return <>Sorry, cannot find tracks..</>
  if (!tracks) return <p>Sorry, tracks cannott be displayed at the moment.</p>
  
  return (
    <MapContainer
    className="flex flex-col rounded-md overflow-hidden h-[550px] w-full"
    center={[-39.2806, 176.9120]}
    zoom={8}
    aria-label="Map displaying hikes in New Zealand"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
    {tracks.map((track: TrackDetails) => {
      const { name, region, x, y } = track

      const [longitude, latitude] = proj4(nztm, wgs84, [x, y])

      return (
        <Marker
          key={name}
          position={[latitude, longitude] as [number, number]}
          title={`marker for ${name}`}
          icon={markerIcon}
        >
          <Popup>
           <p>{name}</p><br />
           <p>Region: {region}</p>
          </Popup>
        </Marker>
      )
    })}
  </MapContainer>
)
}
