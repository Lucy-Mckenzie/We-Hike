/**
 * @file Accesses the weather sytems from openweathermap and displays them on the React Leaflet map.
 * 
 * Being absolutely facinated by hiking and weather, adding weather to the maps was my next progression. 
 * It ended up being a lot simplier than I envisioned mostly because of all the free libraies and apis out there. 
 */
import {
  MapContainer,
  TileLayer,
  LayersControl
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const WeatherMap = () => {

  const API_KEY =  import.meta.env.VITE_WEATHER_API_KEY

  const weatherLayers = {
    Clouds: `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    Rain: `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    Wind: `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    Temperature: `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
  };

  return (
    <div className='w-full h-[50vh] md:h-[70vh] lg:h-[500px] max-w-7xl rounded-md overflow-hidden z-0'>
      <MapContainer 
        center={[-40.9006, 174.886]} 
        zoom={6}
        className='w-full h-full'
      >
        {/* Base Map Layer */}
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        />

        {/* Weather Layer */}
        <LayersControl position='topright'>
          {/* Weather Layers */}
          {Object.entries(weatherLayers).map(([name, url]) => (
            <LayersControl.Overlay key={name} name={name}>
              <TileLayer url={url} attribution='&copy; OpenWeatherMap' />
            </LayersControl.Overlay>
          ))}
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
