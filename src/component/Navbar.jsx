import React from 'react'
import { Link, useLocation} from 'react-router-dom'


const Navbar = () => {
    let location = useLocation();
  return (
    <div id='nav' className="container sticky top-5 z-10">
        <div className="flex max-sm:justify-center ps-3 max-xl:ps-2 max-lg:ps-0">
          <nav className='p-3 max-md:p-3 pt-3'>
            <ul className='flex flex-row text-white drop-shadow-white'>
              <li className={`bg-black hover:bg-white hover:text-black border-s max-xl:font-medium font-bold px-10 max-xl:px-8 max-lg:px-4 max-sm:px-5 xl:py-3 py-2  max-md:text-sm max-lg:text-base max-xl:text-base text-xl rounded-s-full  ${location.pathname === '/about' ? 'bg-white text-black' : ''}`}><Link className='drop-shadow-bright' to='/About'>About </Link></li>
              <li className={`bg-black hover:bg-white hover:text-black border-s max-xl:font-medium font-bold px-10 max-xl:px-8 max-lg:px-4 max-sm:px-5 xl:py-3 py-2  max-md:text-sm max-lg:text-base max-xl:text-base text-xl  ${location.pathname === '/library' ? 'bg-white text-black' : ''}`}><Link className='drop-shadow-bright' to='/library'>Library</Link></li>
              <li className={`bg-black hover:bg-white hover:text-black border-s max-xl:font-medium font-bold px-10 max-xl:px-8 max-lg:px-4 max-sm:px-5 xl:py-3 py-2  max-md:text-sm max-lg:text-base max-xl:text-base text-xl  ${location.pathname === '/experience' ? 'bg-white text-black' : ''}`}><Link className='drop-shadow-bright' to='/experience'>Experience</Link></li>
              <li className={`bg-black hover:bg-white hover:text-black border-s max-xl:font-medium font-bold px-10 max-xl:px-8 max-lg:px-4 max-sm:px-5 xl:py-3 py-2  max-md:text-sm max-lg:text-base max-xl:text-base text-xl rounded-e-full  ${location.pathname === '/' ? 'bg-white text-black' : ''}`}><Link className='drop-shadow-bright' to='/'>Home</Link></li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Navbar