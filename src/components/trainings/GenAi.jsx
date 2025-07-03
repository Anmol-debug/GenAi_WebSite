import React from 'react'
import HeroBanner from './HeroBanner'
import ShortInfo from './ShortInfo'
import GenAiBlog from './GenAiBlog'
import EnquiryForm from './EnquiryForm'
import GenAiTraining from './GenAiTraining'
// import WhyGenAi from './WhyGenAi'
import WhyGenerativeAI from './WhyGenAi'
import WhyChooseShilsha from './WhyChooseUs'
import WhatYouLearn from './WhatYouLearn'
import BenefitsOfJoining from './BenifitsOfJoining'
import CourseEnquiryForm from './EnquiryForm'
import FAQs from './FAQs'

const faqs = [
  {
    question: "Will this training be Live or Pre-recorded?",
    answer: "This is completely Live Training."
  },
  {
    question: "Will you provide Certificate of Completion?",
    answer: "Yes, each participant will receive e-certificate of completion, provided complete course of 60 hours is completed."
  },
  {
    question: "Is Attendance compulsory for Live Classes?",
    answer: "Yes, Attendance is compulsory for all Classes."
  },
  {
    question: "I have made the payment, but no acknowledgement received.",
    answer: "Please write email to info@shilshatrainings.com."
  }, 
]; 


const GenAi = () => {
  return (
    <div>
        <HeroBanner/>
        <GenAiTraining/>
        <WhyGenerativeAI/>
        <WhyChooseShilsha/>
        <WhatYouLearn/>
        <BenefitsOfJoining/>
        <CourseEnquiryForm/>
        <FAQs faqs={faqs}/>
        {/* <ShortInfo/> */}
        {/* <GenAiBlog/> */}
        
    </div>
  )
}

export default GenAi