// import { useQuery } from '@tanstack/react-query'
// import { useParams } from 'react-router'
// import { loadHuts } from '../apis/doc-hikes.ts'
  // const {data, error, isPending } = useQuery({queryKey: ['huts'], queryFn: loadHuts})

import data from '../data/data.json'

export default function DisplayTracks() {

  return (
    <div>
      <h1>Hiking Huts</h1>
      <ul>
        {data.huts.map((hut) => (
          <li key={hut.assetId}>
            {hut.name} - {hut.region}
          </li>
        ))}
      </ul>
    </div>
  )
}