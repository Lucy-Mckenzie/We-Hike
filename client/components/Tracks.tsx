// import { getHikes } from '../apis/doc-hikes.ts'
import { useQuery } from '@tanstack/react-query'
// import { useParams } from 'react-router'
import { loadHuts } from '../apis/doc-hikes.ts'

export default function DisplayTracks() {
  const {data, error, isPending } = useQuery({queryKey: ['huts'], queryFn: loadHuts})
  // const { regions } = useParams()
  console.log('Query Data:', data)

  if (error) {
    return <p>Something went wrong: {error.message}</p>
  }

  if (isPending) {
    return <>Loading...</>
  }

  if (!data) {
    return 
  }
 
  return (
    <div>
      <h1>Hiking Tracks</h1>
      <ul>
        {data.map((hut) => (
          <li key={hut.assetId}>
            {hut.name} - {hut.region}
          </li>
        ))}
      </ul>
    </div>
  )
}


