import greatWalks from "../data/greatWalks"

export default function Greatwalks() {


 return (
  <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
  <p className="pb-2 text-lg">Find out more about New Zealand&apos;s Great Walks below</p>
  {/* <p>
    New Zealand is renowned for its stunning landscapes, and its network of Great Walks offers some of the best hiking experiences in the world. From the golden beaches of Abel Tasman National Park to the rugged mountain terrains of Fiordland, these hikes provide diverse natural beauty. Whether youre looking for coastal paths, alpine adventures, or lush rainforests, New Zealands hikes cater to all levels of experience. With well-maintained trails, rich cultural history, and breathtaking views, hiking in New Zealand is an unforgettable journey through some of the planet’s most iconic landscapes.
  </p> */}
  <table className="table-auto border-collapse border border-slate-500 w-full text-left">
    <thead className="bg-slate-200">
    <tr>
      <th className="border border-slate-400 px-4 py-2">Name</th>
      <th className="border border-slate-400 px-4 py-2">Region</th>
      <th className="border border-slate-400 px-4 py-2">Description</th>
      <th className="border border-slate-400 px-4 py-2">Distance</th>
      </tr>
    </thead>
    <tbody>
    {greatWalks.map((walk) => (
    <tr key={walk.name} className="hover:bg-slate-100">
      <td className="border border-slate-400 px-4 py-2"><strong>{walk.name}</strong></td>
      <td className="border border-slate-400 px-4 py-2">{walk.region}</td>
      <td className="border border-slate-400 px-4 py-2">{walk.description}</td>
      <td className="border border-slate-400 px-4 py-2">{walk.distance} km</td>
    </tr>
    ))}
  </tbody>
  </table>
  <div className="flex flex-col items-center">
    <ul>
        {greatWalks.map((walk) => (
          <li className="bd-grey-100 border border-grey-300 rounded-lg p-4 mb-4 shadow-md text-center transition-transform duration-200 hover:scale-105 max-w-[800px]" 
          key={walk.name} >
              <h2 className="text-2xl text-center mb-5 font-normal font-lato">{walk.name}</h2>
              <img src={`/images/greatWalks/${walk.image}`} 
                alt={`${walk.name} hiking trail`}
                className="max-w-full h-full rounded-md object-cover"
              />
          </li>
        ))}
      </ul>
  </div>
  </div>
 )
}