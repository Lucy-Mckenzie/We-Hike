import MapHikes from "../components/MapHikes"

export default function AllHikes() {

 return (
  <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
  <h1 className="text-4xl text-left mb-5 font-light">All Doc tracks in New Zealand</h1>
  <MapHikes />
  </div>
 )
}