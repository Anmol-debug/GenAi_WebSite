import React from 'react'
import Marquee from 'react-fast-marquee'
import bg2 from "../../assets/trainings/genAi/background2.png"
import { FaDotCircle } from 'react-icons/fa'

const learnTopics = [
    {
        title: 'Foundations of GenAI & Business',
        points: [
            'What is Generative AI & Why Now?',
            'AI vs GenAI, Rule-based vs ML',
            'GANs, VAEs, Transformers Overview',
        ]
    },
    {
        title: 'Prompting, Fine-Tuning & RAG',
        points: [
            'Few-shot, Zero-shot, CoT',
            'Role-based Prompts',
            'Prompt Injection & Safety',
        ]
    },
    {
        title: 'Multimodal GenAI',
        points: [
            'Intro to Multimodal AI',
            'Text-to-Image Generation',
            'Visual Style Transfer',
        ]
    },
    {
        title: 'Agentic AI & RAG',
        points: [
            'What is Agentic AI?',
            'Agent Tools & Memory',
            'Task Decomposition',
        ]
    },
    {
        title: 'Business Applications',
        points: [
            'Automation',
            'Marketing',
            'Education',
        ]
    },
    {
        title: 'Capstone Project & Presentation',
        points: [
            'Project Kickoff',
            'Dataset Curation',
            'Prompt & Text Module',
        ]
    },
]


const WhatYouLearn = () => {
    return (
        <>
            <hr className='text-gray-400' />
            <section className="bg-gradient-to-b from-blue-50 to-white pt-12 pb-14 px-4"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-[#2f5d98] mb-2">What You Will Learn</h2>
                    <p className="text-[#4e8ad9] font-semibold text-base sm:text-lg">
                        Comprehensive curriculum designed to take you from beginner to expert in Generative AI
                    </p>
                </div>

                <Marquee pauseOnHover speed={40} gradient={false}>
                    <div className="flex overflow-hidden  justify-center gap-6 px-4">
                        {/* {learnTopics.map((item, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[300px] md:w-[340px] lg:w-[360px] bg-gradient-to-br from-[#0b2c48] to-[#2269a3] text-white rounded-2xl p-6 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
                            >
                                <div className="flex  flex-col  flex-1 text-left">
                                    <h3 className="text-lg  sm:text-xl font-semibold mb-3 text-center pl-5 pr-5 leading-snug">{item.title}</h3>
                                    <p className="text-sm  font-semibold text-center sm:text-base leading-relaxed text-blue-50">{item.subtitle}</p>
                                </div>
                            </div>
                        ))} */}
                        {learnTopics.map((item, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[300px] md:w-[340px] lg:w-[360px] bg-gradient-to-br from-[#0b2c48] to-[#2269a3] text-white rounded-2xl p-6 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
                            >
                                <div className="flex flex-col flex-1 text-left">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center  leading-snug">{item.title}</h3>
                                    <ol className="space-y-3 text-sm font-medium">
                                        {item.points.map((point, idx) => (
                                            <li key={idx}>
                                                <div className="flex  gap-3 items-center justify-center">
                                                    <div className="text-white text-end  w-1/5 text-base font-bold">
                                                        <FaDotCircle className="inline-block " />
                                                    </div>
                                                    <div className="text-start  w-4/5">{point}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </section>
        </>
    )
}

export default WhatYouLearn
