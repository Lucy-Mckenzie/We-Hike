
const Copland = () => {
  return (
    <div className='bg-base-100 max-h-[400px] w-70 shadow-md rounded-2xl space-y-2 transition-transform hover:scale-105 duration-300 flex flex-col z-10'>
      <figure className='p-2 h-64'>
        <img
          src='/images/regions/copland.jpg'
          alt='Copland Trail'
          className='rounded-md w-full h-full object-cover'
        />
      </figure>
      <div className='items-center text-center'>
        <h1 className='text-lg font-semibold'>
          Copland Track
        </h1>
        <h2 className='text-sm px-2'>
          Westland Tai Poutini National Park, West Coast
        </h2>
        <p className='text-sm px-2 pb-2 text-light'>
          Moderate ◦ 7 hr one way ◦ 18km one way
        </p>
      </div>
    </div>
  )
}

export default Copland
