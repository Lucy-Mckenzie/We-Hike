const SideBarRegions = () => {
  return (
    <div>
      <li>
        <a href='/tracks/region' className='font-semibold text-lg'>
          Hikes
        </a>
      </li>
      <li>
        <details>
          <summary>North Island</summary>
          <ul className='rounded-t-none p-2'>
            <li>
              <a href='/tracks/region/NZ-NTL'>
                Northland
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-AUK'>
                Auckland
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-WKO'>
                Waikato
              </a>
            </li>
            <li>
              <a href='/tracks/region/DOC-COR'>
                Coromandel
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-BOP'>
                Bay of Plenty
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-GIS'>
                East Coast
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-TKI'>
                Taranaki
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-MWT'>
                Manawatu/Whanganui
              </a>
            </li>
            <li>
              <a href='/tracks/region/DOC-CNI'>
                Central North Island
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-HKB'>
                Hawkes Bay
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-WGN'>
                Wellington/Kapiti
              </a>
            </li>
            <li>
              <a href='/tracks/region/DOC-WPA'>
                Wairarapa
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>South Island</summary>
          <ul className='rounded-t-none p-2'>
            <li>
              <a href='/tracks/region/NZ-CIT'>
                Chatham Islands
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-NSN'>
                Nelson/Tasman
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-MBH'>
                Marlborough
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-CAN'>
                Canterbury
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-OTA'>
                Otago
              </a>
            </li>
            <li>
              <a href='/tracks/region/NZ-STL'>
                Southland/Fiordland
              </a>
            </li>
            <li>
              <a href='/tracks/region/DOC-FIL'>
                Fiordland
              </a>
            </li>
          </ul>
        </details>
      </li>
    </div>
  )
}

export default SideBarRegions
