import { Link } from 'react-router-dom'
import greatWalks from '../data/greatWalks'

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

export default function Greatwalks() {


 return (
<div className='flex flex-col items-start px-5 py-10 mx-auto max-w-[900px] w-full'>
  <h1 className='pb-2 text-md sm:text-lg md:text-2xl break-words text-left'>
    Find out more about New Zealand&apos;s Great Walks below
  </h1>

  <div className='overflow-x-auto w-full'>
    <table className='table-auto border-collapse border border-slate-500 w-full text-left'>
      <thead className='bg-slate-200'>
        <tr>
          <th className='border border-slate-400 px-4 py-2 text-xs sm:text-sm md:text-base'>
            Name
          </th>
          <th className='border border-slate-400 px-4 py-2 text-xs sm:text-sm md:text-base'>
            Region
          </th>
          <th className='border border-slate-400 px-4 py-2 text-xs sm:text-sm md:text-base'>
            Description
          </th>
          <th className='border border-slate-400 px-4 py-2 text-xs sm:text-sm md:text-base'>
            Distance
          </th>
        </tr>
      </thead>
      <tbody>
        {greatWalks.map((walk) => (
          <tr key={walk.name} className='hover:bg-slate-100'>
            <td className='border border-slate-400 px-4 py-2 text-xs sm:text-sm md:text-base'>
              <strong>{walk.name}</strong>
            </td>
            <td className='border border-slate-400 px-4 py-2 text-xs sm:text-sm md:text-base'>
              {walk.region}
            </td>
            <td className='border border-slate-400 px-4 py-2 text-xs sm:text-sm md:text-base'>
              {walk.descriptionS}
            </td>
            <td className='border border-slate-400 px-4 py-2 text-xs sm:text-sm md:text-base'>
              {walk.distance} km
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className='flex flex-col items-center py-10'>
    <h1 className='pb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lato text-center'>
      Looking for even more about the Great Walks?
    </h1>
    <ul className='w-full'>
      {greatWalks.map((walk) => (
        <li
          key={walk.name}
          className='border border-gray-300 rounded-lg p-4 mb-4 shadow-md text-center transition-transform duration-200 hover:scale-105 max-w-[800px] mx-auto'
        >
          <Link to={`/walks/${walk.name}`} className='block' onClick={scrollToTop}>
            <h2 className='text-lg sm:text-xl md:text-2xl text-center mb-5 font-lato'>
              {walk.name}
            </h2>
            <img
              src={`/images/greatWalks/${walk.image}`}
              alt={`${walk.name} hiking trail`}
              className='w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-md object-cover'
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>


 )
}