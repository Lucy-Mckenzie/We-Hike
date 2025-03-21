import { Link } from 'react-router-dom'
import useAllAlerts from '../hooks/use-allAlerts'
import { Alerts } from '../../models/huts'
import LoadingSpinner from '../components/LoadingSpinner'

export default function DOCAlerts() {
  
  const { data: alerts, error, isPending } = useAllAlerts()

  if (error) return <p>Sorry couldn&apos;t find alerts</p>
  if (isPending) return <LoadingSpinner />

  let alertList = []
  try {
    alertList = JSON.parse(alerts.text)
  } catch(e) {
    console.error("failed to parse alerts", e)
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
        <h1 className='text-xl sm:text-2xl lg:text-4xl text-center mb-5 font-normal'>
          Recent Alerts
        </h1>
        <div className='flex flex-col items-center max-w-[900px] m-auto pb-6'>
          <p className='text-lg text-neutral-600 border-b-2 mb-4'>
            These alerts rank from the most recent to the least, and are constantly being updated by the Department of Conservation 
          </p>
          {recentAlerts.map((alert: Alerts, index: number) => (
            <ul key={index} className='space-y-2'>
              <li><strong>Summary: </strong>{alert.summary}</li>
              <li><strong>Description: </strong>{alert.description}</li>
              <li><strong>Last updated: </strong>{alert.lastUpdated}</li>
              <li><strong>Start date: </strong>{alert.startDate}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}
