import { useState } from 'react'
import useAllAlerts from '../hooks/use-allAlerts'
import LoadingSpinner from './LoadingSpinner'
import { Alerts } from '../../models/huts'

const SearchAlertList = () => {

  const { data, isError, isLoading } = useAllAlerts()
  const alerts = data ? JSON.parse(data.text) : [];

  const [search, setSearch ] = useState('')

  if (isLoading) return <LoadingSpinner />
  if (isError) return <p>Error loading alerts.</p>

  const filteredAlerts = Array.isArray(alerts) ?
    alerts.filter((alert: Alerts ) => 
      alert.summary.toLowerCase().includes(search.toLowerCase())
    ) : []

  return (
    <div className='my-5'>
      <div className='flex items-center gap-2 bg-content border rounded-lg p-2 shadow max-w-sm mx-auto w-full justify-center'>
        <label htmlFor='search-alerts' className='sr-only'>
        Search Alerts
        </label>
        <input
          type='text'
          id='search-alerts'
          className='bg-base-200 p-2 border rounded-md'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='h-4 w-4 opacity-70'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </div>

      <ul className='bg-white border rounded-lg shadow-md mt-3 p-4 space-y-3 w-full'>
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert: Alerts) => (
            <li
              key={alert.id}
              className='p-4 border rounded-lg bg-gray-100 shadow-sm'
            >
              <h3 className='font-semibold text-gray-800'>{alert.summary}</h3>
              <p>
                <strong>Description: </strong>
                {alert.description}
              </p>
              <p>
                <strong>Last updated: </strong>
                {alert.lastUpdated}
              </p>
              <p>
                <strong>Start date: </strong>
                {alert.startDate}
              </p>
            </li>
          ))
        ) : (
          <p className='text-gray-500 text-center'>No alerts found.</p>
        )}
      </ul>
    </div>
  )
}

export default SearchAlertList
