/**
 * @file Accesses the weather systems from Open Weather Map and displays them on the React Leaflet map.
 * 
 * Being absolutely fascinated by hiking and weather, adding weather to the maps was my next progression. 
 * It ended up being a lot simpler than I envisioned mostly because of all the free libraries and apis out there. 
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
    Pressure: `https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    Snow: `https://tile.openweathermap.org/map/snow_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    'Sea Level Pressure': `https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`
  };

  return (
    <div className='w-full h-[50vh] md:h-[70vh] lg:h-[600px] max-w-7xl rounded-md overflow-hidden z-0'>
      <MapContainer 
        center={[-40.9006, 174.886]} 
        zoom={6}
        className='w-full h-full'
      >
        <TileLayer 
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
          attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
        />
        <LayersControl position='topright'>
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
