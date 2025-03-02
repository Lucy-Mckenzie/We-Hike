import SideBarRegions from './sidebar/SideBarRegions'

const SideBar = () => {
  return (
    <div className='lg:flex hidden'>
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu min-h-full w-60 rounded-md bg-base-200 p-4 text-base-content'>
            <SideBarRegions />
            <li>
              <a href='/weather'>Weather</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
