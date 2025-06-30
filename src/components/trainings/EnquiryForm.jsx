import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBookOpen, FaRegCommentDots } from 'react-icons/fa';
import bg5 from '../../assets/trainings/genAi/bg5.png';
import CurriculumAccordion from './CurriculumAccordion';

const CourseEnquiryForm = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [captchaQuestion, setCaptchaQuestion] = useState('');
    const [captchaAnswer, setCaptchaAnswer] = useState('');
    const [userCaptchaInput, setUserCaptchaInput] = useState('');

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10 + 1);
        const num2 = Math.floor(Math.random() * 10 + 1);
        setCaptchaQuestion(`${num1} + ${num2}`);
        setCaptchaAnswer((num1 + num2).toString());
    };


    useEffect(() => {
        generateCaptcha();
    }, []);



    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        if (userCaptchaInput !== captchaAnswer) {
            alert("Incorrect CAPTCHA. Please try again.");
            setUserCaptchaInput('');
            generateCaptcha(); // Regenerate new question
            setLoading(false);
            return;
        }
        emailjs.sendForm(
            serviceId,
            templateId,
            formRef.current,
            publicKey
        )
            .then(
                (result) => {
                    alert('Enquiry sent successfully!');
                    formRef.current.reset();
                    setLoading(false);
                },
                (error) => {
                    alert('Failed to send enquiry. Please try again.');
                    console.error(error);
                    setLoading(false);
                }
            );
    };

    return (
        <div
            id='enquiryForm'
            style={{
                backgroundImage: `url(${bg5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full bg-[#f5f7fb] pt-10 pb-20 px-4 relative"
        >
            <div className="relative max-w-2xl mx-auto text-center z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2f5d98] mb-3">
                    Ready to Start Your AI Journey?
                </h2>
                <p className="text-[#4e8ad9] font-semibold text-base sm:text-lg mb-5">
                    Fill out the form below and our team will get in touch with you shortly
                </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-8 px-4 py-10">
                <div className="w-full lg:w-3/5">
                    <CurriculumAccordion />
                </div>

                <div className="w-full lg:w-2/5 flex justify-center">
                    <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden z-10">
                        <div className="bg-[#2f5d98] text-white text-2xl font-bold text-center py-2">
                            Course Enquiry Form
                        </div>

                        <form ref={formRef} onSubmit={sendEmail} className="p-6 space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Full Name *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaUser className="text-gray-400 mr-2" />
                                        <input type="text" name="user_name" placeholder="Enter your full name" required className="w-full outline-none bg-transparent" />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Email Address *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaEnvelope className="text-gray-400 mr-2" />
                                        <input type="email" name="user_email" placeholder="Enter your Email Address" required className="w-full outline-none bg-transparent" />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Phone Number *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaPhone className="text-gray-400 mr-2" />
                                        <input type="tel" name="user_phone" placeholder="Enter your phone number" required className="w-full outline-none bg-transparent" />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Location *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                                        <input type="text" name="user_location" placeholder="Enter your Location" required className="w-full outline-none bg-transparent" />
                                    </div>
                                </div>

                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-sm font-medium mb-1">Select Course *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaBookOpen className="text-gray-400 mr-2" />
                                        <select name="user_course" required className="w-full outline-none bg-white text-gray-700">
                                            <option value="">Select course</option>
                                            <option value="Generative AI Mastery">Generative AI Mastery</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-sm font-medium mb-1">Message *</label>
                                    <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaRegCommentDots className="text-gray-400 mr-2 mt-1" />
                                        <textarea name="message" rows="9" placeholder="Enter your Message" required className="w-full outline-none resize-none bg-transparent" />
                                    </div>
                                </div>

                                <div className="w-full md:col-span-2">
                                    <label className="text-sm font-medium mb-1">CAPTCHA *</label>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 px-4 py-2 w-30 text-center rounded text-lg font-semibold text-gray-800">
                                            {captchaQuestion}
                                        </div>
                                        <input
                                            type="text"
                                            value={userCaptchaInput}
                                            onChange={(e) => setUserCaptchaInput(e.target.value)}
                                            placeholder="Answer"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={generateCaptcha}
                                            className="text-sm bg-blue-100 p-2 rounded-lg cursor-pointer"
                                        >
                                            Refresh
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <button type="submit" className="bg-[#2f5d98] cursor-pointer text-white text-xl font-bold w-full mt-4 py-2 rounded-lg hover:bg-[#204b80] transition">
                                {loading ? 'Sending...' : 'Send Enquiry'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseEnquiryForm;
