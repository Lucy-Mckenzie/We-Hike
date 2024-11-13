import L from 'leaflet'
import { useEffect } from 'react'
import data from '../data/data.json'
import { Huts } from '../../models/huts'
import proj4 from 'proj4'

export default function MapHuts() {
  useEffect(() => {
  const map = L.map('map').setView([-39.2806, 176.9120], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  const nztm = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +datum=WGS84 +units=m +no_defs';  // NZTM definition
  const wgs84 = 'EPSG:4326'; // WGS84 (Latitude and Longitude)


   data.huts.forEach((hut: Huts) => {
    const { name, status, region, y, x } = hut

    // Performes the conversion of coordinates from one spatial reference system (NZTM in this case) to another (WGS84, which uses latitude and longitude).
    const [longitude, latitude] = proj4(nztm, wgs84, [x, y])

    console.log(`Coordinates for ${name}:`, latitude, longitude)

    const marker = L.marker([latitude, longitude] as [number, number], { title: `marker for ${name}`}).addTo(map)
    marker.bindPopup(`
      <b>${name}</b><br>
      Region: ${region}<br>
      Status: ${status}<br>
    `);
    })
}, [])

 return (
  <div className="map-container">
  <div id="map" className="map" aria-label="Map displaying huts"></div>
  </div>
 )
}