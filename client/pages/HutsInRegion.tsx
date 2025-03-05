import { useParams } from 'react-router'
import data from '../data/data.json'
import { Link } from 'react-router-dom'

export default function HutsInRegion() {

  const { region } = useParams()

  const hutsInRegion = data.huts.filter((huts) => huts.region === region) 
  
  if (!region) return 'Sorry region does not exist'
  if (hutsInRegion.length === 0) return 'sorry could not find huts'
  
  return (
    <>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/huts'>Huts</Link></li>
          <li>{region}</li>
        </ul>
      </div>
      <div className='flex flex-col items-center justify-center px-5 py-10 text-left mx-auto max-w-[900px]'>
        <h1 className='text-4xl text-left mb-5'>
          Huts in the {region} 
        </h1>
        <ul>
          {hutsInRegion.map((hut) => (
            <li 
              key={hut.assetId} 
              className='bg-grey-300 border border-grey transition-transform duration-200 hover:scale-105 px-4 m-1'
            >
              <Link to={`/huts/${hut.assetId}/detail`}>
                {hut.name} - {hut.status}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
