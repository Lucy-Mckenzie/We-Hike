import Grid from '../components/Grid'

export default function Home() {
  return (
    <div className='relative min-h-screen flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-0 w-full h-full grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] grid-rows-[repeat(auto-fit,minmax(10px,1fr))] gap-0 opacity-10'>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i} className='border border-gray-300'></div>
        ))}
      </div>
      <div className='lg:px-5 lg:py-10 py-5 text-center w-full lg:max-w-7xl'>
        <h1 className='text-center font-manrope leading-tight lg:text-6xl text-5xl pb-5 lg:pt-0 pt-10'>
          Explore the rugged landscapes of New Zealand
        </h1>
        <Grid />
      </div>
    </div>
  )
}

