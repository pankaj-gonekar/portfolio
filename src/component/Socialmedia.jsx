import React from 'react'
import Navbar from './Navbar'
import freelancer from '../images/freelancer.svg'

function Socialmedia() {
    return (
        <div className='bg-img pb-10'>
            <Navbar />
            <div className="flex mx-24 max-xl:mx-14 max-sm:mx-5 max-md:my-16 max-lg:mt-12">
                <div className="w-full text-right text-white max-xl:drop-shadow-dark max-md:drop-shadow-none">
                    <h1 className='text-5xl'>Social <strong>Media</strong></h1>
                    <p className='text-lg leading-4 mt-2 max-xl'>Handles link and brief</p>
                </div>
            </div>
            <div className=" bg-dark drop-shadow-dark pt-6 mt-24 max-xl:mt-20 max-lg:mt-28">
                <div className="flex flex-row justify-center gap-2 flex-wrap">
                    <div className="flex flex-col w-96 h-56 p-4">
                        <div className="flex flex-row ">
                            <div className="flex flex-col justify-center p-4 bg-white text-7xl max-xl:text-6xl max-lg:text-6xl px-6 m-0 max-sm:py-1 max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md"><i className="fa-brands fa-linkedin-in"></i></div>
                            <div className="flex flex-col justify-center ps-7">
                                <h4 className='font-extrabold text-lg text-white'>linkedln</h4>
                                <p className='text-xsm text-white'>LinkedIn is a business and employment-focused social media
                                    platform that works through websites and mobile apps.
                                    It launched on May 5, 2003. It is now owned by Microsoft.</p>
                            </div>
                        </div>
                        <div className='px-3 pt-4 flex flex-col'>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                        </div>
                    </div>
                    <div className="container w-96 h-56 p-4">
                        <div className="flex flex-row ">
                            <div className="flex flex-col justify-center p-4 bg-white text-7xl max-xl:text-6xl max-lg:text-6xl px-8 m-0 max-sm:py-1 max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md"><i className="fa-brands fa-facebook-f"></i></div>
                            <div className="flex flex-col justify-center ps-7">
                                <h4 className='font-extrabold text-lg text-white'>Facebook</h4>
                                <p className='text-xsm text-white'>Meta Platforms, Inc., formerly named Facebook, Inc., and
                                    TheFacebook, Inc., is an American multinational
                                    technology conglomerate based in Menlo Park, California.</p>
                            </div>
                        </div>
                        <div className='px-3 pt-4 flex flex-col'>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                        </div>
                    </div>
                    <div className="container w-96 h-56 p-4">
                        <div className="flex flex-row">
                            <div className="flex flex-col justify-center p-4 bg-white text-7xl max-xl:text-6xl max-lg:text-6xl  px-5 m-0 max-sm:py-1 max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md"><i className="fa-brands fa-twitter"></i></div>
                            <div className="flex flex-col justify-center ps-7">
                                <h4 className='font-extrabold text-lg text-white'>Twitter</h4>
                                <p className='text-xsm text-white'>Twitter, Inc., was an American social media company based in
                                    San Francisco, California. The company operated the social
                                    networking service Twitter and previously the Vine short
                                    video app and Periscope livestreaming service.</p>
                            </div>
                        </div>
                        <div className='px-3 pt-4 flex flex-col'>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                        </div>
                    </div>
                    <div className="container w-96 h-56 p-4">
                        <div className="flex flex-row ">
                            <div className="flex flex-col justify-center p-4 bg-white text-7xl max-xl:text-6xl max-lg:text-6xl px-4 m-0  max-sm:py-1 max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md"><i className="fa-brands fa-youtube"></i></div>
                            <div className="flex flex-col justify-center ps-7">
                                <h4 className='font-extrabold text-lg text-white'>Youtube</h4>
                                <p className='text-xsm text-white'>YouTube is an American global online video sharing and social
                                    media platform headquartered in San Bruno, California,
                                    United States. It was launched on February 14, 2005, by Steve Chen,
                                    Chad Hurley, and Jawed Karim. </p>
                            </div>
                        </div>
                        <div className='px-3 pt-4 flex flex-col'>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                        </div>
                    </div>
                    <div className="container w-96 h-56 p-4">
                        <div className="flex flex-row ">
                            <div className="flex flex-col justify-center p-4 bg-white text-7xl max-xl:text-6xl max-lg:text-6xl px-6 m-0 max-sm:py-1 max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md"><i className="fa-brands fa-instagram"></i></div>
                            <div className="flex flex-col justify-center ps-7">
                                <h4 className='font-extrabold text-lg text-white'>Instagram</h4>
                                <p className='text-xsm text-white'>Instagram is a photo and video sharing social networking service
                                    owned by American company Meta Platforms. The app allows users
                                    to upload media that can be edited with filters and organized by hashtags
                                    and geographical tagging. </p>
                            </div>
                        </div>
                        <div className='px-3 pt-4 flex flex-col'>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                        </div>
                    </div>
                    <div className="container w-96 h-56 p-4">
                        <div className="flex flex-row ">
                            <img src={freelancer} className="flex flex-col justify-center p-2 bg-white h-26 w-26 max-sm:py-1 max-md:shadow-super-light rounded-lg max-md:rounded-md max-sm:rounded-md" />
                            <div className="flex flex-col justify-center ps-7">
                                <h4 className='font-extrabold text-lg text-white'>Freelancer</h4>
                                <p className='text-xsm text-white'>Freelancer is an Australian freelance marketplace website, which allows
                                    potential employers to post jobs that freelancers can then
                                    bid to complete. Founded in 2009, its headquarters is located in
                                    Sydney, Australia, though it also has offices in Vancouver, London,
                                    Buenos Aires, Manila, and Jakarta.</p>
                            </div>
                        </div>
                        <div className='px-3 pt-4 flex flex-col'>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm active:text-cyan-500'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                            <a href="https://www.linkedin.com/feed/" rel='noreferrer' target='_blank' className='text-white text-sm'><i className="fa-solid fa-circle-chevron-right"></i> https://www.linkedin.com/feed/</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socialmedia