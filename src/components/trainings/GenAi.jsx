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
        {/* <ShortInfo/> */}
        {/* <GenAiBlog/> */}
        
    </div>
  )
}

export default GenAi