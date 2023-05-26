import React from 'react'
import libraryVertical from '../images/libraryVertical.svg'
import libraryHorizontal from '../images/libraryHorizontal.svg'
import lady from '../images/lady.png'
import aboutImg from '../images/about.jpg'
import Navbar from './Navbar'
const Home = () => {

  return (
    <div className="w-full mx-auto">
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
      <div className="container mt-12">
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
      <div className="flex w-full max-sm:h-105  max-xl:h-115 h-125 relative">
        <div className="w-full absolute max-xl:mt-6 mt-5 max-sm:mt-20 right-20 max-md:right-8 max-sm:right-4">
          <div className='float-right'>
            <h1 className='text-right text-4xl max-sm:text-3xl'><strong>Skill </strong>Preview</h1>
            <p className='text-right max-sm:text-xxs leading-tight text-xs'>Great skills in logo desgining,<br className='max-sm:block hidden' />professional poster <br className='block max-sm:hidden' />
              desgins <br className='hidden max-sm:block' /> and filled with ideas</p>
          </div>
        </div>
        <div className="h-96 w-full max-sm:-mt-3 max-lg:mt-16 max-xl:mt-16 mt-48 absolute ">
          <div className="flex h-105 items-end justify-evenly max-sm:pe-1 max-md:pe-3 pe-8 max-2xl:mx-20 max-sm:gap-4 max-md:gap-7 max-xl:gap-10 gap-12 align-bottom pb-10">
            <div className="max-md:w-40 max-lg:w-48 max-xl:w-72 w-96">
              <div className="bg-gray-100 max-sm:p-2 max-lg:p-3 max-xl:p-4 p-6 max-sm:rounded-lg rounded-2xl drop-shadow-darkest">
                <img className="max-sm:h-20  max-lg:h-28 max-xl:h-44 h-60 max-sm:rounded-t-md rounded-t-xl w-full object-cover object-center max-lg:mb-0 mb-4" src="https://dummyimage.com/720x400" alt="content" />
                <div className="w-full max-lg:ms-0 ms-3">
                  <div className="flex-col">
                    <div className="flex max-sm:h-7 max-lg:h-12 h-16 w-full ">
                      <div className="max-sm:w-11 w-20 m-2 text-center my-auto">
                        <img className='object-cover max-sm:h-4 max-sm:w-4 max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className=" max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-sm:text-3xs max-sm:leading-none max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="flex max-sm:h-7 max-lg:h-12 h-16 w-full ">
                      <div className="max-sm:w-11 w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-sm:h-4 max-sm:w-4 max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-sm:text-3xs max-sm:leading-none max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:w-40 max-lg:w-48 max-xl:w-72 w-96 ">
              <div className="bg-gray-100 max-sm:p-2 max-lg:p-3 max-xl:p-4 p-6 max-sm:rounded-lg rounded-2xl max-sm:h-44 max-lg:h-64 max-xl:h-96 h-102 drop-shadow-darkest">
                <img className="max-sm:h-20 max-lg:h-32 max-xl:h-52 h-64 max-sm:rounded-t-md rounded-t-xl w-full object-cover object-center mb-4" src="https://dummyimage.com/720x400" alt="content" />
                <div className="w-full max-xl:my-auto max-lg:my-0 my-9 max-lg:ms-0 ms-3">
                  <div className="flex-col">
                    <div className="flex max-sm:h-7 max-lg:h-12 h-16 w-full ">
                      <div className="max-sm:w-11 w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-sm:h-4 max-sm:w-4 max-xl:h-10 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-sm:text-3xs max-sm:leading-none max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="flex max-sm:h-7 max-lg:h-12 h-16 w-full justify-center ">
                      <div className="max-sm:w-11 w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-sm:h-4 max-sm:w-4 max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-sm:text-3xs max-sm:leading-none max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:w-40 max-lg:w-48 max-xl:w-72 w-96  ">
              <div className="bg-gray-100 max-sm:p-2 max-lg:p-3 max-xl:p-4 p-6 max-sm:rounded-lg rounded-2xl drop-shadow-darkest">
                <img className="max-sm:h-20 max-lg:h-28 max-xl:h-44 h-60 max-sm:rounded-t-md rounded-t-xl w-full object-cover object-center max-lg:mb-0 mb-4" src="https://dummyimage.com/720x400" alt="content" />
                <div className="w-full max-lg:ms-0 ms-3">
                  <div className="flex-col">
                    <div className="flex max-sm:h-7 max-lg:h-12 h-16 w-full ">
                      <div className="max-sm:w-11 w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-sm:h-4 max-sm:w-4 max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-sm:text-3xs max-sm:leading-none max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="flex max-sm:h-7 max-lg:h-12 h-16 w-full ">
                      <div className="max-sm:w-11 w-20 m-2 text-center my-auto ">
                        <img className='object-cover max-sm:h-4 max-sm:w-4 max-xl:h-9 h-12 w-full' src={lady} alt="" />
                      </div>
                      <div className="max-lg:mx-0 mx-3 my-auto flex-grow">
                        <p className='max-sm:text-3xs max-sm:leading-none max-lg:text-xxs max-lg:leading-tight max-xl:text-xs text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-sm:h-32 max-lg:h-44 max-xl:h-60 h-72  bg-black self-end -z-10 drop-shadow-darkest"></div>
      </div>
      <div className="flex mt-10 max-md:mt-0">
        <div className="flex-col w-1/2">
          <div className="container w-105 max-xl:w-99 max-lg:w-85 max-md:w-68 max-sm:w-44 m-auto my-36 bg-white max-lg:p-2 max-sm:p-1 p-3 max-md:rounded-md rounded-lg">
            <img className='object-cover w-full h-64 max-sm:h-20 max-md:h-28 max-xl:h-44 max-lg:h-36 max-md:rounded-t-md rounded-t-lg pb-2 max-xl:pb-1 max-lg:pb-0' src={aboutImg} alt="" />
            <div className="container w-full text-center p-2">
              <h2 className='font-bold text-xl max-lg:text-base max-md:text-sm py-2 max-lg:py-0 max-sm:pb-1'>About me</h2>
              <div className="max-sm:shadow-bottom-white max-sm:bg-white max-sm:h-1 max-sm:px-16  max-sm:absolute  max-sm:w-38"></div>
              <div className="max-sm:h-24 max-sm:overflow-y-auto">
                <p className='max-sm:mt-4 mt-0 text-lg max-lg:text-xs max-lg:leading-4 max-md:text-xsm max-md:leading-tight max-xl:text-sm max-xl:leading-4 font-semibold leading-6 max-lg:pb-1 pb-3'>Graphics desinger is a Professional work profile Platform.
                  Here we will provide you only interesting content, which
                  you will like very much. We&apos;re dedicated to providing you
                  the best of work profile, with a focus on dependability and
                  showing my work to others. We&apos;re working  turn our passion
                  for work profile into a booming online website.  We hope
                  you enjoy our work profile as much as we enjoy
                  offering them to you.</p>
                <p className='text-lg max-lg:text-xs max-lg:leading-4 max-md:text-xsm max-md:leading-tight max-xl:text-sm max-xl:leading-4 font-semibold leading-6 max-lg:pb-1 pb-3 max-sm:mb-2'>I will keep posting more important posts on my
                  Website for all of you. Please give your support and love.</p>
              </div>
              <div className="max-sm:shadow-top-white max-sm:bg-white max-sm:h-1 max-sm:px-16  max-sm:absolute  max-sm:w-38"></div>
              <p className='text-base max-sm:text-xsm max-md:text-xs max-md:leading-4 font-bold leading-6 max-sm:mt-2 max-lg:pb-1 pb-3'>
                Thanks For Visiting </p>
            </div>
          </div>
        </div>
        <div className="flex-col w-1/2">
          <div className="container py-20 px-16 max-xl:px-14 max-lg:px-4 max-md:px-4 max-sm:px-4">
            <h2 className='text-right font-bold text-6xl max-xl:text-5xl max-lg:text-4xl max-lg:leading-7 max-md:text-3xl max-md:leading-6 max-sm:text-lg max-sm:leading-4'>About</h2>
            <p className='text-right  text-4xl max-xl:text-3xl max-lg:text-3xl max-md:text-xl max-sm:text-base'>Social Media Handles</p>
            <div className="container mt-20 max-xl:mt-16 max-lg:mt-14 max-md:mt-12 max-sm:mt-10 p-5 max-lg:p-3 max-md:p-auto max-sm:ps-0">
              <div className="flex pb-7 max-lg:pb-5 max-md:pb-4 max-sm:pb-3">
                <div className="flex items-center">
                  <div className="text-8xl max-xl:text-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl p-4 max-md:p-3 max-sm:px-2 max-sm:py-1 shadow-super max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md"><i className="fa-brands fa-linkedin-in"></i></div>
                  <div className="py-2 ps-5 max-lg:ps-4 max-md:ps-3 max-sm:ps-2 w-96 max-xl:w-80 max-lg:w-60 max-md:w-44 max-sm:w-28 ">
                    <h2 className='font-bold text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-xs'>LinkedIn</h2>
                    <p className='text-xs max-xl:text-xxs max-xl:leading-3 max-lg:text-xxs max-lg:leading-tight max-md:text-3xs max-sm:text-4xs max-sm:leading-none'>LinkedIn is a business and employment-focused social media
                      platform that works through websites and mobile apps.
                      It launched on May 5, 2003. It is now owned by Microsoft.</p>
                  </div>
                </div>
              </div>
              <div className="flex pb-7 max-lg:pb-5">
                <div className="flex items-center">
                  <div className="text-8xl max-xl:text-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl pt-4 px-7 max-xl:pt-5 max-xl:px-6 max-md:pt-4 max-md:px-4 max-md:pe-5 max-sm:pt-1 max-sm:px-3 shadow-super max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md"><i className="fa-brands fa-square-facebook" style={{ "color": "#ffffff" }}></i></div>
                  <div className="py-2 ps-5 max-lg:ps-4 max-md:ps-3 max-sm:ps-2 w-96 max-xl:w-80 max-lg:w-60 max-md:w-44 max-sm:w-28 ">
                    <h2 className='font-bold text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-xs'>Facebook</h2>
                    <p className='text-xs max-xl:text-xxs max-xl:leading-3 max-lg:text-xxs max-lg:leading-tight max-md:text-3xs max-sm:text-4xs max-sm:leading-none'>Meta Platforms, Inc., formerly named Facebook, Inc., and
                      TheFacebook, Inc., is an American multinational
                      technology conglomerate based in Menlo Park, California.</p>
                  </div>
                </div>
              </div>
              <div className="flex pb-7 max-lg:pb-5">
                <div className="flex items-center">
                  <div className="text-8xl max-xl:text-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl p-3 max-md:px-2 max-sm:px-2 max-sm:py-1 shadow-super max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md"><i className="fa-brands fa-twitter"></i></div>
                  <div className="py-2 ps-5 max-lg:ps-4 max-md:ps-3 max-sm:ps-2 w-96 max-xl:w-80 max-lg:w-60 max-md:w-44 max-sm:w-28 ">
                    <h2 className='font-bold text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-xs'>LinkedIn</h2>
                    <p className='text-xs max-xl:text-xxs max-xl:leading-3 max-lg:text-xxs max-lg:leading-tight max-md:text-3xs max-sm:text-4xs max-sm:leading-none'>LinkedIn is a business and employment-focused social media
                      platform that works through websites and mobile apps.
                      It launched on May 5, 2003. It is now owned by Microsoft.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home