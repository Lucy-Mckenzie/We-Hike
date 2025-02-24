import { Link } from 'react-router-dom'
import useAllHutAlerts from '../hooks/use-hutAlerts'
import { Alerts } from '../../models/huts'

export default function DisplayRegions() {
  
  const { data: alerts, error, isPending } = useAllHutAlerts()

  if (error) return <p>Sorry couldnt find alerts</p>
  if (isPending) return <p>Loading...</p>

  let alertList = []
  try {
    alertList = JSON.parse(alerts.text)
  } catch(e) {
    console.error("failed to parse alerts", e)
  }

  const recentAlerts = alertList.slice(-5)

  return (
    <>
      <Link to='/' className='pl-4 underline'>Back to home</Link>
      <div className='flex flex-col items-center px-5 py-10 text-left mx-auto'>
        <h1 className='text-xl sm:text-2xl lg:text-4xl text-center mb-5 font-normal'>Recent Alerts</h1>
        <div className='flex flex-col items-center max-w-[900px] m-auto pb-6'>
          <p className='pb-5 text-lg text-neutral-600'>
        These alerts rank from the most recent to the least, and are constantly being updated by the Departement of Conservation 
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
