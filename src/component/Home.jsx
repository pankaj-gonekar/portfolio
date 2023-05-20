import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  let location = useLocation();
  return (
    <div className=" container">
      <div className=" container mx-auto">
        <div className="container mx-auto w-97">
          <div className="flex justify-end pt-3">
            <p className='text-sm max-sm:text-xsm max-sm:text-base/super-loose text-right'>Keep your imagination filled with diffrent<br />
              elements, it gives you stable<br />
              <strong>“output”</strong> direction</p>
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-4 mt-24  ">
            <div className='flex-col'>
              <div className="container text-white">
                <h1 className='text-14xl'>hello&quot;</h1>
                <p className='text-2xl ms-5'>Here! you can take a look to my<br />
                  previous works and explore<br />
                  other stuff too.</p>
              </div>
            </div>
            <div className='flex-col mt-10'>
              <div className="container text-right">
                <h1 className='text-14xl leading-14 animate-pulse cursor-pointer hover:text-red-600'><strong>there</strong></h1>
                <p className='text-4xl leading-3'>it&apos;s <strong>Vinay</strong> here</p>
              </div>
            </div>
          </div>
          <div className="container mt-16">
            <a href="/#nav" className='underline text-white text-3xl ms-5'><strong>Scroll Down</strong></a>
          </div>
          <div className="container mx-auto text-white w-20">
            <svg className='fill-white drop-shadow-dark animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
          </div>
          <div id='nav' className="containr">
            <div className="flex">
              <nav className='p-3 '>
                <ul className='flex flex-row text-white'>
                  <li className={`bg-black hover:bg-white hover:text-black border-s px-5 py-3 rounded-s-full  ${location.pathname === '/about' ? 'bg-white text-black' : ''}`}><Link to='/About'>About </Link></li>
                  <li className={`bg-black hover:bg-white hover:text-black border-s px-5 py-3  ${location.pathname === '/library' ? 'bg-white text-black' : ''}`}><Link to='/library'>Library</Link></li>
                  <li className={`bg-black hover:bg-white hover:text-black border-s px-5 py-3  ${location.pathname === '/experience' ? 'bg-white text-black' : ''}`}><Link to='/experience'>Experience</Link></li>
                  <li className={`bg-black hover:bg-white hover:text-black border-s px-5 py-3 rounded-e-full  ${location.pathname === '/' ? 'bg-white text-black' : ''}`}><Link to='/'>Home</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home