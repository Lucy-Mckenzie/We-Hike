import useAllHutAlerts from "../hooks/use-hutAlerts"

export default function HutAlerts() {
 
const { data: huts, error, isPending } = useAllHutAlerts()

if (isPending)  return <>Loading...</>
if (error) return <>Sorry, cannot find hut alerts..</>

  return (
    <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
      <h1 className="text-4xl text-left mb-5 font-light">Recent alerts for huts in New Zealand</h1>
      <ul>
        {huts.map((hut) => (
          <li key={hut.assetId}> 
          <p><strong>Hut name: </strong>{hut.name}</p>
          <p><strong>Heading:</strong> {hut.heading}</p>
          <p><strong>Hut detail: </strong>{hut.detail}</p>
          <p><strong>Hut display date: </strong>{hut.displayDate}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// todo - only displays name currently, adjust to only display only the top 10 hikes
// focus on this page 