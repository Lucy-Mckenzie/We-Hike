import { useState, useEffect } from 'react'
import { getHikes } from '../apis/doc-hikes.ts'
// import TracksDisplay from './Tracks.tsx'
import { Tracks } from '../../models/tracks.ts'

function App() {
  const [hikes, setHikes] = useState<Tracks | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function update() {
      try {
        const data = await getHikes()
        console.log(data)
        setHikes(data) 
      } catch (error) {
        setError(String(Error))
      }
    }
    update()
  }, [])

  if (error) {
    return <p>Something went wrong: {error}</p>
  }

  if (!hikes) {
    return <>Loading...</>
  }

  return (
    <div>
      <h1>Hiking Tracks</h1>
      <ul>
        {hikes.map((hike: any) => {
          <li key={hike.assetId}>
            <strong>{hike.name}</strong> - <span>{hike.region.join(', ')}</span>
          </li>
        })}
      </ul>
      {/* <TracksDisplay hikes={hikes} /> */}
    </div>
  )
}

export default App
