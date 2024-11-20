/* eslint-disable react/jsx-key */
import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import DisplayRegion from './components/HutsByRegion'
import HutsInRegion from './components/HutsInRegion'
import Layout from './components/Layout'
import  Tracks  from './components/Tracks'
import  TrackDetails  from './components/TrackDetails'
import AllRegions from './components/AllRegions'
import Home from './components/Home'
import ReviewForm from './components/ReviewForm'
import AllHikes from './components/AllHikes'
import About from './components/About'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />} >
   <Route index element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/reviews" element={<ReviewForm />} />
   <Route path="/tracks/region" element={<AllRegions />} />
   <Route path="/tracks" element={<AllHikes />} />
   <Route path="/tracks/region/:region" element={<Tracks />} />
   <Route path="/tracks/region/:region/:assetId/detail" element={<TrackDetails />} />
   <Route path="/huts" element={<DisplayRegion />} />
   <Route path="/huts/:region" element={<HutsInRegion />} />
  </Route>
)
export const router = createBrowserRouter(
 routes
)


