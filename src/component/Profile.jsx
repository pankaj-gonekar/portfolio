import React from 'react'
import Navbar from './Navbar'
import ladyImage from '../images/lady.png'

const Profile = () => {
  return (
    <div className='bg-crimson-red-2 pb-36'>
      <Navbar />
      <div className="relative py-12 px-12 max-md:px-9 max-sm:px-4 max-md:py-28 max-sm:py-24 mt-48 max-lg:mt-28 max-md:mt-28 w-full bg-dark drop-shadow-dark">
        <div className="absolute max-xl:w-72 max-lg:w-44 max-sm:w-32 w-96 h-100 right-24 -top-48 max-lg:-top-20 max-sm:-top-14 max-xl:right-16 max-lg:right-10 max-sm:right-6 text-center text-white">
          <div className="p-3 max-xl:p-2 max-lg:p-1 max-sm:p-0 max-sm:border-2 bg-white rounded-xl max-sm:rounded-lg">
            <img className='max-xl:h-64 max-lg:h-36 max-sm:h-24 w-96 h-80 object-cover rounded-xl max-sm:rounded-lg' src={ladyImage} alt="" />
          </div>
          <h1 className='text-4xl max-xl:text-3xl max-lg:text-xl max-sm:text-base mt-5 max-xl:mt-3 max-lg:mt-1 max-sm:leading-4'>Vinay <strong>G</strong></h1>
          <p className='font-semibold max-xl:text-xs max-lg:text-xxs max-sm:text-xxs'>Professional Graphic Designer</p>
        </div>
        <div className="container text-white">
          <h4 className='font-bold'>About me</h4>
          <p className='text-xs leading-4'>My full name is  “Vinay Gonekar”  , but people used to call me wasiu  it’s kind a nick name for me,
            <br className='max-md:hidden' />
            i’m a like creative demon, who love to imagin things beyond in another level.</p>
          <h4 className='font-bold mt-4'>Skills</h4>
          <p className='font-semibold text-xs'>Graphics Designing, 2D Sketching, Gaming, Streamer  “a little”</p>
          <h4 className='font-bold mt-4'>Brief</h4>
          <p className='leading-4 text-xs'>Hello and welcome to my portfolio! My name is Vinay, and I am a graphic designer based in Hyderabad. I am passionate about
            <br className='max-md:hidden' />
            creating beautiful and effective designs that communicate a message and tell a story.
            <br /><br />
            I have been working as a graphic designer for [number of years] and have had the opportunity to work
            <br className='max-md:hidden' />
            with a diverse range of clients, from [describe the type of clients you&apos;ve worked with]. This has allowed me to develop a strong
            <br className='max-md:hidden' />
            understanding of what works and what doesn&apos;t in design, and has helped me to hone my skills in [describe your specific areas of expertise].
            <br /><br />
            In my portfolio, you will find a collection of my work that showcases my skills and expertise. Whether you need a logo, a brochure,
            <br className='max-md:hidden' />
            a website, or any other type of graphic design work, I am confident that I have the creativity, technical ability, and attention to detail necessary to create something that truly represents your brand.
            <br className='max-md:hidden' />
            Thank you for taking the time to visit my portfolio, and I look forward to the opportunity to work with you to create something amazing!</p>
        </div>
      </div>
     
    </div>
  )
}

export default Profile