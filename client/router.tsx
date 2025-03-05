/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import HutsByRegion from './pages/HutsByRegion'
import HutsInRegion from './pages/HutsInRegion'
import Layout from './components/layout/Layout'
import Tracks from './pages/TracksInRegion'
import TrackDetails from './pages/TrackDetails'
import AllRegions from './pages/TracksByRegion'
import Home from './pages/Home'
import Weather from './pages/Weather'
import GreatWalksDetails from './components/GreatWalksDetails'
import Alerts from './pages/Alerts'
import HutsDetail from './pages/HutDetails'
import Reviews from './pages/Reviews'
import QGIS from './pages/QGIS'
import Greatwalks from './pages/GreatWalks'

export const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/Weather' element={<Weather />} />
    <Route path='/reviews' element={<Reviews />} />
    <Route path='/tracks/region' element={<AllRegions />} />
    <Route path='/tracks/region/:region' element={<Tracks />} />
    <Route
      path='/tracks/region/:region/:assetId/detail'
      element={<TrackDetails />}
    />
    <Route path='/walks/:name' element={<GreatWalksDetails />} />
    <Route path='/huts' element={<HutsByRegion />} />
    <Route path='/huts/:region' element={<HutsInRegion />} />
    <Route path='/huts/:assetId/detail' element={<HutsDetail />} />
    <Route path='/alerts' element={<Alerts />} />
    <Route path='/qgis' element={<QGIS />} />
    <Route path='/greatwalks' element={<Greatwalks />} />
  </Route>,
)
export const router = createBrowserRouter(routes)
