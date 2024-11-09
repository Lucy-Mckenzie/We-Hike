/* eslint-disable react/jsx-key */
import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import DisplayRegion from './components/DisplayRegion'
import HutsInRegion from './components/HutsInRegion'
import Layout from './components/Layout'
import HutDetail from './components/HutDetail'

// import  Tracks  from './components/Tracks'
// import  TrackDetails  from './components/TrackDetails'

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element={<Layout />} >
   {/* <Route path="/tracks" element={<Tracks />} /> */}
   {/* <Route path="/hikes/:region" element={<TrackDetails />} /> */}
   <Route path="/huts" element={<DisplayRegion />} />
   <Route path="/huts/:region" element={<HutsInRegion />} />
   <Route path="/huts/:region/:hut" element={<HutDetail />} />
</Route>
)
)

export default router
