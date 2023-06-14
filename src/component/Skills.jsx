import React from 'react'
import Navbar from './Navbar'

const Skills = () => {
  return (
    <div className='bg-red-body pb-16 w-full'>
      <Navbar />
      <div className="flex mx-24 max-xl:mx-14 max-sm:mx-5 max-md:my-16">
        <div className="w-full text-right text-white">
          <h1 className='text-5xl max-lg:text-4xl max-lg:leading-8'><strong>Skills</strong> & Extra</h1>
          <p className='text-sm max-lg:text-xs leading-4 max-lg:leading-none max-lg:h-16 mt-2 max-xl max-lg:rounded-xl:mt-1'>Here you can see my skill&apos;s in which<br /> I&apos;am good and experienced</p>
        </div>
      </div>
      <div className="flex max-xl:mt-5 mt-8 max-md:flex-wrap">
        <div className="flex-col flex w-1/2 max-md:w-full">
          <div className="container mx-auto mt-0 max-md:mt-12 max-sm:mt-0 p-4 max-xl:p-3 bg-white w-fit rounded-2xl drop-shadow-dark">
            <img className='w-102 h-72 max-xl:w-96 max-xl:h-56 max-lg:w-72 max-lg:h-40 max-md:w-96 max-md:h-56 max-sm:w-80 max-sm:h-48  rounded-2xl object-cover' src="https://dummyimage.com/720x400" alt="" />
          </div>
        </div>
        <div className="flex-col w-1/2 max-md:w-full mx-auto">
          <div className="container text-white max-md:mx-auto max-md:px-3 max-md:mt-20 max-sm:mt-8 ">
            <h1 className='text-3xl max-lg:text-lg max-md:text-2xl mt-8 max-xl:mt-3 max-lg:mt-2'>Logo <strong>Designing</strong></h1>
            <p className='w-96 max-md:w-full text-xs max-lg:text-xsm max-md:text-sm max-sm:text-xs leading-4 max-lg:leading-3 mt-4 max-md:py-3  max-xl:mt-2 max-lg:mt-0'>Logo design involves creating a visual symbol that represents a
              company or brand. It should be unique, simple, and memorable.
              A good logo can help establish brand identity and communicate
              the values of a company. The process of logo design typically
              involves research, conceptualization, and iterative design.</p>
            <div className="flex mb-20 max-sm:mb-10 flex-row mt-7 max-xl:mt-4 max-lg:mt-5 justify-start max-md:justify-between max-md:pe-0 gap-5 max-md:gap-3 pe-4 ">
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 max-lg:mt-0 max-sm:mt-9 px-3 max-md:flex-wrap">
        <div className="flex-col max-md:order-2 w-1/2 max-md:w-full mx-auto">
          <div className="container flex flex-col text-white max-md:mx-auto max-md:px-3 max-md:mt-5">
            <div className="container text-right max-md:mt-10 max-sm:mt-0">
              <h1 className='text-3xl max-lg:text-lg max-md:text-2xl max-sm:text-xl mt-8 max-xl:mt-3 max-lg:mt-2'>Poster <strong>Designing</strong></h1>
              <p className='w-96 max-md:w-full float-right text-xs max-lg:text-xsm max-md:text-sm max-sm:text-xs max-sm:py-3 max-md:py-3 leading-4 max-lg:leading-3 mt-4 max-xl:mt-2 max-lg:mt-0'>Logo design involves creating a visual symbol that represents a
                Poster design is the creation of a visual communication
                tool that conveys a message or promotes an event, product,
                or service. It typically involves combining text and images
                in a visually compelling way. Effective poster design should
                capture the attention of the viewer, communicate the message
                clearly, and be aesthetically pleasing. The process of poster
                design includes brainstorming, sketching, layout design, and finalizing the artwork.</p>
            </div>
            <div className="flex max-sm:mb-10 flex-row mt-7 max-xl:mt-4 max-lg:mt-5 self-end max-md:justify-between max-md:pe-0 gap-5 max-md:gap-3 ">
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col flex max-md:order-1 w-1/2 max-md:w-full">
          <div className="container p-4 max-xl:p-3 bg-white w-fit mx-auto mt-12 max-md:mt-12 max-sm:mt-0 max-lg:mt-6 rounded-2xl drop-shadow-dark">
            <img className='w-102 h-72 max-xl:w-96 max-xl:h-56 max-lg:w-72 max-lg:h-40 max-md:w-96 max-md:h-56 max-sm:w-80 max-sm:h-48  rounded-2xl object-cover' src="https://dummyimage.com/720x400" alt="" />
          </div>
        </div>
      </div>
      <div className="flex mt-32 max-lg:mt-14 max-md:flex-wrap">
        <div className="flex-col flex w-1/2 max-md:w-full">
          <div className="container mx-auto mt-4 max-md:mt-12 max-sm:mt-0 p-4 max-xl:p-3 bg-white w-fit rounded-2xl drop-shadow-dark">
            <img className='w-102 h-72 max-xl:w-96 max-xl:h-56 max-lg:w-72 max-lg:h-40 max-md:w-96 max-md:h-56 max-sm:w-80 max-sm:h-48  rounded-2xl object-cover' src="https://dummyimage.com/720x400" alt="" />
          </div>
        </div>
        <div className="flex-col w-1/2 max-md:w-full mx-auto">
        <div className="container text-white max-md:mx-auto max-md:px-3 max-md:mt-20 max-sm:mt-9">
            <h1 className='text-3xl max-lg:text-lg max-md:text-2xl mt-8 max-xl:mt-3 max-lg:mt-2'>Web <strong>Designing</strong></h1>
            <p className='w-96 max-md:w-full text-xs max-lg:text-xsm max-md:text-sm max-sm:text-xs leading-4 max-lg:leading-3 mt-4 max-md:py-3  max-xl:mt-2 max-lg:mt-0'>
              Web design is the process of creating and designing websites. It involves the use
              of various elements such as layout, color, graphics, typography, and user interface
              design. A well-designed website should be visually appealing, easy to navigate, and
              optimized for search engines. The process of web design includes planning, wireframing,
              prototyping, and coding</p>
            <div className="flex mb-20 max-sm:mb-10 flex-row mt-7 max-xl:mt-4 max-lg:mt-5 justify-start max-md:justify-between max-md:pe-0 gap-5 max-md:gap-3 pe-4 ">
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
              <div className="bg-white p-2 rounded-2xl w-fit">
                <img className='w-48 h-28 max-xl:h-20 max-lg:h-16 max-md:h-28 max-sm:h-16 rounded-2xl max-lg:rounded-xl object-cover' src="https://dummyimage.com/720x400" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-48 max-xl:h-52 max-lg:h-56 bg-dark drop-shadow-dark"></div>
    </div>
  )
}

export default Skills