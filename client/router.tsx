/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import HutsByRegion from './pages/HutsByRegion'
import HutsInRegion from './pages/HutsInRegion'
import Layout from './components/layout/Layout'
import Tracks from './pages/Tracks'
import TrackDetails from './pages/TrackDetails'
import AllRegions from './pages/AllRegions'
import Home from './pages/Home'
import ReviewForm from './pages/ReviewForm'
import AllHikes from './pages/AllHikes'
import About from './pages/About'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/reviews" element={<ReviewForm />} />
    <Route path="/tracks/region" element={<AllRegions />} />
    <Route path="/tracks" element={<AllHikes />} />
    <Route path="/tracks/region/:region" element={<Tracks />} />
    <Route
      path="/tracks/region/:region/:assetId/detail"
      element={<TrackDetails />}
    />
    <Route path="/huts" element={<HutsByRegion />} />
    <Route path="/huts/:region" element={<HutsInRegion />} />
  </Route>,
)
export const router = createBrowserRouter(routes)
