import L from 'leaflet'
import { useEffect, useRef } from 'react'
import { getTracks } from '../apis/doc-hikes.ts'
import { TrackDetails } from '../../models/trackDetails'
import {useQuery} from '@tanstack/react-query'
import proj4 from 'proj4' // needed for translation from NZTM to lat & lon, package https://www.npmjs.com/package/proj4

export default function MapHikes() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  const { data: tracks, error, isPending } = useQuery({
    queryKey: ['tracks'],
    queryFn: () => getTracks()
  });

  useEffect(() => {
    if (!mapContainerRef.current) return;  // Check if the map container is available

    const map = L.map(mapContainerRef.current).setView([-39.2806, 176.9120], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const nztm = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +datum=WGS84 +units=m +no_defs';  // NZTM definition
    const wgs84 = 'EPSG:4326'; // WGS84 (Latitude and Longitude)

    if (tracks) {
      tracks.forEach((track: TrackDetails) => {
        const { name, region, x, y } = track;

        // Convert coordinates from NZTM to WGS84
        // proj4(firstProjection,secondProjection,[-122.305887, 58.9465872])
        // an example from the docs, first projection (nztm - what we get by default from api), second projection (wgs84 - world geodetic system, gives us latitude and longitude)
        // and finally the two coords we start off with.
        const [longitude, latitude] = proj4(nztm, wgs84, [x, y]);

        const marker = L.marker([latitude, longitude] as [number, number], { title: `marker for ${name}` }).addTo(map);
        marker.bindPopup(`
          <b>${name}</b><br>
          Region: ${region}<br>
        `);
      });
    }

    return () => {
      map.remove();  // Clean up map when component is unmounted
    };
  }, [tracks]); 

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
    <div className="map-container3">
      <div
        id="map"
        ref={mapContainerRef}
        className="map"
        aria-label="Map displaying the hikes in New Zealand"
      ></div>
    </div>
  );
}
