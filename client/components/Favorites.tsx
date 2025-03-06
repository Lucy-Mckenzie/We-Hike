import Brewster from "./favorites/Brewster"
import LakeWai from "./favorites/LakeWai"
import Mueller from "./favorites/Mueller"
import RobRoy from "./favorites/RobRoy"

const Favorites = () => {
  return (
    <div className='flex flex-col bg-base-200 my-10 rounded-md'>
      <h1 className='text-center mt-10 text-5xl'>
        Highlights
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center py-10 px-5'>
        <Brewster />
        <LakeWai />
        <Mueller />
        <RobRoy />
      </div>
    </div>
  )
}

export default Favorites
