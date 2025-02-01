
import { Alert } from '../../models/huts'
import useAllHutAlerts from '../hooks/use-hutAlerts'
import DOMPurify from 'dompurify'

export default function HutAlerts() {
 
  const { data: huts, error, isPending } = useAllHutAlerts()

  if (isPending)  return <>Loading...</>
  if (error) return <>Sorry, cannot find hut alerts..</>


  const latestHut = huts.slice(-10)

  return (
    <div className='flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]'>
      <h1 className='text-4xl text-left mb-5 font-light border-b-[1px] border-gray-500'>Recent alerts for huts in New Zealand</h1>
      <ul className='space-y-6'>
        {latestHut.map((hut) => (
          <li key={hut.assetId} className='p-4 bg-white rounded-lg shadow-md hover:shadow-lg'>
            <p className='text-xl font-bold text-gray-800'><strong>Hut Name:</strong> {hut.name}</p>

            {hut.alerts.map((alert: Alert, index: number) => (
              <div key={index} className='mt-2 pl-4 border-l-4 border-blue-500 rounded-md bg-gray-50 p-2'>
                <p className='text-gray-700 text-xl'>{alert.heading}</p>
                <div
                  className='mt-2 text-sm'
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(alert.detail) }}
                ></div>
                <p className='text-sm text-gray-500'><strong>Display Date:</strong> {alert.displayDate}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>

    </div>
  )
}

