import { FaStar, FaCode, FaChartLine, FaUsers } from "react-icons/fa";
import bg3 from "../../assets/trainings/genAi/bg3.jpg";

const benefits = [
    {
        icon: <FaStar className="text-white text-3xl" />,
        title: "Gain In-Demand Skills",
        desc: "Develop expertise in Generative AI models, techniques, and tools that are highly sought after in the job market.",
    },
    {
        icon: <FaChartLine className="text-white text-3xl" />,
        title: "Enhance Career Prospects",
        desc: "Open doors to exciting career opportunities across various industries from tech to healthcare to finance.",
    },
    {
        icon: <FaCode className="text-white text-3xl" />,
        title: "Build a Strong Portfolio",
        desc: "Showcase your skills through hands-on projects that demonstrate your ability to apply Generative AI techniques.",
    },
    {
        icon: <FaUsers className="text-white text-3xl" />,
        title: "Stay Ahead of the Curve",
        desc: "Learn about the latest advancements in Generative AI and maintain your competitive edge in the field.",
    },
];

const BenefitsOfJoining = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full bg-[#061E3D] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Benefits of Joining</h2>
                <p className="text-lg sm:text-xl text-white font-medium mb-12">
                    Transform your career and unlock new opportunities in the exciting world of Generative AI
                </p>

                <div className="border border-[#00bfff] bg-gradient-to-br from-[#0a2749]/30 to-[#1d497e]/30 backdrop-blur-lg w-full max-w-6xl m-auto rounded-xl p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8 shadow-lg">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex  flex-col items-center text-center gap-2">
                            <div className="bg-gradient-to-tr from-[#00bfff] via-[#4e8ad9] to-[#2f5d98] p-4 rounded-full animate-pulse">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-sm text-blue-100 font-medium pl-2 pr-2 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsOfJoining;
