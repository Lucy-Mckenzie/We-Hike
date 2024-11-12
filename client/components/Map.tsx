import L from 'leaflet'
import { useEffect } from 'react'
import greatWalks from '../data/greatWalks'
import { GreatWalk }from '../../models/tracks'

export default function Map() {
  useEffect(() => {
    const map = L.map('map').setView([-39.2806, 176.9120], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  
  greatWalks.forEach((walk: GreatWalk) => {
  const { name, location, region, distance, description } = walk

  const marker = L.marker(location as [number, number], { title: `marker for ${name}`}).addTo(map)
  marker.bindPopup(`
    <b>${name}</b><br>
    Region: ${region}<br>
    Description: ${description}<br>
    Distance: ${distance} km
  `);
  })
}, [])

 return (
  <div className="map-container">
  <div id="map" className="map" aria-label="Map displaying the Great Walks of New Zealand"></div>
  </div>
 )
}