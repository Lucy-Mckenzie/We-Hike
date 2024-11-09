/* eslint-disable react/jsx-key */
import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
// import App from './components/App'
import Layout from './components/Layout'
import  Tracks  from './components/Tracks'
// import  TrackDetails  from './components/TrackDetails'

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element={<Layout />} >
   <Route path="/tracks" element={<Tracks />} />
   {/* <Route path="/hikes/:region" element={<TrackDetails />} /> */}
</Route>
)
)

export default router
