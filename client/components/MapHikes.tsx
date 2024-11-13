import L from 'leaflet'
import { useEffect } from 'react'
import { getAllTracks } from '../apis/doc-hikes.ts'
import { TrackDetails } from '../../models/trackDetails'
import {useQuery} from '@tanstack/react-query'

export default function Map() {


  const { data: tracks, error, isPending } = useQuery({
    queryKey: ['tracks'],
    queryFn: () => getAllTracks()
  })


  useEffect(() => {
    const map = L.map('map').setView([-39.2806, 176.9120], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  
    
  tracks.forEach((track: TrackDetails) => {
  const { name, region, lon, lat } = track

  const marker = L.marker([track.lat, track.lon], { title: `marker for ${name}`}).addTo(map)
  marker.bindPopup(`
    <b>${name}</b><br>
    Region: ${region}<br>
  `);
  })
}, [tracks])

if (isPending) {
  return <>Loading...</>
 }

 if (error) {
  return <>Sorry cannot find reviews..</>
 }

 return (
  <div className="map-container">
  <div id="map" className="map" aria-label="Map displaying the Great Walks of New Zealand"></div>
  </div>
 )
}