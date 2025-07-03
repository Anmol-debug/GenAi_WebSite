import React, { useState, useRef, useEffect } from "react";

const FAQs = ({faqs}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex].style.maxHeight = contentRefs.current[openIndex].scrollHeight + "px";
    }
    contentRefs.current.forEach((ref, idx) => {
      if (idx !== openIndex && ref) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="bg-gray-50 py-16 md:py-10">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-black text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onMouseEnter={() => toggleFAQ(index)}
              className="group border border-black/10 rounded-lg p-5 bg-white shadow-sm transition-all duration-300 ease-in-out"
            >
              <button
                
                className="w-full flex justify-between cursor-pointer items-center text-left"
              >
                <h3 className="text-black  text-xl font-semibold">
                  {faq.question}
                </h3>
                <div
                  className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden max-h-0 transition-all duration-500 ease-in-out"
              >
                <p className="text-gray-700  mt-4 text-md leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQs;
