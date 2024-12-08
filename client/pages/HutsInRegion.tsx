import { useParams } from 'react-router'
import data from '../data/data.json'

export default function HutsInRegion() {

  const { region } = useParams()

  const hutsInRegion = data.huts.filter((huts) => huts.region === region) 

  if (!region) return 'Sorry region does not exist'
  if (hutsInRegion.length === 0) return 'sorry could not find huts'
  

  return (
    <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
      <h1 className="text-4xl text-left mb-5 font-light">Huts in the {region} Region</h1>
      <ul>
        {hutsInRegion.map((hut) => (
          <li key={hut.assetId}>
            {hut.name} - {hut.status}
          </li>
        ))}
      </ul>
    </div>
  )
}