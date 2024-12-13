import { useParams } from 'react-router'

export default function HutsInRegion() {

  const { region } = useParams()

  
  if (!region) return 'Sorry region does not exist'
  if (isPending)  return <>Loading...</>
  if (error) return <>Sorry, cannot find hut details.</>

  return (
    <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
      <h1 className="text-4xl text-left mb-5 font-light">Huts in the {region} Region</h1>
      <ul>
        {huts.map((hut) => (
          <li key={hut.assetId}>
            {hut.name} - {hut.status}
          </li>
        ))}
      </ul>
    </div>
  )
}
