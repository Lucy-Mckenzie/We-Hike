import L from 'leaflet'
import { useEffect } from 'react'
import data from '../data/data.json'
import { Huts } from '../../models/huts'

export default function MapHuts() {
  useEffect(() => {
  const map = L.map('map').setView([-39.2806, 176.9120], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)


  data.huts.forEach((hut: Huts) => {
    const { name, status, region, y, x } = hut

    const marker = L.marker([latitude, longitude] as [number, number], { title: `marker for ${name}`}).addTo(map)
    marker.bindPopup(`
      <b>${name}</b><br>
      Region: ${region}<br>
      Status: ${status}<br>
    `);
    })
}, [])

 return (
  <div className="map-container1">
  <div id="map" className="map" aria-label="Map displaying huts"></div>
  </div>
 )
}