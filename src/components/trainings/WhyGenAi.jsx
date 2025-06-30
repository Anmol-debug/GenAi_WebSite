import React from 'react';
import { FaStar, FaCode, FaUserGraduate, FaCogs } from 'react-icons/fa';
import genAiBg from '../../assets/trainings/genAi/background1.png';

const cardData = [
    {
        title: 'Industry Revolution',
        description: 'Generative AI is rapidly transforming industries, creating unprecedented opportunities for innovation and growth.',
        icon: <FaStar className="text-white bg-[#2f5d98] bg-gradient-to-br from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] rounded-full h-14 w-14 p-2 text-3xl mb-4 mx-auto" />,
    },
    {
        title: 'Present-Day Reality',
        description: 'From creating stunning visuals to developing innovative solutions, Generative AI is revolutionizing how we work and create.',
        icon: <FaCode className="text-white bg-[#2f5d98] bg-gradient-to-br from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] rounded-full h-14 w-14 p-2 text-3xl mb-4 mx-auto" />,
    },
    {
        title: 'Career Enhancement',
        description: 'Mastering these technologies will enhance your skillset and open doors to exciting career paths.',
        icon: <FaUserGraduate className="text-white bg-[#2f5d98] bg-gradient-to-br from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] rounded-full h-14 w-14 p-2 text-3xl mb-4 mx-auto" />,
    },
    {
        title: 'Real-World Applications',
        description: 'Learn to apply Generative AI techniques to solve complex problems across various industries.',
        icon: <FaCogs className="text-white bg-[#2f5d98] bg-gradient-to-br from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] rounded-full h-14 w-14 p-2 text-3xl mb-4 mx-auto" />,
    },
];

const WhyGenAi = () => {
    return (
        <>
            <section
                style={{
                    backgroundImage: `url(${genAiBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="w-full  bg-white  py-16 px-4 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2f5d98] mb-2">
                        Why Generative AI?
                    </h2>
                    <p className="text-base sm:text-lg text-[#4e8ad9] font-medium mb-10">
                        Are you ready to be at the forefront of the next technological revolution?
                    </p>
                    {/* Cards */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap lg:grid lg:grid-cols-4">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white/20 rounded-md border border-gray-300 shadow-lg shadow-[#4e8ad9] p-4 pb-10 pt-8  hover:shadow-2xl transition-all duration-300 text-center backdrop-blur-xs"
                            >
                                {card.icon}
                                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                                <p className='font-semibold'>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <hr className='text-gray-400' />
        </>
    );
};

export default WhyGenAi;
