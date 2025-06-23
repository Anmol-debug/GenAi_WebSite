import React from 'react';
import flyerImg from '../../assets/trainings/genAi/flyerImg.png';
import EnquiryForm from './EnquiryForm';

const GenAiBlog = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left: Content Column */}
                <div className="lg:col-span-2 space-y-10 text-gray-800">
                    <section className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4 leading-tight">
                            🚀 Gen AI Training
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Are you ready to be at the forefront of the next technological revolution?
                            <span className="block mt-2">
                                Generative AI is rapidly transforming industries, creating unprecedented opportunities for innovation and growth.{' '}
                                <strong className="text-blue-700">Shilsha Technologies</strong> invites you to join our comprehensive Generative AI course — crafted to equip you with the skills and knowledge to thrive in this exciting new landscape.
                            </span>
                        </p>
                    </section>

                    <section className="mb-12">
                        <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">💡 Why Generative AI?</h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Generative AI is no longer a futuristic concept — it's a <strong className="text-blue-700">present-day reality</strong> that's reshaping how we live, work, and create.
                            <span className="block mt-2">
                                From generating stunning visuals and composing original music to solving complex problems, it’s fueling innovation across industries. Mastering these technologies will not only elevate your skill set but also unlock <strong>exciting, future-ready career opportunities</strong>.
                            </span>
                        </p>
                    </section>

                    <section className="mb-12">
                        <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">🏆 Why Choose Shilsha Technologies?</h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            We are committed to delivering a world-class learning experience that goes far beyond theoretical knowledge. Here's what sets us apart:
                        </p>
                        <ul className="space-y-4 text-gray-700 text-base md:text-lg pl-4">
                            <li>
                                <strong className="text-blue-700">🎓 Expert Instructors:</strong> Learn from seasoned professionals with deep expertise in Generative AI research and industry deployment.
                            </li>
                            <li>
                                <strong className="text-blue-700">🧪 Hands-on Projects:</strong> Work on real-world Gen AI applications and build a portfolio that showcases your practical skills.
                            </li>
                            <li>
                                <strong className="text-blue-700">📚 Cutting-Edge Curriculum:</strong> Our course content evolves continuously to reflect the latest Gen AI innovations and best practices.
                            </li>
                            <li>
                                <strong className="text-blue-700">🤝 Networking Opportunities:</strong> Connect with a vibrant community of peers, mentors, and industry leaders.
                            </li>
                            <li>
                                <strong className="text-blue-700">💼 Career Support:</strong> Get expert guidance and access to our placement network to launch or pivot your AI career.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">🎯 Benefits of Joining</h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            By enrolling in our Generative AI course, you'll unlock unique advantages that accelerate your learning and career:
                        </p>
                        <ul className="space-y-4 text-gray-800 text-base md:text-lg pl-4">
                            <li>
                                <span className="font-semibold text-blue-700">🚀 Gain In-Demand Skills:</span> Learn cutting-edge Gen AI models, prompting techniques, and multimodal tools used by today’s top AI professionals.
                            </li>
                            <li>
                                <span className="font-semibold text-blue-700">💼 Boost Your Career Prospects:</span> Access a broad spectrum of AI career paths in industries like finance, media, healthcare, and tech.
                            </li>
                            <li>
                                <span className="font-semibold text-blue-700">🧠 Build a Strong Portfolio:</span> Apply your skills to real-world Gen AI challenges and compile a job-ready portfolio.
                            </li>
                            <li>
                                <span className="font-semibold text-blue-700">⚡ Stay Ahead of the Curve:</span> Keep pace with fast-moving AI trends, frameworks, and innovations.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">📘 What You Will Learn</h3>
                        <ul className="list-disc list-inside text-gray-800 text-base md:text-lg space-y-1 pl-2">
                            <li>Foundations of Gen AI and Large Language Models (LLMs)</li>
                            <li>Advanced Prompting, Fine-Tuning, and Evaluation</li>
                            <li>Multimodal Gen AI (Text, Image, Audio, Video)</li>
                            <li>Agentic AI and Retrieval Augmented Generation</li>
                            <li>Real-world Applications of Gen AI</li>
                            <li>Final Capstone Project + Presentation</li>
                        </ul>
                    </section>

                    <section className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">📩 How to Enroll</h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Visit <a href="#" className="text-blue-700 underline">[Insert Website Link Here]</a> to explore the full curriculum, schedule, and enrollment details. Seats are limited — apply early!
                        </p>
                    </section>

                </div>

                {/* Right: Media + Form Column */}
                <div className="flex flex-col gap-6">
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO_ID"
                            title="Generative AI Course"
                            className="w-full h-52 md:h-64 lg:h-60 xl:h-56"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <img
                        src={flyerImg}
                        alt="Generative AI Flyer"
                        className="rounded-lg shadow-md w-full object-contains h-60 lg:h-130"
                    />

                    <EnquiryForm />
                </div>

            </div>
        </div>
    );
};

export default GenAiBlog;