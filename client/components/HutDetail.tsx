import data from '../data/data.json'
import { Link } from "react-router-dom"

export default function HutDetail() {


  return (
    <div>
      <h1>Hut detail</h1>
      <ul>
        {data.huts.map((hut, index) => (
          <li key={index}>
          <Link to={`/huts/${hut.region}`}>{hut.region}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}