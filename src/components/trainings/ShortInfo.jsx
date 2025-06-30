import React from 'react';
import aiRobo from '../../assets/trainings/genAi/eye.jpg';

const ShortInfo = () => {
    return (
        <div className="w-full mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2  bg-white rounded-xl  min-h-[300px]">
                <div className="sticky  top-10 self-start p-6 bg-white rounded-xl space-y-6">
                    <div className="text-xl  md:text-3xl font-bold text-gray-800 leading-snug">
                        <p className='text-4xl'>🚀 Unlock the Future</p> <br/><span className="bg-gradient-to-r via-[#4e8ad9] from-[#2f5d98] to-[#00bfff] bg-clip-text text-transparent">Join Generative AI Course!</span>{' '}
                        <span className="text-blue-700 "></span>
                    </div>


                    {/* Info Cards */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-4 text-sm md:text-base text-gray-700">
                        {/* Duration */}
                        <div className="flex items-center gap-2 px-15 py-4 bg-gray-50 border rounded-xl shadow-sm hover:shadow-md transition w-full md:w-auto">
                            <span className="text-xl">🕒</span>
                            <div className="text-left">
                                <div className="font-semibold text-gray-800">Duration</div>
                                <div className="text-gray-500">60 hours</div>
                            </div>
                        </div>

                        {/* Mode of Training */}
                        <div className="flex items-center  gap-2 px-6 py-4 bg-gray-50 border rounded-xl shadow-sm hover:shadow-md transition w-full md:w-auto">
                            <span className="text-xl">💻</span>
                            <div className="text-left">
                                <div className="font-semibold text-gray-800">Mode of Training</div>
                                <div className="text-gray-500">Online</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Image Section */}
                <div
                    className="rounded-xl "
                    style={{
                        backgroundImage: `url(${aiRobo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ShortInfo;
