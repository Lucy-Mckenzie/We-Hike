export default function Footer() {
  return (
    <div className='flex flex-col'>
    <footer className='flex flex-row space-x-8 justify-center items-center font-manrope py-4 border-t-2'>
        <a href='https://api.doc.govt.nz/' className='text-lg text-black font-semibold hover:text-slate-200'>
          Api from Doc NZ
        </a>
        <p className='text-sm text-black'>
          &copy; 2024 We Hike. All rights reserved.
        </p>
    </footer>
  </div>
  )
}


