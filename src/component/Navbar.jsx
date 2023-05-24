import React from 'react'
import { Link, useLocation} from 'react-router-dom'


const Navbar = () => {
    let location = useLocation();
  return (
    <div id='nav' className="container sticky top-0 z-10 ">
        <div className="flex max-sm:justify-center">
          <nav className='p-3 pt-5'>
            <ul className='flex flex-row text-white drop-shadow-white'>
              <li className={`bg-black hover:bg-white hover:text-black border-s px-10 max-sm:px-5 py-3 max-sm:py-2 md:text-xl rounded-s-full  ${location.pathname === '/about' ? 'bg-white text-black' : ''}`}><Link to='/About'>About </Link></li>
              <li className={`bg-black hover:bg-white hover:text-black border-s px-10 max-sm:px-5 py-3 max-sm:py-2 md:text-xl  ${location.pathname === '/library' ? 'bg-white text-black' : ''}`}><Link to='/library'>Library</Link></li>
              <li className={`bg-black hover:bg-white hover:text-black border-s px-10 max-sm:px-5 py-3 max-sm:py-2 md:text-xl  ${location.pathname === '/experience' ? 'bg-white text-black' : ''}`}><Link to='/experience'>Experience</Link></li>
              <li className={`bg-black hover:bg-white hover:text-black border-s px-10 max-sm:px-5 py-3 max-sm:py-2 md:text-xl rounded-e-full  ${location.pathname === '/' ? 'bg-white text-black' : ''}`}><Link to='/'>Home</Link></li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Navbar