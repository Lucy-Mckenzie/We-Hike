import SideBarRegions from './sidebar/SIdeBarRegions'

const SideBar = () => {
  return (
    <div className="lg:flex">
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
          <label htmlFor='my-drawer-2' className='btn btn-primary drawer-button lg:hidden'>
            Open drawer
          </label>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay'></label>
          <ul className='menu bg-base-200 text-base-content min-h-full w-60 p-4 rounded-md'>
            <SideBarRegions />
            <li>
              <a href='/weather'>
                Weather
              </a>
            </li>
            <li>
              <a href='/statistics' className='strikethrough'>
                Statistics
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
