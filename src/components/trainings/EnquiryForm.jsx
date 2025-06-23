import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { RiBook3Line } from 'react-icons/ri';

const EnquiryForm = () => {
    return (
        <div id='enquiryForm' className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
            <div className="bg-blue-600 text-white text-center py-4 text-lg font-semibold rounded-t-xl">
                Enquiry Form
            </div>

            <form className="p-6 space-y-5">
                {/* Input Group */}
                <div className="flex items-center gap-3 bg-gray-50 rounded-md px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <FaUser className="text-blue-600" />
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-md px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <FaEnvelope className="text-blue-600" />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-md px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <FaPhone className="text-blue-600" />
                    <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-md px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <input
                        type="text"
                        placeholder="Location"
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-md px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <RiBook3Line className="text-blue-600" />
                    <select className="w-full bg-transparent outline-none text-sm">
                        <option value="">Select course</option>
                        <option value="genai">Generative AI</option>
                        <option value="python">Python</option>
                        <option value="ml">Machine Learning</option>
                    </select>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 rounded-md px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <MdOutlineMessage className="text-blue-600 mt-1" />
                    <textarea
                        placeholder="Message"
                        className="w-full bg-transparent outline-none text-sm resize-none"
                        rows="3"
                    ></textarea>
                </div>

                {/* reCAPTCHA placeholder */}
                {/* <div className="bg-gray-100 py-3 px-3 rounded text-center text-sm text-gray-500 border border-dashed">
                    [ reCAPTCHA goes here ]
                </div> */}

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md text-sm cursor-pointer font-medium transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
