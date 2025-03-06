
const Brewster = () => {
  return (
    <div className='bg-base-100 max-h-[400px] w-70 shadow-md rounded-2xl transition-transform hover:scale-105 duration-300 flex flex-col z-10'>
      <figure className='p-2 h-64'>
        <img
          src='/images/favorites/brewster.jpg'
          alt='Brewster Trail'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='items-center text-center'>
        <h1 className='text-lg font-semibold'>
          Brewster Hut
        </h1>
        <h2 className='text-sm px-2'>
           Otago, Mount Aspiring National Park
        </h2>
        <p className='text-sm px-2 pb-2 text-light'>
          Advanced ◦ 6 - 8 hr return ◦ 2.5km one way
        </p>
      </div>
    </div>
  )
}

export default Brewster
