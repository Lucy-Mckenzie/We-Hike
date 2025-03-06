
const RobRoy = () => {
  return (
    <div className='bg-base-100 max-h-[400px] w-70 shadow-md rounded-2xl space-y-2 transition-transform hover:scale-105 duration-300 flex flex-col z-10'>
      <figure className='p-2 h-64'>
        <img
          src='/images/favorites/robroy.jpg'
          alt='Rob Roy Trail'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='items-center text-center'>
        <h1 className='font-lg font-semibold'>
          Rob Roy Glacier 
        </h1>
        <h2 className='text-sm px-2'>
          Mount Aspiring National Park
        </h2>
        <p className='text-sm px-2 pb-2 text-light'>
        Easy ◦ 3 - 4 hr ◦ 10 km return
        </p>
      </div>
    </div>
  )
}

export default RobRoy
