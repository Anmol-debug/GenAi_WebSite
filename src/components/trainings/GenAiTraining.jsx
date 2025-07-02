import React from 'react';
import genAiRobo from '../../assets/trainings/genAi/genAiRobo.png';
const GenAiTraining = () => {
    return (
        <div className="relative w-full bg-gray-100 pb-16 px-4">
            {/* Hero Section - Positioned Half Overlapping */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-6 bg-white rounded-xl shadow-md shadow-[#4e8ad9] hover:shadow-2xl transition-all duration-300 p-6 max-w-6xl w-full">
                <img
                    src={genAiRobo}
                    alt="Robo Left"
                    className="z-10 w-24 h-24 object-contain hidden lg:block lg:w-52"
                />
                <div className="z-10 text-center px-4 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2f5d98] mb-3">
                        Generative AI Training
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-[#4e8ad9] font-medium">
                        Transform your career with cutting-edge Generative AI expertise
                    </p>
                </div>
                <img
                    src={genAiRobo}
                    alt="Robo Right"
                    className="z-10 w-24 h-24 object-contain hidden lg:block lg:w-52"
                />
            </div>

            {/* Info Section with top padding to allow overlap */}
            <div className="relative pt-28 ">
                <div className="flex border border-gray-300 rounded-xl pt-30 flex-col md:flex-row justify-center items-stretch gap-6 bg-white shadow-lg shadow-[#4e8ad9] hover:shadow-2xl transition-all duration-300 px-4 py-10 w-full max-w-7xl mx-auto">
                    <div className="bg-white border-r-none md:border-r px-8 md:px-8 py-6 text-center text-gray-800 transition">
                        <p className="text-base sm:text-lg font-medium">
                            Are you ready to be at the
                            forefront of the next
                            technological revolution and
                            lead with Generative Al
                            expertise?                        
                            </p>
                    </div>
                    <div className="bg-white border-r-none md:border-r px-8 md:px-8 py-6 text-center text-gray-800  transition">
                        <p className="text-base sm:text-lg font-medium">
                            Generative AI is rapidly
                            transforming industries,
                            creating unprecedented
                            opportunities for innovation
                            and growth                        
                        </p>
                    </div>
                    <div className="bg-white px-8 md:px-8 py-6 text-center text-gray-800  transition">
                        <p className="text-base sm:text-lg font-medium">
                            Join our Generative AI
                            course and build future-
                            ready skills to thrive in
                            tomorrow's technology-
                            driven world.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GenAiTraining;
