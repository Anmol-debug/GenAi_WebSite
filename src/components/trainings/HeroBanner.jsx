import React from 'react';
import genAiBanner from '../../assets/trainings/genAi/genAiBanner.jpg';

const HeroBanner = () => {
    return (
        <>
            <div
                className="relative w-full h-[280px] md:h-[350px] max-h-[350px] bg-cover bg-center"
                style={{ backgroundImage: `url(${genAiBanner})` }}
            >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/5 flex items-center  px-4 md:px-6"></div> */}
                <div className="text-center ml-10 pt-10 md:pt-20  text-white max-w-4xl">
                    <h1
                        className="text-2xl md:text-5xl font-extrabold leading-snug mb-3 
                        bg-gradient-to-r from-cyan-200 via-white to-blue-200 
                        bg-clip-text text-transparent 
                        drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]"
                    >
                        Master the Future with Generative AI
                    </h1>
                    <p className="text-sm md:text-xl mb-2 text-white font-light">
                        Expert-led, hands-on training in cutting-edge generative AI tools, models, and real-world applications.
                    </p>
                    <p className="text-xs md:text-lg mb-4 text-white font-light">
                        Learn from industry leaders, work on live projects, and advance your AI career with confidence.
                    </p>
                    <a href='#enquiryForm' className="bg-[#0088ff] hover:bg-blue-700 transition px-6 py-3 text-white rounded-lg shadow text-xs md:text-sm">
                        Enroll Now
                    </a>
                </div>

            </div>
            <hr className='text-gray-200'/>
        </>
    );
};

export default HeroBanner;
