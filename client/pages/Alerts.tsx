import { Link } from 'react-router-dom'
import useAllAlerts from '../hooks/use-allAlerts'
import { Alerts } from '../../models/huts'
import LoadingSpinner from '../components/LoadingSpinner'
import SearchAlertList from '../components/SearchAlertList'

export default function DOCAlerts() {
  
  const { data: alerts, error, isPending } = useAllAlerts()

  if (error) return <p>Sorry couldn&apos;t find alerts</p>
  if (isPending) return <LoadingSpinner />

  let alertList = []
  try {
    alertList = JSON.parse(alerts.text)
  } catch(e) {
    console.error('failed to parse alerts', e)
  }

  const recentAlerts = alertList.slice(-5)

  return (
    <>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>Alerts</li>
        </ul>
      </div>
      <div className='flex flex-col items-center px-5 py-10 text-left mx-auto'>
        <h1 className='text-xl sm:text-2xl lg:text-4xl text-center font-normal'>
          Recent Alerts
        </h1>
        <SearchAlertList />
        <div className='flex flex-col items-center max-w-[900px] m-auto pb-6'>
          <p className='text-lg text-neutral-600 border-b-2 mb-4'>
            These alerts rank from the most recent to the least, and are
            constantly being updated by the Department of Conservation.
          </p>
          <ul className='space-y-4 w-full bg-white border rounded-lg shadow-md p-4'>
            {recentAlerts.map((alert: Alerts, index: number) => (
              <li key={index} className='p-4 border rounded-lg bg-gray-100'>
                <h3 className='font-semibold'>{alert.summary}</h3>
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
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
