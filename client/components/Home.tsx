import Map from '../components/Map'

export default function Home() {

 return (
  <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
  <h1  className="text-4xl text-left mb-5 font-light">The great walks of New Zealand, mapped</h1>
  <Map />
  <img src="/images/home1.jpg" alt="Lake Waikaremoana" className="rounded-[10px] my-5 "></img>
  <p>
    New Zealand is renowned for its stunning landscapes, and its network of Great Walks offers some of the best hiking experiences in the world. From the golden beaches of Abel Tasman National Park to the rugged mountain terrains of Fiordland, these hikes provide diverse natural beauty. Whether youre looking for coastal paths, alpine adventures, or lush rainforests, New Zealands hikes cater to all levels of experience. With well-maintained trails, rich cultural history, and breathtaking views, hiking in New Zealand is an unforgettable journey through some of the planet’s most iconic landscapes.
  </p>
  </div>
 )
}