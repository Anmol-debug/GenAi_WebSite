import React from 'react';
import genAiBanner from '../../assets/trainings/genAi/genAiBanner.png';
import { FaArrowRight, FaClock, FaStar } from 'react-icons/fa';
import { FaArrowRightLong, FaComputer } from 'react-icons/fa6';
import video1 from '../../assets/trainings/genAi/video1.mp4';
import { Navigate } from 'react-router-dom';


const HeroBanner = () => {
  return (
    <>
      <div className="relative shadow overflow-hidden w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[400px] 2xl:h-[580px] flex">
        <img
          src={genAiBanner}
          alt="Generative AI Banner"
          className="w-full h-full  object-top"
        />

        {/* <video
          src={video1}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0"
          style={{ filter: 'brightness(0.5)' }}
        /> */}
        <div className="absolute left-0 -top-6 right-0 bottom-0 flex flex-col justify-center items-center px-4 text-center text-white max-w-6xl mx-auto">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] ">
            <span className=''>Unlock the Future with</span>
            <span className="animate-pulse block border-black bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-[#009ed2]">
              Generative AI
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-4 w-full max-w-5xl font-medium text-white px-24">
            Join Shilsha Technologies' comprehensive 60-hour online course and master the
            technologies that are revolutionizing industries worldwide.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
            <a
              href="#enquiryForm"
              className="border bg-gradient-to-r from-[#2f5d98] via-[#4e8ad9] to-[#00bfff] hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-transparent hover:bg-[#00bfff] transition px-6 py-3 text-white rounded-md shadow text-xs sm:text-sm whitespace-nowrap"
            >
              Enroll Now <FaArrowRightLong className="inline ml-1" />
            </a>
            <a href='#curriculum1'
            className="cursor-pointer hover:bg-[white] hover:text-[#4e8ad9] font-medium tracking-wide border-2 border-[#4e8ad9] transition px-6 py-3 text-white rounded-lg shadow text-xs sm:text-sm whitespace-nowrap">
              View Curriculum
            </a>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4 text-xs sm:text-sm text-white animate-pulse">
            <div className='flex items-center justify-center gap-2 border-2 border-[#4e8ad9] rounded-md hover:scale-105 p-2 '>
              <div><FaClock /></div>
              <div className='flex gap-1'>
                <div>60 Hours</div>
                <div>Duration</div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-2 border-2 border-[#4e8ad9] rounded-md hover:scale-105 p-2 '>
              <div><FaComputer /></div>
              <div className='flex gap-1'>
                <div>Online</div>
                <div>Mode</div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-2 border-2 border-[#4e8ad9] rounded-md hover:scale-105 p-2 '>
              <div><FaStar /></div>
              <div className='flex gap-1'>
                <div>Expert Led</div>
                <div>Training</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-200" />
    </>
  );
};

export default HeroBanner;
