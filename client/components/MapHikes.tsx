import { getTracks } from '../apis/doc-hikes.ts'
import { TrackDetails } from '../../models/trackDetails'
import {useQuery} from '@tanstack/react-query'
import proj4 from 'proj4' // needed for translation from NZTM to lat & lon, package https://www.npmjs.com/package/proj4
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

  const { data: tracks, error, isPending } = useQuery({
    queryKey: ['tracks'],
    queryFn: () => getTracks()
  })

  const nztm = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +datum=WGS84 +units=m +no_defs' // NZTM definition
  const wgs84 = 'EPSG:4326' // WGS84 (Latitude and Longitude)


  if (isPending) {
    return <>Loading...</>
  }

  if (error) {
    return <>Sorry, cannot find tracks..</>
  }

  if (!tracks) {
    return <p>Sorry, tracks cannott be displayed at the moment.</p>
  }

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

      // Convert NZTM coordinates to WGS84 (latitude, longitude)
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
            Region: {region}
          </Popup>
        </Marker>
      )
    })}
  </MapContainer>
)
}
