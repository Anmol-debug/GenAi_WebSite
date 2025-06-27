import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBookOpen, FaRegCommentDots } from 'react-icons/fa';
import bg5 from '../../assets/trainings/genAi/bg5.png';
import CurriculumAccordion from './CurriculumAccordion';

const CourseEnquiryForm = () => {
    return (
        <div
            id='enquiryForm'
            style={{
                backgroundImage: `url(${bg5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full bg-[#f5f7fb] pt-10 pb-20   px-4 relative"
        >
            <div className="relative max-w-2xl mx-auto text-center z-10">
                <h2 className=" text-3xl sm:text-4xl font-bold text-[#2f5d98] mb-3">
                    Ready to Start Your AI Journey?
                </h2>
                <p className="text-[#4e8ad9] font-semibold text-base sm:text-lg mb-5">
                    Fill out the form below and our team will get in touch with you shortly
                </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-8 px-4 py-10">
                {/* Accordion Section */}
                <div className="w-full   lg:w-3/5">
                    <CurriculumAccordion />
                </div>

                {/* Enquiry Form Section */}
                <div className="w-full lg:w-2/5 flex justify-center">
                    <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden z-10">
                        <div className="bg-[#2f5d98] text-white text-2xl font-bold text-center py-2">
                            Course Enquiry Form
                        </div>

                        <form className="p-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {/* Full Name */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Full Name *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaUser className="text-gray-400 mr-2" />
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            required
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Email Address *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaEnvelope className="text-gray-400 mr-2" />
                                        <input
                                            type="email"
                                            placeholder="Enter your Email Address"
                                            required
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Phone Number *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaPhone className="text-gray-400 mr-2" />
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            required
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Location *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                                        <input
                                            type="text"
                                            placeholder="Enter your Location"
                                            required
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Select Course */}
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-sm font-medium mb-1">Select Course *</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaBookOpen className="text-gray-400 mr-2" />
                                        <select
                                            required
                                            className="w-full outline-none bg-white text-gray-700"
                                        >
                                            <option value="">Select course</option>
                                            <option value="genai">Generative AI Mastery</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-sm font-medium mb-1">Message *</label>
                                    <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                                        <FaRegCommentDots className="text-gray-400 mr-2 mt-1" />
                                        <textarea
                                            rows="9"
                                            placeholder="Enter your Message"
                                            required
                                            className="w-full outline-none resize-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* CAPTCHA Placeholder */}
                                <div className="w-full md:col-span-2 bg-pink-200 text-center py-4 rounded font-semibold text-gray-700">
                                    CAPTCHA
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#2f5d98] text-white text-xl font-bold w-full mt-4 py-2 rounded-lg hover:bg-[#204b80] transition"
                            >
                                Send Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseEnquiryForm;
