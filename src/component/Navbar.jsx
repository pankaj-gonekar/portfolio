import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import Dropdown from './Dropdown';

const Navbar = () => {
    let location = useLocation();
  return (
    <div id='nav' className="container sticky top-5 z-10">
        <div className="flex max-sm:justify-center ps-3 max-xl:ps-2 max-lg:ps-0">
          <nav className='p-3 max-md:p-3 pt-3'>
            <ul className='flex flex-row text-white drop-shadow-dark '>
              <li className='bg-dark ps-10 max-xl:ps-5 max-lg:ps-2 hover:bg-white hover:text-black font-bold inline-flex max-md:text-sm max-lg:text-base max-xl:text-base text-xl rounded-s-full'>
              <Dropdown menuName={'About'} item_1={'PROFILE PAGE'} item_2={'SOCIAL MEDIA'} item_3={'SKILLS & EXTRA'} link_1={'/profile'} link_2={'/socialmedia'} link_3={'/skills'}/>
              <div className='bg-white h-7 max-sm:h-5 w-0.5 self-center'/>
              </li>
              <li className='bg-dark hover:bg-white hover:text-black font-bold inline-flex max-md:text-sm max-lg:text-base max-xl:text-base text-xl'>
              <Dropdown menuName={'Library'} item_1={'LOGO DESIGN'} item_2={'POSTER DESIGN'} item_3={'WEB DESIGN'} item_4={'UI/UX DESIGN'} link_1={'/library'} link_2={'/socialmedia'} link_3={'/skills'} />
              <div className='bg-white h-7 max-sm:h-5 w-0.5 self-center'/>
              </li>
              <li className='bg-dark ps-3 inline-flex hover:bg-white hover:text-black font-bold max-md:text-sm max-lg:text-base max-xl:text-base text-xl'>
              <Dropdown menuName={'Experience'} item_1={'CLIENTS PROJECTS'} item_2={'COMPANY PROJECTS'} item_3={'OWN PROJECTS'} link_1={'/profile'} link_2={'/socialmedia'} link_3={'/skills'}/>
              <div className='bg-white ms-3 h-7 max-sm:h-5 w-0.5 self-center'/>
              </li>
              <li className={`bg-dark hover:bg-white hover:text-black font-bold px-10 max-xl:px-8 max-lg:px-4 max-sm:px-5 xl:py-3 py-3 max-md:py-4 self-center  max-md:text-sm max-lg:text-base max-xl:text-base text-xl rounded-e-full  ${location.pathname === '/' ? 'bg-white text-black' : ''}`}><Link className='drop-shadow py-3' to='/'>Home</Link></li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Navbar