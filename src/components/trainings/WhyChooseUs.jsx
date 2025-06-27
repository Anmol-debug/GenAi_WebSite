import React from 'react';
import { FaStar, FaCode, FaBookOpen, FaUsers, FaHandshake } from 'react-icons/fa';
import bg4 from '../../assets/trainings/genAi/bg4.png';
const shilshaFeatures = [
    {
        title: "Expert Instructors",
        description:
            "Learn from industry-leading experts with extensive experience in Generative AI research and development.",
        icon: <FaStar className="text-white border bg-gradient-to-tr from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] h-13 w-13 p-2 rounded-full text-4xl mb-4" />,
    },
    {
        title: "Hands-on Projects",
        description:
            "Build a portfolio that showcases your skills and demonstrates your ability to apply Generative AI techniques to real-world problems.",
        icon: <FaCode className="text-white border bg-gradient-to-tr from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] h-13 w-13 p-2 rounded-full text-4xl mb-4" />,
    },
    {
        title: "Cutting-Edge Curriculum",
        description:
            "Our curriculum is constantly updated to reflect the latest advancements in Generative AI.",
        icon: <FaBookOpen className="text-white border bg-gradient-to-tr from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] h-13 w-13 p-2 rounded-full text-4xl mb-4" />,
    },
];

const shilshaFeatures2 = [
    {
        title: "Networking Opportunities",
        description:
            "Our course provides a platform for building valuable relationships that can help you advance your career.",
        icon: <FaUsers className="text-white border bg-gradient-to-tr from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] h-13 w-13 p-2 rounded-full text-4xl mb-4" />,
    },
    {
        title: "Career Support",
        description:
            "We offer career guidance, support, and connections to our network of industry partners.",
        icon: <FaHandshake className="text-white border bg-gradient-to-tr from-[#2f5d98] via-[#00bfff] to-[#4e8ad9] h-13 w-13 p-2 rounded-full text-4xl mb-4" />,
    },
]

const WhyChooseShilsha = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${bg4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full bg-gray-100 pt-16 pb-16 px-4 text-center">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2f5d98] mb-4">
                    Why Choose Shilsha Technologies?
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#4e8ad9] mb-12 max-w-3xl mx-auto">
                    We are committed to providing a world-class learning experience that goes beyond theoretical knowledge
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shilshaFeatures.map((item, index) => (
                        <div
                            key={index}
                            className="bg-transparent border  border-gray-300  shadow-lg shadow-[#4e8ad9] hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center rounded-lg p-6 text-left"
                        >
                            <div className="flex flex-col items-center text-center flex-1">
                                {item.icon}
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="font-semibold">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-center mt-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {shilshaFeatures2.map((item, index) => (
                            <div
                                key={index}
                                className="bg-transparent border w-full max-w-md border-gray-300  shadow-lg shadow-[#4e8ad9] hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center rounded-lg p-6 text-left"
                            >
                                <div className="flex flex-col items-center text-center flex-1">
                                    {item.icon}
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="font-semibold">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseShilsha;
