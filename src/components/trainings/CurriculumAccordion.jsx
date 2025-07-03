import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const curriculumData = [
    {
        title: 'Foundations of GenAI & Business Relevance (Module 1)',
        points: [
            'What is Generative AI & Why Now?',
            'AI vs GenAI, Rule-based vs ML',
            'GANs, VAEs, Transformers Overview',
            'Transformer Architecture',
            'LLMs (GPT, BERT, T5)',
            'Tokenization & Embedding’s',
            'Text Generation Techniques',
            'Prompt Engineering Basics',
            'Sampling Techniques',
            'Weekly Quiz & Recap',
        ],
    },
    {
        title: 'Prompting and RAG Introduction (Module 2)',
        points: [
            'Few-shot, Zero-shot',
            'Role-based Prompts',
            'Temperature Setting',
            'Prompt Guardrails',
            'Prompt Tuning',
            'Token Setting',
            'Dataset Preparation',
            'Embedding’s & Vector DBs',
            'Evaluation Metrics',
            'Mini Bot Project',
        ],
    },
    {
        title: 'Multimodal GenAI (Module 3)',
        points: [
            'Intro to Multimodal AI',
            'Text-to-Image Generation',
            'Visual Style Transfer',
            'GPT vs BERT Comparison',
            'Text-to-Audio',
            'Audio-to-Text',
            'Text-to-Video',
            'Model with Multimodality',
            'Ethics in GenAI',
            'Business Use Recap',
        ],
    },
    {
        title: 'Agentic AI & RAG (Module 4)',
        points: [
            'What is Agentic AI?',
            'Agent Tools & Memory',
            'Task Decomposition',
            'Chain-of-Thought (CoT)',
            'ReAct Agent',
            'Agent Memory',
            'RAG Advance Application',
            'Chunking & Embedding’s',
            'Vector DB Search',
            'Build a RAG Bot',
        ],
    },
    {
        title: 'Business Applications (Module 5)',
        points: [
            'Automation',
            'Marketing',
            'Education',
            'Legal/Healthcare',
            'Story & Scripting',
            'Personal Assistant Bot',
            'Excel with GenAI',
            'Data Analysis',
            'Code Generation',
            'Capstone Planning',
        ],
    },
    {
        title: 'Capstone Project & Presentation (Module 6)',
        points: [
            'Project Kickoff',
            'Dataset Curation',
            'Prompt & Text Module',
            'Add Visual/Audio Elements',
            'Add Memory or Agent Logic',
            'Final Testing',
            'Polish Project',
            'Presentation Prep',
            'Project Prospects for Job',
            'Feedback & AI Careers',
        ],
    },
];

const CurriculumAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            id='curriculum1' className="max-w-5xl mx-auto px-4">
            <div className="rounded-xl overflow-hidden  border-gray-300 bg-white/60 backdrop-blur-md shadow-lg">
                {curriculumData.map((section, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index} className="border-t last:border-b border-gray-300">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between px-6 py-4 bg-white/50 hover:bg-blue-50 transition-all duration-200 text-lg font-semibold text-[#2f5d98]"
                            >
                                <span>{section.title}</span>
                                <span className="text-[#2f5d98]">
                                    {isOpen ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden bg-white/40 text-gray-700 px-8 ${isOpen ? 'max-h-[1000px]  opacity-100' : 'max-h-0 opacity-0 py-0'
                                    }`}
                            >
                                <ul className="space-y-3 pl-4 relative text-[15px] sm:text-base text-gray-700">
                                    {section.points.map((point, idx) => (
                                        <li
                                            key={idx}
                                            className="relative pl-5 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#4e8ad9]"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
    );
};

export default CurriculumAccordion;
