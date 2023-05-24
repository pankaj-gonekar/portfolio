import React from 'react'
import libraryVertical from '../images/libraryVertical.svg'
import libraryHorizontal from '../images/libraryHorizontal.svg'
import lady from '../images/lady.png'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-end pt-3 px-5">
        <p className='text-sm max-sm:text-xsm max-sm:text-base/super-loose text-right'>Keep your imagination filled with diffrent<br />
          elements, it gives you stable<br />
          <strong>“output”</strong> direction</p>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4 mt-24 mx-auto px-4">
        <div className='flex-col'>
          <div className="container text-white">
            <h1 className='max-sm:text-6xl max-md:text-8xl max-lg:text-9xl max-xl:text-9xl max-2xl:text-14xl 2xl:text-14xl'>hello&quot;</h1>
            <p className='max-sm:text-xs max-md:text-lg max-lg:text-xl max-2xl:text-2xl 2xl:text-2xl md:ms-5'>Here! you can take a look to my<br />
              previous works and explore<br />
              other stuff too.</p>
          </div>
        </div>
        <div className='flex-col max-sm:mt-0'>
          <div className="container text-right">
            <h1 className='max-sm:text-6xl max-md:text-8xl max-lg:text-9xl max-xl:text-9xl max-2xl:text-14xl 2xl:text-14xl leading-14 animate-pulse cursor-pointer hover:text-red-600'><strong>there</strong></h1>
            <p className='max-sm:text-xs max-md:text-2xl max-lg:text-3xl max-xl:text-3xl max-2xl:text-5xl 2xl:text-5xl leading-3'>it&apos;s <strong><span className='text-blue-800'>Vinay</span></strong> here</p>
          </div>
        </div>
      </div>
      <div className="container mt-16">
        <a href="/#nav" className='underline text-white max-md:text-2xl max-sm:text-xl text-3xl max-sm:ms-5 ms-10'><strong> Scroll Down</strong></a>
      </div>
      <div className="container mb-16 max-md:w-10 max-lg:w-11 cursor-pointer mx-auto text-white w-20">
        <svg className='fill-white hover:fill-black drop-shadow-dark animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
      </div>
      <Navbar />
      <div className="flex flex-wrap justify-center py-11 mt-10 bg-black">
        <div className="flex p-4 text-white">
          <div className="max-sm:w-28 max-sm:h-36 max-md:w-32 max-md:h-40 max-lg:w-40 max-lg:h-48 w-48 h-56 bg-white items-center justify-center rounded-md">
          </div><div className="w-48 h-56 mx-6 items-center justify-center rounded-md">
            <h1 className='max-md:mt-7 max-lg:mt-5 md:text-lg mt-8'><strong>Logo Project</strong></h1>
            <p className='mt-1 max-md:text-xs max-xl:text-sm'><strong>Nexa car manufacturing company</strong>  </p>
            <p className='mt-2 max-md:text-xs max-xl:text-sm'>It’s was not easy job for me
              because clinets were hard
              on me to full fill there
              expectations ......<a href='#' className='hover:font-bold'>Read more</a></p>
          </div>
        </div>
        <div className="flex p-4 text-white">
          <div className="max-sm:w-28 max-sm:h-36 max-md:w-32 max-md:h-40 max-lg:w-40 max-lg:h-48 w-48 h-56 bg-white items-center justify-center rounded-md">
          </div><div className="w-48 h-56 mx-6 items-center justify-center rounded-md">
            <h1 className='max-md:mt-7 max-lg:mt-5 md:text-lg mt-8'><strong>Logo Project</strong></h1>
            <p className='mt-1 max-md:text-xs max-xl:text-sm'><strong>Nexa car manufacturing company</strong>  </p>
            <p className='mt-2 max-md:text-xs max-xl:text-sm'>It’s was not easy job for me
              because clinets were hard
              on me to full fill there
              expectations ......<a href='#' className='hover:font-bold'>Read more</a></p>
          </div>
        </div>
        <div className="flex p-4 text-white">
          <div className="max-sm:w-28 max-sm:h-36 max-md:w-32 max-md:h-40 max-lg:w-40 max-lg:h-48 w-48 h-56 bg-white items-center justify-center rounded-md">
          </div><div className="w-48 h-56 mx-6 items-center justify-center rounded-md">
            <h1 className='max-md:mt-7 max-lg:mt-5 md:text-lg mt-8'><strong>Logo Project</strong></h1>
            <p className='mt-1 max-md:text-xs max-xl:text-sm'><strong>Nexa car manufacturing company</strong>  </p>
            <p className='mt-2 max-md:text-xs max-xl:text-sm'>It’s was not easy job for me
              because clinets were hard
              on me to full fill there
              expectations ......<a href='#' className='hover:font-bold'>Read more</a></p>
          </div>
        </div>
      </div>
      <div className="flex mt-2 mx-auto px-4 py-9 justify-center">
        <div className="flex-col w-1/2 justify-items-center mx-auto">
          <div className="lg:w-97 text-white">
            <h1 className='grid justify-items-end font-extrabold pe-10 text-8xl max-xl:text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl'>My work</h1>
            <p className='grid justify-items-end max-xl:text-2xl max-lg:text-xl max-md:text-base pe-10 text-4xl'>with clients</p>
            <p className='mt-10 ms-7 max-md:mt-5 max-md:ms-2 max-xl:w-72 max-lg:w-60 max-md:w-48 max-sm:w-40 w-96 max-lg:text-xs text-sm'>i have good experience with industrial companys,
              most of them were really good with
              there converstion and that
              is the best part to full fill there expections.</p>
          </div>
        </div>
        <div className="flex-col w-1/2 justify-items-center">
          <div className="container text-center">
            <img className='h-52 mx-auto sm:hidden' src={libraryVertical} alt="" />
            <img className='mx-auto hidden sm:block' src={libraryHorizontal} alt="" />
            <i className="fa-solid fa-caret-up" style={{ "color": "#000000" }}></i>
            <p className='text-2xl max-sm:text-base leading-super-loose'>See <strong>library</strong></p>
          </div>
        </div>
      </div>
      <div className="flex w-full max-xl:h-115 h-125 relative">
        <div className="w-full absolute max-xl:mt-6 mt-9 right-20">
          <div className=' float-right'>
            <h1 className='text-right text-4xl'><strong>Skill </strong>Preview</h1>
            <p className='text-right text-xs'>Great skills in logo desgining,professional poster<br />
              desgins and filled with ideas</p>
          </div>
        </div>
        <div className="h-96 w-full max-lg:mt-52 max-xl:mt-28 mt-36 absolute ">
          <div className="flex h-105 items-end justify-evenly max-md:pe-3 pe-8 max-2xl:mx-20 max-xl:gap-10 gap-12 align-bottom pb-10">
            <div className="max-md:w-40 max-lg:w-48 max-xl:w-72 w-96">
              <div className="bg-gray-100 max-lg:p-3 max-xl:p-4 p-6 rounded-3xl drop-shadow-darkest">
                <img className="max-lg:h-32 max-xl:h-44 h-60 rounded-t-2xl w-full object-cover object-center max-lg:mb-0 mb-4" src="https://dummyimage.com/720x400" alt="content" />
                <div className="w-full max-lg:ms-0 ms-3">
                  <div className="flex-col">
                    <div className="flex max-lg:h-12 h-16 w-full ">
                      <div className="w-20 m-2 text-center my-auto">
                        <img className='object-cover max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="flex max-lg:h-12 h-16 w-full ">
                      <div className="w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:w-40 max-lg:w-48 max-xl:w-72 w-96 ">
              <div className="bg-gray-100 max-lg:p-3 max-xl:p-4 p-6 rounded-3xl max-lg:h-72 max-xl:h-96 h-102 drop-shadow-darkest">
                <img className="max-lg:h-36 max-xl:h-52 h-64 rounded-t-2xl w-full object-cover object-center mb-4" src="https://dummyimage.com/720x400" alt="content" />
                <div className="w-full max-xl:my-auto max-lg:my-0 my-9 max-lg:ms-0 ms-3">
                  <div className="flex-col">
                    <div className="flex max-lg:h-12 h-16 w-full ">
                      <div className="w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-xl:h-10 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="flex max-lg:h-12 h-16 w-full justify-center ">
                      <div className="w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:w-40 max-lg:w-48 max-xl:w-72 w-96  ">
              <div className="bg-gray-100 max-lg:p-3 max-xl:p-4 p-6 rounded-3xl drop-shadow-darkest">
                <img className="max-lg:h-32 max-xl:h-44 h-60 rounded-t-2xl w-full object-cover object-center max-lg:mb-0 mb-4" src="https://dummyimage.com/720x400" alt="content" />
                <div className="w-full max-lg:ms-0 ms-3">
                  <div className="flex-col">
                    <div className="flex max-lg:h-12 h-16 w-full ">
                      <div className="w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="flex max-lg:h-12 h-16 w-full ">
                      <div className="w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-xl:h-52 h-72  bg-black self-end -z-10 drop-shadow-darkest"></div>
      </div>

    </div>

  )
}

export default Home