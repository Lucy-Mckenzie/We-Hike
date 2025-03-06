
const Mueller = () => {
  return (
    <div className='bg-base-100 max-h-[400px] w-70 shadow-md rounded-2xl space-y-2 transition-transform hover:scale-105 duration-300 flex flex-col z-10'>
      <figure className='p-2 h-64'>
        <img
          src='/images/favorites/mueller.jpg'
          alt='Brewster Trail'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='items-center text-center'>
        <h1 className='font-lg font-semibold'>
        Mueller Hut 
        </h1>
        <h2 className='text-sm px-2'>
        Aoraki/Mount Cook National Park
        </h2>
        <p className='text-sm px-2 pb-2 text-light'>
        Advanced ◦ 4 hr one way ◦ 5.2 km one way
        </p>
      </div>
    </div>
  )
}

export default Mueller
