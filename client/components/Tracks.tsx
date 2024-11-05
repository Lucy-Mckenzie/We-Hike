import React from 'react'
import { Tracks } from '../../models/tracks'

type TracksType = {
  hikes: Tracks[]
}
const TracksDisplay: React.FC<TracksType> = ({ hikes }) => {
  return (
    <div>
      {}
    </div>
  )
}

export default TracksDisplay